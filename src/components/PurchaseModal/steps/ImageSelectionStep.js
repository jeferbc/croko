import { getImagesByGender } from '@/data/designImages';
import ImageGridItem from '../ImageGridItem';

const ImageSelectionStep = ({ gender, selectedImages, onToggleImage, wantsCustomImage, onToggleCustomImage }) => {
  const images = getImagesByGender(gender);
  const isComplete = selectedImages.length === 4;

  return (
    <div className="image-selection-step">
      <div className={`selection-counter ${isComplete ? 'complete' : ''}`}>
        <span className="count">{selectedImages.length}</span> de 4 diseños seleccionados
      </div>

      <div className="image-grid">
        {images.map((image) => {
          const isSelected = selectedImages.includes(image.id);
          const selectionIndex = selectedImages.indexOf(image.id);
          const isDisabled = !isSelected && selectedImages.length >= 4;

          return (
            <ImageGridItem
              key={image.id}
              image={image}
              isSelected={isSelected}
              selectionNumber={isSelected ? selectionIndex + 1 : null}
              isDisabled={isDisabled}
              onClick={() => onToggleImage(image.id)}
            />
          );
        })}
      </div>

      <div
        className={`custom-image-option ${wantsCustomImage ? 'active' : ''}`}
        onClick={onToggleCustomImage}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && onToggleCustomImage()}
      >
        <div className="custom-image-checkbox">
          {wantsCustomImage && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <div className="custom-image-content">
          <span className="custom-image-label">¿Deseas agregar un diseño personalizado?</span>
          <span className="custom-image-description">Valor +$40.000</span>
        </div>
      </div>
    </div>
  );
};

export default ImageSelectionStep;
