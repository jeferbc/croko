# Google Ads API Tool Design Document — Croko

## Company
- **Name:** Croko
- **Website:** https://www.croko.co
- **Industry:** E-commerce (direct-to-consumer)
- **Product:** Belly painting kits for pregnant women
- **Market:** Colombia

## Purpose
Upload offline purchase conversions to Google Ads using the `UploadClickConversions` endpoint of the Google Ads API (v19).

## Problem
Croko sells through two channels:
1. **Online checkout** (Wompi payment gateway) — payment happens outside croko.co, so the browser-based conversion tag is unreliable
2. **WhatsApp sales** — customers click a Google Ad, visit the website, then close the sale via WhatsApp chat days later

In both cases, the Google Ads click (gclid) cannot be reliably matched to a purchase using client-side JavaScript tags. Server-side conversion upload solves this.

## Architecture

```
[Wompi Webhook]  ──┐
                    ├──> [n8n Workflow] ──> Google Ads API (UploadClickConversions)
[Manual Form]   ──┘         │
                            ├──> GA4 Measurement Protocol
                            └──> Google Sheets (audit log)
```

### Trigger 1: Wompi Webhook
- Wompi (payment gateway) sends a `transaction.updated` webhook when a payment is approved
- n8n receives the webhook, validates the signature, extracts the gclid from transaction metadata, and uploads the conversion

### Trigger 2: Manual Form (WhatsApp sales)
- A team member fills out an n8n form after closing a sale via WhatsApp
- The form collects: customer email, phone, order ID, and sale amount
- n8n hashes PII (SHA-256) and uploads as an Enhanced Conversion for Leads

### Shared Processing
Both triggers feed into a single sub-workflow that:
1. Validates required fields (email, value, order_id)
2. Hashes PII per Google's requirements (SHA-256, lowercase, trimmed)
3. Calls `UploadClickConversions` with gclid (when available) and/or hashed user identifiers
4. Sends the purchase event to GA4 via Measurement Protocol
5. Logs the result to a Google Sheet for auditing

## Google Ads API Usage

### Endpoints Used
- `googleAds.v19.conversionUploadService.uploadClickConversions` — only endpoint used

### Conversion Action
- **Name:** Purchase Croko (server)
- **Type:** Offline conversion (Import from clicks)
- **Category:** Purchase
- **Value:** 190,000 COP (fixed product price)
- **Count:** One per click

### Authentication
- OAuth2 (refresh token flow)
- Developer token from MCC account 589-413-5062
- Customer ID: 292-030-5625

### Volume
- Estimated 5-30 conversion uploads per month
- No bulk operations, no reporting queries, no campaign management

### Data Handling
- Customer PII (email, phone) is hashed with SHA-256 before transmission
- Raw PII is never stored beyond the n8n workflow execution
- Audit log in Google Sheets contains only order ID, amount, timestamp, and upload status

## Compliance
- The tool is used exclusively for the advertiser's own account (Croko, 292-030-5625)
- No third-party data is involved
- Users provide consent for data use during checkout and WhatsApp interaction
- All API usage follows Google Ads API Terms of Service

## Technical Stack
- **Automation platform:** n8n (self-hosted)
- **Payment gateway:** Wompi (Colombian PSP)
- **Website:** Next.js on Vercel (croko.co)
- **CRM:** Frappe CRM
