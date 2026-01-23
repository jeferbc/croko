'use client';
import { createContext, useContext } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { usePurchaseModal } from '@/hooks/usePurchaseModal';
import StepIndicator from './StepIndicator';
import GenderStep from './steps/GenderStep';
import ImageSelectionStep from './steps/ImageSelectionStep';
import BabyNameStep from './steps/BabyNameStep';
import './PurchaseModal.scss';

// Context to share modal state across components
const PurchaseModalContext = createContext(null);

export const usePurchaseModalContext = () => {
  const context = useContext(PurchaseModalContext);
  if (!context) {
    throw new Error('usePurchaseModalContext must be used within PurchaseModalProvider');
  }
  return context;
};

export const PurchaseModalProvider = ({ children }) => {
  const modalState = usePurchaseModal();

  return (
    <PurchaseModalContext.Provider value={modalState}>
      {children}
      <PurchaseModalInner />
    </PurchaseModalContext.Provider>
  );
};

const PurchaseModalInner = () => {
  const {
    isOpen,
    currentStep,
    selections,
    closeModal,
    setGender,
    toggleImage,
    setBabyName,
    setEmail,
    nextStep,
    prevStep,
    canProceed,
    proceedToCheckout
  } = usePurchaseModalContext();

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return '¿Es niño o niña?';
      case 2:
        return 'Elige 4 diseños';
      case 3:
        return 'Datos del pedido';
      default:
        return '';
    }
  };

  const handleNext = () => {
    if (currentStep === 3) {
      proceedToCheckout();
    } else {
      nextStep();
    }
  };

  const getNextButtonText = () => {
    if (currentStep === 3) {
      return 'Continuar al pago';
    }
    return 'Siguiente';
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={closeModal}
      centered
      size="lg"
      className="purchase-modal"
      backdrop="static"
    >
      <ModalHeader toggle={closeModal}>
        <div className="modal-header-content">
          <StepIndicator currentStep={currentStep} totalSteps={3} />
          <h5 className="step-title">{getStepTitle()}</h5>
        </div>
      </ModalHeader>

      <ModalBody>
        {currentStep === 1 && (
          <GenderStep
            selectedGender={selections.gender}
            onSelect={setGender}
          />
        )}
        {currentStep === 2 && (
          <ImageSelectionStep
            gender={selections.gender}
            selectedImages={selections.selectedImages}
            onToggleImage={toggleImage}
          />
        )}
        {currentStep === 3 && (
          <BabyNameStep
            babyName={selections.babyName}
            onNameChange={setBabyName}
            email={selections.email}
            onEmailChange={setEmail}
            gender={selections.gender}
            selectedImages={selections.selectedImages}
          />
        )}
      </ModalBody>

      <ModalFooter>
        {currentStep > 1 && (
          <Button color="secondary" outline onClick={prevStep}>
            Atrás
          </Button>
        )}
        <Button
          color="primary"
          onClick={handleNext}
          disabled={!canProceed()}
          className="btn-next"
        >
          {getNextButtonText()}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default PurchaseModalInner;
