'use client';
import { useEffect } from 'react';
import { trackWhatsAppClick } from '@/lib/adsTracking';

// Sitewide delegated click listener — fires a single `whatsapp_click` event for
// any WhatsApp link (wa.me / api.whatsapp.com), no matter which component
// rendered it. One listener covers all current and future CTAs (ribbon, sticky,
// kit headers, footer, hardcoded links) without editing each one.
const useWhatsAppClickTracking = () => {
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target?.closest?.('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (!/wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) return;

      // Label the source from the CTA's class (whatsapp-kit / whatsapp-local)
      // or fall back to the current path.
      const cls = anchor.className || '';
      let source = 'link';
      if (/whatsapp-kit/.test(cls)) source = 'kit';
      else if (/whatsapp-local/.test(cls)) source = 'local';
      source = `${source}:${window.location.pathname}`;

      trackWhatsAppClick(source);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
};

export default useWhatsAppClickTracking;
