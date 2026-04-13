'use client';

// Attribution capture and enrichment for Google Ads.
// Click-based analytics events (WhatsApp clicks, purchase, begin_checkout)
// are handled entirely by GTM (GTM-5H5LM4D).
//
// This module exists for two things GTM cannot do on its own:
//   1. Persist Google Ads click IDs (gclid/gbraid/wbraid) + UTMs to localStorage
//      so the n8n webhook can include them in the order payload and later
//      import offline conversions (e.g. WhatsApp-closed sales) via the
//      Google Ads Offline Conversion Import API.
//   2. Inject a compact attribution reference into pre-purchase WhatsApp
//      messages so the sales team can manually attribute chat sales.

const STORAGE_KEY = 'croko_attribution';
const TTL_DAYS = 90;

const isBrowser = () => typeof window !== 'undefined';

export const captureAttribution = () => {
  if (!isBrowser()) return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    const gbraid = params.get('gbraid');
    const wbraid = params.get('wbraid');
    const hasNewClickId = Boolean(gclid || gbraid || wbraid);

    const existing = getAttribution();

    if (!hasNewClickId && existing) {
      const updated = { ...existing, last_seen_at: Date.now() };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    }

    const attribution = {
      gclid: gclid || existing?.gclid || null,
      gbraid: gbraid || existing?.gbraid || null,
      wbraid: wbraid || existing?.wbraid || null,
      utm_source: params.get('utm_source') || existing?.utm_source || null,
      utm_medium: params.get('utm_medium') || existing?.utm_medium || null,
      utm_campaign: params.get('utm_campaign') || existing?.utm_campaign || null,
      utm_content: params.get('utm_content') || existing?.utm_content || null,
      utm_term: params.get('utm_term') || existing?.utm_term || null,
      landing_page: hasNewClickId
        ? window.location.pathname
        : existing?.landing_page || window.location.pathname,
      first_seen_at: existing?.first_seen_at || Date.now(),
      last_seen_at: Date.now(),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    return attribution;
  } catch (e) {
    console.warn('adsTracking: captureAttribution failed', e);
    return null;
  }
};

export const getAttribution = () => {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    const ttlMs = TTL_DAYS * 24 * 60 * 60 * 1000;
    if (data.first_seen_at && Date.now() - data.first_seen_at > ttlMs) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
};

export const appendAttributionToMessage = (message) => {
  const attribution = getAttribution();
  if (!attribution) return message;
  const parts = [];
  if (attribution.gclid) parts.push(`ads:${attribution.gclid.slice(0, 20)}`);
  else if (attribution.gbraid) parts.push(`gbraid:${attribution.gbraid.slice(0, 20)}`);
  else if (attribution.wbraid) parts.push(`wbraid:${attribution.wbraid.slice(0, 20)}`);
  if (attribution.utm_campaign) parts.push(`camp:${attribution.utm_campaign}`);
  else if (attribution.utm_source) parts.push(`src:${attribution.utm_source}`);
  if (parts.length === 0) return message;
  return `${message}\n\n_Ref: ${parts.join(' | ')}_`;
};
