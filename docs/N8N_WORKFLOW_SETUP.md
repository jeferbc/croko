# n8n Workflow: Croko Purchase Kit Form Handler

## Overview

When a customer submits the purchase kit form on croko.co, the frontend sends a JSON POST to an n8n webhook. The workflow then:

1. Sends an email notification to the admin (via Postmark SMTP)
2. Creates a Lead in Frappe CRM (erp.automaticamente.co)

This replaced the previous Formspree integration (limited to 50 emails/month).

## Architecture

```
Browser (form submit)
    |
    | POST JSON + Basic Auth
    v
n8n Webhook (workflows.automaticamente.co/webhook/croko-cart)
    |
    +--> Send Email (Postmark SMTP) --> crokolina@gmail.com
    |
    +--> HTTP Request (Frappe API) --> Creates CRM Lead
```

## Webhook Endpoint

- **Production URL**: `https://workflows.automaticamente.co/webhook/croko-cart`
- **Method**: POST
- **Authentication**: Basic Auth (user: `croko`, password: stored in n8n credentials)
- **CORS**: Allowed origin `https://www.croko.co`
- **Ignore Bots**: Enabled

## Payload Format

The frontend sends this JSON body:

```json
{
  "email": "customer@example.com",
  "genero": "Niño",
  "disenos": "Astronauta, Gokú y esfera, León, Buceador",
  "nombre_bebe": "Mateo",
  "fecha": "24/3/2026, 1:30:45 p. m.",
  "ids_disenos": "boy_1, boy_5, boy_3, boy_2"
}
```

## Node 1: Webhook

- Type: `n8n-nodes-base.webhook` v2.1
- Path: `croko-cart`
- Auth: Basic Auth (credential: "Croko credentials")
- Options: Ignore Bots enabled

## Node 2: Send Email

- Type: `n8n-nodes-base.emailSend` v2.1
- From: `pedidos@croko.co`
- To: `crokolina@gmail.com`
- Subject: `Nuevo Pedido Kit - {{ nombre_bebe }}`
- Body: HTML table with all order fields
- SMTP: Postmark (`smtp.postmarkapp.com:587`, TLS)

## Node 3: HTTP Request (Frappe CRM)

- Type: `n8n-nodes-base.httpRequest` v4.3
- URL: `https://erp.automaticamente.co/api/resource/CRM%20Lead`
- Method: POST
- Auth: Frappe API token (via Authorization header)
- Creates a CRM Lead with fields:
  - `first_name`: customer email
  - `email`: customer email
  - `source`: "Croko Website"
  - `custom_genero`: baby gender
  - `custom_nombre_bebe`: baby name
  - `custom_disenos`: selected designs

## Frontend Integration

File: `src/hooks/usePurchaseModal.js`

The `submitToWebhook()` function sends the form data to n8n:

```js
await fetch(N8N_WEBHOOK_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('croko:' + N8N_WEBHOOK_KEY)
  },
  body: JSON.stringify(payload)
});
```

## Environment Variables

Set in Vercel and `.env.local`:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_N8N_WEBHOOK_URL` | `https://workflows.automaticamente.co/webhook/croko-cart` |
| `NEXT_PUBLIC_N8N_WEBHOOK_KEY` | The Basic Auth password (hex string) |

## Frappe CRM Custom Fields

DocType: `CRM Lead`

| Field Name | Label | Type |
|------------|-------|------|
| `custom_nombre_bebe` | Nombre Bebe | Data |
| `custom_genero` | Genero | Data |
| `custom_disenos` | Disenos | Small Text |

## Lead Sources

Created in Frappe CRM:

- Croko Website (from the purchase form)
- WhatsApp (historical leads)
- IG Ads (historical leads)
- Web (historical leads)

## CRM Email Setup

- Email Account: `crokolina@gmail.com` (Gmail)
- Service: GMail
- SMTP: `smtp.gmail.com:587` with TLS
- Auth: Gmail App Password
- Default Outgoing: Yes

## Workflow JSON

The full n8n workflow JSON is stored at `docs/n8n-workflow.json` and can be imported directly into n8n via Settings > Import Workflow.

## Services & URLs

| Service | URL |
|---------|-----|
| n8n | https://workflows.automaticamente.co |
| Frappe CRM | https://erp.automaticamente.co |
| Croko Website | https://www.croko.co |
| Vercel Dashboard | Vercel project settings |
| Postmark | https://account.postmarkapp.com |
