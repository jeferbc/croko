# Croko.co Indexation Status

**Last updated:** March 12, 2026
**Property:** croko.co (domain property)
**Primary domain:** www.croko.co

---

## Current State (March 12)

| Metric | Value |
|--------|-------|
| Pages indexed | **1** |
| Pages not indexed | **12** |
| Daily impressions (recent) | ~1-11 |
| Migration status | **In progress** (GSC banner: "Uno de tus otros sitios web se está trasladando a este") |
| Old domain (maquillajeembarazadas.com) | **De-indexed** (no longer appears in Google) |

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

## Remaining Actions

- [ ] **Request re-indexing** for 2 stale pages (crawled before fixes):
  - `https://www.croko.co/blog` (last crawled Feb 27)
  - `https://www.croko.co/blog/salud-mental-embarazo-croko-tranquilamente` (last crawled Feb 7)
- [ ] **Build backlinks** (main bottleneck — domain has zero authority):
  - [ ] Update Google Business Profile URL to croko.co
  - [ ] Update Instagram/TikTok bios to croko.co
  - [ ] Update Wompi checkout redirect URL
  - [ ] Create/claim profiles on Colombian business directories
  - [ ] Reach out to anyone linking to old domain to update links
- [ ] Resolve DNS warnings on old domain entries in Vercel
- [ ] **Check again around March 20** — if no improvement after 2.5 weeks, inspect individual pages via "Test Live URL" in GSC

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
| Build backlinks | Domain authority grows | 1-3 months |

**Current bottleneck:** Domain authority. Google is crawling pages but not indexing because croko.co is a new domain with no backlinks. The 301 redirects and Change of Address should transfer authority within 2-4 weeks from March 3.

**Next checkpoint:** March 20, 2026 — if still at 1 indexed page, investigate deeper with "Test Live URL" inspections.
