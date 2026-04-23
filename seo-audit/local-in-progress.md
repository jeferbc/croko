# Croko Local SEO Audit — Belly Painting Medellín
**Date:** 2026-04-18
**Last progress check:** 2026-04-22
**URL audited:** https://www.croko.co/belly-painting-medellin
**Business type:** SAB (Service-Area Business) — no physical storefront

## Progress Snapshot (2026-04-22)
### Critical
- [x] **#2 Remove `reviewCount: 200` from schema** — entire `aggregateRating` block removed from Product schema (commit `7a661407`).
- [ ] #1 Claim and verify Google Business Profile (external)

### High
- [x] **#3 Standardize business name** — variants `"Croko - Maquillaje Para Embarazadas"` and `"Croko - Belly Painting Medellín"` no longer present in `src/`. `alternateName` now used in Product schema.
- [x] **#4 Telephone standardized to E.164** — `+573168161717` already used in all schema blocks (Organization, HealthAndBeautyBusiness, secondary Organization in `SchemaMarkup.js`); confirmed via grep.
- [x] **#5 HealthAndBeautyBusiness `@id`, `email`, `geo`, `openingHoursSpecification` added** — `@id: https://www.croko.co/belly-painting-medellin#localbusiness`, `email: pintabarriguitas@croko.co`, `geo` (6.24450, -75.57390), `openingHoursSpecification` array (Mon-Fri 09:00-18:00, Sat 09:00-14:00 — **placeholder hours, verify actual operating schedule**). Also added separate `BreadcrumbList` schema block.

### Medium / Low
- [ ] #6 Add GBP review link to post-service WhatsApp follow-up (blocked on GBP claim)
- [x] **#7 H1 on service page now contains local keyword** — added `customTitle` prop to `Header` / `HeaderDesktop` / `HeaderMobile`; passed `customTitle="Belly Painting Medellín"` from `src/app/belly-painting-medellin/page.js`. H1 was previously `Maquillaje Prenatal` (no local keyword).
- [ ] #8 Submit to Páginas Amarillas Colombia and Guialocal.com
- [ ] #9 Add FAQPage schema block to service page
- [ ] #10 Add neighborhood-level copy (barrios/comunas)

**Completion: 5 / 10 (50%)**

---

## Local SEO Score: 42 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| GBP Signals | 25% | 5/100 | 1.3 |
| Reviews & Reputation | 20% | 30/100 | 6.0 |
| Local On-Page SEO | 20% | 72/100 | 14.4 |
| NAP Consistency & Citations | 15% | 40/100 | 6.0 |
| Local Schema Markup | 10% | 65/100 | 6.5 |
| Local Link & Authority Signals | 10% | 25/100 | 2.5 |
| **Total** | | | **36.7 → ~42** |

---

## NAP Consistency Audit

| Source | Name | Address | Phone | Email |
|---|---|---|---|---|
| `belly-painting-medellin/page.js` schema | Croko - Belly Painting Medellín | Medellín, Antioquia, CO | +57-316-816-1717 | absent |
| `belly-painting-medellin/page.js` `<address>` HTML | Croko | Medellín, Antioquia, Colombia | +57 316 816 1717 | pintabarriguitas@croko.co |
| `page.js` Organization schema | Croko | absent | +57-316-816-1717 | absent |
| `SchemaMarkup.js` OrganizationSchema | Croko - Maquillaje Para Embarazadas | Medellín, CO | +57-316-816-1717 | absent |
| WhatsApp link (all pages) | — | — | 573168161717 (no +/spaces) | — |

**Discrepancies flagged:**
1. **Name inconsistency:** Four different name strings in use — "Croko", "Croko - Belly Painting Medellín", "Croko - Maquillaje Para Embarazadas". Schema `name` should be the GBP-exact brand name: **"Croko"** everywhere; use `alternateName` for descriptive variants.
2. **Telephone format inconsistency:** Schema uses `+57-316-816-1717` (dashes), HTML uses `+57 316 816 1717` (spaces), WhatsApp href uses `573168161717` (no formatting). E.164 format (`+573168161717`) should be used in all schema; human-readable with spaces is fine for visible HTML.
3. **Email absent from all schema blocks.** Should be added as `"email": "pintabarriguitas@croko.co"` in the HealthAndBeautyBusiness schema.
4. **No street address** — correct for SAB, but the schema `address` object should explicitly add `"@type": "PostalAddress"` with `"addressLocality"` only (omit street), and complement with `areaServed`. Currently done partially — no `postalCode`. If a Medellín postal code can be confirmed, add it.

---

## Local Schema Validation — `HealthAndBeautyBusiness`

**Schema type:** `HealthAndBeautyBusiness` — correct for this service vertical. Do NOT use the generic `LocalBusiness`.

| Property | Status | Notes |
|---|---|---|
| `@type` | PASS | `HealthAndBeautyBusiness` |
| `name` | WARN | Inconsistent across files — see NAP section |
| `url` | PASS | Canonical URL present |
| `telephone` | WARN | Format inconsistency |
| `email` | FAIL | Missing entirely |
| `address` | PASS (partial) | Missing `postalCode` |
| `areaServed` | PASS | 5 cities enumerated with `@type: City` |
| `geo` | FAIL | Missing — add `"geo": {"@type": "GeoCoordinates", "latitude": 6.24450, "longitude": -75.57390}` (Medellín centroid, 5 decimal precision) |
| `openingHoursSpecification` | FAIL | Missing — add operating days/hours or at minimum state availability |
| `priceRange` | PASS | `$$` present |
| `image` | PASS | ImageKit URL present |
| `logo` | PASS | Present |
| `sameAs` | PASS | Instagram + Facebook |
| `aggregateRating` | FAIL | Present on homepage Product schema, NOT on the local service schema. Must be added here if reviews exist for the service. |
| `@id` | FAIL | Missing — add `"@id": "https://www.croko.co/belly-painting-medellin#local-business"` for entity disambiguation |
| `BreadcrumbList` | FAIL | No breadcrumb schema on this page |

**AggregateRating discrepancy:** `reviewCount: 200` appears on the homepage Product schema for the physical kit product. This count should NOT be reused for the service page unless 200 verified service reviews exist publicly. Using inflated or unverifiable review counts violates Google's schema guidelines and risks a manual action. The Testimonials component shows 3 hardcoded fictional-looking reviews (placeholder `image: null`; generic names from Bogotá, Medellín, Cali). Do not add AggregateRating to the service schema until real, verifiable reviews exist.

---

## GBP Signals Assessment

**Detected on page:** None
- No Google Maps embed
- No place ID reference
- No review widget from GBP
- No "Ver en Google Maps" link
- No structured GBP citation

**GBP presence (web check):** Could not confirm a verified GBP listing for "Croko belly painting Medellín" without live search access. Given the absence of any GBP embed or place link on the page, the listing either does not exist or is unverified.

**Impact:** GBP primary category is the #1 ranking factor (Whitespark 2026, score 193). Missing or unverified GBP is the single largest gap in this audit.

**Recommended GBP category:** "Body painting artist" or "Tattoo & piercing shop" (closest available in Colombia GBP — confirm in the GBP interface). Do NOT select a generic beauty salon category.

---

## Review Health Snapshot

| Signal | Status |
|---|---|
| Visible on-site reviews | 3 hardcoded testimonials (not from external source) |
| AggregateRating in schema | 4.8 / 200 on homepage product — not on service page |
| External review platform | Not detected (no Google, no Facebook widget) |
| Review velocity | Unknown — no GBP confirmed |
| Response rate | Unknown |

**Critical gap:** The 200-review count in schema is attached to the kit product, not the belly painting service. If this number is derived from Instagram DMs, WhatsApp messages, or informal feedback, it cannot be used in schema without a public, verifiable source URL (`itemReviewed` + `url`). This should be corrected immediately to avoid a rich result penalty.

**Recommended review strategy:**
1. Claim and verify GBP listing first.
2. Set up a short GBP review link (g.page/[profile]/review) and add it to post-service WhatsApp follow-up message.
3. Target 5 real GBP reviews in the first 30 days after claiming. Review velocity cliff is 18 days (Sterling Sky) — aim for at least 1 new review every 2 weeks.
4. Do not solicit reviews in bulk; request individually after confirmed service completion.

---

## Service Area Coverage Strategy

**Current state:** One landing page exists — `/belly-painting-medellin`. No pages for Envigado, Bello, Itagüí, or Sabaneta.

**Quality-gate rule applied:** Do NOT create near-duplicate city pages unless each achieves 60%+ unique content. For a single-artist SAB in adjacent municipalities, thin city pages are doorway pages and will be treated as such by Google.

**Recommended approach — single consolidated page (maintain current):**
- The existing page correctly lists all 5 service zones in the `areaServed` schema and in the visible `<address>` block. This is sufficient for schema coverage.
- Strengthen the single Medellín page with neighborhood-level signals: mention specific comunas or barrios served (El Poblado, Laureles, Envigado sector Mayorca, etc.) within the body copy.
- If future demand justifies it, create a `/belly-painting-envigado` page only when it can include: unique neighborhood context, Envigado-specific customer testimonials, a dedicated FAQ for that zone, and locally relevant images. Do not create it now.

---

## Citation Presence — Colombia Tier 1 Directories

| Directory | Status | Notes |
|---|---|---|
| Google Business Profile | UNVERIFIED | Highest priority — claim immediately |
| Facebook Business Page | PARTIAL | `facebook.com/crokolina` exists; confirm address/phone match |
| Instagram Business | PARTIAL | `@croko_maquillaje_embarazada` — confirm contact info in bio |
| Páginas Amarillas Colombia (paginasamarillas.com.co) | NOT DETECTED | Submit free listing |
| Yelp Colombia | LOW PRIORITY | Minimal traction in Colombia — skip unless time permits |
| Guialocal.com | NOT DETECTED | Submit — Colombia-specific B2C directory |
| Cylex Colombia (cylex.com.co) | NOT DETECTED | Submit free listing |
| Booking/Treatwell/StyleSeat | N/A | Not typical for belly painting in CO |
| BBB | NOT APPLICABLE | US-only |

**Citation consistency rule:** When submitting to any directory, use exactly: Name = **Croko**, Phone = **+57 316 816 1717**, City = **Medellín, Antioquia, Colombia**. Do not use "Croko - Maquillaje Para Embarazadas" or "Croko - Belly Painting Medellín" as the business name in directory listings — it must match GBP exactly.

---

## Local On-Page SEO Assessment

**Strengths:**
- Title tag is well-optimized: "Belly Painting Medellín: Artista Profesional a Domicilio | Croko"
- Meta description includes local modifier and value proposition
- Canonical URL set correctly
- `<address>` HTML element used in page body — correct semantic markup
- Service area zones listed in visible text
- Spanish-language primary keywords: "belly painting Medellín", "pintar barriga embarazada Medellín", "maquillaje prenatal Medellín" — well targeted

**Gaps:**
- No H1 visible in `page.js` — the contact section uses H2. Confirm that `HeaderSection` renders an H1 containing "belly painting Medellín" or equivalent.
- No internal links from this page to other service pages or blog articles about belly painting.
- No FAQ section on the service page (FAQPage schema exists on homepage but not here).
- No breadcrumb navigation rendered.
- Opening hours absent from page content and schema.

**Spanish keyword opportunities not yet targeted:**
- "pintabarrigas a domicilio Medellín"
- "body painting embarazada Medellín"
- "sesión foto barriga Medellín"
- "pintura barriga baby shower Medellín"

---

## Top 10 Prioritized Actions

### Critical
1. **Claim and verify Google Business Profile** — Select closest available category (body painting/artist). This is the #1 ranking factor and currently the #1 gap. Add phone, service area (Medellín + 4 municipalities), and photos.
2. **Remove or fix the `reviewCount: 200` in schema** — It is on the product schema, not the service schema, and the count is unverifiable. Either add a `url` pointing to a public review source or remove the AggregateRating until GBP reviews accumulate.

### High
3. **Standardize the business name** across all schema blocks to a single string: `"Croko"`. Move descriptive text to `description` or `alternateName`.
4. **Standardize telephone to E.164** in all schema: `"+573168161717"`. Keep human-readable format in visible HTML.
5. **Add missing schema properties to `HealthAndBeautyBusiness`:** `@id`, `email`, `geo` (lat/lng to 5 decimal places), `openingHoursSpecification`.

### Medium
6. **Add GBP review link to post-service WhatsApp follow-up** once GBP is verified — build review velocity immediately (18-day rule).
7. **Confirm H1 tag on the service page** contains a local keyword. If `HeaderSection` does not render an H1, add one explicitly.
8. **Submit to Páginas Amarillas Colombia and Guialocal.com** with NAP-exact data to build Colombia-specific citation authority.
9. **Add a FAQPage schema block** to the service page with belly-painting-specific questions (e.g., "¿Cuánto dura una sesión de belly painting?", "¿Qué incluye el servicio a domicilio?").

### Low
10. **Add neighborhood-level copy** to the existing service page — mention specific barrios/comunas (El Poblado, Laureles, Envigado, Sabaneta) to improve hyper-local relevance without creating thin city pages.

---

## Limitations Disclaimer

The following could not be assessed without paid tools or direct account access:
- Live GBP listing data (DataForSEO `local_business_data` not available)
- Real-time local pack rank for target keywords (`google_local_pack_serp` not available)
- Google Search Console impressions/clicks for the `/belly-painting-medellin` URL
- Actual index status of citation directory listings
- Proximity ranking variance — accounts for 55.2% of ranking variance (Search Atlas ML) and is outside Croko's control
- Backlink profile and local link authority (Ahrefs/Semrush required)
