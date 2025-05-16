import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    original: 'https://ik.imagekit.io/ge17f66b4ma/Kit%20foto%20690x551_2rLNnbXrzh.png?updatedAt=1747372670635',
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Kit%20foto%20690x551_2rLNnbXrzh.png?updatedAt=1747372670635',
  },
  {
    original: 'https://ik.imagekit.io/ge17f66b4ma/Dise%C3%B1os%20ni%C3%B1o%20foto%20690x551_fVqIPzzOy.png?updatedAt=1747372670512',
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Dise%C3%B1os%20ni%C3%B1o%20foto%20chiki%20110x90_hjaeb6UiJ.png?updatedAt=1747372670219',
  },
  {
    original: 'https://ik.imagekit.io/ge17f66b4ma/Dise%C3%B1os%20unisex%20foto%20690x551_1qHsu_xny.png?updatedAt=1747372670512',
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Dise%C3%B1os%20unisex%20foto%20chiki%20110x90_s8vpejjIK.png?updatedAt=1747372671382',
  },
  {
    original: 'https://ik.imagekit.io/ge17f66b4ma/Dise%C3%B1os%20ni%C3%B1a%20foto%20690x551_uLrf2-Gqi.png?updatedAt=1747372670416',
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Dise%C3%B1os%20ni%C3%B1a%20foto%20chiki%20110x90_SUsViT0JF.png?updatedAt=1747372669866',
  }
];

const ProductCarousel = () => {
  return ( 
    <Carousel infiniteLoop={true} thumbWidth={110} showStatus={false}>
      { images.map((data, i) => {
          return (
            <div key={i}>
              <img src={data.original}/>
            </div>
          )
      })}
    </Carousel>
  );
};

export default ProductCarousel;