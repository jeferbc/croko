# Schema.org Audit — croko.co
**Audited:** 2026-04-18
**Last progress check:** 2026-04-22
**Pages:** `/`, `/belly-painting-medellin`, `/blog`, `/blog/que-regalar-embarazada-ideas-significativas`

## Progress Snapshot (2026-04-22)
- [x] **Critical #1** — aggregateRating (200 reviews) removed from Product schema (commit `7a661407`). Brand `alternateName` added.
- [ ] #2 No schema on `/blog` index
- [x] **#3 `BreadcrumbList` added on `/belly-painting-medellin`** — 2-level breadcrumb (Inicio → Belly Painting Medellín) emitted as a separate JSON-LD block in `src/app/belly-painting-medellin/page.js`.
- [x] **#4 LocalBusiness `@id`, `geo`, `openingHoursSpecification` added** — `@id: https://www.croko.co/belly-painting-medellin#localbusiness`, `geo` (Medellín centroid 6.24450, -75.57390), `openingHoursSpecification` (Mon-Fri 09:00-18:00, Sat 09:00-14:00 — **placeholder, verify against actual business hours**), plus `email: pintabarriguitas@croko.co`.
- [ ] #5 Publisher logo URL inconsistency in Article vs Organization
- [ ] #6 `Article` → `BlogPosting`
- [ ] #7 `inLanguage` missing on Article
- [ ] #8 FAQPage on commercial site (info only, no action needed)
- [ ] #9 `priceValidUntil` missing in Offer
- [ ] #10 `WebSite` schema missing sitewide

**Completion: 3 / 10 (30%)**

---

## 1. Detection Summary

| Page | Schemas Found |
|---|---|
| `/` | Organization, Product (with Offer, AggregateRating, ShippingDetails, ReturnPolicy), FAQPage |
| `/belly-painting-medellin` | HealthAndBeautyBusiness (LocalBusiness subtype) |
| `/blog` | None |
| `/blog/que-regalar-embarazada-ideas-significativas` | Article, BreadcrumbList |

---

## 2. Validation Results

### 2.1 Homepage — Organization
**Status: PASS with minor gaps**

| Check | Result |
|---|---|
| @context `https://schema.org` | PASS |
| @id set (`#organization`) | PASS |
| name, url, logo (ImageObject) | PASS |
| sameAs (Instagram, Facebook) | PASS — consider adding YouTube if channel exists |
| contactPoint with telephone | PASS |
| foundingDate | PASS |
| Missing: `email` | INFO |
| Missing: `numberOfEmployees` | INFO |

### 2.2 Homepage — Product
**Status: PASS with one critical issue**

| Check | Result |
|---|---|
| @context `https://schema.org` | PASS |
| name, description, image | PASS |
| sku (`CROKO-KPB-001`) | PASS |
| brand via `@id` reference | PASS |
| Offer: price (190000), priceCurrency (COP), availability (InStock) | PASS |
| Offer: itemCondition (NewCondition) | PASS |
| Offer: url (absolute) | PASS |
| shippingDetails (OfferShippingDetails) | PASS — well structured |
| hasMerchantReturnPolicy | PASS |
| aggregateRating (4.8/5, 200 reviews) | **FAIL — CRITICAL** |
| Missing: `review` array (individual Review items) | **FAIL — CRITICAL** |
| Missing: `priceValidUntil` | WARN |
| Missing: GTIN/MPN | INFO (not required for Google, but improves matching) |

**Critical — aggregateRating not backed by on-page Review markup:** Google requires that `aggregateRating` is supported by either individual `Review` items in the schema OR reviews visibly rendered on the page in a way that can be verified. The page does show 3 testimonial cards (María González, Laura Martínez, Carolina Rodríguez), but they carry no `Review` schema. The `reviewCount: 200` is not backed by any discoverable reviews. This creates a mismatch risk — Google may suppress the star rating rich result or issue a manual action.

**Fix:** Either add `review` items to the Product schema matching the visible testimonials, and set `reviewCount` to the actual count of marked-up reviews (3), or keep `reviewCount: 200` only if 200 reviews are rendered/accessible on-page with Review markup.

### 2.3 Homepage — FAQPage
**Status: INFO (not an error)**

FAQPage is present with 5 well-formed Question/Answer pairs. However:
- Google restricted FAQPage rich results to government and healthcare sites in August 2023. Croko.co is a commercial e-commerce site — **no Google rich result will be generated**.
- The schema still provides value for AI/LLM citation surfaces (ChatGPT, Perplexity, Google AI Overviews). Keep it if GEO/AEO is a priority. Remove it if the only concern is Google rich results.
- No structural errors found in the FAQ block itself.

### 2.4 /belly-painting-medellin — HealthAndBeautyBusiness
**Status: PASS with recommended additions missing**

| Check | Result |
|---|---|
| @context `https://schema.org` | PASS |
| @type HealthAndBeautyBusiness (valid LocalBusiness subtype) | PASS |
| name, url, image, logo | PASS |
| telephone | PASS |
| priceRange (`$$`) | PASS |
| address (PostalAddress) | PASS |
| areaServed (5 cities) | PASS |
| sameAs | PASS |
| Missing: `@id` | WARN — should be `"https://www.croko.co/belly-painting-medellin#localbusiness"` |
| Missing: `openingHours` | WARN — recommended for local rich results |
| Missing: `geo` (GeoCoordinates) | WARN — improves Maps integration |
| Missing: `aggregateRating` | INFO — if reviews exist for this service, add rating |
| Missing: `serviceArea` or `hasMap` | INFO |
| Missing: `currenciesAccepted`, `paymentAccepted` | INFO |

### 2.5 /blog — Index Page
**Status: FAIL — No schema present**

The blog index page has zero JSON-LD. Recommended: add a `WebPage` or `CollectionPage` schema, plus a `WebSite` schema with `SearchAction` if site search is available.

### 2.6 /blog/que-regalar-embarazada-ideas-significativas — Article + BreadcrumbList
**Status: PASS with gaps**

| Check | Result |
|---|---|
| @context `https://schema.org` | PASS |
| @type Article | PASS (BlogPosting would be more specific and preferred) |
| headline, description, image | PASS |
| datePublished (ISO 8601) | PASS |
| dateModified | PASS — same as datePublished; update whenever content changes |
| author (Person, name, url) | PASS — author url points to croko.co root, not an author bio page |
| publisher (Organization, logo ImageObject) | PASS |
| mainEntityOfPage | PASS |
| articleSection, keywords | PASS |
| BreadcrumbList (3 levels, absolute URLs) | PASS |
| Missing: `wordCount` | INFO |
| Missing: `inLanguage` (`"es-CO"`) | WARN |
| publisher logo URL: `https://www.croko.co/logo.png` differs from Organization logo | WARN — should match `https://www.croko.co/assets/images/logo/croko_logo.png` |

---

## 3. Missing Schema Opportunities

| Opportunity | Priority | Pages |
|---|---|---|
| `Review` items inside Product schema (backs aggregateRating) | **Critical** | `/` |
| `WebSite` with `SearchAction` (Sitelinks Search Box) | High | All pages (via sitewide `<head>`) |
| `BreadcrumbList` on `/belly-painting-medellin` | High | `/belly-painting-medellin` |
| `openingHours` on LocalBusiness | Medium | `/belly-painting-medellin` |
| `geo` (GeoCoordinates) on LocalBusiness | Medium | `/belly-painting-medellin` |
| `VideoObject` for YouTube videos embedded on homepage | Medium | `/` |
| `BlogPosting` upgrade from `Article` type | Low | All blog posts |
| `CollectionPage` on blog index | Low | `/blog` |
| `inLanguage: "es-CO"` on Article | Low | All blog posts |

---

## 4. Generated JSON-LD — Priority Additions

### 4.1 Fix Product — Add Review Items (Critical)
Replace/extend the existing Product schema block. This aligns `reviewCount` with the 3 testimonials visible on-page. If you want to claim 200 reviews, all 200 must be accessible and marked up, or use a third-party review platform (Google, Trustpilot) that syndicates ratings.

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kit Pinta Barriguitas - Kit de Pintura para Barriga de Embarazada",
  "description": "Crea un recuerdo inolvidable de tu embarazo junto a tu familia. Kit completo con 15 colores de pinturas hipoalergénicas, pinceles profesionales, plantillas y videotutoriales. +500 familias felices. Ideal para baby showers y sesiones fotográficas de maternidad.",
  "image": ["https://ik.imagekit.io/ge17f66b4ma/Fotokitcarrusel%20(1)%20(1)_kduJxCzra.png"],
  "brand": { "@id": "https://www.croko.co/#organization" },
  "sku": "CROKO-KPB-001",
  "offers": {
    "@type": "Offer",
    "price": 190000,
    "priceCurrency": "COP",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "url": "https://www.croko.co/",
    "seller": { "@id": "https://www.croko.co/#organization" },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "COP" },
      "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "CO" },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 2, "unitCode": "DAY" },
        "transitTime": { "@type": "QuantitativeValue", "minValue": 3, "maxValue": 7, "unitCode": "DAY" }
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "CO",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30,
      "returnMethod": "https://schema.org/ReturnByMail"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "reviewCount": "3"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "María González" },
      "reviewBody": "Fue la experiencia más linda de mi embarazo. Mi esposo y mi hija participaron pintando juntos. Las pinturas son muy seguras y el resultado quedó hermoso. ¡Lo recomiendo 100%!",
      "datePublished": "2025-01-01"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Laura Martínez" },
      "reviewBody": "Me lo regalaron en mi baby shower y fue el mejor regalo que recibí. Todos participamos y nos divertimos muchísimo. Las plantillas son muy fáciles de usar, incluso sin experiencia.",
      "datePublished": "2025-02-01"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Carolina Rodríguez" },
      "reviewBody": "Al principio tenía miedo porque pensé que no me iba a quedar bien, pero las instrucciones son súper claras. Quedé enamorada del resultado y tengo fotos hermosas para recordar.",
      "datePublished": "2025-03-01"
    }
  ]
}
```

### 4.2 WebSite with SearchAction (Sitewide — add to `<head>` on all pages)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.croko.co/#website",
  "url": "https://www.croko.co",
  "name": "Croko",
  "description": "Kits para pintar barrigas de embarazadas — Colombia",
  "inLanguage": "es-CO",
  "publisher": { "@id": "https://www.croko.co/#organization" }
}
```

### 4.3 LocalBusiness Improvements for /belly-painting-medellin

```json
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://www.croko.co/belly-painting-medellin#localbusiness",
  "name": "Croko - Belly Painting Medellín",
  "description": "Artista profesional de belly painting a domicilio en Medellín. Pinturas certificadas para body art, sesiones artísticas para embarazadas. Crea recuerdos inolvidables en familia.",
  "url": "https://www.croko.co/belly-painting-medellin",
  "image": "https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg",
  "logo": "https://www.croko.co/assets/images/logo/croko_logo.png",
  "telephone": "+57-316-816-1717",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Medellín",
    "addressRegion": "Antioquia",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.2442,
    "longitude": -75.5812
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Medellín" },
    { "@type": "City", "name": "Envigado" },
    { "@type": "City", "name": "Bello" },
    { "@type": "City", "name": "Itagüí" },
    { "@type": "City", "name": "Sabaneta" }
  ],
  "sameAs": [
    "https://www.instagram.com/croko_maquillaje_embarazada",
    "https://www.facebook.com/crokolina"
  ]
}
```

> Note: Verify `openingHoursSpecification` values with actual business hours before deploying. The geo coordinates above are for central Medellín — replace with the actual service address if applicable.

### 4.4 BlogPosting upgrade for blog post pages

Replace `"@type": "Article"` with `"@type": "BlogPosting"` and add `inLanguage`. Also fix the publisher logo URL inconsistency.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Qué Regalarle a una Embarazada: 5 Ideas Que Realmente Tocan el Corazón",
  "description": "Descubre los mejores regalos para embarazadas que realmente crean recuerdos duraderos. Ideas probadas desde la experiencia de una artista de belly painting.",
  "image": "https://ik.imagekit.io/ge17f66b4ma/download__8___1___2__B1r-Fxbpk.jpeg?updatedAt=1642474362194",
  "datePublished": "2025-12-05T00:00:00.000Z",
  "dateModified": "2025-12-05T00:00:00.000Z",
  "inLanguage": "es-CO",
  "author": {
    "@type": "Person",
    "name": "Carolina Rincón",
    "url": "https://www.croko.co/blog"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Croko",
    "@id": "https://www.croko.co/#organization",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.croko.co/assets/images/logo/croko_logo.png",
      "width": 462,
      "height": 255
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.croko.co/blog/que-regalar-embarazada-ideas-significativas"
  },
  "articleSection": "Belleza y Embarazo",
  "keywords": ["maquillaje para embarazadas","maquillaje seguro embarazo","cosméticos embarazo","productos belleza prenatal","maquillaje hipoalergénico"]
}
```

### 4.5 BreadcrumbList for /belly-painting-medellin (missing)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://www.croko.co"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Belly Painting Medellín",
      "item": "https://www.croko.co/belly-painting-medellin"
    }
  ]
}
```

---

## 5. Issue Priority Summary

| # | Issue | Priority | Page |
|---|---|---|---|
| 1 | `aggregateRating` (200 reviews) not backed by on-page `Review` markup | **Critical** | `/` |
| 2 | No schema on `/blog` index | High | `/blog` |
| 3 | `BreadcrumbList` missing on `/belly-painting-medellin` | High | `/belly-painting-medellin` |
| 4 | LocalBusiness missing `@id`, `geo`, `openingHoursSpecification` | Medium | `/belly-painting-medellin` |
| 5 | Publisher logo URL inconsistency in Article vs Organization | Medium | Blog posts |
| 6 | `Article` should be `BlogPosting` | Low | Blog posts |
| 7 | `inLanguage` missing on Article/BlogPosting | Low | Blog posts |
| 8 | FAQPage present on commercial site — no Google rich result benefit | Info | `/` |
| 9 | `priceValidUntil` missing in Offer | Low | `/` |
| 10 | `WebSite` schema missing sitewide | Low | All pages |
