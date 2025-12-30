import { useEffect, useState } from 'react';

// Fixed product price
const FIXED_PRICE = 150000; // $150,000 COP

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
    if (!alreadyTracked) {
      if (window.dataLayer) {
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
          }
        });
        console.log('✓ GA4 Purchase event fired via GTM');
      }

      if (purchaseKey) {
        sessionStorage.setItem(purchaseKey, 'true');
      }
      setTrackingFired(true);
    }

    // Set order data for display
    setOrderData({
      orderId: transactionId || null,
      transactionId: transactionId || null,
      amount: FIXED_PRICE,
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
