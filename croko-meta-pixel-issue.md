# Croko Meta Pixel Issue - Technical Documentation

**Date:** January 2025  
**Domain:** www.maquillajeembarazadas.com  
**Pixel ID:** 3325469384379035  
**Business:** Croko - Pregnancy Belly Painting Kits  
**Status:** 🔴 RESTRICTED - Purchase Event Blocked

---

## Executive Summary

The Meta Pixel on maquillajeembarazadas.com is **partially restricted** by Meta's Health & Wellness data policies. The `Purchase` conversion event is being **suppressed/blocked**, preventing Meta from tracking sales and optimizing ad delivery for buyers. This is the root cause of the "pixel crisis" experienced since August 2025.

---

## Problem Statement

### Symptoms Observed

1. **GTM shows tag fired** but Meta Pixel Helper doesn't show Purchase event
2. **Browser console error:** `[Meta Pixel] - You are attempting to send a restricted event. The event was suppressed.`
3. **Events Manager warnings:**
   - "Custom conversion(s) blocked because it suggests the use of information (e.g., health, financial) not allowed under Meta's terms"
   - "Some website data is blocked when the website visitor is in the European Region"
   - "Partially blocked websites: www.maquillajeembarazadas.com"

### Business Impact

| Metric | Before Restriction | After Restriction |
|--------|-------------------|-------------------|
| Purchase tracking | ✅ Working | ❌ Blocked |
| Ad optimization | For buyers | For clickers only |
| ROAS measurement | Accurate | Not possible |
| Lookalike audiences | From buyers | Not possible |
| Retargeting | Full funnel | Limited |

---

## Technical Investigation

### Pixel Status by Event

| Page | Event | Status | Notes |
|------|-------|--------|-------|
| Homepage (/) | PageView | ✅ Working | 108ms load time |
| /kit-pinta-barriguitas | PageView | ✅ Working | 25ms load time |
| /kit-pinta-barriguitas | ViewContent | ❌ Not configured | Should be added |
| /gracias | PageView | ✅ Working | 55ms load time |
| /gracias | Purchase | ❌ BLOCKED | Suppressed by Meta |

### GTM Configuration

**Container ID:** GTM-5H5LM4D

**Tags Configured:**
- `Facebook pixel` (base) - Fires on All Pages (Container Loaded)
- `Facebook Pixel Purchase` - Fires on `purchase` event
- `Purchase GA4` - Fires on `purchase` event

**Tag Sequencing:** Facebook Pixel Purchase is configured to fire AFTER the base Facebook pixel loads.

**Purchase Event Code (Current):**
```html
<script>
var urlParams = new URLSearchParams(window.location.search);
var transactionId = urlParams.get('id') || 'TXN-' + Date.now();
fbq('track', 'Purchase', {
  value: 150000,
  currency: 'COP',
  content_type: 'product',
  content_ids: ['kit_pinta_barriguita'],
  content_name: 'Kit Pinta Barriguita'
}, {eventID: transactionId});
</script>
```

**Result:** Code executes correctly in GTM, but Meta suppresses the event server-side.

---

## Root Cause Analysis

### Why Meta Blocked the Domain

Meta implemented **Health & Wellness data restrictions** in January 2025 to protect against HIPAA lawsuits and privacy litigation. The system uses AI to identify domains/data that could reveal users' health status.

**Triggering Factor:** The domain `maquillajeembarazadas.com` contains "embarazadas" (pregnant women in Spanish), which Meta's AI flagged as health-indicating.

**Meta's Logic:**
- Purchase from pregnancy-related domain → reveals user is pregnant
- Pregnancy = health status (sensitive data)
- Sensitive health data → blocked under Meta's terms

**Important:** The restriction is based on **domain categorization**, not product type. Even though belly painting kits are art supplies (not medical products), the domain name triggered the flag.

### Restriction Type

Based on the error messages, Croko has **Partial Restrictions**:
- ✅ PageView events allowed
- ✅ ViewContent events allowed (if configured)
- ❌ Purchase events blocked
- ❌ AddToCart events blocked
- ❌ Lead events blocked
- ❌ Custom conversions blocked

---

## Events Manager Diagnostics

### Active Errors (as of January 2025)

**Error 1: Custom conversion(s) blocked**
> "At least 1 of your custom conversions is blocked because it suggests the use of information (e.g., health, financial) not allowed under Meta's terms."
> 
> Detected: Jan 5, 2026

**Error 2: Some website data blocked**
> "Some website data is blocked when the website visitor is in the European Region. This is because the data appears inconsistent with our Meta Business Tool Terms as it may:
> - Be associated with medical conditions, specific health statuses, or provider/patient relationships"
>
> Partially blocked websites: www.maquillajeembarazadas.com

---

## Attempted Solutions

### Solution 1: Tag Sequencing in GTM
**Status:** ❌ Did not resolve
**Action:** Added tag sequencing to ensure base pixel loads before Purchase event
**Result:** Tag fires correctly, but Meta still suppresses the event server-side

### Solution 2: Verified Pixel Code Syntax
**Status:** ✅ Code is correct
**Finding:** The JavaScript executes properly; the block happens at Meta's servers

---

## Recommended Solutions

### Immediate Actions (This Week)

#### 1. File Appeal in Events Manager
- Navigate to Events Manager → Pixel → Settings → "Manage data source categories"
- Click "Review solution" on both errors
- Submit appeal emphasizing:
  - Product is **art supplies** (paints, brushes, stencils)
  - NOT medical/health products
  - Purchasing does not indicate health condition
  - Used for creative photography, not treatment

**Appeal Template:**
```
Our business sells art supply kits (body-safe paints, brushes, stencils) 
for decorative belly painting photography. This is a creative/artistic 
product similar to face painting, not a health product.

Purchasing our kit does not indicate any health condition - it indicates 
interest in pregnancy photography art, similar to maternity photo props.

We request recategorization as our products do not fall under medical, 
health treatment, or wellness categories.
```

#### 2. Create URL-Based Custom Conversion
- Events Manager → Custom Conversions → Create
- **Name:** Kit Sale Completed
- **Rule:** URL contains `/gracias`
- **Category:** Purchase
- **Value:** 150,000 COP

This may bypass the standard Purchase event restriction.

#### 3. Implement GA4 Attribution Tracking
Track Facebook conversions in GA4 using cookies and URL parameters:

**Variables to create in GTM:**
- `URL - fbclid` (URL parameter)
- `Cookie - _fbc` (1st party cookie)
- `Cookie - _fbp` (1st party cookie)

**Custom HTML Tag for GA4:**
```html
<script>
  var fbclid = new URLSearchParams(window.location.search).get('fbclid');
  var fbc = document.cookie.match(/_fbc=([^;]+)/)?.[1] || '';
  var fbp = document.cookie.match(/_fbp=([^;]+)/)?.[1] || '';
  var isFromFacebook = !!(fbclid || fbc);
  
  var urlParams = new URLSearchParams(window.location.search);
  var transactionId = urlParams.get('id') || 'TXN-' + Date.now();
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'purchase_with_attribution',
    'transaction_id': transactionId,
    'value': 150000,
    'currency': 'COP',
    'fb_attributed': isFromFacebook,
    'fb_click_id': fbc,
    'fb_browser_id': fbp,
    'fbclid': fbclid || ''
  });
</script>
```

### Short-Term Actions (This Month)

#### 4. Set Up Click-to-WhatsApp Ads
- No pixel required for conversion tracking
- Meta tracks "message sent" as conversion
- Higher conversion rates in Colombian market
- Bypasses all domain restrictions

**Campaign Setup:**
- Objective: Engagement → Messages
- Conversion location: WhatsApp
- Track conversations, close sales via chat

#### 5. Use Meta Lead Ads (Instant Forms)
- No website pixel needed
- Form data collected within Facebook/Instagram
- Connect to CRM for follow-up
- Can optimize for "Conversion Leads" with proper setup

### Medium-Term Actions (1-3 Months)

#### 6. Domain Migration to croko.co
The planned migration will help because:
- New domain has no health-related keywords
- Fresh pixel without restriction history
- Opportunity for clean setup

**Migration Steps:**
1. Set up croko.co with clean architecture
2. Create NEW pixel (don't migrate old one)
3. Verify domain in Business Settings
4. Configure Aggregated Event Measurement
5. Test all events before launching ads
6. Use 301 redirects from old domain

**Important:** Wait 1-2 weeks after migration for Meta to scan/categorize new domain before running ads.

#### 7. Server-Side Tracking with Data Sanitization
If restrictions persist on new domain:
- Remove browser pixel entirely
- Implement server-side GTM
- Strip all pregnancy-related parameters
- Send only sanitized data to Meta CAPI

---

## What Does NOT Work

| Approach | Why It Fails |
|----------|--------------|
| Conversions API (CAPI) alone | Meta blocks restricted data server-side too |
| Renaming Purchase event | Parameters still flagged |
| Creating new pixel on same domain | Restriction is domain-based |
| Using different ad account | Domain restriction persists |
| Waiting it out | Policy is permanent |

---

## Tracking Alternatives Comparison

| Method | Tracks Sales | Helps Meta Optimize | Setup Effort |
|--------|--------------|---------------------|--------------|
| GA4 with FB attribution | ✅ Yes | ❌ No | Medium |
| Custom URL conversion | Maybe | Limited | Low |
| WhatsApp ads | ✅ Yes | ✅ Conversations | Low |
| Lead Ads | ✅ Leads | ✅ With CRM sync | Medium |
| Domain migration | ✅ Yes | ✅ Yes | High |
| Third-party tools (Triple Whale) | ✅ Yes | Via workarounds | Medium |

---

## Key Contacts & Resources

### Meta Support
- Events Manager: https://business.facebook.com/events_manager
- Appeal through "Review solution" buttons in Diagnostics

### Useful Documentation
- Meta Health & Wellness Policy: https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness/
- Meta Business Tool Terms: https://www.facebook.com/legal/terms/businesstools

### Third-Party Tools to Consider
- Triple Whale: Server-side attribution
- Polar Analytics: Alternative measurement
- Elevar: Server-side tracking for Shopify

---

## Timeline & Next Steps

### Week 1
- [ ] File appeal in Events Manager
- [ ] Create URL-based custom conversion
- [ ] Implement GA4 attribution tracking
- [ ] Test Click-to-WhatsApp campaign

### Week 2
- [ ] Review appeal response
- [ ] Analyze WhatsApp campaign performance
- [ ] Begin croko.co migration planning

### Week 3-4
- [ ] Execute domain migration if appeal fails
- [ ] Set up new pixel on croko.co
- [ ] Verify all events working on new domain

### Month 2+
- [ ] Monitor new domain categorization
- [ ] Scale successful campaigns
- [ ] Consider server-side tracking if needed

---

## Appendix: Error Screenshots Reference

### Console Error
```
[Meta Pixel] - You are attempting to send a restricted event. 
The event was suppressed. Go to Events Manager to learn more.
```

### Events Manager Errors
1. Custom conversion(s) blocked - Health/financial data restriction
2. Website data partially blocked - European region + medical association

### GTM Debug Confirmation
- Tags Fire: ✅ Facebook pixel, Facebook Pixel Purchase both fire
- Pixel Helper Shows: Only PageView (Purchase suppressed)

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Author:** Jeff (Croko) + Claude Analysis
