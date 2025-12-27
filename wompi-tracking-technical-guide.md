# Wompi Purchase Tracking - Technical Implementation

## Overview

Add these scripts to your Thank You page to track purchases in GA4 and Meta when users complete payment via Wompi.

---

## Required URL Parameters from Wompi

Configure Wompi to redirect to your thank you page with these parameters:

```
https://www.maquillajeembarazadas.com/gracias?id={reference}&amount={amount_in_cents}
```

| Parameter | Description | Example |
|-----------|-------------|---------|
| `id` or `reference` | Transaction/order ID | `CROKO-20251222-001` |
| `amount` or `amount_in_cents` | Payment amount | `15000000` (cents) or `150000` (pesos) |

---

## Script 1: Google Analytics 4 Purchase Tracking

Add this in the `<head>` section of your thank you page:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
    
    // Get transaction details from URL
    const urlParams = new URLSearchParams(window.location.search);
    const transactionId = urlParams.get('id') || urlParams.get('reference') || 'TXN-' + Date.now();
    const amountParam = urlParams.get('amount') || urlParams.get('amount_in_cents');
    
    // Convert amount (handle both cents and pesos)
    let amount = 150000; // Default
    if (amountParam) {
        amount = parseInt(amountParam) > 1000000 ? parseInt(amountParam) / 100 : parseInt(amountParam);
    }
    
    // Fire purchase event
    gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: amount,
        currency: 'COP',
        items: [{
            item_id: 'kit_prenatal',
            item_name: 'Kit Maquillaje Prenatal',
            price: amount,
            quantity: 1
        }]
    });
</script>
```

**Replace:** `G-XXXXXXXXXX` with your GA4 Measurement ID

---

## Script 2: Meta Pixel Purchase Tracking

Add this after the GA4 script:

```html
<!-- Meta Pixel -->
<script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
    
    // Get amount
    const metaParams = new URLSearchParams(window.location.search);
    const metaAmount = metaParams.get('amount') || metaParams.get('amount_in_cents');
    let metaValue = 150000;
    if (metaAmount) {
        metaValue = parseInt(metaAmount) > 1000000 ? parseInt(metaAmount) / 100 : parseInt(metaAmount);
    }
    
    // Fire purchase event
    fbq('track', 'Purchase', {
        value: metaValue,
        currency: 'COP',
        content_type: 'product',
        content_ids: ['kit_prenatal'],
        content_name: 'Kit Maquillaje Prenatal'
    });
</script>
<noscript>
    <img height="1" width="1" style="display:none"
         src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=Purchase&noscript=1"/>
</noscript>
```

**Replace:** `YOUR_PIXEL_ID` with your Meta Pixel ID (appears twice)

---

## Script 3: Auto-Redirect to WhatsApp

Add this at the end of your page (before `</body>`):

```html
<script>
    // Get order ID for WhatsApp message
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get('id') || params.get('reference') || '';
    
    // Build WhatsApp URL
    const phone = '573XXXXXXXXX'; // Your WhatsApp number
    let message = 'Hola! Acabo de comprar el Kit Maquillaje Prenatal 🎨';
    if (orderId) {
        message += '\n\nMi número de orden es: ' + orderId;
    }
    const whatsappUrl = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
    
    // Update any WhatsApp links on the page
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.href = whatsappUrl;
    });
    
    // Auto-redirect after 5 seconds
    setTimeout(() => {
        window.location.href = whatsappUrl;
    }, 5000);
</script>
```

**Replace:** `573XXXXXXXXX` with your WhatsApp number

---

## Script 4: Display Order Details (Optional)

If you want to show order ID and amount on the page:

```html
<script>
    const params = new URLSearchParams(window.location.search);
    
    // Get and display order ID
    const orderId = params.get('id') || params.get('reference');
    if (orderId) {
        const orderIdElement = document.getElementById('order-id');
        if (orderIdElement) orderIdElement.textContent = orderId;
    }
    
    // Get and display amount
    const amountRaw = params.get('amount') || params.get('amount_in_cents');
    if (amountRaw) {
        let displayAmount = parseInt(amountRaw);
        if (displayAmount > 1000000) displayAmount = displayAmount / 100;
        
        const formatted = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(displayAmount);
        
        const amountElement = document.getElementById('order-amount');
        if (amountElement) amountElement.textContent = formatted;
    }
</script>
```

In your HTML, add elements with these IDs where you want the values displayed:
```html
<span id="order-id"></span>
<span id="order-amount"></span>
```

---

## Configuration Checklist

| Item | Value | Where to Find |
|------|-------|---------------|
| GA4 Measurement ID | `G-XXXXXXXXXX` | GA4 → Admin → Data Streams |
| GA4 API Secret | (for webhook only) | GA4 → Admin → Data Streams → Measurement Protocol |
| Meta Pixel ID | `1234567890123456` | Events Manager → Settings |
| WhatsApp Number | `573XXXXXXXXX` | Your business WhatsApp |

---

## Wompi Redirect Configuration

In your Wompi dashboard or payment link settings, set the success redirect URL to:

```
https://www.maquillajeembarazadas.com/gracias?id={reference}&amount={amount_in_cents}
```

Check Wompi documentation for exact parameter names they support:
- `{reference}` - Your order reference
- `{transaction_id}` - Wompi's transaction ID
- `{amount_in_cents}` - Amount in cents
- `{status}` - Transaction status

---

## Testing

### Test URL
```
https://www.maquillajeembarazadas.com/gracias?id=TEST-123&amount=150000
```

### Verify GA4
1. Open GA4 → Reports → Realtime
2. Open your thank you page
3. Look for `purchase` event

### Verify Meta
1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Open your thank you page
3. Click extension icon → verify `Purchase` event

### Full Test
1. Make test purchase (Wompi test card: `4242 4242 4242 4242`)
2. Complete payment
3. Verify landing on thank you page with correct parameters
4. Verify GA4 and Meta events fire
5. Verify WhatsApp redirect works

---

## Complete Code Block (All Scripts Together)

Copy this entire block to your thank you page `<head>`:

```html
<!-- ========== PURCHASE TRACKING SCRIPTS ========== -->

<!-- GA4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');

(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const transactionId = urlParams.get('id') || urlParams.get('reference') || 'TXN-' + Date.now();
    const amountParam = urlParams.get('amount') || urlParams.get('amount_in_cents');
    let amount = 150000;
    if (amountParam) {
        amount = parseInt(amountParam) > 1000000 ? parseInt(amountParam) / 100 : parseInt(amountParam);
    }
    gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: amount,
        currency: 'COP',
        items: [{ item_id: 'kit_prenatal', item_name: 'Kit Maquillaje Prenatal', price: amount, quantity: 1 }]
    });
})();
</script>

<!-- Meta Pixel -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');

(function() {
    const p = new URLSearchParams(window.location.search);
    const a = p.get('amount') || p.get('amount_in_cents');
    let v = 150000;
    if (a) v = parseInt(a) > 1000000 ? parseInt(a) / 100 : parseInt(a);
    fbq('track', 'Purchase', { value: v, currency: 'COP', content_type: 'product', content_ids: ['kit_prenatal'] });
})();
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=Purchase&noscript=1"/></noscript>

<!-- ========== END TRACKING SCRIPTS ========== -->
```

And this block before `</body>`:

```html
<!-- ========== WHATSAPP REDIRECT ========== -->
<script>
(function() {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get('id') || params.get('reference') || '';
    const phone = '573XXXXXXXXX';
    let msg = 'Hola! Acabo de comprar el Kit Maquillaje Prenatal 🎨';
    if (orderId) msg += '\n\nMi número de orden es: ' + orderId;
    const url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(msg);
    
    document.querySelectorAll('a[href*="wa.me"]').forEach(l => l.href = url);
    setTimeout(() => window.location.href = url, 5000);
})();
</script>
<!-- ========== END REDIRECT ========== -->
```

**Replace:**
- `G-XXXXXXXXXX` → Your GA4 ID (2 places)
- `YOUR_PIXEL_ID` → Your Meta Pixel ID (2 places)
- `573XXXXXXXXX` → Your WhatsApp number
