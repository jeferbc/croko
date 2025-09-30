import React, { useState, useEffect } from 'react';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;