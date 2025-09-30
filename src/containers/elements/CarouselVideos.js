import React, { useState, useEffect } from 'react';

const SingleVideoPlayer = () => {
  const [height, setHeight] = useState(360);

  useEffect(() => {
    const calculateHeight = () => {
      const windowHeight = window.innerHeight;
      const calculatedHeight = windowHeight - 260;
      setHeight(calculatedHeight > 360 ? calculatedHeight : 360);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
      <iframe
        width="100%"
        height={height}
        src="https://www.youtube.com/embed/Ek1iSIPkNT4?hd=1&quality=hd720&vq=hd720&rel=0&modestbranding=1"
        title="Kit Maquillaje Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          maxWidth: '1440px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
};

export default SingleVideoPlayer;