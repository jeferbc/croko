# Wompi Payment Link Configuration

## ✅ Final Live Configuration

**Payment Link URL:** `https://checkout.wompi.co/l/YRIafg`

### Link Details

| Setting | Value |
|---------|-------|
| **Price** | COP $150.000 |
| **Status** | Active |
| **Expiration** | December 1st, 12:00 AM |
| **Single use?** | No |
| **Request shipping info?** | Yes |
| **Request ID document?** | Yes |
| **SKU** | KIT-PINTA-BARRIGUITA-001 |
| **Redirect URL** | https://www.maquillajeembarazadas.com/gracias |
| **Created** | December 29 |

### Description (Live)
```
Crea un recuerdo inolvidable con tu bebé antes de que nazca. Incluye 3 plantillas personalizables, 5 brochas profesionales y pinturas 100% seguras para el embarazo. Fácil de usar, se retira con agua y jabón. Perfecto para semanas 24-38
```

### Additional Fields
1. **Código de imagenes** - Required
2. **Por donde nos conociste?** - Required

---

## Integration Details

### Thank You Page
- **URL:** https://www.maquillajeembarazadas.com/gracias
- **Parameter:** `?id={transaction_id}` (sent by Wompi on redirect)
- **Fixed Price:** $150,000 COP (no API call needed)

### GTM Tracking
- **Event:** `purchase`
- **Trigger:** Custom Event = `purchase`
- **Parameters:**
  - `transaction_id`: From URL or 'direct_visit'
  - `value`: 150000
  - `currency`: COP
  - `items`: Kit Pinta Barriguita product

### Files Using This Link
- `src/components/StickyCTA.js`
- `src/containers/kit/header/headerMobile.js`
- `src/containers/kit/header/headerDesktop.js`
- `src/containers/wedding/product.js`

---

## Complete Kit Contents
- 3 plantillas personalizables
- 5 brochas profesionales
- Pinturas 100% seguras para el embarazo
- Fácil de usar, se retira con agua y jabón
- Ideal para semanas 24-38
