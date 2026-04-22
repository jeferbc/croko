# Sitemap Audit — croko.co
**Date:** 2026-04-18
**Last progress check:** 2026-04-22
**Source file:** `src/app/sitemap.js`

## Progress Snapshot (2026-04-22)
- [x] **#5 Confirm noindex on /gracias** — `src/app/gracias/layout.js:4` has `robots: 'noindex, nofollow'`
- [x] **#1 Add missing legal pages** — `/politica-de-privacidad`, `/terminos-y-condiciones`, `/politica-cookies` added to `src/app/sitemap.js` with realistic git-log-derived `lastModified` dates.
- [x] **#2 Remove `priority` fields** — all `priority` keys removed. Next.js sitemap now emits only `<loc>` and `<lastmod>`, matching Google's guidance.
- [x] **#3 Fix hardcoded lastmod dates** — homepage `2026-04-22`, `/belly-painting-medellin` `2026-04-20`, legal pages on their actual commit dates, `/blog` now **derived dynamically** from the latest `BlogData` post date via `reduce()` (currently `2026-04-20` via `pinta-barriguitas-colombia`).
- [x] **#5 (remaining) /feed is `public/feed/google-shopping.xml`** — a static Google Merchant product feed, not an HTML route. `noindex` meta tags don't apply to XML feeds; Google handles shopping feeds via Merchant Center. No action needed.
- [ ] #4 Confirm `/maquillaje-para-embarazadas` canonical strategy — `/blog/maquillaje-para-embarazadas` is already filtered out in the blog-post loop (`src/app/sitemap.js` `.filter(post.slug !== 'maquillaje-para-embarazadas')`). Still need to verify the blog route itself doesn't render if someone hits `/blog/maquillaje-para-embarazadas` directly (separate from sitemap concern).

**Completion: 5 / 6 (83%)**

---

## Validation Checks

| Check | Result | Notes |
|-------|--------|-------|
| Sitemap exists (200) | PASS | `https://www.croko.co/sitemap.xml` |
| Valid XML | PASS | Well-formed, correct namespace |
| Submitted in robots.txt | PASS | `Sitemap: https://www.croko.co/sitemap.xml` |
| URL count under 50,000 | PASS | 11 URLs |
| All URLs return 200 | PASS | Verified with follow-redirects |
| No redirected URLs in sitemap | PASS | None detected |
| `priority` tag used | INFO | Ignored by Google — can be removed |
| `lastmod` present | PASS | All URLs have lastmod |
| `lastmod` realistic | PARTIAL | See notes below |
| Missing canonical pages | FAIL | 3 pages absent — see gaps section |

---

## lastmod Notes

- Homepage, `/belly-painting-medellin`, and `/blog` all carry `2026-04-18` (today's date), hardcoded as `new Date('2026-04-18')` in `sitemap.js`. This will become stale immediately unless updated on each deploy or tied to actual content changes. Google treats identical or suspiciously fresh dates on unrelated pages as a quality signal to ignore lastmod entirely.
- Blog post dates appear to come from `post.date` in `BlogData`, which is correct behavior.
- `/politica-devoluciones` has `2025-10-01` — plausible as a one-time date.

---

## Coverage Gaps (pages in app router but absent from sitemap)

| Page | Route | HTTP | Action |
|------|-------|------|--------|
| Privacy policy | `/politica-de-privacidad` | 200 | Add to sitemap |
| Terms & conditions | `/terminos-y-condiciones` | 200 | Add to sitemap |
| Cookie policy | `/politica-cookies` | 200 | Add or intentionally exclude |

**`/gracias`** (thank-you page) and **`/feed`** (Google Shopping XML) should NOT be in the sitemap — `/gracias` is a post-conversion page with no indexing value, and `/feed` is a data feed, not a content page. Verify both carry `noindex` headers or meta tags.

---

## Extra / Anomalous Entries

- `/maquillaje-para-embarazadas` appears in the sitemap as a standalone landing page (`priority 0.8`) but the code explicitly filters out the matching blog slug. Verify this route has a distinct `page.js` under `src/app/maquillaje-para-embarazadas/` and is not duplicating blog content at `/blog/maquillaje-para-embarazadas`. If the blog slug exists and both URLs are live, a canonical tag pointing `/blog/maquillaje-para-embarazadas` to `/maquillaje-para-embarazadas` (or a redirect) is required.

---

## Quality Gate — Location Pages

1 location page (`/belly-painting-medellin`). No warning threshold triggered.

---

## Recommendations (Priority Order)

### 1. Add missing legal pages to sitemap.js
```js
{ url: `${baseUrl}/politica-de-privacidad`, lastModified: new Date('2025-10-01'), },
{ url: `${baseUrl}/terminos-y-condiciones`, lastModified: new Date('2025-10-01'), },
// Add /politica-cookies only if it has substantive content and is indexable
```

### 2. Remove `priority` from all entries
`priority` has been ignored by Google since ~2019 and adds noise. Next.js sitemap output omits it by default when not specified — just delete the `priority` fields from `sitemap.js`.

### 3. Fix hardcoded `lastmod` dates for dynamic pages
Replace the hardcoded `new Date('2026-04-18')` on the homepage, `/blog`, and `/belly-painting-medellin` with either:
- The actual last content-edit date (static string, updated manually on real changes), or
- For `/blog`, derive from the most recent `BlogData` entry date so it updates automatically.

```js
// Example: auto-derive /blog lastmod from newest post
const latestPost = BlogData.reduce((a, b) => new Date(a.date) > new Date(b.date) ? a : b)
{ url: `${baseUrl}/blog`, lastModified: new Date(latestPost.date) }
```

### 4. Confirm /maquillaje-para-embarazadas canonical strategy
Audit whether `/blog/maquillaje-para-embarazadas` is publicly accessible. If yes, add a canonical pointing to the landing page version, or add a redirect, to avoid duplicate content split between two URLs.

### 5. Confirm noindex on /gracias and /feed
These should never appear in the sitemap. Ensure Next.js route metadata includes `robots: { index: false }` or an equivalent `X-Robots-Tag` header.
