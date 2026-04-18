'use client'
import React, { useState, useEffect } from 'react';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

const Header = ({ isKitPage = false }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsMobile(window.innerWidth < 992);
      }, 150);
    };

    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return isMobile ? <HeaderMobile isKitPage={isKitPage} /> : <HeaderDesktop isKitPage={isKitPage} />;
};

export default Header;
