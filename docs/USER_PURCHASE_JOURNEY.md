# User Purchase Journey - Kit Pinta Barriguita

This document describes the complete user purchase flow from discovery to conversion tracking.

---

## Journey Overview

```
[Landing Page] → [Wompi Checkout] → [Payment] → [Thank You Page] → [WhatsApp Contact]
```

---

## Step 1: Product Discovery

**User lands on the website**

The user arrives at `https://www.maquillajeembarazadas.com/kit-pinta-barriguitas`

**What they see:**
- Hero section with product benefits
- Trust badges: "Momento ideal: 28-36 semanas", "+300 familias felices", "Envío gratis"
- Clear pricing: $150,000 COP
- Multiple CTA buttons to purchase

**Purchase buttons located in:**
- Header (desktop): `src/containers/kit/header/headerDesktop.js`
- Header (mobile): `src/containers/kit/header/headerMobile.js`
- Product section: `src/containers/wedding/product.js`
- Sticky CTA (appears on scroll): `src/components/StickyCTA.js`

---

## Step 2: Click to Purchase

**User clicks "Obtener Kit" or "Comprar"**

All buttons link to: `https://checkout.wompi.co/l/YRIafg`

The link opens in a new tab (`target="_blank"`).

---

## Step 3: Wompi Checkout

**User arrives at Wompi hosted checkout page**

### Information Displayed:
- Product: Kit Pinta Barriguita
- Price: COP $150,000
- Description: "Crea un recuerdo inolvidable con tu bebé antes de que nazca..."

### Information Collected:

| Field | Required | Purpose |
|-------|----------|---------|
| Email | Yes | Order confirmation |
| Phone | Yes | WhatsApp contact |
| Full Name | Yes | Shipping label |
| ID Document | Yes | Payment verification |
| Shipping Address | Yes | Delivery |
| Código de imagenes | Yes | Design preferences |
| Por donde nos conociste? | Yes | Marketing attribution |

### Payment Methods Available:
- Credit/Debit Card
- PSE (Bank Transfer)
- Nequi
- Bancolombia

---

## Step 4: Payment Processing

**Wompi processes the payment**

### Possible Outcomes:

| Status | Action |
|--------|--------|
| **APPROVED** | Redirect to thank you page |
| **DECLINED** | Show error, allow retry |
| **PENDING** | Show pending message |
| **ERROR** | Show error message |

---

## Step 5: Redirect to Thank You Page

**On successful payment, Wompi redirects to:**

```
https://www.maquillajeembarazadas.com/gracias?id={transaction_id}
```

### URL Parameters:
- `id`: Wompi transaction ID (e.g., `1285220-1767031989`)

### Page Components:

```
┌─────────────────────────────────────────┐
│           ✓ Success Banner              │
│     "¡Gracias por tu compra!"           │
├─────────────────────────────────────────┤
│         [Product Image]                 │
│    Kit Pinta Barriguita – Todo Incluido │
│    Pedido #1285220-1767031989           │
│    Fecha: 29 de diciembre de 2025       │
│    Estado: Confirmado ✓                 │
├─────────────────────────────────────────┤
│         Total Pagado                    │
│         $150,000 COP                    │
├─────────────────────────────────────────┤
│     Continuemos por WhatsApp            │
│   [Countdown: 10 segundos]              │
│   [Ir a WhatsApp Ahora] [Cancelar]      │
├─────────────────────────────────────────┤
│         ¿Qué sigue?                     │
│   • Te contactaremos por WhatsApp       │
│   • Coordinaremos el envío              │
│   • Tu kit llegará en 3-5 días          │
├─────────────────────────────────────────┤
│   [Volver al Inicio] [WhatsApp]         │
└─────────────────────────────────────────┘
```

### Files Involved:
- `src/app/gracias/page.js` - Main page component
- `src/hooks/useOrderTracking.js` - Tracking logic
- `src/hooks/useWhatsAppRedirect.js` - WhatsApp redirect
- `src/components/gracias/*` - UI components

---

## Step 6: Analytics Tracking

**Purchase event fired to GTM/GA4**

### Timing:
- Event fires 500ms after page load (ensures GTM is ready)
- Only fires once per transaction ID (stored in sessionStorage)

### DataLayer Push:

```javascript
window.dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: '1285220-1767031989',
    value: 150000,
    currency: 'COP',
    items: [{
      item_id: 'kit_pinta_barriguita',
      item_name: 'Kit Pinta Barriguita – Todo Incluido',
      price: 150000,
      quantity: 1
    }]
  }
});
```

### GTM Configuration:
- **Trigger:** Custom Event = `purchase`
- **Tag:** GA4 Event with ecommerce parameters
- **Key Event:** Marked as conversion in GA4

---

## Step 7: WhatsApp Redirect

**Automatic redirect after 10 seconds (or manual click)**

### Redirect URL:
```
https://wa.me/573168161717?text=Hola!%20Acabo%20de%20comprar%20el%20Kit%20Pinta%20Barriguita%0A%0AMi%20numero%20de%20pedido%20es%3A%201285220-1767031989
```

### Message Sent:
```
Hola! Acabo de comprar el Kit Pinta Barriguita

Mi numero de pedido es: 1285220-1767031989
```

### User Options:
- Wait for auto-redirect (10 seconds)
- Click "Ir a WhatsApp Ahora" (opens immediately)
- Click "Cancelar" to stay on page

---

## Step 8: Post-Purchase Communication

**Business receives WhatsApp message**

### Next Steps (handled by business):
1. Confirm order receipt
2. Help customer select 3 designs from catalog
3. Confirm shipping address
4. Provide tracking information
5. Ship within 3-5 business days

---

## Journey Diagram

```
┌──────────────────────────────────────────────────────────────────────┐
│                         USER PURCHASE JOURNEY                        │
└──────────────────────────────────────────────────────────────────────┘

   [User]                    [Website]                [Wompi]           [GA4]
     │                          │                        │                │
     │──── Visits site ────────>│                        │                │
     │                          │                        │                │
     │──── Clicks "Comprar" ───>│                        │                │
     │                          │──── Redirect ─────────>│                │
     │                          │                        │                │
     │<─────────────────────────│──── Checkout page ────>│                │
     │                          │                        │                │
     │──── Fills form ─────────────────────────────────>│                │
     │──── Pays ───────────────────────────────────────>│                │
     │                          │                        │                │
     │                          │<── Payment approved ──│                │
     │                          │                        │                │
     │<── Redirect to /gracias ─│                        │                │
     │                          │                        │                │
     │                          │──── Purchase event ──────────────────>│
     │                          │                        │                │
     │<── Auto WhatsApp redirect│                        │                │
     │                          │                        │                │
   [WhatsApp Chat Begins]       │                        │       [Conversion
     │                          │                        │        Tracked]
     ▼                          ▼                        ▼                ▼
```

---

## Technical Summary

| Component | Technology | File/URL |
|-----------|------------|----------|
| Landing Page | Next.js 15 | `/kit-pinta-barriguitas` |
| Payment | Wompi Checkout | `checkout.wompi.co/l/YRIafg` |
| Thank You | Next.js + React | `/gracias` |
| Tracking | GTM + GA4 | `useOrderTracking.js` |
| Communication | WhatsApp | `wa.me/573168161717` |

---

## Conversion Funnel

```
Landing Page Visitors
        │
        ▼ (Click Rate)
   Wompi Checkout
        │
        ▼ (Conversion Rate)
   Payment Complete
        │
        ▼ (100%)
   Thank You Page
        │
        ▼ (Tracked)
   GA4 Purchase Event
        │
        ▼ (Redirect Rate)
   WhatsApp Contact
```

---

**Document Version:** 1.0
**Last Updated:** January 2026
