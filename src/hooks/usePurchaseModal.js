'use client';
import { useState, useCallback, useEffect } from 'react';
import { getImageNames } from '@/data/designImages';

const STORAGE_KEY = 'croko_purchase_selections';
const WOMPI_CHECKOUT_URL = 'https://checkout.wompi.co/l/XyjluW';
const SIMPLEFORM_ENDPOINT = 'https://getsimpleform.com/messages?form_api_token=033252d3f8a76751dbd11bedcfbd873e';

const initialSelections = {
  gender: null,
  selectedImages: [],
  babyName: '',
  email: ''
};

export const usePurchaseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState(initialSelections);

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
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setCurrentStep(1);
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
        return selections.babyName.trim().length > 0 && isValidEmail(selections.email);
      default:
        return false;
    }
  }, [currentStep, selections]);

  const nextStep = useCallback(() => {
    if (canProceed() && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  }, [canProceed, currentStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const submitToSimpleForm = useCallback(async (data) => {
    try {
      const imageNames = getImageNames(data.selectedImages);
      const timestamp = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });

      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('genero', data.gender === 'boy' ? 'Niño' : 'Niña');
      formData.append('disenos', imageNames.join(', '));
      formData.append('nombre_bebe', data.babyName);
      formData.append('fecha', timestamp);
      formData.append('ids_disenos', data.selectedImages.join(', '));

      await fetch(SIMPLEFORM_ENDPOINT, {
        method: 'POST',
        body: formData
      });

      console.log('Selections submitted to SimpleForm');
    } catch (error) {
      console.error('Error submitting to SimpleForm:', error);
      // Continue to checkout even if SimpleForm fails
    }
  }, []);

  const proceedToCheckout = useCallback(async () => {
    if (!canProceed()) return;

    // Save final selections
    saveSelections(selections);

    // Submit to SimpleForm (don't wait for response to avoid blocking)
    submitToSimpleForm(selections);

    // Redirect to Wompi checkout
    window.open(WOMPI_CHECKOUT_URL, '_blank');

    // Close modal
    closeModal();
  }, [canProceed, selections, saveSelections, submitToSimpleForm, closeModal]);

  const resetSelections = useCallback(() => {
    setSelections(initialSelections);
    localStorage.removeItem(STORAGE_KEY);
    setCurrentStep(1);
  }, []);

  return {
    // State
    isOpen,
    currentStep,
    selections,

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
