# Google Ads Day-21 Scorecard — Kit Pinta Barriguitas

**Propósito:** Decidir en el día 21 después del launch si **subir, mantener, optimizar o pausar** el presupuesto de Google Ads basado en datos reales, no en intuición.

**Contexto de referencia:** Plan v2 — Single Search campaign, $300.000 COP/mes inicial, geo Medellín/Cali/Bogotá, producto Kit Pinta Barriguitas ($190.000 COP AOV).

**Cuándo ejecutar:** Día 21 exacto después de lanzar la campaña
**Cuánto tarda:** 30–40 minutos
**Inputs requeridos:** Google Ads + GA4 + Frappe CRM (ventas WhatsApp con GCLID)

---

## Parte 1 — Recolectar métricas (10 min)

Abre Google Ads → Campaigns → selecciona rango **"Últimos 21 días"** y anota:

| Métrica | Dónde encontrarla | Tu valor |
|---|---|---|
| **Gasto total** | Cost column | $______ COP |
| **Clics totales** | Clicks column | ______ |
| **Impresiones** | Impressions column | ______ |
| **CPC promedio** | Avg. CPC | $______ COP |
| **CTR** | CTR column | ______% |
| **Impression Share** | Search impr. share | ______% |
| **Hard Purchases** | Conversions filtradas por `purchase` | ______ |
| **Begin Checkouts** | Conversions filtradas por `begin_checkout` | ______ |
| **WhatsApp Clicks** | Conversions filtradas por `generate_lead` | ______ |
| **Ventas WhatsApp reales** | Frappe CRM → Orders con source=ads + GCLID | ______ |

**Calcular manualmente:**

- **Total compras atribuidas** = Hard Purchases + Ventas WhatsApp con GCLID = ______
- **CPA real** = Gasto / Total compras = $______ COP
- **CVR real** = Total compras / Clics = ______%
- **ROAS** = (Total compras × $190.000) / Gasto = ______x

---

## Parte 2 — Scorecard (15 min)

Marca cada fila con ✅ (pasa), ⚠️ (warning) o ❌ (falla):

### A. Salud del tráfico (cantidad y calidad)

| # | Criterio | ✅ Verde | ⚠️ Amarillo | ❌ Rojo | Tu resultado |
|---|---|---|---|---|---|
| A1 | **Clics/día promedio** | ≥7 | 4-6 | <4 | |
| A2 | **CPC promedio** | <$1.500 | $1.500-2.500 | >$2.500 | |
| A3 | **CTR** | >4% | 2-4% | <2% | |
| A4 | **Impression Share** | >40% | 20-40% | <20% | |
| A5 | **% clics mobile** | >60% | 40-60% | <40% | |

> **Cómo leer:** A1-A2 te dicen si el budget compra suficiente tráfico. A3-A4 miden calidad de ads/keywords. A5 confirma que el audience real es mobile (si no, revisar CTA desktop).

### B. Conversión (qué pasa después del clic)

| # | Criterio | ✅ Verde | ⚠️ Amarillo | ❌ Rojo | Tu resultado |
|---|---|---|---|---|---|
| B1 | **CVR total** (compras/clics) | ≥2.5% | 1-2.5% | <1% | |
| B2 | **Begin checkout rate** (begin_checkout/clics) | ≥8% | 4-8% | <4% | |
| B3 | **Checkout → Purchase rate** (purchase/begin_checkout) | ≥20% | 10-20% | <10% | |
| B4 | **WhatsApp close rate** (ventas WA/WA clicks) | ≥25% | 10-25% | <10% | |
| B5 | **Tracking coverage** (¿GCLID llegó en el 80%+ de ventas?) | ≥80% | 50-80% | <50% | |

> **Cómo leer:** Si B1 es verde pero B3 rojo → el problema es Wompi checkout (abandono). Si B2 verde + B3 rojo → gente hace clic pero no paga. Si B5 rojo → tu tracking está roto y todo lo demás es ruido.

### C. Unit economics (lo que importa para decidir)

| # | Criterio | ✅ Verde | ⚠️ Amarillo | ❌ Rojo | Tu resultado |
|---|---|---|---|---|---|
| C1 | **CPA real** vs target $57.000 | ≤$57k | $57k-$100k | >$100k | |
| C2 | **ROAS** | ≥3.3x | 2-3.3x | <2x | |
| C3 | **# hard purchases en 21 días** | ≥6 | 3-5 | <3 | |
| C4 | **# total señales (hard + begin_checkout + WA)** | ≥20 | 10-20 | <10 | |
| C5 | **Ingreso neto** (ventas × 190k − gasto Ads − costo producto) | positivo | breakeven | negativo | |

> **Cómo leer:** C1+C2 son las métricas críticas de decisión. C3 te dice si Google Ads tiene suficiente señal para optimizar. C4 te dice si puedes pasar a Smart Bidding. C5 es el sanity check final.

---

## Parte 3 — Árbol de decisión (5 min)

**Cuenta tus resultados en la sección C (Unit economics):**

### 🟢 Escenario A — "Subir budget"

**Condición:** C1 y C2 en verde, C3 ≥ 5

**Decisión:** **Subir a $750.000 COP/mes inmediato**

**Por qué:** estás por debajo de CPA target y hay volumen suficiente — cada peso adicional trae una venta rentable. Oportunidad real.

**Acciones:**
- Subir daily budget de $10k → $25k COP
- Mantener Manual CPC **2 semanas más** mientras estabiliza
- Al llegar a 15 hard purchases acumuladas → cambiar a Max Conversions
- Activar ad group B (Baby Shower Activity)
- Revisar search terms report 2x/semana

### 🟡 Escenario B — "Mantener y optimizar"

**Condición:** C1 o C2 en amarillo, C3 ≥ 3

**Decisión:** **Mantener $300.000/mes 3 semanas más, optimizar sin subir**

**Por qué:** las unit economics están tibias — subir budget sin arreglar el problema solo escala pérdidas.

**Acciones:**
- Pausar keywords con >30 clics y 0 conversiones
- Revisar los 3 ads con peor CTR y reescribirlos
- Si B3 es amarillo/rojo → testear nueva landing variant con trust signals above-the-fold
- Agregar negative keywords agresivamente (del search terms report)
- Reevaluar al día 42

### 🟠 Escenario C — "Diagnóstico profundo"

**Condición:** C1 rojo pero B1 verde (CPA malo pero CVR bueno)

**Decisión:** **Problema de CPC, no de conversión — optimizar bids**

**Por qué:** estás pagando demasiado por cada clic, pero cuando llegan convierten bien.

**Acciones:**
- Bajar max CPC de $2.000 → $1.500 en todos los keywords
- Revisar Quality Score por keyword (Columns → Quality Score)
- Keywords con QS <5 → reescribir ads o pausar
- Pausar match types phrase, dejar solo exact match
- Reducir geo a solo **una** ciudad (la que tenga mejor CPA) por 2 semanas

### 🔴 Escenario D — "Bajar/Pausar"

**Condición:** C1 rojo, C2 rojo, C5 rojo, o C4 <10

**Decisión:** **Pausar campaña, no bajar budget**

**Por qué:** bajar budget no arregla economics rotas — solo las haces más lentas. Mejor parar y arreglar la causa raíz.

**Causas posibles a investigar (en orden):**

1. **Tracking roto** (B5 rojo) → el problema no es la campaña, es que no estás midiendo bien. Arreglar n8n + GCLID primero.
2. **Landing page problem** (B1 rojo a pesar de buen CTR) → el CTA desktop roto sigue sin arreglarse, o la página no convence. Arreglar landing antes de gastar otro peso.
3. **Keyword intent mismatch** → estás pagando por búsquedas informacionales. Revisar search terms report → agregar 20+ negatives.
4. **CPC irreal** (C1 rojo por A2 rojo) → el mercado es más caro de lo esperado. Considerar cambiar a estrategia orgánica + solo remarketing.
5. **Producto/precio** → si todo lo demás se ve bien pero no hay ventas, el problema está en la oferta, no en Ads. Pausar y reevaluar producto/precio/timing.

---

## Parte 4 — Plantilla de reporte (5 min)

Al terminar, copiar esta plantilla a `docs/ads/google-ads-day21-review-YYYY-MM-DD.md`:

```markdown
# Google Ads Day-21 Review — Kit Pinta Barriguitas
**Fecha:** YYYY-MM-DD
**Período:** [launch date] - [21 días después]

## Resumen ejecutivo
- **Gasto:** $______ COP
- **Ventas (hard + WA con GCLID):** ___
- **CPA real:** $______ COP (target: $57.000)
- **ROAS:** ___x (target: 3.3x)
- **Decisión:** [Subir / Mantener / Diagnóstico / Pausar]

## Sección A — Tráfico
[tabla con valores]
**Conclusión:** _______________

## Sección B — Conversión
[tabla con valores]
**Conclusión:** _______________

## Sección C — Unit Economics
[tabla con valores]
**Conclusión:** _______________

## Escenario detectado
[A / B / C / D + razón]

## Acciones a tomar esta semana
1. ___
2. ___
3. ___

## Próximo checkpoint
Día ___ (___/___/2026)
```

---

## Quick reference — Semáforo de 30 segundos

Si no tienes tiempo para el scorecard completo, con estos 3 números decides:

| Número | Verde | Amarillo | Rojo |
|---|---|---|---|
| **CPA 21 días** | ≤$57k | $57-100k | >$100k |
| **# ventas 21 días** | ≥6 | 3-5 | <3 |
| **ROAS** | ≥3.3x | 2-3.3x | <2x |

- **3 verdes** → Subir budget a $750k/mes
- **2 verdes + 1 amarillo** → Mantener, ajustar bids
- **Cualquier rojo** → Diagnóstico profundo antes de subir
- **2+ rojos** → Pausar y arreglar causa raíz

---

## Unit economics de referencia

| Concepto | Valor |
|---|---|
| AOV (precio Kit) | $190.000 COP |
| Target CAC (30% AOV) | $57.000 COP |
| Break-even ROAS | 3.3x |
| Target ROAS | 4.0x |
| Min conv/mes para Smart Bidding (tCPA) | 15 |
| Min conv/mes para Smart Bidding (tROAS) | 30 |

## Umbrales de presupuesto

| Nivel | COP/mes | Uso |
|---|---|---|
| Piloto actual | $300.000 | Validación inicial, Manual CPC forzado |
| Mínimo viable | $450.000 | Floor técnico, ~10 clics/día |
| Sweet spot | $750.000–$900.000 | Permite Smart Bidding (15+ conv/mes) |
| Escalable | $1.200.000–$1.500.000 | 2+ ad groups, A/B testing, seasonal spikes |

---

**Documento versión:** 1.0
**Creado:** 2026-04-10
**Próxima revisión:** después del primer uso (ajustar thresholds con data real)
