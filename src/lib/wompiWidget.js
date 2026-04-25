'use client';

const WIDGET_SRC = 'https://checkout.wompi.co/widget.js';
let loaderPromise = null;

const loadWidgetScript = () => {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('wompi: window undefined'));
  }
  if (window.WidgetCheckout) return Promise.resolve(window.WidgetCheckout);
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${WIDGET_SRC}"]`);
    const onLoad = () => {
      if (window.WidgetCheckout) resolve(window.WidgetCheckout);
      else reject(new Error('wompi: WidgetCheckout not exposed after load'));
    };
    const onError = () => reject(new Error('wompi: failed to load widget.js'));

    if (existing) {
      existing.addEventListener('load', onLoad, { once: true });
      existing.addEventListener('error', onError, { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = WIDGET_SRC;
    script.async = true;
    script.addEventListener('load', onLoad, { once: true });
    script.addEventListener('error', onError, { once: true });
    document.head.appendChild(script);
  });

  return loaderPromise;
};

const fetchSignature = async ({ reference, amountInCents, currency }) => {
  const res = await fetch('/api/wompi-signature', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reference, amountInCents, currency }),
  });
  if (!res.ok) throw new Error(`wompi: signature endpoint ${res.status}`);
  const data = await res.json();
  if (!data.signature) throw new Error('wompi: missing signature in response');
  return data.signature;
};

export const openWompiCheckout = async ({
  orderId,
  amountInCents,
  currency = 'COP',
  email,
  fullName,
  onResult,
}) => {
  const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
  if (!publicKey) throw new Error('wompi: NEXT_PUBLIC_WOMPI_PUBLIC_KEY missing');

  const [WidgetCheckout, signature] = await Promise.all([
    loadWidgetScript(),
    fetchSignature({ reference: orderId, amountInCents, currency }),
  ]);

  // Wompi's WAF rejects http://localhost redirect URLs. Skip redirectUrl in dev;
  // the JS callback still fires with the transaction result.
  const isLocalhost = /^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);
  const config = {
    currency,
    amountInCents,
    reference: orderId,
    publicKey,
    signature: { integrity: signature },
    collectShipping: 'true',
    collectCustomerLegalId: 'true',
    customerData: {
      email,
      fullName,
    },
  };
  if (!isLocalhost) {
    config.redirectUrl = `${window.location.origin}/gracias`;
  }

  const checkout = new WidgetCheckout(config);

  checkout.open((result) => {
    if (typeof onResult === 'function') onResult(result);
  });
};
