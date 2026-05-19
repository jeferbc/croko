'use client';

// Detect embedded webviews (Instagram/Facebook/TikTok/etc.) where the Wompi
// JS widget (popup/iframe based) frequently fails to open. For these we fall
// back to the full-page Wompi Web Checkout redirect, which is a top-level
// navigation and works everywhere.

export const getUA = () =>
  (typeof navigator !== 'undefined' && navigator.userAgent) || '';

export const detectInAppBrowser = (ua = getUA()) => {
  if (!ua) return { isInApp: false, app: null };

  const tests = [
    ['facebook', /\bFBAN\/|\bFBAV\/|\bFB_IAB\b|FBIOS|FB4A/i],
    ['instagram', /\bInstagram\b/i],
    ['tiktok', /\bBytedanceWebview\b|musical_ly|\bTikTok\b|trill/i],
    ['messenger', /\bMessenger\b/i],
    ['line', /\bLine\//i],
    ['snapchat', /\bSnapchat\b/i],
    ['twitter', /\bTwitter\b/i],
    ['pinterest', /\bPinterest\b/i],
    ['linkedin', /\bLinkedInApp\b/i],
  ];

  for (const [app, re] of tests) {
    if (re.test(ua)) return { isInApp: true, app };
  }

  // Generic Android WebView heuristic: "wv" token, or Version/x.x + Chrome
  // without a real browser brand. Conservative to avoid false positives.
  const isAndroid = /Android/i.test(ua);
  if (isAndroid && /; wv\)/i.test(ua)) {
    return { isInApp: true, app: 'android-webview' };
  }

  return { isInApp: false, app: null };
};

export const isInAppBrowser = (ua) => detectInAppBrowser(ua).isInApp;
