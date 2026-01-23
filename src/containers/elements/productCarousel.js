import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import IKImage from '@/components/IKImage';

const images = [
  {
    original: '/Kit%20foto%20690x551_2rLNnbXrzh.png',
    thumbnail: '/Kit%20foto%20690x551_2rLNnbXrzh.png',
  },
  {
    original: '/Catalogonuevoni%C3%B1o_6QO0uwMk1.png',
    thumbnail: '/Catalogonuevoni%C3%B1o_6QO0uwMk1.png',
  },
  {
    original: '/Catalogonuevounisex_d97P1ETKZ.png',
    thumbnail: '/Catalogonuevounisex_d97P1ETKZ.png',
  },
  {
    original: '/Catalogonuevoni%C3%B1a%20(1)_WTQEu2ZUn.png',
    thumbnail: '/Catalogonuevoni%C3%B1a%20(1)_WTQEu2ZUn.png',
  },
  {
    original: '/WhatsApp%20Image%202025-05-16%20at%204.05.01%20PM_2x5hn05jA.jpeg',
    thumbnail: '/WhatsApp%20Image%202025-05-16%20at%204.05.02%20PM_An6bn4kSP.jpeg',
  }

];

const ProductCarousel = () => {
  const renderThumbs = () => {
    return images.map((data, i) => (
      <IKImage
        key={i}
        src={data.thumbnail}
        alt={`Thumbnail ${i + 1}`}
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
                alt="Producto"
                width={400}
                height={320}
                transformation={[{
                  width: 400,
                  quality: 80,
                  format: 'webp'
                }]}
                lqip={{ active: true, quality: 20 }}
                loading={i === 0 ? 'eager' : 'lazy'}
                priority={i === 0}
                responsive={true}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          )
      })}
    </Carousel>
  );
};

export default ProductCarousel;