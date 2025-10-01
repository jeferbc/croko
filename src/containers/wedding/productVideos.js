import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import CarouselVideos from '@/containers/elements/CarouselVideos';

const ProductVideos = () => {
  return (
    <section className="wedding" id="productVideos">
        <SectionTitle title="Videos" />
        <CarouselVideos />
    </section>
  )
}


export default ProductVideos;