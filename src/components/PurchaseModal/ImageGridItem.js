/* eslint-disable @next/next/no-img-element */

const ImageGridItem = ({ image, isSelected, selectionNumber, isDisabled, onClick }) => {
  return (
    <div
      className={`image-grid-item ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
      onClick={!isDisabled ? onClick : undefined}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      onKeyPress={(e) => e.key === 'Enter' && !isDisabled && onClick()}
    >
      <img
        src={image.src}
        alt={image.name}
        loading="lazy"
      />

      <div className="selection-overlay" />

      {isSelected && selectionNumber && (
        <div className="selection-number">{selectionNumber}</div>
      )}
    </div>
  );
};

export default ImageGridItem;
