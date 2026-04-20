'use client';
import Script from 'next/script';

const MERCHANT_ID = 5579595014;

export default function GoogleMerchantBadge() {
  const handleLoad = () => {
    if (typeof window === 'undefined' || !window.merchantwidget) return;
    window.merchantwidget.start({
      merchant_id: MERCHANT_ID,
      position: 'BOTTOM_RIGHT',
      region: 'CO',
    });
  };

  return (
    <Script
      id="google-merchant-badge"
      src="https://www.gstatic.com/shopping/merchant/merchantwidget.js"
      strategy="afterInteractive"
      onLoad={handleLoad}
    />
  );
}
