import React, { useState, useEffect, useRef } from 'react';

const SingleVideoPlayer = () => {
  const [height, setHeight] = useState(360);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    let resizeTimeout;
    const calculateHeight = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const windowHeight = window.innerHeight;
        const calculatedHeight = windowHeight - 260;
        setHeight(calculatedHeight > 360 ? calculatedHeight : 360);
      }, 150);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => {
      window.removeEventListener("resize", calculateHeight);
      clearTimeout(resizeTimeout);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={videoRef}
      style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
    >
      {isVisible ? (
        <iframe
          width="100%"
          height={height}
          src="https://www.youtube.com/embed/Ek1iSIPkNT4?hd=1&quality=hd720&vq=hd720&rel=0&modestbranding=1"
          title="Kit Maquillaje Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{
            maxWidth: '1440px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: height,
            maxWidth: '1440px',
            backgroundColor: '#000',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}
        >
          Cargando video...
        </div>
      )}
    </div>
  );
};

export default SingleVideoPlayer;