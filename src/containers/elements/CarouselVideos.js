import React, { useState, useEffect, useRef } from 'react';

const SingleVideoPlayer = () => {
  const [height, setHeight] = useState(360);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const videoId = "Ek1iSIPkNT4";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

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


  return (
    <div
      ref={videoRef}
      style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        height: height,
        cursor: isVideoLoaded ? 'default' : 'pointer'
      }}>
        {!isVideoLoaded ? (
          // Video Facade - Thumbnail + Play Button
          <div
            onClick={() => setIsVideoLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Play Button Overlay */}
            <div style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'rgba(192, 136, 47, 0.95)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <i className="fa fa-play" style={{
                fontSize: '40px',
                color: '#fff',
                marginLeft: '6px' // Optical centering
              }}></i>
            </div>
          </div>
        ) : (
          // Actual YouTube iframe - only loaded after click
          <iframe
            width="100%"
            height={height}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&hd=1&quality=hd720&vq=hd720&rel=0&modestbranding=1`}
            title="Kit Maquillaje Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SingleVideoPlayer;