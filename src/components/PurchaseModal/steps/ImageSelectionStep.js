import { getImagesByGender } from '@/data/designImages';
import ImageGridItem from '../ImageGridItem';

const ImageSelectionStep = ({ gender, selectedImages, onToggleImage }) => {
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
    </div>
  );
};

export default ImageSelectionStep;
