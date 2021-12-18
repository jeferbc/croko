import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://ik.imagekit.io/ge17f66b4ma/1639598501544__1__00XN5bWkf.jpg?updatedAt=1639778819162',
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Thumbnails/Copia_de_kit_tienda_pag_9HBZCo8JpE1.jpg?updatedAt=1639170480948',
  },
  {
    original: 'https://ik.imagekit.io/ge17f66b4ma/Grandes/1639520329101_WDe-yoBGT.jpg?updatedAt=1639597289114',
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Thumbnails/Copia_de_Bebemar_kit_JiMXF12PBZ3.jpg?updatedAt=1639170481156',
  },
  {
    original: 'https://ik.imagekit.io/ge17f66b4ma/Grandes/1639520329151_PgMxPulXQ.jpg?updatedAt=1639597289145',
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Thumbnails/Copia_de_Elefante_kit_aX-sINHXw.jpg?updatedAt=1639170480933',
  },
  {
    original: 'https://ik.imagekit.io/ge17f66b4ma/Grandes/1639520329126_kdCblKLYXGH.jpg?updatedAt=1639597289126',
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Thumbnails/Copia_de_Cremallera_kit_3VnbUHgGqn.jpg?updatedAt=1639170480922',
  }
];

const ProductCarousel = () => {
  return ( 
    <ImageGallery
      items={images}
      showPlayButton={false}
    />
  );
};

export default ProductCarousel;