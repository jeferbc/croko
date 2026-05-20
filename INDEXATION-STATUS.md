# Croko.co Indexation Status

**Last updated:** May 20, 2026
**Property:** croko.co (domain property)
**Primary domain:** www.croko.co

---

## Current State (May 20)

| Metric | Value |
|--------|-------|
| Pages indexed | **1** (`/` only) |
| Pages NOT indexed | **19** (across 4 reasons) |
| Total pages known to Google | **20** |
| Sitemap status | **Correcto** — 15 páginas descubiertas (last resubmit 11/5) |
| Migration status | In progress — GSC COA banner still shown |
| Old domain (maquillajeembarazadas.com) | De-indexed |

### Breakdown of the 19 not-indexed (4 reasons)

| Reason | Pages | Fuente | Validación | Notes |
|---|---|---|---|---|
| Rastreada: actualmente sin indexar | **12** | Sistemas de Google | **Error** | 3 ERROR + 9 PENDIENTE (cycle started 21/4, errors detected 27/4) |
| Descubierta: actualmente sin indexar | **4** | Sistemas de Google | Correcto | New since May 11 — sitemap discovery is working, crawl-budget is the bottleneck |
| Página con redirección | **2** | Sitio web | No iniciada | `/kit` + `/kit-pinta-barriguitas` — expected (308 → `/`), ignore |
| Error de redirección | **1** | Sitio web | No iniciada | `croko.co/belly-painting-medellin` (non-www) — **stale**, redirect now resolves cleanly |

### Trend since May 11

- Indexed: 1 → **1** (flat)
- Sin indexar: 12 → **19** (+7 — Google is *discovering* more URLs, but not indexing them)
- Rastreada: 12 → **12** (flat — May 11 sitemap bump produced re-crawls but **no reclassification**)
- New buckets: 4 Descubierta + 1 Error de redirección appeared

### Rastreada: actualmente sin indexar — ERROR vs PENDIENTE split

The April 21 validation cycle detected errors on April 27. URLs in the **ERROR** bucket are ones Google already re-validated during the cycle and confirmed still unindexed (harder cases). URLs in **PENDIENTE** are still queued for re-check.

**ERROR (3) — Google looked again, still rejected:**
| URL | Last crawled |
|---|---|
| `/blog/que-regalar-embarazada-ideas-significativas` | 11 may 2026 |
| `/blog` | 8 may 2026 |
| `/maquillaje-para-embarazadas` | 28 abr 2026 |

**PENDIENTE (9) — not yet re-validated:**
| URL | Last crawled | Priority |
|---|---|---|
| `/belly-painting-medellin` | 20 abr 2026 | High — also orphan (see URL Inspection below) |
| `/blog/que-regalar-baby-shower-guia-definitiva` | 20 abr 2026 | High |
| `/politica-cookies` | 17 abr 2026 | Ignore |
| `/blog/salud-mental-embarazo-croko-tranquilamente` | 8 abr 2026 | Medium |
| `/blog/actividades-baby-shower-emotivas-inolvidables` | 4 abr 2026 | Medium |
| `/blog/kit-maquillaje-prenatal-hermanitos` | 3 mar 2026 | Medium |
| `/blog/baby-showers-colombia-actividades-regalos-croko` | 3 mar 2026 | Medium |
| `http://croko.co/` | 7 feb 2026 | Ignore — non-https variant, will never index |
| `https://croko.co/` | 7 feb 2026 | Ignore — non-www variant, will never index |

**Real priority list = 3 ERROR + 6 PENDIENTE = 9 URLs** worth manual "Solicitar indexación".

### Descubierta: actualmente sin indexar (4) — new since May 11

All 4 are legitimate sitemap entries Google found but hasn't crawled (`N/D` last crawl). Validation: **Correcto** (no errors detected 7/2). Crawl-budget signal — consistent with low-authority diagnosis.

| URL | Priority |
|---|---|
| `/blog/pinta-barriguitas-colombia` | Medium |
| `/politica-de-privacidad` | Low |
| `/politica-devoluciones` | Low |
| `/terminos-y-condiciones` | Low |

### Error de redirección (1) — STALE

**URL flagged:** `https://croko.co/belly-painting-medellin` (non-www HTTPS), first detected 20/4/26, last crawled 19/4/26.

**Live test (May 20):**
```
https://croko.co/belly-painting-medellin  →  301  →  https://www.croko.co/belly-painting-medellin  →  200
```
Clean single 301 with prerendered page. **Redirect is working today.** Error label is from page-launch day (April 18 deploy → April 19–20 crawl).

Minor secondary finding: `http://croko.co/...` produces a 2-hop chain (`308` HTTPS upgrade → `301` apex→www). Modern Googlebot starts from HTTPS so unlikely to be the cause, but worth flattening eventually.

**Action:** Click **"VALIDAR CORRECCIÓN"** on this row in GSC.

---

## URL Inspection findings — `/belly-painting-medellin` (May 20)

Ran URL Inspection on `https://www.croko.co/belly-painting-medellin`. Verdict: **La URL no está en Google → Rastreada: actualmente sin indexar.**

| Field | Value | Read |
|---|---|---|
| Sitemap reference | "No se ha detectado ningún sitemap de referencia" | ⚠️ **stale** — URL IS in live sitemap, last crawl was 20/4 (before May 11 resubmit) |
| Página de referencia | "No se ha detectado ninguna" | ⚠️ **real — orphan confirmed in code** |
| ¿Se permite el rastreo? | Sí | ✅ |
| Obtención de página | Correcto | ✅ |
| ¿Se permite la indexación? | Sí | ✅ |
| Canonical declarada / Google-selected | Match (`/belly-painting-medellin`) | ✅ |
| Último rastreo | 20 abr 14:26 (30 days ago) | ⚠️ stale |
| Crawler | Robot de Google para smartphones | — |

### Orphan confirmed via grep

`grep -rn "belly-painting-medellin" src/` finds **only self-references** — no `<Link>` or `<a href>` from any other page. The only matches are:

| File | Match |
|---|---|
| `src/app/belly-painting-medellin/page.js:14` | self in JSON-LD `@id` |
| `src/app/belly-painting-medellin/page.js:17` | self in schema `url` |
| `src/app/belly-painting-medellin/page.js:76` | self in breadcrumb item |
| `src/app/belly-painting-medellin/layout.js:6` | self as canonical |
| `src/app/belly-painting-medellin/layout.js:13` | self in OG `url` |
| `src/app/sitemap.js:16` | sitemap entry |

**Everything technical passes. The only structural problem on this route is the orphan status.** This is the single most actionable finding in the May 20 audit.

---

## Action plan (May 20 → May 27 checkpoint)

### Today (May 20) — manual in GSC

1. **Click "VALIDAR CORRECCIÓN"** on the Error de redirección row (free win, redirect chain is clean).
2. **URL Inspection → Solicitar indexación** for the 9 priority URLs, in this order (GSC throttles ~10/day):
   1. `/blog` (highest — index page for the whole blog cluster)
   2. `/maquillaje-para-embarazadas`
   3. `/belly-painting-medellin`
   4. `/blog/que-regalar-embarazada-ideas-significativas`
   5. `/blog/que-regalar-baby-shower-guia-definitiva`
   6. `/blog/salud-mental-embarazo-croko-tranquilamente`
   7. `/blog/actividades-baby-shower-emotivas-inolvidables`
   8. `/blog/kit-maquillaje-prenatal-hermanitos`
   9. `/blog/baby-showers-colombia-actividades-regalos-croko`

Requesting indexing does **not** override authority/quality judgment — it queues a fresh crawl. Borderline URLs will benefit; the rest depend on the structural levers below.

### This week — code change

3. **Fix `/belly-painting-medellin` orphan** by adding internal links from:
   - Home `/` body (Medellín/local presencial block above the FAQ)
   - Footer NAP `<address>` (wrap existing Medellín text in a link)
   - `/blog/baby-showers-colombia-actividades-regalos-croko` (contextual in-body)
   - `/blog/que-regalar-baby-shower-guia-definitiva` (contextual in-body)

### Medium-term (1–3 months)

4. **`/sobre-nosotros`** — biggest remaining E-E-A-T gap. Named profile, photo, training, years of experience, Medellín origin, Instagram link. Wire as `author.url` in `SchemaMarkup.js`.
5. **Backlinks** — main bottleneck:
   - Update Google Business Profile URL to croko.co
   - Update Instagram/TikTok bios to croko.co
   - Update Wompi checkout redirect URL
   - Create/claim profiles on Colombian business directories
   - Outreach to anyone linking to old domain
6. Resolve DNS warnings on old domain entries in Vercel
7. Mobile LCP optimization (~11s → <4s) — separate performance track

### Next checkpoint

**May 27, 2026** — one week after manual indexing batch. Expect to see:
- "Última lectura" advanced on most of the 9 priority URLs
- Some movement out of "Rastreada: actualmente sin indexar" (best case: 12 → 6–8)
- 4 Descubierta URLs: at least 1–2 should have been crawled
- Error de redirección: should drop to 0 after Validar Corrección completes

If movement is < expected, the next lever is the internal-linking fix (step 3) and committing to `/sobre-nosotros` (step 4).

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
| **May 20** | **1** | **19** (12 Rastreada + 4 Descubierta + 2 Redirect + 1 Error redirect) | TBD |

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

### Short-term (next 1–2 weeks) — **superseded by May 20 action plan above**

- [x] **Wait for sitemap re-fetch + re-crawl cycle** (May 11 + 3–14 days) — completed May 20 assessment: re-crawls happened, **no reclassification**
- [ ] **Trigger pulled May 20**: request indexing manually for 9 priority URLs (full list in action plan above)
- [ ] **Add internal links to `/belly-painting-medellin`** — orphan **confirmed in code** via grep on May 20. Zero `<Link>` or `<a href>` outside self-references. Add body links from `/`, footer NAP `<address>`, and 2 Medellín-relevant blog posts.
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

**Current bottleneck (May 20):** Domain authority. The May 11 sitemap-lastmod fix produced fresh re-crawls of stuck URLs but **zero reclassification** — Google is crawling fine and explicitly declining to index. Sitemap freshness alone is not enough. Remaining levers are: (a) manual indexing requests (today's batch — borderline URLs only), (b) internal linking — `/belly-painting-medellin` orphan fix is high leverage, (c) `/sobre-nosotros` for E-E-A-T, (d) backlinks for authority.

**Next checkpoint:** May 27, 2026 — one week after manual indexing batch. Watch for: (1) Rastreada count dropping from 12, (2) Descubierta URLs getting their first crawl, (3) Error de redirección dropping to 0 after Validar Corrección. See "Action plan" section for the full breakdown.
