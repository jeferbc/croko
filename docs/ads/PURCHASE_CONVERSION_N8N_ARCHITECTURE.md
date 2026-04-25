# Purchase Conversion — Server-Side n8n Architecture

**Estado:** En progreso. Steps 1-2 completados (2026-04-25). Esperando aprobación Standard Access de Google Ads API.
**Fecha:** 2026-04-24 (creado), 2026-04-25 (actualizado)
**Decisión:** No usar page-based conversion en `/gracias`. Toda conversión de Google Ads se envía server-side desde n8n.

---

## Por qué no usar la page conversion en `/gracias`

El gtag en `/gracias` es un **client-side event que dispara al cargar la URL**. Modos de falla que no tienen nada que ver con si la venta ocurrió:

- Adblockers (Pi-hole, uBlock, Brave): 15–30% bloqueado silenciosamente
- Safari ITP: la cookie `_gcl_aw` expira en 7 días, matando atribución
- Errores JS, GTM lento, race conditions con `useEffect`
- Usuarios que llegan por link directo, refrescan, o comparten la URL
- Wompi redirige con `status=DECLINED` y aún así carga `/gracias`

**Wompi webhook = el sistema de pagos diciendo la verdad**: `transaction.updated` con `status: APPROVED`. Server-side, firmado, con reintentos. **n8n form = Carolina diciendo la verdad** para ventas de WhatsApp. Sin browser, sin ad blocker, sin race condition.

---

## Arquitectura

```
                ┌─── Wompi events (status=APPROVED only)
                │
n8n Webhook ────┤                        ┌──> Google Ads UploadClickConversions
                │                        │    (conversion_action = Purchase Croko)
                │   ┌─ normalize ─┐      │
                ├──>│  payload    ├──────┼──> GA4 Measurement Protocol
                │   └─────────────┘      │    (event = purchase)
                │                        │
                │                        └──> Google Sheet (audit log)
n8n Form ───────┤
(Carolina)
```

**Dos triggers, UN sub-workflow compartido** que:
- Valida payload (email, value, order_id presentes)
- Hashea PII (SHA-256, normalizado lowercase, phone E.164)
- Envía a Google Ads (un solo conversion action: `Purchase Croko`, source-agnostic)
- Envía a GA4 MP
- Loguea resultado

**No** dividir en dos conversion actions. **Un** `Purchase Croko` action con un parámetro `source` que se puede segmentar en el reporte. Dedup más simple, señal más limpia para Smart Bidding.

---

## Crítico: la atribución todavía necesita click IDs

Un Wompi webhook por sí solo no sabe que el comprador vino de Google Ads. Para tener atribución real se necesita **una de estas opciones** (mejor a peor):

1. **Pasar `gclid` por Wompi metadata** — capturar en la landing → guardar en localStorage → incluir como `metadata.gclid` al iniciar la transacción Wompi → leerlo del webhook → enviarlo como `gclid` en `UploadClickConversions`. **Match rate ~95%.**
2. **Enhanced Conversions for Leads (email/phone hash)** — lo que proponía el doc original. **Match rate ~60–80%.**
3. **Ambas** — gclid como primario, PII hasheado como fallback. **Lo mejor de los dos.**

Para el path de Carolina, `gclid` es imposible (la venta cerró por WhatsApp días después) — así que ese path **debe** usar enhanced conversions (email + phone hasheados).

**Decisión:** #3 para Wompi path, #2 para Carolina path. Misma llamada a Google Ads, mezcla de identificadores diferente.

---

## Estrategia de dedup (ahora más simple)

Una sola key: `order_id`.
- Wompi path usa la `reference` de la transacción Wompi
- Carolina path usa un ID ingresado manualmente, prefijo `WSP-YYYYMMDD-NNN`

**Regla operacional:** Carolina nunca registra una venta que cerró por Wompi. Decirle: "si el cliente pagó online, no haces nada. Si pagó por transferencia o negociación WhatsApp, llenas el form."

En n8n, agregar un guard en el workflow del form de Carolina: rechazar si `order_id` matchea el patrón de la referencia Wompi.

---

## Cambios en el código

- **Eliminar** el bloque gtag en `useOrderTracking.js:46-54` (el placeholder `AW-CONVERSION_ID/CONVERSION_LABEL`). No reemplazarlo.
- **Mantener** el `dataLayer.push({event: 'purchase', ...})` en las líneas 27-41 — sigue siendo útil para **GA4 web** behavioral analytics (continuidad de sesión, reportes de funnel). Solo no dejar que GTM lo mapee a un tag de conversión de Google Ads.
- **Capturar gclid** en la landing: leer `?gclid=` (también `gbraid`, `wbraid`) del URL en la primera visita, guardar en localStorage con TTL de 90 días.
- **Adjuntar gclid a Wompi**: al crear la transacción Wompi (en `PurchaseModal` o donde se inicialice el redirect/widget), incluir `gclid` en el campo `customer_data` o `metadata`.
- **Setup del webhook Wompi**: configurar el dashboard merchant de Wompi para POST `transaction.updated` events a `https://n8n.<dominio>/webhook/wompi-purchase`.

---

## Orden de build

1. Crear un solo Google Ads conversion action `Purchase Croko (server)` — **Importar → Otras fuentes de datos / CRMs** (no website). Activar Enhanced Conversions for Leads. **20 min**
2. Obtener credenciales de Google Ads API (developer token, OAuth refresh token). **1–2 h, puede requerir aprobación**
3. Obtener API secret de GA4 MP. **5 min**
4. Construir el **sub-workflow compartido** en n8n con un payload de prueba hardcodeado, validar end-to-end con conversión de $1. **2–3 h**
5. Construir el trigger de **n8n form** para Carolina. Validar. **1 h**
6. Capturar `gclid` en la landing + pasarlo a Wompi metadata. **1 h código**
7. Construir el trigger de **Wompi webhook**. Validar firma. Conectar al sub-workflow. **2 h**
8. Remover el bloque gtag del conversion en `useOrderTracking.js`. **5 min**
9. Cambiar el goal de la campaña de `begin_checkout` → `Purchase Croko (server)`. Demote `begin_checkout` a secundario. **5 min**
10. Esperar 7–14 días antes de escalar.

---

## Cosas a vigilar

- **Wompi webhook signature** — verificar el header `X-Event-Checksum` en n8n antes de procesar. De lo contrario cualquiera puede POST un purchase falso al endpoint e inflar conversiones de Ads (y desperdiciar budget en señal mala).
- **Idempotencia del webhook** — Wompi reintenta en non-2xx. Usar `transaction.id` como dedup key en n8n; revisar Sheet/DB antes de mandar a Ads.
- **Delay de conversión** — los webhooks de Wompi llegan en segundos, pero el usuario llega a `/gracias` más rápido. Smart Bidding recibe la señal un poco más tarde que con un page tag. Está bien; Ads maneja delay hasta 90 días.
- **Disciplina de Carolina con el form** — mismo riesgo que el plan de Calendar. El form solo baja la fricción (campos validados > parser de descripción de free-text).

---

## Resumen

Drop the page conversion. Two server-side paths a través de n8n es la arquitectura correcta:

| Path | Trigger | Identificadores | Cobertura |
|---|---|---|---|
| Wompi webhook | `transaction.updated` con `status=APPROVED` | gclid + email/phone hash | Ventas online directas |
| n8n form | Carolina llena el form post-venta WhatsApp | email/phone hash (Enhanced Conversions for Leads) | Ventas cerradas manualmente |

Una sola conversion action en Google Ads (`Purchase Croko (server)`), dedup por `order_id`, cero dependencia del browser para señal de revenue.

---

## Credenciales y IDs (obtenidos 2026-04-25)

### Google Ads — Croko Advertiser Account
| Campo | Valor |
|---|---|
| Customer ID | `292-030-5625` |
| Conversion Action Name | `Purchase Croko (server)` |
| Conversion Action ID | `7588384523` |
| Conversion Action Resource Name | `customers/2920305625/conversionActions/7588384523` |
| Category | Compras (Purchase), Acción principal |
| Value | 190,000 COP |
| Count | Una conversión (One) |
| Attribution | Basada en datos (Data-driven) |
| Enhanced Conversions for Leads | Activado |
| Conversion window (click) | 90 días |
| Conversion window (view) | 3 días |

### Google Ads — MCC (Manager Account)
| Campo | Valor |
|---|---|
| MCC Name | jeff |
| MCC ID (Login Customer ID) | `589-413-5062` |
| Developer Token | `S2qpI22RmiGI05B4i_UrDQ` |
| Access Level | Cuenta de prueba (Test) — Standard access solicitado 2026-04-25, pendiente aprobación (~3 business days) |
| API Contact | jeffe.bernal@gmail.com |

### GA4
| Campo | Valor |
|---|---|
| Property ID | `G-LZ78QWW6PM` (GA4 property 280278139, "croko") |
| Measurement Protocol API Secret | **PENDIENTE** — obtener en Step 3 |

### Pendiente
- [ ] Aprobación Standard Access del developer token (solicitado 2026-04-25)
- [ ] GA4 Measurement Protocol API Secret (Step 3)
- [ ] OAuth2 Client ID + Secret desde Google Cloud Console (para n8n)

---

## Progreso del build

| Step | Descripción | Estado | Fecha |
|---|---|---|---|
| 1 | Crear conversion action `Purchase Croko (server)` | **Completado** | 2026-04-25 |
| 2 | Obtener credenciales Google Ads API (developer token) | **Completado** (pending Standard access) | 2026-04-25 |
| 3 | Obtener API secret de GA4 MP | Pendiente | — |
| 4 | Construir sub-workflow compartido en n8n | Pendiente | — |
| 5 | Construir trigger n8n form (Carolina) | Pendiente | — |
| 6 | Capturar gclid en landing + pasar a Wompi metadata | Pendiente | — |
| 7 | Construir trigger Wompi webhook | Pendiente | — |
| 8 | Remover bloque gtag en useOrderTracking.js | Pendiente | — |
| 9 | Cambiar goal de campaña a Purchase Croko (server) | Pendiente | — |
| 10 | Esperar 7-14 días antes de escalar | Pendiente | — |
