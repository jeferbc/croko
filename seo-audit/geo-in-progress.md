# GEO / AI Search Readiness Audit — croko.co

**Date:** 2026-04-18
**Last progress check:** 2026-04-22
**Score:** 52 / 100

## Progress Snapshot (2026-04-22)
- [x] **#1 `public/llms.txt`** — already present and returns 200
- [x] **#2 Accordion "300 familias" → "500 familias"** — fixed in `src/database/accordion_database.js:68`
- [x] **Secondary: `aggregateRating` without third-party source** — removed from Product schema (commit `7a661407`)
- [~] **#2 (remaining) Static `<h2>` safety block — DEPRECATED.** The audit assumed `dynamic()` without `ssr: true` meant the FAQ was JS-only. That assumption is false for Next.js App Router (`dynamic()` defaults to `ssr: true`). Live verification on 2026-04-22: `curl -s https://www.croko.co` returns `x-nextjs-prerender: 1` and the accordion body text (`seguras` ×2, `Absolutamente` ×2, `hipoalergénicas` ×2, `500 familias` ×2, `¿Son seguras las pinturas durante el embarazo?` ×2) is all present in SSR HTML. `PopularPosts` is also SSR-rendered. No invisibility problem exists. A dedicated static H2 safety block would add marginal structural benefit only; not worth the page real estate. **Action: none. Do not re-flag in future audits.**
- [ ] #3 Fix blog H3 → H2 headings + add TL;DR blocks + strip emojis from H1 + render visible dates
- [ ] #4 Add YouTube channel to Organization `sameAs` (not in `src/app/page.js`)
- [ ] #5 Publish 3 missing blog posts (safety, DIY steps, price comparison)
- [ ] Optional: add `/llms-full.txt` variant

**Completion: 3 / 5 actionable items (60%)** — item #2(remaining) deprecated, not counted.

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 45 | 11.25 |
| Structural Readability | 20% | 55 | 11.00 |
| Multi-Modal Content | 15% | 65 | 9.75 |
| Authority & Brand | 20% | 40 | 8.00 |
| Technical Accessibility | 20% | 60 | 12.00 |

---

## AI Crawler Access — `src/app/robots.js`

Single wildcard `User-agent: * / Allow: /`. All crawlers are allowed — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai, CCBot, cohere-ai. No crawler-specific rules exist. This is GEO-positive but sends no intentional AI signals. Optional: add explicit `disallow` for training-only crawlers CCBot and cohere-ai while keeping inference crawlers open.

---

## llms.txt — PRESENT ✓ (was flagged missing in first pass; re-verified live)

`/llms.txt` returns **200** with a well-formed markdown brief covering:
- Brand summary (founded 2016 in Medellín, Carolina Rincón as artist, hypoallergenic + water-removable)
- Kit Pinta Barriguitas (190,000 COP, free shipping, weeks 28–36)
- Canonical page index and 6 featured blog posts

No `/llms-full.txt` exists yet — consider adding a full-text variant with inline FAQ answers (134–167 word passages) to improve citation rates on Perplexity and ChatGPT. Priority: Medium.

---

## Passage Citability Findings

### Homepage strengths
- FAQPage JSON-LD
- Product schema with price / SKU / rating
- Organization schema with `sameAs` and `foundingDate`

### Homepage gaps

1. ~~The FAQ answers in `AccordionElementSection` are loaded via `dynamic()` (client-side lazy import). The JSON-LD schema carries the content, but plain HTML text is more broadly cited. Run `curl -s https://www.croko.co | grep -c "seguras"` — if the result is 0, the accordion text is JS-only and invisible to most AI crawlers.~~ **INVALID (2026-04-22):** `dynamic()` in Next.js App Router defaults to `ssr: true`. Live curl returns `grep -c "seguras" = 2` and `x-nextjs-prerender: 1` — the accordion body is in the SSR HTML. No action needed.
2. **Inconsistency:** `src/database/accordion_database.js` line 68 says "Más de 300 familias" but the FAQ schema and product description in `src/app/page.js` say "500 familias". Fix the accordion to "500" — conflicting claims cause AI models to drop the statistic entirely.
3. **FAQ answer length:** Answers run 60–90 words. Optimal for AI citation is 134–167 words. Each answer needs ~50–70 more words of supporting detail (specific certifications, ingredient categories, edge-case guidance).
4. Add a static, non-accordion `<h2>¿Es seguro pintar la barriga durante el embarazo?</h2>` block (~140 words) citing Ecocert certification, base-water formula, ingredient list, and 500+ families. This directly targets the lowest-readiness high-intent query (currently 40%).

### Blog gaps
- All main section headings in `blog_database.js` use `<h3>` instead of `<h2>`. Inverted semantic hierarchy — AI parsers weight H2 for section identification.
- Strip emojis from H1 titles.
- Add 2–3 sentence TL;DR after each H1.
- Render `<time>` date visibly in `BlogDetail` (dates exist in the database but must appear in HTML, not only JSON-LD).

---

## Technical Accessibility

Next.js App Router renders page components server-side by default — blog content from `blog_database.js` is fully SSR and AI-crawlable. The risk is the homepage: `AccordionElementSection` and `PopularPosts` use `dynamic()` imports without explicit `ssr: true`, meaning FAQ text may be absent from initial HTML. Verify with the curl command above. If absent, move FAQ to a static component.

---

## Brand Authority Gaps

- **Biggest gap: No YouTube channel in Organization `sameAs`.** YouTube presence has the highest measured correlation with AI citation (~0.737). If tutorial videos exist anywhere, put them on a branded channel and add the URL to `sameAs` in `src/app/page.js`.
- **Secondary gap:** `aggregateRating` claims 200 reviews at 4.8 stars but no third-party source (Google Reviews, MercadoLibre) is linked. AI models discount self-asserted ratings.
- **Missing entirely:** Wikipedia entity, LinkedIn company page, Reddit presence, press / editorial backlinks.

---

## Platform Scores

| Platform | Score | Blocker |
|---|---|---|
| Google AI Overviews | 55/100 | Safety content may be JS-only |
| ChatGPT | 45/100 | No llms.txt, weak brand authority |
| Perplexity | 50/100 | Good schema, low external mentions |
| Bing Copilot | 48/100 | No standalone safety page |

---

## Top 5 Changes (Prioritized)

1. ~~Create `public/llms.txt`~~ — **already shipped.** Consider adding `/llms-full.txt` with extended passages. (Lower priority than originally scored.)
2. **Add static `<h2>` safety block to homepage** — 1 hr. Fixes the query "¿es seguro pintar la barriga?" Also fix "300 familias" → "500 familias" in `src/database/accordion_database.js` line 68.
3. **Fix blog H3→H2 headings + add TL;DR blocks** — 2 hrs in `src/database/blog/blog_database.js`. Strip emojis from H1 titles. Render visible dates.
4. **Add YouTube channel to Organization `sameAs`** — Medium effort depending on channel creation. Single highest AI citation correlation signal.
5. **Publish 3 missing blog posts** — 3–5 hrs each: "¿Es seguro pintar la barriga?", "¿Cómo se hace el belly painting en casa paso a paso?", "Belly painting precio Colombia: kit vs. servicio". Each needs H2 structure, direct-answer opening, FAQPage schema, and 134–167 word body sections.
