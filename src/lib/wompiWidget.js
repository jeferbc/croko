'use client';

import { detectInAppBrowser } from './inAppBrowser';
import { logDiag } from './diag';

const WIDGET_SRC = 'https://checkout.wompi.co/widget.js';
const WEB_CHECKOUT_URL = 'https://checkout.wompi.co/p/';
const SCRIPT_TIMEOUT_MS = 12000;
const SIGNATURE_TIMEOUT_MS = 10000;
let loaderPromise = null;

const withTimeout = (promise, ms, label) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`wompi: ${label} timed out (${ms}ms)`)), ms)
    ),
  ]);

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
  }).catch((err) => {
    // Reset so a retry can re-attempt the load instead of reusing a
    // permanently-rejected promise.
    loaderPromise = null;
    throw err;
  });

  return loaderPromise;
};

const fetchSignature = async ({ reference, amountInCents, currency }) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SIGNATURE_TIMEOUT_MS);
  try {
    const res = await fetch('/api/wompi-signature', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reference, amountInCents, currency }),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`wompi: signature endpoint ${res.status}`);
    const data = await res.json();
    if (!data.signature) throw new Error('wompi: missing signature in response');
    return data.signature;
  } catch (err) {
    if (err?.name === 'AbortError') {
      throw new Error(`wompi: signature fetch timed out (${SIGNATURE_TIMEOUT_MS}ms)`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
};

// Full-page redirect to Wompi's hosted Web Checkout. This is a top-level
// navigation (no popup, no cross-origin iframe), so it works inside Instagram /
// Facebook / TikTok in-app webviews where the JS widget silently fails.
const redirectToWebCheckout = ({
  orderId,
  amountInCents,
  currency,
  email,
  fullName,
  signature,
  publicKey,
}) => {
  const params = new URLSearchParams({
    'public-key': publicKey,
    currency,
    'amount-in-cents': String(amountInCents),
    reference: orderId,
    'signature:integrity': signature,
    'collect-shipping': 'true',
    'collect-customer-legal-id': 'true',
  });
  if (email) params.set('customer-data:email', email);
  if (fullName) params.set('customer-data:full-name', fullName);

  const isLocalhost = /^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);
  if (!isLocalhost) {
    params.set('redirect-url', `${window.location.origin}/gracias`);
  }

  logDiag('wompi_redirect_navigate', { orderId });
  window.location.href = `${WEB_CHECKOUT_URL}?${params.toString()}`;
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

  const { isInApp, app } = detectInAppBrowser();
  logDiag('wompi_checkout_start', { orderId, isInApp, app });

  const t0 = Date.now();
  let signature;
  try {
    signature = await withTimeout(
      fetchSignature({ reference: orderId, amountInCents, currency }),
      SIGNATURE_TIMEOUT_MS,
      'signature'
    );
    logDiag('wompi_signature_ok', { orderId, ms: Date.now() - t0 });
  } catch (err) {
    logDiag('wompi_signature_fail', { orderId, error: err?.message });
    throw err;
  }

  // In-app webviews: skip the popup/iframe widget entirely and hand off via
  // a full-page redirect. The page navigates away, so onResult never fires
  // here — the return trip lands on /gracias and useOrderTracking takes over.
  if (isInApp) {
    redirectToWebCheckout({
      orderId,
      amountInCents,
      currency,
      email,
      fullName,
      signature,
      publicKey,
    });
    return;
  }

  let WidgetCheckout;
  const tScript = Date.now();
  try {
    WidgetCheckout = await withTimeout(
      loadWidgetScript(),
      SCRIPT_TIMEOUT_MS,
      'widget.js load'
    );
    logDiag('wompi_script_ok', { orderId, ms: Date.now() - tScript });
  } catch (err) {
    logDiag('wompi_script_fail', { orderId, error: err?.message });
    // Script blocked but signature is valid → degrade gracefully to the
    // hosted redirect instead of dead-ending the user.
    redirectToWebCheckout({
      orderId,
      amountInCents,
      currency,
      email,
      fullName,
      signature,
      publicKey,
    });
    return;
  }

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

  try {
    const checkout = new WidgetCheckout(config);
    logDiag('wompi_widget_open_called', { orderId });
    checkout.open((result) => {
      logDiag('wompi_widget_result', {
        orderId,
        status: result?.transaction?.status || 'none',
      });
      if (typeof onResult === 'function') onResult(result);
    });
  } catch (err) {
    logDiag('wompi_widget_open_throw', { orderId, error: err?.message });
    throw err;
  }
};
