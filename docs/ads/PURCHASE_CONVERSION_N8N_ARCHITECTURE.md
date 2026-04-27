# Purchase Conversion — Server-Side n8n Architecture

**Estado:** En progreso. Steps 1-3, 6 y 8 completados (2026-04-25, 2026-04-27). Standard Access del developer token aprobado 2026-04-27.
**Fecha:** 2026-04-24 (creado), 2026-04-27 (actualizado)
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

- ~~**Eliminar** el bloque gtag en `useOrderTracking.js:46-54` (el placeholder `AW-CONVERSION_ID/CONVERSION_LABEL`). No reemplazarlo.~~ **Hecho 2026-04-27.**
- **Mantener** el `dataLayer.push({event: 'purchase', ...})` en las líneas 27-41 — sigue siendo útil para **GA4 web** behavioral analytics (continuidad de sesión, reportes de funnel). Solo no dejar que GTM lo mapee a un tag de conversión de Google Ads.
- **Capturar gclid** en la landing: leer `?gclid=` (también `gbraid`, `wbraid`, `fbclid`) del URL en la primera visita, guardar en localStorage con TTL de 90 días. Implementado en `src/lib/adsTracking.js` + `src/hooks/useGclidCapture.js`.
- **Adjuntar atribución al order_id (no a Wompi)**: el widget de Wompi **no acepta metadata arbitraria** en su config — solo `currency, amountInCents, reference, publicKey, signature, redirectUrl, customerData, taxInCents, shippingAddress, expirationTime`. Patrón usado en lugar de "Wompi metadata":
  - `usePurchaseModal.js → submitToWebhook` envía a n8n `{order_id, gclid, gbraid, wbraid, fbclid, utm_*, fbp, fbc, value_cents, currency, email, ...}` **antes** de abrir el widget.
  - n8n persiste `{order_id → atribución}` (TTL ≥ 90d).
  - Wompi widget se abre con `reference = order_id`; el webhook `transaction.updated` devuelve `transaction.reference` que es el mismo `order_id`. n8n hace el join.
- **Phone para Enhanced Conversions**: el widget tiene `collectShipping=true` + `collectCustomerLegalId=true`, así que el webhook de Wompi incluye `transaction.shipping_address.phone_number` y `transaction.customer_email`. n8n los hashea (SHA-256, lowercase, E.164) en el sub-workflow.
- **Setup del webhook Wompi**: configurar el dashboard merchant de Wompi para POST `transaction.updated` events a `https://n8n.<dominio>/webhook/wompi-purchase`.

---

## Orden de build

1. Crear un solo Google Ads conversion action `Purchase Croko (server)` — **Importar → Otras fuentes de datos / CRMs** (no website). Activar Enhanced Conversions for Leads. **20 min**
2. Obtener credenciales de Google Ads API (developer token, OAuth refresh token). **1–2 h, puede requerir aprobación**
3. Obtener API secret de GA4 MP. **5 min**
4. Construir el **sub-workflow compartido** en n8n con un payload de prueba hardcodeado, validar end-to-end con conversión de $1. **2–3 h**
5. Construir el trigger de **n8n form** para Carolina. Validar. **1 h**
6. Capturar `gclid` en la landing + pasarlo a Wompi metadata. **1 h código**
6b. Crear custom fields en **Frappe CRM Lead** + actualizar el HTTP Request node de n8n para poblarlos. **30 min**
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
| Access Level | Standard access — aprobado 2026-04-27 (solicitado 2026-04-25) |
| API Contact | jeffe.bernal@gmail.com |

### GA4
| Campo | Valor |
|---|---|
| Property ID | `G-LZ78QWW6PM` (GA4 property 280278139, "croko") |
| Measurement Protocol API Secret | Apodo `N8N purchase conversions` (creado 2026-04-27). Valor guardado fuera del repo — cargar en n8n credentials. |

### Pendiente
- [ ] OAuth2 Client ID + Secret desde Google Cloud Console (para n8n)

---

## Progreso del build

| Step | Descripción | Estado | Fecha |
|---|---|---|---|
| 1 | Crear conversion action `Purchase Croko (server)` | **Completado** | 2026-04-25 |
| 2 | Obtener credenciales Google Ads API (developer token) | **Completado** (pending Standard access) | 2026-04-25 |
| 3 | Obtener API secret de GA4 MP | **Completado** | 2026-04-27 |
| 4 | Construir sub-workflow compartido en n8n | Pendiente | — |
| 5 | Construir trigger n8n form (Carolina) | Pendiente | — |
| 6 | Capturar gclid en landing + reenviar a n8n vía begin_checkout webhook (join por order_id) | **Completado** | 2026-04-27 |
| 6b | Custom fields de atribución en Frappe CRM Lead + update del HTTP node de n8n | Pendiente | — |
| 7 | Construir trigger Wompi webhook | Pendiente | — |
| 8 | Remover bloque gtag en useOrderTracking.js | **Completado** | 2026-04-27 |
| 9 | Cambiar goal de campaña a Purchase Croko (server) | Pendiente | — |
| 10 | Esperar 7-14 días antes de escalar | Pendiente | — |

---

## Step 6b — Surface attribution fields in Frappe CRM Lead view

Hoy el HTTP Request node de n8n (`https://erp.automaticamente.co/api/resource/CRM%20Lead`) sólo manda `first_name`, `email`, `source`, `custom_genero`, `custom_nombre_bebe`, `custom_disenos`. La data de atribución (`gclid`, `utm_*`, `value_cents`, etc.) llega al webhook de n8n pero **no se persiste en el Lead** y por eso no aparece en la vista del CRM.

### 6b.1 — Crear custom fields en Frappe (DocType: CRM Lead)

Path UI: en `erp.automaticamente.co` → buscar **"Customize Form"** → DocType `CRM Lead` → **Add Row** por cada campo. Marcar **"In List View"** en los que quieras ver en la grilla principal.

Campos a crear (curated — solo lo útil en CRM, los identificadores raros se almacenan crudos):

| Field Name | Label | Type | In List View | Notas |
|---|---|---|---|---|
| `custom_order_id` | Order ID | Data | ✅ | Reference Wompi / WSP |
| `custom_valor_cop` | Valor (COP) | Currency | ✅ | Default `190000`, `value_cents / 100` |
| `custom_currency` | Currency | Data | — | Default `COP` |
| `custom_gclid` | gclid | Data | ✅ | Google Ads click ID |
| `custom_fbclid` | fbclid | Data | — | Meta click ID |
| `custom_utm_source` | UTM Source | Data | ✅ | google, instagram, fb, etc. |
| `custom_utm_medium` | UTM Medium | Data | — | cpc, social, organic |
| `custom_utm_campaign` | UTM Campaign | Data | ✅ | nombre de la campaña |
| `custom_landing_page` | Landing Page | Data | — | path de la primera vista |
| `custom_atribucion_raw` | Atribución (raw JSON) | Long Text | — | dump completo: `gbraid`, `wbraid`, `utm_content`, `utm_term`, `fbp`, `fbc` |

Por qué un `custom_atribucion_raw` en lugar de un campo por cada cosa: `gbraid`/`wbraid`/`utm_content`/`utm_term`/`fbp`/`fbc` se usan para debug y matching server-side, casi nunca para filtrar leads en la grilla. Mantenerlos en un solo Long Text evita inflar el doctype.

### 6b.2 — Crear los campos vía Bench (alternativa a la UI)

Si tienes acceso a `bench --site erp.automaticamente.co console`:

```python
import frappe
fields = [
    ("custom_order_id", "Order ID", "Data", 1),
    ("custom_valor_cop", "Valor (COP)", "Currency", 1),
    ("custom_currency", "Currency", "Data", 0),
    ("custom_gclid", "gclid", "Data", 1),
    ("custom_fbclid", "fbclid", "Data", 0),
    ("custom_utm_source", "UTM Source", "Data", 1),
    ("custom_utm_medium", "UTM Medium", "Data", 0),
    ("custom_utm_campaign", "UTM Campaign", "Data", 1),
    ("custom_landing_page", "Landing Page", "Data", 0),
    ("custom_atribucion_raw", "Atribución (raw JSON)", "Long Text", 0),
]
for fieldname, label, fieldtype, in_list_view in fields:
    if frappe.db.exists("Custom Field", {"dt": "CRM Lead", "fieldname": fieldname}):
        continue
    frappe.get_doc({
        "doctype": "Custom Field",
        "dt": "CRM Lead",
        "fieldname": fieldname,
        "label": label,
        "fieldtype": fieldtype,
        "in_list_view": in_list_view,
        "insert_after": "custom_disenos",
    }).insert()
frappe.db.commit()
```

### 6b.3 — Update el HTTP Request node de n8n (CRM Lead create)

En el workflow `croko-cart`, abrir el node `HTTP Request (Frappe CRM)` y extender el JSON body con los campos nuevos. Mapear desde `$json` (payload del webhook):

```json
{
  "first_name": "={{ $json.email }}",
  "email": "={{ $json.email }}",
  "source": "Croko Website",
  "custom_genero": "={{ $json.genero }}",
  "custom_nombre_bebe": "={{ $json.nombre_bebe }}",
  "custom_disenos": "={{ $json.disenos }}",
  "custom_order_id": "={{ $json.order_id }}",
  "custom_valor_cop": "={{ ($json.value_cents || 19000000) / 100 }}",
  "custom_currency": "={{ $json.currency || 'COP' }}",
  "custom_gclid": "={{ $json.gclid }}",
  "custom_fbclid": "={{ $json.fbclid }}",
  "custom_utm_source": "={{ $json.utm_source }}",
  "custom_utm_medium": "={{ $json.utm_medium }}",
  "custom_utm_campaign": "={{ $json.utm_campaign }}",
  "custom_landing_page": "={{ $json.landing_page }}",
  "custom_atribucion_raw": "={{ JSON.stringify({ gbraid: $json.gbraid, wbraid: $json.wbraid, utm_content: $json.utm_content, utm_term: $json.utm_term, fbp: $json.fbp, fbc: $json.fbc }) }}"
}
```

### 6b.4 — Configurar la Lead List View en el CRM

Una vez creados los campos:
1. En `erp.automaticamente.co` ir a **CRM > Leads**
2. Click en el ícono de configuración de columnas (engranaje arriba a la derecha de la lista)
3. Activar las columnas: `Order ID`, `Valor (COP)`, `gclid`, `UTM Source`, `UTM Campaign`
4. Guardar la vista (puedes guardarla como vista nombrada "Atribución" para alternar entre la vista comercial y la de tracking)

### 6b.5 — Validación

1. Visitar `https://croko.co/?gclid=TEST6B&utm_source=google&utm_campaign=test_step6b&utm_medium=cpc`
2. Completar el modal hasta step 3 → click "Pagar con Wompi" (no es necesario terminar el pago — el webhook fire al hacer click)
3. En Frappe CRM → Leads → debe aparecer un Lead con:
   - `Order ID`: `CROKO-…`
   - `gclid`: `TEST6B`
   - `UTM Source`: `google`
   - `UTM Campaign`: `test_step6b`
   - `Valor (COP)`: 190.000
4. Borrar el lead de prueba.

### 6b.6 — Backfill de leads existentes (opcional)

Los leads creados antes de Step 6b no tienen estos campos poblados. Si quieres reconciliar con la actividad de Google Ads anterior, exporta los leads, cruza por `order_id` con el log de n8n, y actualiza vía la Frappe REST API (`PUT /api/resource/CRM Lead/{name}`).
