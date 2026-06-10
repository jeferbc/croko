import { useEffect, useState } from 'react';
import { getAttribution } from '@/lib/adsTracking';
import { getFlatSelections, clearCartState } from '@/lib/cartState';

// Fixed product price
const FIXED_PRICE = 190000; // $190,000 COP

// Resolve the real transaction outcome. The legacy widget path used to pass
// `status` in the URL directly, but Wompi's hosted Web Checkout redirect only
// returns `?id=<tx>&env=<env>` — no status — so we must query Wompi's public
// transaction endpoint to learn whether the payment actually went through.
// Without this gate a DECLINED card returning to /gracias would look like a
// completed sale (false success page, inflated GA4 purchases, cart cleared).
const fetchWompiStatus = async (transactionId, env) => {
  const base =
    env === 'test'
      ? 'https://sandbox.wompi.co/v1'
      : 'https://production.wompi.co/v1';
  const res = await fetch(`${base}/transactions/${transactionId}`);
  if (!res.ok) throw new Error(`wompi tx lookup ${res.status}`);
  const json = await res.json();
  return json?.data?.status || null;
};

const useOrderTracking = (searchParams) => {
  const [orderData, setOrderData] = useState(null);
  // null = still resolving; otherwise APPROVED | PENDING | DECLINED | VOIDED |
  // ERROR | UNKNOWN. The page branches its UI on this.
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [trackingFired, setTrackingFired] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Wompi sends 'id'; the legacy widget path sent 'reference' + 'status'.
    const transactionId = searchParams.get('id') || searchParams.get('reference');
    const urlStatus = searchParams.get('status');
    const env = searchParams.get('env');

    const run = async () => {
      // Trust an explicit URL status if present (back-compat); otherwise look
      // the transaction up by id. A bare /gracias visit with no id stays UNKNOWN.
      let status = urlStatus;
      if (!status && transactionId) {
        try {
          status = await fetchWompiStatus(transactionId, env);
        } catch (e) {
          status = 'UNKNOWN';
        }
      }
      status = (status || 'UNKNOWN').toUpperCase();
      if (cancelled) return;
      setPaymentStatus(status);

      const isApproved = status === 'APPROVED';

      // Only fire the purchase event + clear the cart on a real, approved
      // payment. Declined/pending/unknown returns must NOT look like a sale,
      // and must NOT wipe the cart (the buyer may retry, or abandoned-cart
      // recovery may still need the envelope).
      if (isApproved) {
        const purchaseKey = transactionId ? `purchase_tracked_${transactionId}` : null;
        const alreadyTracked = purchaseKey ? sessionStorage.getItem(purchaseKey) : false;

        if (!alreadyTracked) {
          // Wait for GTM to be ready (500ms delay ensures gtm.load has fired)
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

            if (purchaseKey) {
              sessionStorage.setItem(purchaseKey, 'true');
            }
            if (!cancelled) setTrackingFired(true);
          };

          setTimeout(firePurchaseEvent, 500);
        }
      }

      // Read customer email (collected in PurchaseModal, saved in localStorage).
      // Only clear the cart-recovery envelope on an approved payment.
      let customerEmail = null;
      try {
        const flat = getFlatSelections();
        if (flat) {
          customerEmail = flat.email || null;
        }
      } catch (e) {
        // ignore
      }
      if (isApproved) {
        clearCartState();
      }

      // Handling 1-2d + transit 3-7d => 10d upper bound (safe estimate)
      const estimated = new Date();
      estimated.setDate(estimated.getDate() + 10);
      const estimatedDeliveryDate = estimated.toISOString().slice(0, 10);

      if (cancelled) return;

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
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  return { orderData, paymentStatus, trackingFired };
};

export default useOrderTracking;
