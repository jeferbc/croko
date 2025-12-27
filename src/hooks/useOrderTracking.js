import { useEffect, useState } from 'react';

const useOrderTracking = (searchParams) => {
  const [orderData, setOrderData] = useState(null);
  const [trackingFired, setTrackingFired] = useState(false);

  useEffect(() => {
    // Extract URL parameters
    const orderId = searchParams.get('id') || searchParams.get('reference');
    const amountParam = searchParams.get('amount') || searchParams.get('amount_in_cents');

    // Validate parameters
    if (!orderId || !amountParam) {
      console.error('Missing required Wompi parameters (id and amount)');
      return;
    }

    // Parse and validate amount
    const parsedAmount = parseInt(amountParam);
    if (isNaN(parsedAmount)) {
      console.error('Invalid amount parameter');
      return;
    }

    // Convert amount (handle both cents and pesos)
    const amount = parsedAmount > 1000000 ? parsedAmount / 100 : parsedAmount;

    // Check if we've already tracked this purchase
    const purchaseKey = `purchase_tracked_${orderId}`;
    const alreadyTracked = sessionStorage.getItem(purchaseKey);

    if (!alreadyTracked) {
      // Fire GTM dataLayer event for purchase
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'purchase',
          ecommerce: {
            transaction_id: orderId,
            value: amount,
            currency: 'COP',
            items: [{
              item_id: 'kit_prenatal',
              item_name: 'Kit Maquillaje Prenatal',
              price: amount,
              quantity: 1
            }]
          }
        });
        console.log('✓ GA4 Purchase event fired via GTM');
      } else {
        console.warn('⚠ GTM dataLayer not available');
      }

      // Mark as tracked
      sessionStorage.setItem(purchaseKey, 'true');
      setTrackingFired(true);
    }

    // Set order data for display
    setOrderData({
      orderId,
      amount,
      formattedAmount: new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      }).format(amount),
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
