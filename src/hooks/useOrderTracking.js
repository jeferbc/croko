import { useEffect, useState } from 'react';
import { getAttribution } from '@/lib/adsTracking';

// Fixed product price
const FIXED_PRICE = 190000; // $190,000 COP

const useOrderTracking = (searchParams) => {
  const [orderData, setOrderData] = useState(null);
  const [trackingFired, setTrackingFired] = useState(false);

  useEffect(() => {
    // Extract transaction ID from URL (Wompi sends 'id' parameter)
    const transactionId = searchParams.get('id') || searchParams.get('reference');

    // Check if we've already tracked this purchase
    const purchaseKey = transactionId ? `purchase_tracked_${transactionId}` : null;
    const alreadyTracked = purchaseKey ? sessionStorage.getItem(purchaseKey) : false;

    // Fire GTM dataLayer event for purchase (only once per transaction)
    // Use timeout to ensure GTM is fully loaded before pushing event
    if (!alreadyTracked) {
      const firePurchaseEvent = () => {
        const attribution = getAttribution();

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
          event: 'purchase',
          ecommerce: {
            transaction_id: transactionId || 'direct_visit',
            value: FIXED_PRICE,
            currency: 'COP',
            items: [{
              item_id: 'kit_pinta_barriguita',
              item_name: 'Kit Pinta Barriguita – Todo Incluido',
              price: FIXED_PRICE,
              quantity: 1
            }]
          },
          attribution: attribution || undefined
        });
        console.log('✓ GA4 Purchase event fired via GTM', { attribution });

        // Google Ads Conversion Tag
        // TODO: Replace AW-CONVERSION_ID/CONVERSION_LABEL with actual values from Google Ads
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
            'value': FIXED_PRICE,
            'currency': 'COP',
            'transaction_id': transactionId || undefined
          });
          console.log('✓ Google Ads conversion event fired');
        }

        if (purchaseKey) {
          sessionStorage.setItem(purchaseKey, 'true');
        }
        setTrackingFired(true);
      };

      // Wait for GTM to be ready (500ms delay ensures gtm.load has fired)
      setTimeout(firePurchaseEvent, 500);
    }

    // Read customer email (collected in PurchaseModal, saved in localStorage)
    let customerEmail = null;
    try {
      const saved = localStorage.getItem('croko_purchase_selections');
      if (saved) {
        customerEmail = JSON.parse(saved).email || null;
      }
    } catch (e) {
      // ignore
    }

    // Handling 1-2d + transit 3-7d => 10d upper bound (safe estimate)
    const estimated = new Date();
    estimated.setDate(estimated.getDate() + 10);
    const estimatedDeliveryDate = estimated.toISOString().slice(0, 10);

    // Set order data for display
    setOrderData({
      orderId: transactionId || null,
      transactionId: transactionId || null,
      amount: FIXED_PRICE,
      customerEmail,
      estimatedDeliveryDate,
      formattedAmount: new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      }).format(FIXED_PRICE),
      date: new Date().toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    });
  }, [searchParams]);

  return { orderData, trackingFired };
};

export default useOrderTracking;
