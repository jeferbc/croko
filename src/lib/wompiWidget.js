'use client';

import { detectInAppBrowser } from './inAppBrowser';
import { logDiag } from './diag';

// Croko routes ALL buyers through Wompi's hosted Web Checkout via a full-page
// redirect. The embedded JS widget (popup/iframe) was retired because it
// silently fails to open for a whole class of environments — in-app webviews
// (Instagram/FB/TikTok), ad-blockers/proxies that block widget.js, slow
// networks — leaving the buyer on a frozen "Abriendo pasarela…" button with no
// error and no callback. A top-level navigation cannot be blocked, so it works
// everywhere. See docs/ads/WOMPI_INAPP_BROWSER_FALLBACK.md for the full
// history. The return trip lands on /gracias?id=<tx>&env=<env>, where
// useOrderTracking resolves the real status via Wompi's API and gates the
// purchase event on APPROVED.
const WEB_CHECKOUT_URL = 'https://checkout.wompi.co/p/';
const SIGNATURE_TIMEOUT_MS = 10000;

const withTimeout = (promise, ms, label) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`wompi: ${label} timed out (${ms}ms)`)), ms)
    ),
  ]);

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
// Facebook / TikTok in-app webviews where the JS widget silently fails — and in
// every normal browser too.
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
}) => {
  const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
  if (!publicKey) throw new Error('wompi: NEXT_PUBLIC_WOMPI_PUBLIC_KEY missing');

  // isInApp is no longer a branch (everyone redirects) but we still log it so
  // the diag stream keeps showing the environment mix of paying users.
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
    // The only legitimate dead-end: without a valid signature Wompi rejects the
    // transaction anyway. Fails loudly in ≤10s so the button shows an error
    // instead of hanging.
    logDiag('wompi_signature_fail', { orderId, error: err?.message });
    throw err;
  }

  // Single path for everyone: hand off via a top-level navigation. The page
  // navigates away here; the outcome is read on return at /gracias.
  redirectToWebCheckout({
    orderId,
    amountInCents,
    currency,
    email,
    fullName,
    signature,
    publicKey,
  });
};
