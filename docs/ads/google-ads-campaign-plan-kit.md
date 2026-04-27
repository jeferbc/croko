# Google Ads Campaign Plan — Kit Pinta Barriguitas

**Versión:** 2.1 (campaign creation walkthrough: 2026-04-22)
**Fecha:** 2026-04-10 (v2.0), actualizado 2026-04-22 (v2.1)
**Landing:** https://www.croko.co/ (kit moved to root)
**Checkout:** https://checkout.wompi.co/l/tIZLKf
**Scorecard de decisión:** [google-ads-day21-scorecard.md](./google-ads-day21-scorecard.md)
**Conversion setup:** [google-ads-conversions-setup.md](./google-ads-conversions-setup.md)

---

## 1. Product Brief (confirmado del source)

| Field | Value |
|---|---|
| Product | Kit Pinta Barriguitas (belly painting kit) |
| Price | **$190.000 COP** (~$46 USD) |
| Shipping | Free, 3–7 días, toda Colombia |
| Returns | 30 días |
| SKU | CROKO-KPB-001 |
| Brand | Croko |
| USPs | 15 pinturas hipoalergénicas · 4 pinceles profesionales · 3 plantillas transferibles · videotutoriales · +500 familias · 4.8★ (200 reseñas) |
| Audiencia primaria | Embarazadas 3er trimestre (semanas 28-36) |
| Audiencia secundaria | Compradores de regalo de baby shower (amigas, familia, pareja) |
| Use cases | Baby shower, gender reveal, sesión de fotos de maternidad, momento familiar pre-parto |

---

## 2. Restricciones del proyecto (contexto crítico)

1. **Presupuesto inicial:** $300.000 COP/mes ($10k/día, ~$75 USD/mes) — very tight
2. **Tracking gap:** Wompi es checkout externo. No todos los usuarios regresan a `/gracias`. Muchos cierran venta por WhatsApp sin pasar por Wompi.
3. **Geo:** Medellín, Cali, Bogotá (foco urbano)
4. **Indexación:** croko.co tiene 1 de 12 páginas indexadas (post-migración desde maquillajeembarazadas.com). Dominio con baja autoridad. Ver `INDEXATION-STATUS.md`.
5. **n8n existente:** ya corriendo para otros workflows (Formspree replacement) — reutilizable para offline conversion import.

---

## 3. Tracking híbrido — 5 capas (RESUELVE EL GAP)

Tu problema: usuarios no siempre vuelven a `/gracias`, muchos cierran por WhatsApp. Solución: **5 capas independientes, cada una captura un tipo de comprador**.

### Capa 1 — Hard Conversion (web return flow)

- **Evento:** `purchase`, valor = 190.000 COP
- **Dónde:** `www.croko.co/gracias`
- **Cómo:** Reusar el script de `wompi-tracking-technical-guide.md`, cambiar dominio de `maquillajeembarazadas.com` → `croko.co`, actualizar Wompi redirect
- **Cubre:** ~40-50% de compradores (los que regresan del checkout)

### Capa 2 — Click-to-Wompi (begin_checkout) [CRÍTICO]

- **Evento:** `begin_checkout`, valor estimado = 28.500 COP (190k × 15% est. checkout→purchase rate)
- **Dónde:** cada clic al botón "Comprar" en desktop, mobile, sticky CTA, header
- **Cómo:** disparar `gtag('event','begin_checkout',{value:28500,currency:'COP',items:[...]})` antes de abrir Wompi
- **Cubre:** **100% de intención de compra real** — señal principal de optimización en meses 1-2

### Capa 3 — WhatsApp Click (generate_lead)

- **Evento:** `generate_lead`, valor estimado = 47.500 COP (190k × 25% est. WA→purchase rate)
- **Dónde:** cada clic a `wa.me/...` en la página
- **Cómo:** gtag en onClick del botón WhatsApp
- **Cubre:** los que cierran por chat

### Capa 4 — GCLID Capture + Offline Conversion Import (ventas por WhatsApp)

**Esto cierra el círculo para ventas cerradas por WhatsApp.**

```
Paso 1 [frontend]: en croko.co landing, capturar ?gclid= → localStorage (90 días)
Paso 2 [frontend]: al abrir WhatsApp, inyectar al mensaje:
        "Hola! Quiero el Kit Pinta Barriguitas. Ref: GCLID_xxxxxx"
Paso 3 [n8n]: cuando se confirma venta manualmente en Frappe CRM,
        extraer gclid del mensaje o de Wompi reference
Paso 4 [n8n]: POST a Google Ads API → Offline Conversion Import
        https://developers.google.com/google-ads/api/docs/conversions/upload-clicks
Paso 5: conversión atribuida al anuncio original, Google aprende
```

**Ventaja:** n8n ya está corriendo en tu infraestructura — este workflow encaja.

### Capa 5 — Enhanced Conversions for Leads

- Activar en Google Ads → enviar email/teléfono hasheado desde Wompi return o desde el form de WhatsApp
- Mejora atribución +5–15% en promedio

### Conversion setup en Google Ads

| Conversion | Count | Category | Primary? | Value |
|---|---|---|---|---|
| `purchase` (web) | One | Purchase | ✅ Yes | 190.000 |
| `purchase_offline` (Wompi+WA via n8n) | One | Purchase | ✅ Yes | 190.000 (real) |
| `begin_checkout` | One | Begin Checkout | ❌ Secondary | 28.500 |
| `generate_lead` (WA click) | Every | Contact | ❌ Secondary | 47.500 |

> **Regla crítica:** Solo las 2 de `purchase` cuentan como "Primary" (Google Ads optimiza contra ellas). Las otras 2 son "Observed/Secondary" — señales para ti, no para el algoritmo. Esto evita que Google infla bids por clics baratos a WhatsApp.

---

## 4. Campaign Architecture v2 (ajustada a $300k/mes)

### Campaña única: "Kit Pinta Barriguitas - CO - Search"

**Objetivo:** Clientes potenciales (Leads) — objetivo cosmético; lo que manda es la conversión primaria + estrategia de puja
**Tipo:** Search
**Bidding:** **Maximizar clics con CPC máx $2.000 COP** (NO Manual CPC, NO Smart Bidding) → migrar a Maximizar conversiones cuando alcances 15+ conv/mes
**Daily budget:** $10.000 COP
**Geo:** Medellín + Cali + Bogotá, **radio 25 km** (usar "Búsqueda avanzada → Radio", NO "ciudad" polygon — captura metro: Envigado, Itagüí, Soacha, Chía, Palmira)
**Opciones de ubicación:** "Personas presentes o habitualmente" (NO "interesadas en")
**Idioma:** Español (NO añadir inglés aunque Google lo sugiera)
**Redes:** ❌ **Search Partners OFF** · ❌ **Display OFF** (CRÍTICO — Display consume 40–60% del budget en banners no planeados)
**AI Max:** ❌ OFF (Personalización de texto OFF, Expansión de URL final OFF)
**Device bid adjustments:** Mobile +20%, Desktop -20%
**Schedule:** Lun-Dom 06:00-23:00, pausar 23:00-06:00
**Attribution:** Data-driven, 30-day click / 1-day view

### Ad Group 1A — Product Direct (intent genérico, no-brand)

Keywords (exact + phrase match, NO broad):

```
[kit pintura barriga embarazada]
"pintar barriga embarazada"
"pintura para barriga de embarazada"
[belly painting colombia]
"belly painting kit"
"kit belly painting"
"maquillaje prenatal"
"pintura hipoalergenica embarazada"
"belly art embarazo"
```

**Max CPC:** $2.000 COP

### Ad Group 1B — Brand (nuevo — v2.1)

Razón: "Kit Pinta Barriguitas" aparece en SERP pero el resultado orgánico está dominado por TikTok/Instagram (sin ruta directa a Obtener Kit) y por Shopping carousel con competidores. Necesitamos defender el término marca-categoría con un anuncio que dirija al modal de compra.

Keywords (exact + phrase, cubre variantes de espaciado):

```
[kit pinta barriguitas]
[kit pintabarriguitas]
[kit pinta-barriguitas]
[pinta barriguitas]
[pintabarriguitas]
[pinta barriguitas croko]
[kit croko]
[croko pinta barriguitas]
"kit pinta barriguitas"
"pinta barriguitas"
```

**Max CPC:** $800–1.200 COP (brand debe ser barato por QS 9–10 — si no, algo está mal)
**Expected:** ~20–50 impresiones/día, CTR 15–30%, conv rate 5–10× el del Product Direct
**Monitoreo:** Search Terms Report semanal — añadir negatives si aparece `gratis`, `diy`, `pdf`, `tutorial`

### Ad Group 1D — Gift Intent (nuevo — v2.1, lanzar Día 1 por ventana Día de la Madre)

Razón: Día de la Madre Colombia 2026 es el **10 de mayo** — 18 días desde la creación de esta campaña. Gift-intent searches ("¿qué regalar a una embarazada?", "regalo baby shower") peakean Abr 20 – May 10. Esperar 48–72h de launch deja a Google todavía aprendiendo durante el pico. Decisión: lanzar Día 1 con guardrails estrictos, no en Phase 2 como indicaba v2.0.

**Keywords (phrase + exact únicamente, NO broad):**

```
"que regalar a una embarazada"
[que regalar a una embarazada]
"regalo para embarazada"
"regalos para embarazadas"
"regalo original embarazada"
"que regalar en un baby shower"
[que regalar en un baby shower]
"regalo baby shower"
"regalo baby shower original"
"regalo baby shower diferente"
"regalos para baby shower"
"regalo futura mama"
```

**Max CPC:** $1.500 COP (cap más apretado que Product Direct porque gift intent es menos cualificado)

**Landing URL con UTM:** `https://www.croko.co/?utm_source=google&utm_medium=cpc&utm_campaign=kit-co-search&utm_content=gift-intent`

**Negatives específicos (añadir Día 1, además de la shared negative list):**

```
gratis, barato, diy, casero, economico, manualidad, tutorial,
ropa, pañales, biberon, cuna, coche, juguete, chupete, body,
digital, pdf, plantilla gratis, descargar,
hombre, papa, papá, padre, cumpleaños, aniversario, boda,
primer, segundo, tercero
```

**Monitoreo agresivo Semana 1:**
- Search Terms Report cada 24h, pausar queries no-kit inmediatamente
- Check diario de spend-share vs conversion-share

**Kill criteria Día 7:**
- CPA > 2× CPA de Product Direct → pausar keywords peores (no el grupo entero)
- CTR < 3% → reescribir RSA
- CPC promedio > $2.000 → bajar bid a $1.200
- Spend > 40% del campaign con < 10% de las conversiones → pausar grupo entero

### Ad Group 1C — Baby Shower Activity (diferido a Phase 2, Agosto pre-Amor y Amistad)

```
"actividades baby shower originales"
"juegos para baby shower"
"ideas baby shower diferentes"
"que hacer en un baby shower"
```

### Ad Groups que NO corren en Fase 1

- ❌ **Baby Shower Activity** — planning intent, no purchase intent; peakea para Amor y Amistad en septiembre, no para Día de la Madre
- ❌ **Performance Max** — indexación débil + budget insuficiente
- ❌ **Demand Gen** — requiere volumen y autoridad de dominio
- ❌ **Dynamic Search Ads** — requiere páginas indexadas

> **Cambio v2.1:** Gift Intent **sí** corre en Fase 1 (ver Ad Group 1D) por la ventana Día de la Madre. Decisión revertida respecto a v2.0 por timing.

### Negative keywords globales (crear shared list)

```
gratis, descargar, pdf, tutorial gratis, diy, casero, casera, hazlo tu mismo,
niños, infantil, fiesta infantil, cumpleaños, disfraz, halloween,
tatuaje, henna, mandala tatuaje, oleo, acrilico, lienzo,
trabajo, empleo, curso, instituto, academia, profesional
```

---

## 5. Ad Copy — RSA (Spanish, Colombia)

### Headlines (máx 30 chars c/u)

**Evergreen (15 rotativos):**

1. Kit Pinta Barriguitas Oficial
2. Pintura Segura Embarazadas
3. Hipoalergénica y Dermatológica
4. +500 Familias Felices ⭐4.8
5. Envío Gratis a Toda Colombia
6. Ideal para Baby Shower
7. 15 Colores + 4 Pinceles
8. 3 Plantillas Fáciles de Usar
9. Regalo que Ella Recordará
10. Videotutoriales Incluidos
11. Kit Completo $190.000
12. Momento Único en Familia
13. Pancita de Arte en Minutos
14. Sin Experiencia Artística
15. Listo para Enviar Hoy

**Pinned position 1 (rotación de 4):**

- Kit Pinta Barriguitas Oficial
- Pintura Segura Embarazadas
- Envío Gratis a Colombia
- Regalo Baby Shower Único

**Headlines estacionales Día de la Madre (cargar Abr 20 – May 10):**

- Regalo Único Día de la Madre
- Para la Mamá que Espera
- Experiencia que Recordará
- Envío Antes del 10 de Mayo
- El Regalo Más Tierno

### Descriptions (máx 90 chars)

**Evergreen (4):**

1. Kit completo con 15 pinturas hipoalergénicas, plantillas y pinceles. Envío gratis.
2. Crea un recuerdo inolvidable de tu embarazo. Dermatológicamente probado. 4.8★.
3. El regalo de baby shower que realmente recordará. +500 familias felices en Colombia.
4. Todo incluido: pinturas seguras, plantillas, pinceles y video tutorial paso a paso.

**Estacional Día de la Madre:**

- "Este Día de la Madre regálale un recuerdo inolvidable: Kit Pinta Barriguitas, envío gratis."
- "Una experiencia en familia para la mamá embarazada. Entrega garantizada antes del 10 de mayo."

### URLs

- **Final URL:** `https://www.croko.co/` (kit moved to root — v2.1)
- **Display path:** `/kit/pinta-barriguitas`

---

## 6. Assets / Extensions

- **Sitelinks (4):** `Qué incluye el kit` · `Opiniones reales` · `Video tutoriales` · `Preguntas frecuentes` (apuntar a anchors)
- **Callouts:** `Envío gratis` · `Hipoalergénico` · `4.8★ (200 reseñas)` · `30 días garantía` · `Pago seguro Wompi` · `+500 familias`
- **Structured snippets** (Tipo: "Featured"): `15 colores`, `4 pinceles`, `3 plantillas`, `Videotutorial`, `Plantilla con nombre`
- **Price extension:** Kit Pinta Barriguitas — $190.000 COP — "Kit completo con envío gratis"
- **Promotion extension** (estacional): Día de la Madre / Amor y Amistad / Black Friday / Navidad
- **Call extension:** WhatsApp del negocio
- **Image assets:** 5+ fotos reales del kit y de barrigas pintadas
- **Logo + business name** (obligatorio desde 2023)

---

## 7. Estacionalidad Colombia (research DANE + calendario e-commerce)

### Datos clave

- **Pico nacimientos:** Marzo (#1) y Septiembre (#2) — DANE 2023-2024
- **Valle nacimientos:** Junio (mes más bajo serie 2019-2024)
- **Baby showers ocurren ~4-6 semanas antes del parto**
- **Día de la Madre Colombia 2026:** Domingo 10 de mayo (31 de mayo en Cúcuta)
- **Amor y Amistad Colombia 2026:** Sábado 19 de septiembre (3er sábado) — pico e-commerce #1 en Colombia (32.9% de activación)
- **Black Friday 2026:** Nov 27
- **Navidad:** Dec

### Matriz de estacionalidad

| Mes | Demanda | Driver | Acción presupuesto |
|---|---|---|---|
| **Ene** | Media | Embarazos enero → shower marzo | Baseline |
| **Feb** | **ALTA** | Baby showers pre-marzo | **+30%** |
| **Mar** | Media | Post-parto mayoría | Baseline |
| **Abr 20 – May 10** | **ALTA** | **Día de la Madre** (ángulo regalo) | **+80%** |
| **May 11-31** | Baja | Post-Mother's Day | **-30%** |
| **Jun** | **MUY BAJA** | Valle de nacimientos | **-50%** |
| **Jul** | Media | Preparación agosto | Baseline |
| **Ago** | **ALTA** | Baby showers pre-septiembre | **+30%** |
| **Sep 1-19** | **MÁXIMA** | **Amor y Amistad** + showers septiembre | **+80%** |
| **Sep 20-30** | Media | Post evento | Baseline |
| **Oct** | Media | — | Baseline |
| **Nov** | **ALTA** | **Black Friday** + anticipación Navidad | **+60%** |
| **Dic** | **ALTA** | **Navidad** (ángulo regalo diferente) | **+50%** |

### Cómo aplicar con budget fijo de $300k/mes

No puedes "subir" — tienes que **reasignar**:

- **Ahorrar** en Mayo (2da mitad) y Junio → 150k esos meses
- **Gastar** en Ago-Sep y Nov-Dic → 450k esos meses
- **Promedio anual** sigue siendo ~300k/mes

**Acción inmediata (Abril 2026):** lanzar antes del 20 de abril con foco Día de la Madre. Es tu mejor ventana de validación a corto plazo.

---

## 8. Impacto de la indexación (GSC) en Google Ads

**Contexto:** croko.co tiene 1 de 12 páginas indexadas post-migración. Ver `INDEXATION-STATUS.md`.

### Buenas noticias

- **Google Ads NO requiere que las páginas estén indexadas.** Los anuncios corren igual.
- Quality Score evalúa: relevancia keyword, CTR esperado, experiencia de landing page (velocidad, mobile, content match). **No evalúa index status.**
- Ads traffic puede ayudar **indirectamente** a la indexación (brand searches, dwell time, engagement).

### Lo que SÍ se afecta

1. **PMax y Demand Gen** cruzan señales con organic signals → funcionan peor en dominios de baja autoridad. **Por eso no los incluimos.**
2. **Dynamic Search Ads** requieren páginas indexadas → no usar.
3. **Brand recognition:** Google puede no reconocer "Croko" como marca aún → sin protección de trademark.

### Acciones complementarias (fuera de scope Ads)

Desde `INDEXATION-STATUS.md` → lista de backlinks pendientes:

1. Actualizar URL en Google Business Profile a `www.croko.co`
2. Bios Instagram/TikTok → `croko.co`
3. **Wompi checkout return_url** → confirmar que apunta a `croko.co`
4. Directorios colombianos: Páginas Amarillas, Civico, Cylex
5. Re-indexing de páginas stale (`/blog` y `/blog/salud-mental-embarazo-croko-tranquilamente`)

> **TL;DR:** El problema de indexación no bloquea Google Ads, pero sí refuerza usar **solo Search** (no PMax) hasta recuperar autoridad.

---

## 9. Landing page blockers (arreglar ANTES de lanzar)

Del audit SEO (`docs/seo/audit-kit-pinta-barriguitas-2026-03-31.md`) y `kit-pinta-barriguitas-header-improvements.md`:

1. 🔴 **CRITICAL: Fix CTA desktop roto** (`headerDesktop.js:78`) — hoy linkea a sí misma en desktop. Sin arreglar, quemas 50% del budget de desktop en clics sin salida.
2. 🔴 **CRITICAL: Alt text de imágenes** — todas usan `alt="Producto"` o `alt="Thumbnail N"`. Rompe image asset quality en Google Ads.
3. 🟡 **H1 sin keyword** — cambiar a "Kit Pinta Barriguitas para Embarazadas"
4. 🟡 **Sticky CTA** — validar que trackee `begin_checkout`
5. 🟡 **4.8★ 200 reseñas** above-the-fold — boost CTR + trust

**Quality Score estimate sin fixes: 4-5/10. Con fixes: 7-8/10 → −25% CPC.**

---

## 10. Budget tiers (referencia)

| Nivel | COP/mes | COP/día | USD | Qué logras |
|---|---|---|---|---|
| 🟥 **Actual** | $300.000 | $10k | ~$75 | Funciona, pero learning lento (30-45 días), Manual CPC forzado, 1 ad group, difícil probar unit economics |
| 🟧 **Mínimo viable** | $450.000 | $15k | ~$112 | Floor técnico: ~10 clics/día, 10-15 compras duras/mes con micro-conv, validar CPA en 21 días |
| 🟨 **Sweet spot** | $750.000 – $900.000 | $25-30k | ~$190-225 | Alcanza 15 conv/mes → Smart Bidding viable. 2 ad groups activos. |
| 🟩 **Cómodo** | $1.200.000 – $1.500.000 | $40-50k | ~$300-375 | Real optimization, A/B testing, múltiples ángulos, seasonal spikes |

### Math del piso ($450k)

- CPC promedio estimado Colombia (pregnancy/baby shower): $1.200-1.800 COP
- Mínimo 10 clics/día para señal estadística
- 10 × $1.500 = $15.000/día = **$450.000/mes**

### Math del sweet spot ($800k)

- Smart Bidding necesita 15 conv/mes (tCPA) o 30 (tROAS)
- Con tracking multi-capa: hard purchase ~5-8 + begin_checkout ~15-25 + WA lead ~10-20 = **30-50 señales/mes**
- Solo alcanzable con ~$800k/mes

### Roadmap de escalamiento realista

1. **Abr 22 – May 10 (ventana Día de la Madre, v2.1):** $18.000 COP/día = ~$340k para la ventana. Front-load del budget mensual para capturar gift-intent peak.
2. **May 11–31:** bajar a $5.000 COP/día = ~$100k para rebalancear (pos-Día de la Madre es bajo intent hasta junio).
3. **Junio:** $300k/mes como baseline (-50% del año por valle de nacimientos DANE).
4. **Julio-Agosto:** decidir con [scorecard día 21](./google-ads-day21-scorecard.md) (ejecutar ~May 13):
   - Si CPA < $60k → subir a $750k/mes
   - Si CPA $60-100k → mantener $450k mientras optimizas
   - Si CPA > $100k → mantener $300k y atacar landing/creative antes que budget
5. **Agosto-Sep:** independiente del CPA, topear $900k ese mes y el siguiente para el pico Amor y Amistad. Reactivar Ad Group 1C Baby Shower Activity.

---

## 11. Launch checklist

### Bloque A — Tracking (día 1-3, NO lanzar sin esto)

- [ ] Crear página `www.croko.co/gracias` con scripts de `wompi-tracking-technical-guide.md` (cambiar dominio)
- [ ] Actualizar Wompi `return_url` → `croko.co/gracias?id={reference}&amount={amount_in_cents}`
- [ ] Agregar `gtag('event','begin_checkout')` a TODOS los botones "Comprar" (desktop, mobile, sticky)
- [ ] Agregar `gtag('event','generate_lead')` a clics WhatsApp
- [ ] Capturar GCLID en localStorage en landing
- [ ] n8n workflow: offline conversion import desde Frappe CRM → Google Ads API
- [ ] Configurar 4 conversiones en Google Ads con primary/secondary correcto
- [ ] Activar Enhanced Conversions for Leads

### Bloque B — Landing page blockers (día 1-3)

- [ ] Fix CTA desktop roto (`headerDesktop.js:78`)
- [ ] Corregir alt text de imágenes (todas)
- [ ] Cambiar H1 a keyword-rich

### Bloque C — Google Ads (día 3-4)

- [ ] Crear campaña Search "Kit Pinta Barriguitas - CO - Search"
- [ ] Objetivo: **Clientes potenciales (Leads)**
- [ ] Conversión primaria inicial: **Click Whatsapp Conversion KIT** (única Primary viva hoy)
- [ ] Geo: Medellín, Cali, Bogotá **radio 25 km** (Búsqueda avanzada → Radio, NO "ciudad")
- [ ] Opciones de ubicación: "Personas presentes o habitualmente"
- [ ] Idioma: Español únicamente (rechazar sugerencia de añadir inglés)
- [ ] ❌ Search Partners OFF
- [ ] ❌ Display OFF
- [ ] ❌ AI Max OFF (toggle, Personalización de texto, Expansión URL — todos OFF)
- [ ] UE anuncios políticos: No
- [ ] Schedule: Lun-Dom 06:00-23:00
- [ ] Segmentos de audiencia (modo **Observación**, NO Segmentación):
  - ☑ En el mercado → Productos para bebés y niños
  - ☑ En el mercado → Regalos y ocasiones especiales
- [ ] Saltar generador AI de keywords ("Saltar" en pantalla Generación de palabras clave y recursos)
- [ ] Ad Group 1A "Product Direct" con keywords no-brand (max CPC $2.000)
- [ ] Ad Group 1B "Brand" con keywords de marca-categoría (max CPC $1.200)
- [ ] Ad Group 1D "Gift Intent" con keywords de regalo (max CPC $1.500) — con UTM `utm_content=gift-intent`
- [ ] 1 RSA por ad group (3 RSAs totales):
  - 1A: Product Direct RSA (15 headlines evergreen + 4 descriptions + estacional Día de la Madre)
  - 1B: Brand RSA (headlines que confirmen marca + precio + USP)
  - 1D: Gift Intent RSA (headlines angulados a regalo; pinear "Regalo Baby Shower Único" en pos 1)
- [ ] Todos los extensions: sitelinks, callouts, structured snippets, call, image, logo
- [ ] Negative keyword shared list (global)
- [ ] Negatives específicos de 1D Gift Intent (gratis, diy, ropa, pañales, hombre, papa, etc.)
- [ ] Bidding: **Maximizar clics** con CPC máx por ad group
- [ ] **Daily budget: $18.000 COP durante ventana Día de la Madre (Abr 22 – May 10)** → bajar a $10.000 COP el 11 de mayo, $5.000 COP May 11–31 para rebalancear el mes
- [ ] Attribution: Data-driven, 30-day click / 1-day view

### Notas de la creación de campaña (walkthrough 2026-04-22)

**Audiencias que NO están disponibles y por qué:**
- ❌ **Eventos vitales → Próximamente padres** — Life Events solo están disponibles en YouTube/Gmail/Display, NO en Search
- ❌ **Ingresos del hogar** — Google Ads no ofrece brackets de ingresos en Colombia (solo US/UK/AU/JP/NZ/IN y pocos más). Workaround: mostrar precio $190.000 en ad copy como filtro natural + expandir después con Estado de propiedad de vivienda / Educación si hace falta
- ❌ **Targeting por barrio (Estrato 5-6)** — Google Ads no puede targetear por estrato socioeconómico; el mecanismo correcto es bid adjustments por segmento de observación después de 14 días de datos

**Objetivo Leads vs Sales:** decisión de usar Leads porque la única conversión primaria viva es WhatsApp lead. Cuando Phase 3 (n8n offline import) esté online, marcar `purchase` como primaria y re-evaluar el objetivo (aunque el label es cosmético mientras se use Maximizar clics).

### Bloque D — Monitoreo (semanas 1-3)

- [ ] Día 1-3: Search Terms Report cada 24h, negatives agresivo
- [ ] Día 7: si <5 clics/día → subir CPC max a $2.500. Si >30 clics sin conv → pausar keywords peores
- [ ] Día 14: primera revisión CPA, ajustar bids por ad group
- [ ] **Día 21: ejecutar [scorecard](./google-ads-day21-scorecard.md) y decidir subir/mantener/pausar**

---

## 12. Qué NO hacer (con este budget)

- ❌ **No** usar Smart Bidding mes 1 (sin volumen)
- ❌ **No** activar Performance Max (indexación débil + budget insuficiente)
- ❌ **No** hacer Broad Match en nada
- ❌ **No** usar Dynamic Search Ads (requiere páginas indexadas)
- ❌ **No** pagar por "regalo baby shower" en mes 1 (CPC alto)
- ❌ **No** activar desktop con mismo bid que mobile hasta arreglar el CTA desktop roto
- ❌ **No** subir budget antes del día 21 sin datos del scorecard

---

## 13. Referencias cruzadas

- **Scorecard de decisión día 21:** [google-ads-day21-scorecard.md](./google-ads-day21-scorecard.md)
- **Audit SEO del kit:** `docs/seo/audit-kit-pinta-barriguitas-2026-03-31.md`
- **Estado de indexación:** `INDEXATION-STATUS.md`
- **Plan de monitoreo migración:** `URL_MIGRATION_MONITORING_PLAN.md`
- **Wompi tracking technical guide:** `wompi-tracking-technical-guide.md`
- **Header improvements (CTA fix):** `kit-pinta-barriguitas-header-improvements.md`
- **Wompi configuration:** `WOMPI_CONFIGURATION.md`
- **User purchase journey:** `docs/USER_PURCHASE_JOURNEY.md`

### Fuentes externas

- [DANE - Nacimientos 2023 Colombia](https://www.dane.gov.co/index.php/estadisticas-por-tema/salud/nacimientos-y-defunciones/nacimientos/nacimientos-2023)
- [Día de la Madre 2026 Colombia](https://www.calendariodecolombia.com/fechas/dia-de-la-madre-2026-en-colombia)
- [Calendario campañas comerciales Colombia 2026](https://marketing4ecommerce.co/calendario-de-campanas-comerciales-en-colombia/)
- [Calendario e-commerce 2026 fechas clave - Nubimetrics](https://academia.nubimetrics.com/fechas-importantes-ecommerce)
- [Google Ads Offline Conversions API](https://developers.google.com/google-ads/api/docs/conversions/upload-clicks)

---

## 13. Plan de monitoreo post-launch (Apr 22 – May 25)

Launch date: **2026-04-22**. Día de la Madre CO: **2026-05-10** (+18 días).

### Cadencia de revisión

| Frecuencia | Qué revisar | Tiempo estimado |
|---|---|---|
| **Diaria (primeros 7 días)** | Gasto vs budget, clicks, impresiones, CTR, anuncios rechazados, palabras clave "Baja calidad" | 5 min |
| **Cada 2 días (día 8–18)** | Search Terms Report, negativos nuevos, CPC promedio, conversiones GA4 | 15 min |
| **Semanal** | Performance por ad group, ajuste de keywords, experimentos de copy | 30 min |
| **Post-Día de la Madre (May 11+)** | Audit completo, decisión de pausar/reducir Gift Intent | 45 min |

### Checkpoints específicos con fechas absolutas

**2026-04-23 (día 1 – mañana siguiente):**
- [ ] Verificar que los 3 ad groups están **Habilitados** (no "Limited by policy")
- [ ] Confirmar que el CPC cap campaign-level quedó en $2.000
- [ ] Revisar anuncios rechazados en Ads → Estado de la política
- [ ] Google Ads dashboard: ¿hay impresiones? Si hay 0 después de 24h = problema de approval/budget

**2026-04-24 (día 2):**
- [ ] **Primer Search Terms Report** — Palabras clave → Términos de búsqueda
- [ ] Añadir como negativos cualquier término obvio de desperdicio (regalo mamá cumpleaños, pintura para pared, etc.)
- [ ] Verificar que "Kit Pinta Barriguitas" aparece en el STR del ad group Brand

**2026-04-25 (día 3):**
- [ ] Revisar CTR por ad group:
  - Product Direct: objetivo ≥ 3%
  - Brand: objetivo ≥ 8%
  - Gift Intent: objetivo ≥ 4%
- [ ] Si un ad group está < 50% del objetivo → revisar copy del RSA

**2026-04-29 (día 7):**
- [ ] **Revisión de 7 días** — primera decisión de kill-criteria para Gift Intent:
  - Si CTR < 4% O CPA > $30k CON ≥ 50 clicks → pausar ad group
- [ ] Search Terms Report completo → limpiar negativos
- [ ] ¿GA4 Key Events marcados? Si sí → importar a Google Ads como conversión secundaria

**2026-05-01 (día 9):**
- [ ] Review mid-campaign: gasto acumulado vs. plan ($21k × 9 = $189k COP esperado)
- [ ] Si gasto < 70% del plan → subir budget a $25k/día hasta May 10
- [ ] Si gasto > 130% → bajar CPC cap a $1.700

**2026-05-07 (día 15 – 3 días antes de Día de la Madre):**
- [ ] **Última ventana de optimización**: ya no añadir keywords nuevas
- [ ] Asegurar que hay stock de kits para envío rápido
- [ ] Verificar que el banner estacional de croko.co está activo

**2026-05-10 (Día de la Madre):**
- [ ] Monitorear durante el día: clicks, conversiones, WhatsApp leads
- [ ] No tocar la campaña (deja correr)

**2026-05-11 (día siguiente – decisión post-peak):**
- [ ] **Pausar ad group Gift Intent** (ya no es temporada)
- [ ] Bajar budget campaign de $21k → $10k/día
- [ ] O pausar toda la campaña si el ROI no justifica y volver a activar con budget pequeño

**2026-05-13 (día 21 – retrospectiva completa):**
- [ ] Completar `docs/ads/google-ads-day21-scorecard.md`
- [ ] Decisiones: ¿qué ad groups continuar? ¿Smart Bidding switch? ¿Phase 2 Baby Shower Activity?

### Métricas objetivo mensual (primeros 30 días)

| Métrica | Objetivo | Alerta si |
|---|---|---|
| Clicks totales | 400–600 | < 200 |
| CTR promedio | ≥ 4% | < 2% |
| CPC promedio | $150–$300 | > $500 |
| WhatsApp leads | ≥ 20 | < 5 |
| Checkout started (GA4) | ≥ 10 | < 3 |
| Ventas atribuidas | ≥ 3 | 0 después de 14 días |

### Alertas automáticas a configurar en Google Ads

Herramientas → Reglas y alertas → Crear alerta:
- **Gasto diario > $25.000 COP** → email
- **Anuncios rechazados** → email inmediato
- **CTR de ad group < 1% (con ≥ 100 imps)** → email semanal
- **Palabra clave con Calidad baja** → email semanal

### Dashboards a mirar semanalmente

- Google Ads → Vista general (campaign level)
- GA4 → Adquisición → Google Ads → por `utm_content` (separa los 3 ad groups)
- Frappe CRM → leads con origen "google-cpc" en último período

### Señales de éxito para escalar (Phase 2)

Si al día 21 se cumplen **todas**:
- ≥ 3 ventas atribuidas a Google Ads
- CPA < $50.000 COP por venta
- ROAS ≥ 2.0x

→ Activar **Phase 2** (Amor y Amistad, Aug 2026) con budget 2x.

---

**Documento versión:** 2.2
**Creado:** 2026-04-10 (v2.0)
**Actualizado:** 2026-04-22 (v2.2 — añadida sección 13: plan de monitoreo con checkpoints fechados, métricas objetivo, alertas)
**Próxima revisión:** 2026-04-29 (día 7 post-launch)
