import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const SingleVideoPlayer = () => {
  const [height, setHeight] = useState();

  useEffect(() => {
    if (!height) setHeight(window.innerHeight - 260);
    const handleResize = () => {
      setHeight(window.innerHeight - 260);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ReactPlayer
        width="100%"
        height={height + 260 > 768 ? height : '360px'}
        url="https://youtu.be/Ek1iSIPkNT4?si=Z98_UWduJ-J4otqX"
        style={{ maxWidth: '1440px' }}
        controls={true}
      />
    </div>
  );
};

export default SingleVideoPlayer;