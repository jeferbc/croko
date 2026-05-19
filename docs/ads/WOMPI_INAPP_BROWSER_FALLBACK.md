# Wompi checkout — in-app browser fallback & diagnostics

**Estado:** Implementado y desplegado en producción.
**Fecha:** 2026-05-19
**Branch / commit:** `fix/wompi-inapp-browser-fallback` (`10e4fb94`)
**Validado:** Desktop Chrome, iPhone Safari + Chrome, Android Brave. Pendiente: confirmar primera transacción real entrante desde in-app browser via `/api/diag` logs.

---

## Problema

Usuarios que abren `croko.co` desde un anuncio clickeado **dentro de la app de Instagram, Facebook o TikTok** no terminaban el pago. El modal de Croko se abría normal, completaban los 3 pasos, y al hacer click en **"Pagar con Wompi"** el botón quedaba congelado en `"Abriendo pasarela de pago…"` para siempre — sin error visible, sin callback, sin log accesible.

Screenshot del estado colgado (reportado por usuario el 2026-05-19): modal en step 3 con todos los datos completos, botón en estado loading permanente.

Funcionaba perfecto en Chrome de escritorio, Safari de iPhone, Chrome de Android, Brave — falla solo en in-app webviews. Es la misma clase de bug documentada por:

- **PayPal en Instagram webview** — overlay queda en blanco ([Shopify Community](https://community.shopify.com/t/paypal-blank-popup-when-triggered-from-instagram/111348))
- **Adyen Drop-in en TikTok webview** — mismo síntoma, root cause confirmado: `window.open('about:blank')` + `windowRef.location.replace(...)` es bloqueado silenciosamente por el WKWebView ([Adyen/adyen-web #3866](https://github.com/Adyen/adyen-web/issues/3866))
- **Stripe Checkout en webviews** ([react-native-webview #2877](https://github.com/react-native-webview/react-native-webview/issues/2877))
- **Klaviyo sign-up forms en Instagram webview** — confirma que es un bug de clase webview, no del proveedor de pagos ([Klaviyo Community](https://community.klaviyo.com/sign-up-forms-38/embedded-sign-up-forms-not-displaying-in-the-instagram-webview-browser-5352))

### Por qué el widget de Wompi falla en webview

El JS widget de Wompi (`https://checkout.wompi.co/widget.js`) abre un popup/iframe cross-origin para renderear el checkout. Los in-app webviews de Meta/TikTok bloquean `window.open` silenciosamente y reportan éxito al SDK ([documentado en expo #40123](https://github.com/expo/expo/issues/40123)) — entonces el widget cree que se abrió, pero no aparece nada y el callback `onResult` nunca dispara. El botón queda colgado porque `isPaying` solo se resetea cuando llega el callback o un throw, y en este escenario no llega ninguno.

---

## Solución: dos paths al mismo widget

| Entorno | Path | Mecanismo de apertura |
|---|---|---|
| Browser real (Chrome, Safari, Brave, Edge) | Widget JS | `new WidgetCheckout(config).open(cb)` — overlay sin salir del sitio |
| In-app webview (FB, Instagram, TikTok, Messenger, Line, Snapchat, Twitter, Pinterest, LinkedInApp, Android `; wv)`) | Web Checkout redirect | `window.location.href = checkout.wompi.co/p/?...` — navegación top-level, inmune al bloqueo de popups |

El path redirect es una **navegación top-level del documento** (no popup, no iframe), por lo tanto los webviews no pueden bloquearlo. Es la misma mitigación que PayPal/Braintree publican en sus libraries `popup-bridge-ios`/`popup-bridge-android` para este mismo problema.

### Por qué la atribución no se rompe

Las dos rutas usan exactamente el mismo `reference = order_id` y disparan el begin_checkout webhook a n8n **antes** de abrir Wompi:

```
usePurchaseModal.proceedToCheckout()
  ├── submitToWebhook({order_id, gclid, utm_*, fbp, fbc, ...})   ← join key persistido en n8n
  └── openWompiCheckout({orderId, amountInCents, ...})
        ├── (real browser)  → WidgetCheckout(...).open(cb)       ← onResult → /gracias?id=...
        └── (in-app webview) → location.href = checkout.wompi.co/p/?reference=<order_id>&redirect-url=.../gracias&...
                              → Wompi redirige a /gracias?id=<tx_id>
```

En ambos casos:
1. El webhook `transaction.updated` de Wompi llega a n8n con `transaction.reference === order_id` → n8n une con la atribución (`gclid`, UTMs, fbp/fbc) que ya guardó del begin_checkout. **Esta es la señal autoritativa.**
2. El usuario aterriza en `/gracias?id=<tx_id>`, donde `useOrderTracking` dispara el evento `purchase` a GTM/GA4 para analytics web (no para conversión de Google Ads — eso ya se envió server-side desde n8n).

Cita relevante de los docs de Wompi (Step 7):
> Always use the events to finalize your integration. Do not use the redirection as a validation method of your transactions, only for informative purposes for your users.

Que es exactamente la arquitectura de Croko.

---

## Parámetros que se pasan a Wompi (ambos paths idénticos)

| Widget config (`WidgetCheckout({})`) | Web Checkout URL param |
|---|---|
| `currency: 'COP'` | `currency=COP` |
| `amountInCents: 19000000` | `amount-in-cents=19000000` |
| `reference: order_id` | `reference=<order_id>` |
| `publicKey` | `public-key=<pub_prod_...>` |
| `signature: { integrity: <sha256> }` | `signature:integrity=<sha256>` |
| `collectShipping: 'true'` | `collect-shipping=true` |
| `collectCustomerLegalId: 'true'` | `collect-customer-legal-id=true` |
| `customerData: { email, fullName }` | `customer-data:email=...`, `customer-data:full-name=...` |
| `redirectUrl: <origin>/gracias` (omitido en localhost) | `redirect-url=<origin>/gracias` (omitido en localhost) |

`collect-shipping` y `collect-customer-legal-id` son válidos para **ambas** integraciones — están listados en **Step 5 (Transaction parameters)** de los docs de Wompi como parámetros generales, no scoped a widget. Cuando el usuario llega a Wompi (widget o página hosted), se le piden cédula y dirección de envío porque no se pasan pre-llenados desde Croko.

La firma SHA-256 sigue el mismo input para ambos paths: `<Reference><Amount><Currency><IntegritySecret>`. El endpoint `/api/wompi-signature` se llama una sola vez antes de bifurcar, y la misma firma se reusa para widget o para URL params.

---

## Timeouts + graceful degradation

Antes del fix no había timeout en ninguna parte del handoff. Ahora:

- **Fetch de signature:** 10 s vía `AbortController`. Si Wompi/network falla → throw → botón muestra error en lugar de colgar.
- **Carga de `widget.js`:** 12 s vía `Promise.race`. Si no carga → log diag + degrada automáticamente al path redirect (mejor que dead-end).
- **`loaderPromise = null` on failure:** un fallo no envenena el módulo — siguiente intento re-attempt el load.

El único dead-end legítimo es signature fail (sin firma válida Wompi rechaza la transacción de todas formas). Ese caso falla loudly en ≤10 s con mensaje visible al usuario.

---

## Diagnostics — `/api/diag`

Antes del fix no había forma de ver fallas en celulares de usuarios (`console.error` es invisible en el dispositivo del usuario). Ahora cada etapa del checkout emite un beacon a `/api/diag` que loguea una línea estructurada al stdout del host de Next.js.

**Lectura:** `grep checkout-diag` en los logs del deploy/host.

**Stages emitidos** (en orden, ramificación según path):

| Stage | Cuándo dispara | Campos útiles |
|---|---|---|
| `wompi_checkout_start` | Entrada al handoff | `isInApp`, `app`, `orderId` |
| `wompi_signature_ok` / `wompi_signature_fail` | Resultado del POST a `/api/wompi-signature` | `ms`, `error` |
| `wompi_script_ok` / `wompi_script_fail` | Resultado de cargar `widget.js` (solo path widget) | `ms`, `error` |
| `wompi_widget_open_called` | `WidgetCheckout(...).open(cb)` llamado | `orderId` |
| `wompi_widget_open_throw` | Excepción sincrónica al abrir widget | `error` |
| `wompi_widget_result` | Callback del widget con resultado de tx | `status` |
| `wompi_redirect_navigate` | Justo antes del `location.href` al hosted checkout | `orderId` |

**Ejemplo de línea de log:**

```
[checkout-diag] {"stage":"wompi_checkout_start","sid":"abc-123","ts":"2026-05-19T...","ua":"...Instagram 309...","url":"https://croko.co/...","isInApp":true,"app":"instagram","orderId":"CROKO-..."}
```

**Características técnicas del cliente diag:**
- Usa `navigator.sendBeacon` (fallback a `fetch keepalive`) para que el beacon sobreviva la navegación a Wompi (crítico para capturar `wompi_redirect_navigate`).
- Cada attempt tiene un `sid` persistido en `sessionStorage` — todas las stages de un mismo intento comparten el `sid` para reconstruir el journey del usuario en los logs.
- Wrapped en try/catch a todo nivel — **diagnostics nunca puede romper el checkout** (un bug aquí sería peor que el bug original).

**Características del endpoint:**
- Trunca cada field defensivamente (UA hasta 400 chars, error hasta 300, etc.) para protegerse contra log-flooding (es unauthenticated por diseño — sendBeacon no soporta auth headers).
- Retorna siempre `204 No Content` para que `sendBeacon` considere el delivery exitoso y nunca reintente.
- Sin storage, sin DB, sin retención — todo va a stdout (visible en logs del host).

---

## Detección de in-app browsers

`src/lib/inAppBrowser.js` clasifica el UA. Tokens detectados:

| App | UA pattern |
|---|---|
| Facebook (incluye browser-in-FB) | `FBAN/`, `FBAV/`, `FB_IAB`, `FBIOS`, `FB4A` |
| Instagram | `Instagram` |
| TikTok | `BytedanceWebview`, `musical_ly`, `TikTok`, `trill` |
| Messenger | `Messenger` |
| Line | `Line/` |
| Snapchat | `Snapchat` |
| Twitter / X | `Twitter` |
| Pinterest | `Pinterest` |
| LinkedIn | `LinkedInApp` |
| Android WebView genérico (conservador) | Token `; wv)` en UA Android |

**Política de la heurística:** el Android `; wv)` solo aplica si el UA es Android. Es conservador a propósito — false positive aquí cuesta poco (real-browser user va al redirect, que también funciona, solo con UX ligeramente menos elegante), false negative cuesta mucho (sigue colgado el botón en el caso real).

Si surge un nuevo webview en el futuro (e.g. nueva app social), agregar el token a la lista en `inAppBrowser.js`. Antes de agregarlo, verificar en los logs de `/api/diag` que el UA de los usuarios afectados contiene un token discriminativo.

---

## Archivos

| Archivo | Propósito |
|---|---|
| `src/lib/wompiWidget.js` | Router widget vs redirect, timeouts, instrumentación, `redirectToWebCheckout()` |
| `src/lib/inAppBrowser.js` | Detección UA-based de webviews |
| `src/lib/diag.js` | `logDiag(stage, extra)` con sendBeacon |
| `src/app/api/diag/route.js` | Endpoint receptor (loguea a stdout, retorna 204) |
| `src/hooks/usePurchaseModal.js` | **Sin cambios** — el fix es transparente; el catch existente cubre los nuevos timeout errors |

---

## Cómo verificar que el fix está funcionando

### En producción

```bash
# En el host del deploy de Next.js:
grep "checkout-diag" logs.txt | grep "isInApp\":true"
```

Si aparecen líneas con `"stage":"wompi_redirect_navigate","app":"instagram"` (o facebook/tiktok) → el fallback está atrapando usuarios reales. Si **además** ves más conversiones de Wompi entrantes desde esas sesiones (matching por `sid` o `orderId` con el webhook `transaction.updated`), confirmado que el fix sí está convirtiéndolos.

### En desarrollo / staging

1. Abrir DevTools → Device Mode → setear UA custom a uno de los patterns:
   ```
   Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Instagram 309.0.0.0.0 (iPhone16,1; iOS 17_5; en_US; en-US; scale=3.00; 1290x2796; 519780000)
   ```
2. Navegar al modal de Croko, completar pasos, click "Pagar con Wompi".
3. Verificar que la URL navega a `https://checkout.wompi.co/p/?public-key=...&reference=CROKO-...&...` en lugar de abrir el widget overlay.
4. Verificar en `/api/diag` (o stdout local) que aparecen los stages `wompi_checkout_start` (`isInApp:true`), `wompi_signature_ok`, `wompi_redirect_navigate`.

### Reproducir el bug original (para validar que se siente solucionado)

Mandarse el link `https://croko.co/...` a sí mismo por Instagram DM o WhatsApp, abrir desde la app, completar checkout. Antes del fix → botón colgado eternamente. Después del fix → navega a la página hosted de Wompi, pago completable.

---

## Permissions-Policy + Click-to-Pay (issue secundario, no resuelto)

Los logs de producción muestran errores adicionales que **no bloquean el flujo de pago** pero ensucian la consola:

```
spc.ts: SecurityError: Failed to construct 'PaymentRequest':
  Must be in a top-level browsing context or an iframe needs to specify allow="payment"
[Violation] Permissions policy violation: payment is not allowed in this document
api.wompi.co/v1/merchants/undefined  422
src.mastercard.com/api/consumers  400
v1.js: Error during initialization
```

**Qué es:** estos errores son del sub-SDK de **Click-to-Pay** (Visa/Mastercard Secure Remote Commerce — el botón express "pagar con tarjeta guardada" dentro del widget). Falla porque:

1. Croko no envía header `Permissions-Policy: payment=(self "https://checkout.wompi.co")`.
2. El iframe del widget de Wompi probablemente no setea `allow="payment"`.

**Impacto al usuario:** los usuarios que tienen Click-to-Pay configurado con su Visa/MC **no ven el botón express**; tienen que tipear la tarjeta manualmente. El pago se completa normalmente. Las conversiones no se ven afectadas.

**Fix opcional:** agregar `headers()` en `next.config.js` con `Permissions-Policy: payment=(self "https://checkout.wompi.co"), accelerometer=(self "https://checkout.wompi.co"), gyroscope=(self "https://checkout.wompi.co")`. Necesario-pero-no-suficiente: si el iframe de Wompi no setea `allow="payment"` el header solo no basta. Cuando Wompi arregle su iframe attribute el header ya estaría listo. **Aún no implementado** (no prioritario).

---

## Validación pendiente

- [ ] Confirmar que aparecen líneas `wompi_redirect_navigate` con `app: instagram|facebook|tiktok` en logs de prod (señal de que el fallback está atrapando usuarios reales).
- [ ] Confirmar que sessions con `wompi_redirect_navigate` cierran loop con `transaction.updated` `APPROVED` (cruzar por `orderId`).
- [ ] Considerar `Permissions-Policy` header para habilitar Click-to-Pay (opcional, no bloqueante).

---

## Referencias

- [Wompi Docs — Widget & Checkout Web (Colombia)](https://docs.wompi.co/en/docs/colombia/widget-checkout-web/)
- [PayPal en Instagram webview — Shopify Community](https://community.shopify.com/t/paypal-blank-popup-when-triggered-from-instagram/111348)
- [Adyen Drop-in en TikTok webview — root cause analysis](https://github.com/Adyen/adyen-web/issues/3866)
- [Stripe Checkout en webviews](https://github.com/react-native-webview/react-native-webview/issues/2877)
- [Webview silently no-ops window.open and reports success — expo #40123](https://github.com/expo/expo/issues/40123)
- [Klaviyo sign-up forms en Instagram webview](https://community.klaviyo.com/sign-up-forms-38/embedded-sign-up-forms-not-displaying-in-the-instagram-webview-browser-5352)
- [Meta — Troubleshoot checkout on Instagram](https://help.instagram.com/951629962247940)
