# Croko.co Indexation Status

**Last updated:** May 11, 2026
**Property:** croko.co (domain property)
**Primary domain:** www.croko.co

---

## Current State (May 11)

| Metric | Value |
|--------|-------|
| Pages indexed | **≥1** (`/` confirmed indexed; kit-pinta-barriguitas consolidated to root via 308) |
| Pages affected by "Rastreada: actualmente sin indexar" | **12** |
| Validation cycle (started 21/4) | 8 pendientes, **4 con error** (re-checked 27/4, still not indexed) |
| Sitemap status | **Correcto** — 15 páginas descubiertas (resubmitted 11/5) |
| Migration status | In progress — GSC COA banner still shown |
| Old domain (maquillajeembarazadas.com) | De-indexed |

### URLs currently in "Rastreada: actualmente sin indexar" (12)

| URL | Last crawled | Notes |
|---|---|---|
| `https://www.croko.co/blog` | 8 may 2026 | ERROR — failed re-validation |
| `/blog/que-regalar-embarazada-ideas-significativas` | 6 may 2026 | ERROR |
| `/maquillaje-para-embarazadas` | 3 may 2026 | ERROR |
| `/blog/actividades-baby-shower-emotivas-inolvidables` | 3 may 2026 | ERROR |
| `/belly-painting-medellin` | 20 abr 2026 | **Orphan** — no referring page in GSC |
| `/blog/que-regalar-baby-shower-guia-definitiva` | 20 abr 2026 | Pendiente |
| `/politica-cookies` | 17 abr 2026 | Low priority |
| `/blog/salud-mental-embarazo-croko-tranquilamente` | 8 abr 2026 | Pendiente |
| `/blog/kit-maquillaje-prenatal-hermanitos` | 3 mar 2026 | Pendiente |
| `/blog/baby-showers-colombia-actividades-regalos-croko` | 3 mar 2026 | Pendiente |
| `http://croko.co/` | 7 feb 2026 | Non-www / non-https variant — expected, will never index |
| `https://croko.co/` | 7 feb 2026 | Non-www variant — expected, will never index |

**Real concern:** 9 URLs (1 service route + 1 landing + 7 blog posts). The 2 non-www duplicates and `politica-cookies` can be ignored.

## Indexation Timeline

The site peaked at **9 indexed pages** (Jan 27-29) before crashing to **1 indexed page** on Feb 3, coinciding with the domain migration from `maquillajeembarazadas.com` to `croko.co`.

| Period | Indexed | Not Indexed | Avg Daily Impressions |
|--------|---------|-------------|----------------------|
| Jan 9-12 | 4-5 | 7-8 | ~18 |
| Jan 13-19 | 6 | 6 | ~45 |
| Jan 20-26 | 8 | 4 | ~42 |
| Jan 27-30 | 9 | 3 | ~29 |
| Jan 31 - Feb 2 | 4 | 8 | ~6 |
| Feb 3 - Mar 2 | 1 | 11 | ~3 |
| Mar 3 - Mar 9 | 1 | 12 | ~5 |
| Apr 18 - May 11 | ≥1 | 12 (post-SSR fix) | TBD |

## Critical Issues (from GSC, as of March 12)

| Issue | Pages | Validation Status | Notes |
|-------|-------|-------------------|-------|
| Crawled - currently not indexed | 10 | Error (started 5/3, errors 7/3) | Google crawls but refuses to index — likely domain authority issue |
| Page with redirect | 2 | Not started | Expected for redirect URLs like `/kit` |
| Duplicate - no user-selected canonical | 0 | N/A | Resolved |
| Discovered - currently not indexed | 0 | Correct | Resolved |

### "Crawled - currently not indexed" — 10 affected pages

| URL | Last Crawled | Notes |
|-----|-------------|-------|
| `/maquillaje-para-embarazadas` | 9 mar 2026 | Crawled after fixes, still not indexed |
| `/kit` | 9 mar 2026 | Expected — this is a redirect to `/kit-pinta-barriguitas` |
| `/kit-pinta-barriguitas` | 9 mar 2026 | Crawled after fixes, still not indexed |
| `/blog/que-regalar-embarazada-ideas-significativas` | 6 mar 2026 | Crawled after fixes, still not indexed |
| `/blog/actividades-baby-shower-emotivas-inolvidables` | 4 mar 2026 | Crawled after fixes, still not indexed |
| `/blog/kit-maquillaje-prenatal-hermanitos` | 3 mar 2026 | Crawled after fixes, still not indexed |
| `/blog/baby-showers-colombia-actividades-regalos-croko` | 3 mar 2026 | Crawled after fixes, still not indexed |
| `/blog/que-regalar-baby-shower-guia-definitiva` | 3 mar 2026 | Crawled after fixes, still not indexed |
| `/blog` | 27 feb 2026 | **STALE — crawled BEFORE fixes, needs re-indexing request** |
| `/blog/salud-mental-embarazo-croko-tranquilamente` | 7 feb 2026 | **STALE — crawled BEFORE fixes, needs re-indexing request** |

**Key insight:** 7 of 10 pages were crawled AFTER the March 3 fixes but Google still chose not to index them. This points to a **domain authority problem** rather than a technical issue. The new domain has zero backlink authority and Google doesn't trust it enough yet.

No non-critical issues reported.

---

## Fixes Applied (May 11, 2026) — Sitemap lastmod bump

**Root cause found via URL Inspection on `/blog`, `/maquillaje-para-embarazadas`, `/belly-painting-medellin`:**

- Sitemap field reported `Error temporal de procesamiento` (blog) and `No se ha detectado ningún sitemap de referencia` (other two)
- "Página de referencia" still pointed to the old `maquillajeembarazadas.com/sitemap.xml`
- `/belly-painting-medellin` had `Página de referencia: No se ha detectado ninguna` (orphan)
- Canonical, robots, indexability all green — issue was **discovery + sitemap freshness**, not crawl/quality

**Fix:**

- `src/app/sitemap.js`: introduced `SSR_FIX_DATE = 2026-04-18` and `bumpToSsrFix()` helper so URLs whose recorded date predates the rendering fix advertise the fix date instead. Honest newer dates are preserved.
- 8 URLs got their `lastmod` bumped: `/blog`, `/maquillaje-para-embarazadas`, and 6 blog posts (one — `pinta-barriguitas-colombia` — kept its newer 2026-04-20 date).
- Commit `5dda27d1`, pushed to main, Vercel auto-deployed.
- GSC → Sitemaps resubmitted: status **Correcto**, **15 páginas descubiertas**, sitemap registered with new submit date 11/5/26.

**Expected impact:** Google re-fetches the sitemap (within 24h of resubmit) → sees changed `lastmod` → re-crawls the 8 URLs (24–72h after that) → reclassifies (3–14 days).

---

## Fixes Applied (April 18, 2026) — SSR rendering

**Root cause:** Every `page.js` declared `"use client"`. Googlebot got a JS shell with no body content → "Crawled - currently not indexed" judgment for 12 URLs.

**Fix (commits `1a3dce79`, `71fac55a`, `29d95a53`):**

- Removed `"use client"` from `/`, `/kit-pinta-barriguitas`, `/maquillaje-para-embarazadas`, `/blog`, all 6 blog posts, `SchemaScripts.js`
- Interactive pieces moved to `'use client'` leaves (Testimonials, posts index, carousels, accordion)
- `header.js` accepts `isKitPage` prop instead of `usePathname()` (server-compatible)
- All 21 routes now prerender as static HTML — H1, `<title>`, JSON-LD all in source

**URL restructure (Phase 2):**

- `/` now serves kit content (Product + FAQPage schema, canonical `https://www.croko.co/`)
- `/belly-painting-medellin` new route with HealthAndBeautyBusiness schema
- `/kit-pinta-barriguitas/` directory deleted
- 308 redirects: `/kit` → `/`, `/kit-pinta-barriguitas` → `/` (chain collapsed)
- Shopping feed `offers.url` updated to `/`

**E-E-A-T improvements (Phase 3):**

- `public/llms.txt` published for AI crawlers
- Visible NAP `<address>` element in footer (phone, email, Medellín)
- `/gracias` confirmed `noindex, nofollow` (was already in place)
- Mobile LCP work — separate effort, ongoing

**Validation:**

- Rich Results Test (18/4): Product ✓, FAQPage ✓, Review ✓, Merchant listings ✓
- 56 KB CSS deletion (29d95a53) — removed 15 unused template sections

---

## Fixes Applied (March 3, 2026)

### Code Changes (deployed)
1. **Rebranded page titles**: Replaced "Maquillajes Embarazadas" with "Pinta Barriguitas Croko" across all 11 layout files (blog index, 6 blog posts, landing page, 3 legal pages)
2. **Cleaned up sitemap**: Removed `/feed/google-shopping.xml` (data feed, not a content page)

### Vercel Domain Configuration (applied)
3. **Fixed all redirects to 301 permanent**:
   - `maquillajeembarazadas.com` → 301 → `www.croko.co`
   - `www.maquillajeembarazadas.com` → 301 → `www.croko.co`
   - `croko.co` → 301 → `www.croko.co`
   - Previously these were 307 (temporary), which told Google to keep old URLs indexed

### Google Search Console (applied March 3)
4. **Change of Address**: Confirmed migration from `maquillajeembarazadas.com` → `croko.co`. Validation passed. Migration currently in progress.
5. **Sitemap submitted**: `https://www.croko.co/sitemap.xml` — status "Correcto", 11 pages discovered
6. **Re-indexing requested** for key pages on March 3

## Completed Actions

- [x] Fix 307 → 301 redirects in Vercel
- [x] Rebrand all page titles to "Pinta Barriguitas Croko"
- [x] Remove `/feed/google-shopping.xml` from sitemap
- [x] Confirm Change of Address in GSC (maquillajeembarazadas.com → croko.co)
- [x] Submit sitemap in GSC
- [x] Request re-indexing for key pages
- [x] Old domain de-indexed from Google
- [x] **Convert all `page.js` to server components** (April 18) — kit, home, blog, maquillaje + 6 posts
- [x] **URL restructure**: `/` = kit, `/belly-painting-medellin` = service, 308 redirects from old kit URLs
- [x] **Publish llms.txt** for AI crawlers
- [x] **Add visible NAP `<address>`** in footer
- [x] **Bump sitemap lastmod to 2026-04-18** for 8 stuck URLs (May 11)
- [x] **Resubmit sitemap in GSC** — status Correcto, 15 páginas descubiertas (May 11)

## Remaining Actions

### Short-term (next 1–2 weeks)

- [ ] **Wait for sitemap re-fetch + re-crawl cycle** (May 11 + 3–14 days)
  - Watch GSC → Sitemaps → "Última lectura" advance past 11 may
  - Watch "Rastreada: actualmente sin indexar" count drop from 12
- [ ] **If no movement after May 25**, request indexing manually for:
  - `/blog`
  - `/maquillaje-para-embarazadas`
  - `/belly-painting-medellin`
- [ ] **Add internal links to `/belly-painting-medellin`** — currently orphan in GSC ("Página de referencia: No se ha detectado ninguna"). Needs body links from `/`, footer, and at least one blog post mentioning Medellín service.
- [ ] **Live-test `/blog` in URL Inspection** to confirm SSR HTML reaches Googlebot

### Medium-term (1–3 months)

- [ ] **Create `/sobre-nosotros`** (About Carolina) — biggest E-E-A-T gap. Named profile, photo, training, years of experience, Medellín origin, Instagram link. Wire as `author.url` in `SchemaMarkup.js`.
- [ ] **Build backlinks** (main bottleneck — domain has low authority):
  - [ ] Update Google Business Profile URL to croko.co
  - [ ] Update Instagram/TikTok bios to croko.co
  - [ ] Update Wompi checkout redirect URL
  - [ ] Create/claim profiles on Colombian business directories
  - [ ] Reach out to anyone linking to old domain to update links
- [ ] Resolve DNS warnings on old domain entries in Vercel
- [ ] **Mobile LCP optimization** (~11s → <4s) — separate performance track

## Verified Working (no issues found)

- SSR rendering: titles and meta descriptions render server-side
- No `noindex` tags on content pages
- Canonical tags: all pages self-reference `www.croko.co`
- robots.txt: `Allow: /` with sitemap URL
- Sitemap includes all content pages with correct URLs
- Googlebot receives same content as regular users
- Path-to-path redirects from old domain work correctly
- Old domain fully de-indexed from Google

## Expected Timeline

| Action | Expected Impact | Timeline |
|--------|----------------|----------|
| 301 redirects (done Mar 3) | Authority transfer from old domain | 2-4 weeks (by Mar 17-31) |
| GSC Change of Address (done Mar 3) | Accelerates domain migration | 2-4 weeks (by Mar 17-31) |
| Fix branding (done Mar 3) | Google sees correct metadata | 1-2 weeks (done for most pages) |
| **SSR conversion (done Apr 18)** | **Googlebot sees real HTML, not JS shell** | **Re-evaluation 2-6 weeks** |
| **Sitemap lastmod bump (done May 11)** | **Forces re-crawl of 8 stuck URLs** | **3-14 days** |
| Internal linking for /belly-painting-medellin | Gives orphan route a discovery path | 1-2 weeks |
| Build backlinks | Domain authority grows | 1-3 months |

**Current bottleneck (May 11):** Waiting for Google's re-crawl cycle to honor the new sitemap lastmod. If 12 stuck URLs don't move by May 25, the remaining levers are internal linking, authority (backlinks), and content E-E-A-T (`/sobre-nosotros`).

**Next checkpoint:** May 18, 2026 — check GSC "Última lectura" advanced past 11 may, and check if any of the 8 bumped URLs moved out of "Rastreada: actualmente sin indexar". If "Última lectura" hasn't advanced after 7 days, force re-fetch by removing+re-adding the sitemap in GSC.
