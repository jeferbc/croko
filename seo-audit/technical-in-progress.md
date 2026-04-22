# Technical SEO Audit — croko.co

**Date:** 2026-04-18
**Last progress check:** 2026-04-22
**Sources:** Lighthouse 13.0.2 (mobile, simulated 4G), live HEAD/GET checks.

## Progress Snapshot (2026-04-22)
- [x] Canonical trailing-slash mismatch — canonical now `https://www.croko.co/` in `src/app/layout.js:54`
- [ ] #1 LCP 6.77 s on mobile
- [ ] #2 95 KiB unused CSS in single bundle (94.8% waste)
- [ ] #3 No CSP; HSTS missing `includeSubDomains; preload`; no X-Frame-Options
- [ ] #4 35+ color-contrast failures + invalid heading order on homepage
- [ ] #5 Duplicate `<meta viewport>` in HTML

**Completion: 1 / 5 top issues (20%)**

## Summary

Strong Next.js foundation — HTTPS, canonical, meta description, title, responsive viewport, robots.txt + sitemap, SSR. Main technical debt is in **performance** (LCP 6.8s) and a handful of **security headers** that are easy wins. No indexation blockers were found.

---

## 1. Crawlability

- `/robots.txt` → 200. Minimal: `User-Agent: * / Allow: /` plus sitemap reference. ✓
- Sitemap: see `sitemap.md`. Three issues (missing legal pages, hardcoded lastmod, vestigial priority tags).
- No `disallow` directives, no trap for parameters — acceptable for this site size.
- **Medium:** Consider consolidating robots directives with optional explicit `Disallow` for `CCBot` / `cohere-ai` (training-only crawlers) while leaving inference crawlers open.

## 2. Indexability

- Homepage: no `noindex`, no `nofollow`. ✓
- `/gracias` is correctly `noindex` (task #25 shipped). ✓
- Canonical on `/` points to `https://www.croko.co` (no trailing slash). The page is actually served at `https://www.croko.co/`. **Low-severity mismatch** — Google normalises this, but for strict self-canonical hygiene make it match the served URL (`https://www.croko.co/`).

## 3. Security / HTTPS

| Header | Status | Recommendation |
|---|---|---|
| `strict-transport-security` | `max-age=63072000` — **no `includeSubDomains`, no `preload`** | Add `; includeSubDomains; preload` and submit to hstspreload.org once you're sure every subdomain is HTTPS-ready |
| Content-Security-Policy | **absent** | Start in `Content-Security-Policy-Report-Only` mode — you have many third-parties (GTM, Meta Pixel, ImageKit, youtube.com, server-side-tagging Cloud Run) so a strict policy requires tuning |
| X-Frame-Options / `frame-ancestors` | **absent** | Add `X-Frame-Options: SAMEORIGIN` or `frame-ancestors 'self'` in CSP |
| X-Content-Type-Options | (not seen) | Add `nosniff` |
| Referrer-Policy | (not seen) | `strict-origin-when-cross-origin` |

All HIGH priority for a commerce site processing contact/WhatsApp handoffs.

## 4. URL Structure

- Clean, hyphenated, lowercase, Spanish slugs (`/belly-painting-medellin`, `/blog/que-regalar-embarazada-ideas-significativas`). ✓
- No query-string duplication observed.
- **Watch:** `/maquillaje-para-embarazadas` listed in llms.txt as a standalone landing — verify no `/blog/maquillaje-para-embarazadas` duplicate exists. See sitemap.md.

## 5. Mobile Optimisation

- Viewport meta present, `width=device-width, initial-scale=1` (no `user-scalable=no`). ✓
- Lighthouse target-size audit PASSED.
- **Accessibility/UX issues flagged by Lighthouse on mobile** (impact SEO indirectly via Page Experience):
  - 35+ **color-contrast failures** on `#c0882f` gold text against white and on `#888` secondary text. Fix by darkening the brand gold used on body copy or using it only on ≥18pt/bold.
  - **Heading order invalid** — homepage jumps from H1 → H4 → H6 in places.
  - **Link without accessible name** — empty `<a href="#" aria-label="">` in the nav dropdown.
  - `<ul class="control-dots">` and `.thumbs` contain `<li role="button">` — violates list-child rule and fires `aria-allowed-role`.

## 6. Core Web Vitals (lab)

| Metric | Value | Target | Verdict |
|---|---|---|---|
| LCP | **6.77 s** | ≤2.5 s | ❌ Critical |
| FCP | 1.59 s | ≤1.8 s | ✓ |
| TBT | 227 ms | ≤200 ms | ⚠ Borderline |
| CLS | 0.036 | ≤0.1 | ✓ |
| INP (proxy: max-FID) | 165 ms | ≤200 ms | ✓ (but TBT suggests field INP will be higher) |

**LCP element:** `<img src=".../slider-bg_mKSrnghgQ.jpg?...">` in the hero. Breakdown: TTFB 89 ms → load delay 44 ms → load duration 192 ms → **element render delay 441 ms**. Most of the LCP time is render-blocked CSS, not the image itself.

Top levers (Lighthouse estimated savings):
1. **Reduce unused CSS** — 95 KiB on `/_next/static/css/1ad59dadac8b74a4.css` (94.8% unused). **LCP −450 ms, FCP −550 ms.**
2. **Render-blocking requests** — 8 CSS files block first paint; savings ~540 ms FCP.
3. **Serve responsive image sizes** — 142 KiB savings on `family_header`, `Catalogonuevo*`, `Fotokit*` (700px/900px source at 388px display). Task #29 trimmed to 700px; now drop to 600px and add a `srcset` breakpoint for 412px viewports. **LCP −450 ms.**
4. **Legacy JavaScript polyfills** — 78 KiB of Babel transforms (`regenerator`, `classes`, `spread`, `Array.from`, etc.) on `capiParamBuilder.bundle.js` and `fbevents.js`. Self-host `fbevents.js` is usually not practical; remove the `capi-automation` bundle if you already have server-side CAPI via Cloud Run tagging (`server-side-tagging-ekty4fj4fq-uc.a.run.app`). **LCP −150 ms.**
5. **Cache TTLs** — `fbevents.js` and `connect.facebook.net/signals/config` are served with 1,200,000-ms caching; YouTube thumbs 7,200,000 ms. ~421 KiB of repeat-view savings but not under your control.

Other notable diagnostics:
- Main-thread work 3.0 s with 1.4 s of script evaluation, 217 ms parse.
- Total JS transfer 839 KiB across 25 requests. GTM (152 KiB), gtag (173 KiB), Meta config (130 KiB), `fbevents.js` (99 KiB), capi param builder (65 KiB) dominate.
- 76 total requests, 1.73 MB transfer, 11 fonts preloaded.

## 7. JavaScript Rendering

- App Router pages render server-side by default. ✓
- Initial HTML contains `"seguras"` 2× — FAQ content is at least partially in the SSR output.
- **However,** `AccordionElementSection` and `PopularPosts` use `dynamic(..., { ssr: ... })`. Verify `ssr: true` explicitly; if false, their bodies are hydrated only after JS executes and are invisible to conservative crawlers.

## 8. Meta / Head

- Title (73 chars): "Kit Pinta Barriguitas | Kit Pintura Barriga Embarazada | Envío Gratis Colombia" — keyword-loaded but acceptable.
- Meta description (173 chars) — OK, fits within ~160–165 char truncation budget.
- OG/Twitter cards present. ✓
- Duplicate viewport meta tag emitted in HTML (`<meta name="viewport">` appears twice). **Low-severity.** Check the Next.js root layout for a duplicate Head import.
- Two duplicate favicon preload entries. **Low.**

## 9. Deprecations / Console

- 1 console warning: `AttributionReporting` API used by Facebook Pixel. Informational only.
- `fetchPriority="high"` is correctly applied to the LCP hero image. ✓

---

## Top 5 Technical Issues (Ranked)

| # | Severity | Issue | Effort | Impact |
|---|---|---|---|---|
| 1 | Critical | LCP 6.77 s on mobile — CSS render-blocks 540 ms, hero image 442 ms render delay | M | Page Experience signal, conversion |
| 2 | High | 95 KiB unused CSS in single bundle (94.8% waste) | L-M | LCP −450 ms, FCP −550 ms |
| 3 | High | No CSP; HSTS missing `includeSubDomains; preload`; no X-Frame-Options | S | Security signal, BP score |
| 4 | High | 35+ color-contrast failures + invalid heading order on homepage | M | A11y score 88 → 95, Page Experience |
| 5 | Medium | Canonical `croko.co` vs served `croko.co/` mismatch; duplicate `<meta viewport>` | S | Canonicalisation hygiene |
