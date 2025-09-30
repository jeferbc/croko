'use client'
import React, { useState, useEffect } from 'react';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
