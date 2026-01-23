const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="step-indicator">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={stepNumber} style={{ display: 'flex', alignItems: 'center' }}>
            <div
              className={`step-dot ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
            />
            {stepNumber < totalSteps && (
              <div className={`step-line ${isCompleted ? 'completed' : ''}`} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
