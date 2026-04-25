'use client';
import { useState, useCallback, useEffect } from 'react';
import { getImageNames } from '@/data/designImages';
import { getAttribution } from '@/lib/adsTracking';
import { openWompiCheckout } from '@/lib/wompiWidget';

const STORAGE_KEY = 'croko_purchase_selections';
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

  // Load saved selections from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Check if data is not expired (7 days)
        const sevenDays = 7 * 24 * 60 * 60 * 1000;
        if (parsed.timestamp && Date.now() - parsed.timestamp < sevenDays) {
          setSelections({
            gender: parsed.gender || null,
            selectedImages: parsed.selectedImages || [],
            babyName: parsed.babyName || '',
            email: parsed.email || ''
          });
        }
      }
    } catch (e) {
      console.error('Error loading purchase selections:', e);
    }
  }, []);

  // Save selections to localStorage whenever they change
  const saveSelections = useCallback((newSelections) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        ...newSelections,
        timestamp: Date.now()
      }));
    } catch (e) {
      console.error('Error saving purchase selections:', e);
    }
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
    setCurrentStep(1);
    setOrderId(generateOrderId());
    setPaymentError(null);
    setWebhookSent(false);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setCurrentStep(1);
    setPaymentError(null);
  }, []);

  const setGender = useCallback((gender) => {
    const newSelections = { ...selections, gender, selectedImages: [] };
    setSelections(newSelections);
    saveSelections(newSelections);
  }, [selections, saveSelections]);

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
    saveSelections(newSelections);
  }, [selections, saveSelections]);

  const setBabyName = useCallback((name) => {
    const newSelections = { ...selections, babyName: name };
    setSelections(newSelections);
    saveSelections(newSelections);
  }, [selections, saveSelections]);

  const setEmail = useCallback((email) => {
    const newSelections = { ...selections, email };
    setSelections(newSelections);
    saveSelections(newSelections);
  }, [selections, saveSelections]);

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
      setCurrentStep(currentStep + 1);
    }
  }, [canProceed, currentStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

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
        gclid: attribution?.gclid || null,
        fbclid: attribution?.fbclid || null,
        utm_source: attribution?.utm_source || null,
        utm_campaign: attribution?.utm_campaign || null,
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

    const currentOrderId = orderId || generateOrderId();
    if (!orderId) setOrderId(currentOrderId);

    setPaymentError(null);
    setIsPaying(true);

    // Save final selections
    saveSelections(selections);

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
  }, [isPaying, orderId, selections, webhookSent, saveSelections, submitToWebhook, closeModal]);

  const resetSelections = useCallback(() => {
    setSelections(initialSelections);
    localStorage.removeItem(STORAGE_KEY);
    setCurrentStep(1);
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

// Helper to get selections from localStorage (for WhatsApp message)
export const getPurchaseSelections = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error reading purchase selections:', e);
  }
  return null;
};

export default usePurchaseModal;
