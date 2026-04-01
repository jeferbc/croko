# SEO Audit: croko.co/kit-pinta-barriguitas

**Business Type:** E-commerce (product page) + Local Service (belly painting in Medellin)
**Audit Date:** 2026-03-31
**Page:** Kit Pinta Barriguitas - COP $150,000

---

## SEO Health Score: 72/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 78/100 | 22% | 17.2 |
| Content Quality | 68/100 | 23% | 15.6 |
| On-Page SEO | 76/100 | 20% | 15.2 |
| Schema / Structured Data | 82/100 | 10% | 8.2 |
| Performance | 75/100 | 10% | 7.5 |
| AI Search Readiness | 55/100 | 10% | 5.5 |
| Images | 48/100 | 5% | 2.4 |
| **Total** | | | **71.6** |

---

## 1. Technical SEO (78/100)

### Passing

- HTTPS with valid certificate
- `lang="es"` correctly set
- Viewport meta tag present
- Canonical tag correctly self-referencing
- `robots: index, follow`
- robots.txt allows all crawlers, references sitemap
- Sitemap present with 11 URLs, well-structured
- Next.js with edge rendering (modern stack)
- Preconnect to ImageKit CDN
- Font preloading configured
- Favicon present

### Issues

| Priority | Issue | Detail |
|----------|-------|--------|
| **High** | No `Content-Security-Policy` header | Leaves site vulnerable to XSS; also a trust signal |
| **Medium** | SPA/Next.js CWV measurement gap | React Server Components help, but soft navigations may not be fully measured by CrUX |
| **Medium** | Missing `terminos-y-condiciones` and `politica-de-privacidad` in sitemap | These legal pages are linked in footer but only `politica-devoluciones` is in sitemap |
| **Low** | All sitemap `lastmod` dates identical (`2026-03-25`) | Google may ignore lastmod if it's not genuinely per-page |

---

## 2. Content Quality & E-E-A-T (68/100)

**Word count:** ~1,200 words (passes 400-word minimum for product pages)

### E-E-A-T Assessment

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Experience** | Moderate | Testimonials with names + cities; "+500 familias"; but no original process photos/videos on-page |
| **Expertise** | Moderate | Claims of certified/dermatologically-tested paints, but no certifications shown or linked |
| **Authoritativeness** | Weak | No media mentions, no external citations, brand since 2016 but no proof |
| **Trustworthiness** | Moderate | WhatsApp contact, return policy, privacy policy, social profiles present. Missing: physical address on product page, visible email |

### Issues

| Priority | Issue | Recommendation |
|----------|-------|---------------|
| **Critical** | No author/brand expertise proof | Add visible paint certifications/safety test results. Link to or embed the actual certification documents |
| **High** | No "About" or brand story on this page | Add a brief brand section or link prominently to the About page. This is a YMYL-adjacent topic (pregnancy safety) |
| **High** | Testimonials lack verification | Add dates, photo thumbnails, or link to Google/Instagram reviews for social proof |
| **Medium** | No publication/update date visible | Add "Last updated" date for freshness signal |
| **Medium** | FAQ says "15 colores" but description says "4 plantillas" inconsistency | FAQ mentions 15 colors; description doesn't mention color count. Align product specs across all sections |

---

## 3. On-Page SEO (76/100)

### Title Tag
"Kit Pintura Barriga Embarazada | Envio Gratis Colombia" (54 chars - good)
- Primary keyword near the beginning
- Includes shipping incentive and geo-targeting

### Meta Description
"Kit completo para pintar tu barriguita en casa. Incluye plantillas, pinceles y pinturas seguras. Envio gratis a toda Colombia. Ideal para baby shower!" (152 chars - good)

### Headings

| Issue | Detail |
|-------|--------|
| **H1 is vague** | "Crea recuerdos unicos en familia con tu bebe" - doesn't contain product keyword. Should reference "kit pintura barriga" or "belly painting" |
| **H6 misuse** | Trust badges use H6 tags instead of styled `<span>` or `<p>`. Heading hierarchy jumps from H3 to H6 |
| **No H2 for product description** | "Descripcion" is H3, should be H2 for proper hierarchy |

### Issues

| Priority | Issue | Recommendation |
|----------|-------|---------------|
| **High** | H1 doesn't contain target keyword | Change to something like "Kit Pinta Barriguita: Pintura Segura para Embarazadas" |
| **Medium** | Broken heading hierarchy (H1 > H3 > H6) | Fix to H1 > H2 > H3. Replace H6 trust badges with styled paragraphs |
| **Medium** | No breadcrumb navigation | Add breadcrumbs (Home > Kit Pinta Barriguitas) for better UX and potential rich results |
| **Low** | `og:type` is "website" | Should be `og:type: "product"` for a product page |

---

## 4. Schema / Structured Data (82/100)

### Present

- **Product schema** - Complete with name, brand, SKU, price, availability, shipping, returns, aggregate rating
- **FAQPage schema** - 5 Q&A pairs

### Good

- SKU present (CROKO-KPB-001)
- Shipping details included (free, 3-7 days)
- Return policy (30 days)
- AggregateRating (4.8/5, 200 reviews)

### Issues

| Priority | Issue | Recommendation |
|----------|-------|---------------|
| **High** | AggregateRating claims 200 reviews but no individual reviews on page | Google may flag this as misleading. Either show real reviews or link to the review source |
| **Medium** | No `BreadcrumbList` schema | Add for sitelink search box potential |
| **Medium** | FAQPage schema on commercial site | Since Aug 2023, FAQ rich results only show for government/healthcare. Keep for AI/LLM citation benefit but don't expect Google rich results |
| **Low** | Missing `offers.url` in Product schema | Add the product URL to the offers object |

---

## 5. Performance (75/100)

**Stack:** Next.js with React Server Components, ImageKit CDN for images.

### Good signals

- Images served via ImageKit with WebP format and responsive sizing (`tr=w-400,q-75,f-webp`)
- Preconnect hints for CDN
- Font preloading
- Lazy loading on below-fold images

### Concerns

- No API key configured for live CrUX/PageSpeed data (Tier 0 unavailable)
- Multiple CSS files with `precedence="next"` may be render-blocking
- Product image carousel with 7 images - verify lazy loading on all

> **Note:** Add a Google API key to unlock live PageSpeed/CrUX checks. Run `/seo google pagespeed https://www.croko.co/kit-pinta-barriguitas` once configured.

---

## 6. AI Search Readiness (55/100)

| Signal | Status |
|--------|--------|
| `llms.txt` | Missing (404) |
| Structured FAQ content | Present (good for AI citation) |
| Clear product specs | Partial - scattered across sections |
| Brand mention signals | Weak - "Croko" has low external visibility |
| YouTube presence | Not checked - no API key |
| Citability | Moderate - safety claims need sources |

### Issues

| Priority | Issue | Recommendation |
|----------|-------|---------------|
| **High** | No `llms.txt` file | Create `/.well-known/llms.txt` describing your brand, products, and key facts for AI crawlers |
| **High** | No structured product spec table | Add a clear, parseable specs table (contents, weight, dimensions, materials) |
| **Medium** | Safety claims unsourced | Add citations to paint safety certifications - AI systems prioritize verifiable claims |
| **Medium** | No YouTube content linked | YouTube mentions have the strongest AI visibility correlation (0.737). Create product demo videos |

---

## 7. Images (48/100)

| Priority | Issue | Detail |
|----------|-------|--------|
| **Critical** | Generic alt text on all product images | All 5 product images use `alt="Producto"` and thumbnails use `alt="Thumbnail 1-5"`. These should describe the actual image content |
| **Critical** | Logo uses `alt="logo"` (x2) | Should be `alt="Croko - Kit Pintura Barriga Embarazada"` |
| **High** | Decorative image has `alt="Decoracion"` | Use `alt=""` or `role="presentation"` for decorative images |
| **Medium** | No `width`/`height` attributes visible | May cause CLS if not handled by Next.js Image component |

---

## Prioritized Action Plan

### Critical (fix immediately)

1. **Fix all product image alt text** - Replace "Producto" with descriptive text like "Kit Pinta Barriguita con plantillas y pinceles incluidos"
2. **Add paint safety certification proof** - This is YMYL-adjacent (pregnancy). Show or link to actual test certificates

### High (fix within 1 week)

3. **Rewrite H1** to include target keyword ("Kit Pinta Barriguita" or "Pintura Barriga Embarazada")
4. **Create `llms.txt`** for AI search visibility
5. **Validate AggregateRating** - 200 reviews claimed in schema must be verifiable
6. **Add brand trust section** - Brief "About Croko" with years of experience, certification logos, number of families served
7. **Add breadcrumb navigation** with `BreadcrumbList` schema

### Medium (fix within 1 month)

8. Fix heading hierarchy (remove H6 misuse, proper H1>H2>H3 flow)
9. Add missing legal pages to sitemap
10. Change `og:type` from "website" to "product"
11. Add structured product specs table
12. Add "Last updated" date
13. Create YouTube product demo video

### Low (backlog)

14. Fix identical sitemap `lastmod` dates
15. Add `offers.url` to Product schema
16. Add Content-Security-Policy header

---

## Current Page Metadata Summary

| Element | Value |
|---------|-------|
| Title | Kit Pintura Barriga Embarazada \| Envio Gratis Colombia |
| Meta Description | Kit completo para pintar tu barriguita en casa. Incluye plantillas, pinceles y pinturas seguras. Envio gratis a toda Colombia. Ideal para baby shower! |
| Canonical | https://www.croko.co/kit-pinta-barriguitas |
| H1 | Crea recuerdos unicos en familia con tu bebe |
| Schema Types | Product, FAQPage |
| Robots | index, follow |
| og:type | website |
| lang | es |

## Sitemap Coverage (11 URLs)

1. https://www.croko.co (priority: 1)
2. https://www.croko.co/kit-pinta-barriguitas (priority: 0.9)
3. https://www.croko.co/blog (priority: 0.8)
4. https://www.croko.co/maquillaje-para-embarazadas (priority: 1)
5. https://www.croko.co/politica-devoluciones (priority: 0.3)
6. https://www.croko.co/blog/baby-showers-colombia-actividades-regalos-croko (priority: 0.7)
7. https://www.croko.co/blog/kit-maquillaje-prenatal-hermanitos (priority: 0.7)
8. https://www.croko.co/blog/salud-mental-embarazo-croko-tranquilamente (priority: 0.7)
9. https://www.croko.co/blog/actividades-baby-shower-emotivas-inolvidables (priority: 0.7)
10. https://www.croko.co/blog/que-regalar-embarazada-ideas-significativas (priority: 0.7)
11. https://www.croko.co/blog/que-regalar-baby-shower-guia-definitiva (priority: 0.7)
