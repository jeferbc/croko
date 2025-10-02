"use client"
import { useEffect, useState } from "react";
import TagManager from 'react-gtm-module';
import { ToastContainer } from 'react-toastify';
import NProgress from 'nprogress';
import { usePathname } from 'next/navigation';
import CookieConsent from '@/containers/elements/common/cookieConsent';

export default function ClientLayout({ children }) {
  const [loader, setLoader] = useState(true);
  const [goingUp, setGoingUp] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1500);

    // Tap to Top Scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500)
        setGoingUp(true);
      else
        setGoingUp(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5H5LM4D' });
  }, []);

  useEffect(() => {
    NProgress.done();
  }, [pathname]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return (
    <>
      {loader && (
        <div className="loader-wrapper">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {children}
      <div className="tap-top" style={goingUp ? { display: 'block' } : { display: 'none' }} onClick={tapToTop}>
        <div><i className="fa fa-angle-double-up"></i></div>
      </div>
      <ToastContainer />
      <CookieConsent />
    </>
  );
}