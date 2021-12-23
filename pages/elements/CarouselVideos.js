import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const renderVideo = (item) => {
  return (
    <div>
        <div className='video-responsive'>
            <iframe
              width="790"
              height="444"
              src={`https://www.youtube.com/embed/${item.embedUrl}?enablejsapi=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            >
            </iframe>
        </div>
    </div>
  );
}

const onSlide = () => {
  let iframes = document.querySelectorAll('iframe');
  Array.prototype.forEach.call(iframes, iframe => { 
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'stopVideo' }), '*');
  })
}

const videos = [
  {
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Thumbnails/Copia_de_kit_tienda_pag_9HBZCo8JpE1.jpg?updatedAt=1639170480948',
    embedUrl: 'ndnpqwOGnvo',
    renderItem: renderVideo
  },
  {
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Thumbnails/Copia_de_Bebemar_kit_JiMXF12PBZ3.jpg?updatedAt=1639170481156',
    embedUrl: 'pWW6-524FLs',
    renderItem: renderVideo
  },
  {
    thumbnail: 'https://ik.imagekit.io/ge17f66b4ma/Thumbnails/Copia_de_Elefante_kit_aX-sINHXw.jpg?updatedAt=1639170480933',
    embedUrl: 'A1Rs_bHqmc8',
    renderItem: renderVideo
  }
];

const CarouselVideos = () => {
  return ( 
    <ImageGallery
      items={videos}
      showPlayButton={false}
      showFullscreenButton={false}
      onSlide={onSlide}
    />
  );
};

export default CarouselVideos;