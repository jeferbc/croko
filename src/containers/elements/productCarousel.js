import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import IKImage from '@/components/IKImage';

const images = [
  {
    original: '/Fotokitcarrusel%20(1)%20(1)_kduJxCzra.png',
    thumbnail: '/Fotokitcarrusel%20(1)%20(1)_kduJxCzra.png',
    alt: 'Kit Pinta Barriguitas Croko - contenido completo con pinturas, pinceles y plantillas',
  },
  {
    original: '/Catalogonuevoni%C3%B1o%20(1)_9eDG16h5A.png',
    thumbnail: '/Catalogonuevoni%C3%B1o_6QO0uwMk1.png',
    alt: 'Diseño de belly painting para niño pintado en barriga de embarazada',
  },
  {
    original: '/Catalogonuevounisex%20(1)_CgAt29Hk4.png',
    thumbnail: '/Catalogonuevounisex_d97P1ETKZ.png',
    alt: 'Diseño unisex de belly painting para revelación de género en baby shower',
  },
  {
    original: '/Catalogonuevoni%C3%B1a%20(2)_vuVRV1ABT.png',
    thumbnail: '/Catalogonuevoni%C3%B1a%20(1)_WTQEu2ZUn.png',
    alt: 'Diseño de belly painting para niña pintado en barriga de embarazada',
  },
  {
    original: '/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(11)_s8WFVKSKk.png',
    thumbnail: '/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(11)_s8WFVKSKk.png',
    alt: 'Familia colombiana disfrutando sesión de belly painting con el Kit Croko',
  }

];

const ProductCarousel = () => {
  const renderThumbs = () => {
    return images.map((data, i) => (
      <IKImage
        key={i}
        src={data.thumbnail}
        alt={data.alt}
        width={110}
        height={90}
        transformation={[{
          width: 110,
          quality: 70,
          format: 'auto'
        }]}
        loading="lazy"
        style={{ width: '100%', height: 'auto' }}
      />
    ));
  };

  return (
    <Carousel
      infiniteLoop={true}
      thumbWidth={110}
      showStatus={false}
      renderThumbs={renderThumbs}
    >
      { images.map((data, i) => {
          return (
            <div key={i}>
              <IKImage
                src={data.original}
                alt={data.alt}
                width={690}
                height={551}
                transformation={[{
                  width: 700,
                  quality: 80,
                  format: 'webp'
                }]}
                lqip={{ active: true, quality: 20 }}
                loading={i === 0 ? 'eager' : 'lazy'}
                priority={i === 0}
                style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
              />
            </div>
          )
      })}
    </Carousel>
  );
};

export default ProductCarousel;