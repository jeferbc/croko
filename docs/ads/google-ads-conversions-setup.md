# Google Ads Conversions Setup — Kit Pinta Barriguitas

End-to-end plan to create and wire up Google Ads conversion actions for the Kit Pinta Barriguitas product ($190,000 COP). Assumes GTM container `GTM-5H5LM4D` and GA4 property `G-LZ78QWW6PM` are already installed on croko.co.

---

## Conversion actions to create

| # | Name | Category | Value | Count | Attribution window | Source |
|---|---|---|---|---|---|---|
| 1 | Purchase - Kit | Purchase | 190000 COP | One | 30d click / 1d view | Website (GTM) |
| 2 | Begin Checkout - Kit | Add to cart | 190000 COP | One | 30d / 1d | Website (GTM) |
| 3 | WhatsApp Lead - Kit | Contact | — (no value) | One | 30d / 1d | Website (GTM) |
| 4 | Offline Purchase - Kit | Purchase | 190000 COP | One | 30d / 1d | Import (Clicks) |

---

## Step 1 — Google Ads account

- Create / confirm account at ads.google.com
- Billing country: Colombia
- Timezone: America/Bogota
- Currency: COP

## Step 2 — Link Google Ads ↔ GA4

- Google Ads → Tools → Data Manager → Google Analytics (GA4)
- Link GA4 property `G-LZ78QWW6PM`
- Enable **auto-tagging** in Google Ads account settings (required for `gclid` on URLs)

## Step 3 — Create conversion actions (web)

For each of #1, #2, #3:

1. Tools → Conversions → **+ New conversion action** → Website
2. Enter domain `croko.co`
3. Fill the row values from the table above
4. Setup method: **Use Google Tag Manager**
5. Save and copy the **Conversion ID** (`AW-XXXXXXXXXX`) and **Conversion Label**

## Step 4 — Create offline conversion action (#4)

1. Tools → Conversions → **+ New conversion action** → Import → Conversions from clicks
2. Name: `Offline Purchase - Kit`
3. Category: Purchase
4. Value: Use different values (190000 default)
5. Count: One
6. Note the conversion **name** exactly — required by the Google Ads API when uploading

## Step 5 — Configure GTM tags

### 5a. Conversion Linker (verify it exists)

- Tag: Conversion Linker
- Trigger: All Pages
- Purpose: stores `gclid` in a first-party cookie for web conversion attribution
- Current status: already firing (verified in Tag Assistant)

### 5b. Purchase tag

| Field | Value |
|---|---|
| Tag name | `Ads - Purchase Kit` |
| Type | Google Ads Conversion Tracking |
| Conversion ID | `AW-XXXXXXXXXX` |
| Conversion Label | `xxxxxxxxxxxxxxxxx` |
| Conversion Value | `{{DLV - ecommerce.value}}` (fallback 190000) |
| Currency Code | COP |
| Transaction ID | `{{DLV - ecommerce.transaction_id}}` |
| Trigger | existing purchase trigger on `/gracias` |

### 5c. Begin checkout tag

| Field | Value |
|---|---|
| Tag name | `Ads - Begin Checkout Kit` |
| Type | Google Ads Conversion Tracking |
| Conversion ID | `AW-XXXXXXXXXX` |
| Conversion Label | `xxxxxxxxxxxxxxxxx` |
| Conversion Value | 190000 |
| Currency Code | COP |
| Trigger | existing `Click Classes contains btn-checkout-kit` trigger |

### 5d. WhatsApp lead tag

| Field | Value |
|---|---|
| Tag name | `Ads - WhatsApp Lead Kit` |
| Type | Google Ads Conversion Tracking |
| Conversion ID | `AW-XXXXXXXXXX` |
| Conversion Label | `xxxxxxxxxxxxxxxxx` |
| Conversion Value | (leave blank) |
| Trigger | existing `Click Whatsapp KIT` trigger (fires on `.whatsapp-kit` + ribbon on /kit-pinta-barriguitas) |

## Step 6 — Publish GTM

Submit → Publish → Version name `Google Ads conversions v1`.

## Step 7 — Verify

1. Tag Assistant Preview with URL: `https://croko.co/kit-pinta-barriguitas?gclid=TEST123&gtm_debug=x`
2. Trigger each action:
   - Click "Obtener Kit" → complete modal steps 1-3 → click "Continuar al pago" → fires `Ads - Begin Checkout Kit`
   - Click WhatsApp (sticky, ribbon, or main CTA) → fires `Ads - WhatsApp Lead Kit`
   - Complete a Wompi payment test → land on `/gracias` → fires `Ads - Purchase Kit`
3. In Google Ads → Tools → Conversions:
   - Status: "No recent conversions" (first ~24h), then "Recording conversions"
   - Check Diagnostics tab per conversion after 48h

## Step 8 — Offline conversion upload (WhatsApp-closed sales)

Workflow lives in n8n. On Frappe CRM order marked as "WhatsApp closed":

1. Read stored `gclid` from order record
2. POST to Google Ads API `conversionUploadService.uploadClickConversions` with:
   - `gclid`
   - `conversion_action` = resource name of `Offline Purchase - Kit`
   - `conversion_date_time` (RFC 3339)
   - `conversion_value` = 190000
   - `currency_code` = COP

Requirements to build:
- Google Ads Developer Token (apply at ads.google.com/aw/apicenter)
- OAuth2 refresh token for the Google Ads account
- Customer ID (10-digit, no dashes)
- Login Customer ID (if using MCC)

## Placeholders to fill in when account is created

- [ ] Conversion ID: `AW-__________`
- [ ] Purchase label: `__________`
- [ ] Begin checkout label: `__________`
- [ ] WhatsApp lead label: `__________`
- [ ] Offline conversion resource name: `customers/XXX/conversionActions/XXX`
- [ ] Google Ads Customer ID: `__________`

## Related files in this repo

- `src/lib/adsTracking.js` — captures gclid/UTMs on landing, persists 90d
- `src/hooks/useGclidCapture.js` — runs on every page via ClientLayout
- `src/hooks/usePurchaseModal.js` — sends attribution to n8n webhook for offline import
- `src/hooks/useOrderTracking.js` — pushes purchase event to dataLayer
- `src/components/PurchaseModal/index.js` — `btn-checkout-kit` class on step 3 button
- `src/containers/elements/common/whatsapp.js` — ribbon with conditional `.whatsapp-kit` class
- `src/components/StickyCTA.js` — sticky CTA with conditional `.whatsapp-kit` class
