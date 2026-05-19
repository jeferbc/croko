'use client';

// Lightweight client diagnostics for the checkout funnel. Sends a structured
// beacon to /api/diag so we can see *where* the Wompi handoff fails on real
// user devices (console.log is invisible on phones). Best-effort, never throws,
// never blocks the checkout flow. Uses sendBeacon so events survive the
// full-page redirect to Wompi Web Checkout.

import { getUA } from './inAppBrowser';

let sessionId = null;
const getSessionId = () => {
  if (sessionId) return sessionId;
  try {
    sessionId =
      sessionStorage.getItem('croko_diag_sid') ||
      `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    sessionStorage.setItem('croko_diag_sid', sessionId);
  } catch {
    sessionId = `${Date.now().toString(36)}-nostore`;
  }
  return sessionId;
};

export const logDiag = (stage, extra = {}) => {
  if (typeof window === 'undefined') return;
  try {
    const payload = JSON.stringify({
      stage,
      sid: getSessionId(),
      ts: new Date().toISOString(),
      ua: getUA(),
      url: window.location.href,
      ...extra,
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        '/api/diag',
        new Blob([payload], { type: 'application/json' })
      );
      return;
    }
    fetch('/api/diag', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // diagnostics must never break checkout
  }
};
