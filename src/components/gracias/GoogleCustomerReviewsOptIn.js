'use client';
import Script from 'next/script';

const MERCHANT_ID = 5579595014;

export default function GoogleCustomerReviewsOptIn({ orderId, email, estimatedDeliveryDate }) {
  if (!orderId || !email || !estimatedDeliveryDate) return null;

  const handleLoad = () => {
    if (typeof window === 'undefined' || !window.gapi) return;
    window.gapi.load('surveyoptin', function () {
      window.gapi.surveyoptin.render({
        merchant_id: MERCHANT_ID,
        order_id: String(orderId),
        email,
        delivery_country: 'CO',
        estimated_delivery_date: estimatedDeliveryDate,
      });
    });
  };

  return (
    <Script
      id="google-customer-reviews"
      src="https://apis.google.com/js/platform.js"
      strategy="afterInteractive"
      onLoad={handleLoad}
    />
  );
}
