'use client'
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isKitPage = pathname === '/kit';

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

  return isMobile ? <HeaderMobile isKitPage={isKitPage} /> : <HeaderDesktop isKitPage={isKitPage} />;
};

export default Header;
