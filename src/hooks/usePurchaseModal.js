'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { getImageNames } from '@/data/designImages';
import { getAttribution } from '@/lib/adsTracking';
import { openWompiCheckout } from '@/lib/wompiWidget';
import {
  readCartState,
  writeCartState,
  clearCartState,
  getFlatSelections
} from '@/lib/cartState';

const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
const N8N_WEBHOOK_KEY = process.env.NEXT_PUBLIC_N8N_WEBHOOK_KEY;
const WOMPI_AMOUNT_CENTS = Number(process.env.NEXT_PUBLIC_WOMPI_AMOUNT_CENTS || 19000000);
const TOTAL_STEPS = 3;

const initialSelections = {
  gender: null,
  selectedImages: [],
  babyName: '',
  email: ''
};

const generateOrderId = () => {
  const suffix = Math.random().toString(36).slice(2, 8);
  return `CROKO-${Date.now()}-${suffix}`;
};

export const usePurchaseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState(initialSelections);
  const [orderId, setOrderId] = useState(null);
  const [isPaying, setIsPaying] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [webhookSent, setWebhookSent] = useState(false);
  // Track the most recent orderId synchronously for persistence callbacks
  // that fire before setOrderId's render completes.
  const orderIdRef = useRef(null);

  // Load saved selections from localStorage on mount (cross-session "remember me")
  useEffect(() => {
    const state = readCartState();
    if (state) {
      setSelections({ ...initialSelections, ...state.data });
      if (state.cart_uuid) {
        setOrderId(state.cart_uuid);
        orderIdRef.current = state.cart_uuid;
      }
    }
  }, []);

  // Persist the current step + selections under the active cart_uuid.
  // Generates a cart_uuid lazily if none exists yet, so partial fills from
  // entry points that bypass openModal still get a stable identifier.
  const persist = useCallback((nextSelections, nextStep) => {
    let cartUuid = orderIdRef.current;
    if (!cartUuid) {
      cartUuid = generateOrderId();
      orderIdRef.current = cartUuid;
      setOrderId(cartUuid);
    }
    writeCartState({
      cartUuid,
      step: typeof nextStep === 'number' ? nextStep : currentStep,
      data: nextSelections
    });
  }, [currentStep]);

  const openModal = useCallback(() => {
    setIsOpen(true);
    setCurrentStep(1);
    // Only generate a fresh cart_uuid if we don't already have one from a
    // restored session — overwriting would break the link between the email
    // ?cart= param and the buyer's in-progress selections.
    if (!orderIdRef.current) {
      const newId = generateOrderId();
      orderIdRef.current = newId;
      setOrderId(newId);
    }
    setPaymentError(null);
    setWebhookSent(false);
  }, []);

  // Recovery entry point: called when landing has ?cart=<uuid> in the URL.
  // If the localStorage cart_uuid matches, jump straight to the last step
  // with everything pre-filled. If it doesn't match (or is empty), open the
  // modal blank at step 1 — silent fallback, no user-facing error.
  const openFromRecovery = useCallback((paramCartUuid) => {
    const state = readCartState();
    const match =
      state &&
      typeof paramCartUuid === 'string' &&
      state.cart_uuid === paramCartUuid;

    if (match) {
      setSelections({ ...initialSelections, ...state.data });
      orderIdRef.current = state.cart_uuid;
      setOrderId(state.cart_uuid);
      setCurrentStep(TOTAL_STEPS);
    } else {
      setSelections(initialSelections);
      const newId = generateOrderId();
      orderIdRef.current = newId;
      setOrderId(newId);
      setCurrentStep(1);
    }
    setPaymentError(null);
    setWebhookSent(false);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setCurrentStep(1);
    setPaymentError(null);
  }, []);

  const setGender = useCallback((gender) => {
    const newSelections = { ...selections, gender, selectedImages: [] };
    setSelections(newSelections);
    persist(newSelections, currentStep);
  }, [selections, persist, currentStep]);

  const toggleImage = useCallback((imageId) => {
    let newImages;
    if (selections.selectedImages.includes(imageId)) {
      newImages = selections.selectedImages.filter(id => id !== imageId);
    } else if (selections.selectedImages.length < 4) {
      newImages = [...selections.selectedImages, imageId];
    } else {
      return; // Already have 4 selected
    }
    const newSelections = { ...selections, selectedImages: newImages };
    setSelections(newSelections);
    persist(newSelections, currentStep);
  }, [selections, persist, currentStep]);

  const setBabyName = useCallback((name) => {
    const newSelections = { ...selections, babyName: name };
    setSelections(newSelections);
    persist(newSelections, currentStep);
  }, [selections, persist, currentStep]);

  const setEmail = useCallback((email) => {
    const newSelections = { ...selections, email };
    setSelections(newSelections);
    persist(newSelections, currentStep);
  }, [selections, persist, currentStep]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const canProceed = useCallback(() => {
    switch (currentStep) {
      case 1:
        return selections.gender !== null;
      case 2:
        return selections.selectedImages.length === 4;
      case 3:
        return (
          !isPaying &&
          selections.babyName.trim().length > 0 &&
          isValidEmail(selections.email)
        );
      default:
        return false;
    }
  }, [currentStep, selections, isPaying]);

  const nextStep = useCallback(() => {
    if (canProceed() && currentStep < TOTAL_STEPS) {
      const next = currentStep + 1;
      setCurrentStep(next);
      persist(selections, next);
    }
  }, [canProceed, currentStep, persist, selections]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      const next = currentStep - 1;
      setCurrentStep(next);
      persist(selections, next);
    }
  }, [currentStep, persist, selections]);

  const submitToWebhook = useCallback(async (data, orderIdToUse) => {
    try {
      const imageNames = getImageNames(data.selectedImages);
      const timestamp = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });
      const attribution = getAttribution();

      const payload = {
        email: data.email,
        genero: data.gender === 'boy' ? 'Niño' : 'Niña',
        disenos: imageNames.join(', '),
        nombre_bebe: data.babyName,
        fecha: timestamp,
        ids_disenos: data.selectedImages.join(', '),
        order_id: orderIdToUse,
        value_cents: WOMPI_AMOUNT_CENTS,
        currency: 'COP',
        gclid: attribution?.gclid || null,
        gbraid: attribution?.gbraid || null,
        wbraid: attribution?.wbraid || null,
        fbclid: attribution?.fbclid || null,
        utm_source: attribution?.utm_source || null,
        utm_medium: attribution?.utm_medium || null,
        utm_campaign: attribution?.utm_campaign || null,
        utm_content: attribution?.utm_content || null,
        utm_term: attribution?.utm_term || null,
        landing_page: attribution?.landing_page || null,
        fbp: attribution?.fbp || null,
        fbc: attribution?.fbc || null
      };

      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('croko:' + N8N_WEBHOOK_KEY)
        },
        body: JSON.stringify(payload)
      });

      console.log('Order submitted to n8n webhook');
    } catch (error) {
      console.error('Error submitting to webhook:', error);
      // Continue to checkout even if webhook fails
    }
  }, []);

  const proceedToCheckout = useCallback(async () => {
    if (isPaying) return;

    let currentOrderId = orderIdRef.current || orderId;
    if (!currentOrderId) {
      currentOrderId = generateOrderId();
      orderIdRef.current = currentOrderId;
      setOrderId(currentOrderId);
    }

    setPaymentError(null);
    setIsPaying(true);

    // Snapshot final selections + step at the moment of handoff to Wompi
    persist(selections, TOTAL_STEPS);

    // Fire begin_checkout webhook once per order
    if (!webhookSent) {
      submitToWebhook(selections, currentOrderId);
      setWebhookSent(true);
    }

    try {
      await openWompiCheckout({
        orderId: currentOrderId,
        amountInCents: WOMPI_AMOUNT_CENTS,
        currency: 'COP',
        email: selections.email,
        fullName: selections.babyName,
        onResult: (result) => {
          setIsPaying(false);
          const tx = result?.transaction;
          if (tx?.status === 'APPROVED') {
            closeModal();
            const params = new URLSearchParams({
              id: tx.id || '',
              reference: tx.reference || currentOrderId,
              status: tx.status,
            });
            window.location.href = `/gracias?${params.toString()}`;
          } else if (tx?.status) {
            setPaymentError(`Pago ${tx.status.toLowerCase()}. Puedes intentarlo de nuevo.`);
          }
          // If user closed widget without a transaction, stay on step 4 silently.
        },
      });
    } catch (err) {
      console.error('wompi widget error:', err);
      setIsPaying(false);
      setPaymentError('No se pudo abrir el pago. Intenta nuevamente.');
    }
  }, [isPaying, orderId, selections, webhookSent, persist, submitToWebhook, closeModal]);

  const resetSelections = useCallback(() => {
    setSelections(initialSelections);
    clearCartState();
    setCurrentStep(1);
    orderIdRef.current = null;
    setOrderId(null);
    setWebhookSent(false);
    setPaymentError(null);
  }, []);

  return {
    // State
    isOpen,
    currentStep,
    totalSteps: TOTAL_STEPS,
    selections,
    orderId,
    isPaying,
    paymentError,

    // Actions
    openModal,
    openFromRecovery,
    closeModal,
    setGender,
    toggleImage,
    setBabyName,
    setEmail,
    nextStep,
    prevStep,
    canProceed,
    proceedToCheckout,
    resetSelections
  };
};

// Helper to get selections from localStorage (for WhatsApp message / order
// tracking). Returns a flat object compatible with the pre-refactor shape.
export const getPurchaseSelections = () => getFlatSelections();

export default usePurchaseModal;
