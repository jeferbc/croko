import React from 'react';
import CarouselVideos from '../../../elements/CarouselVideos';

const ProductVideos = () => {
  return (
    <section className="wedding" id="productVideos">
        <div className="title">
            <img alt="" className="img-fluid title-img"
                src="/assets/images/wedding-img/bottom.png" />
            <div className="main-title">
                <h2 className="gradient-text">Videos</h2>
            </div>
        </div>
        <CarouselVideos />
    </section>
  )
}


export default ProductVideos;