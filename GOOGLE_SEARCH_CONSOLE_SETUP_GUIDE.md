# Google Search Console Setup & Monitoring Guide
## Maquillaje Para Embarazadas Landing Page

---

## 📋 Pre-Launch Checklist

Before submitting to Google Search Console, verify everything is ready:

- [x] Landing page live at `/maquillaje-para-embarazadas`
- [x] Schema.org markup implemented (Article, FAQ, Breadcrumb, Organization)
- [x] Cross-sell section with belly painting gallery
- [x] Sitemap.xml generated dynamically
- [x] Robots.txt configured
- [x] Meta tags optimized
- [x] Mobile responsive
- [x] Internal linking from blog
- [ ] Deploy to production (www.maquillajeembarazadas.com)

---

## 🚀 Step 1: Deploy to Production

Before submitting to Google Search Console, deploy your changes:

```bash
# Build for production
npm run build

# Or deploy via your hosting platform (Vercel, Netlify, etc.)
```

**Verify these URLs are accessible:**
- https://www.maquillajeembarazadas.com/maquillaje-para-embarazadas
- https://www.maquillajeembarazadas.com/sitemap.xml
- https://www.maquillajeembarazadas.com/robots.txt

---

## 🔍 Step 2: Test Your Structured Data

Before submitting to Google, validate your Schema markup:

### Option A: Google Rich Results Test
1. Go to: https://search.google.com/test/rich-results
2. Enter your URL: `https://www.maquillajeembarazadas.com/maquillaje-para-embarazadas`
3. Click "Test URL"
4. Verify you see:
   - ✅ Article schema detected
   - ✅ FAQ schema detected
   - ✅ BreadcrumbList detected
   - ✅ Organization schema detected

### Option B: Schema Markup Validator
1. Go to: https://validator.schema.org/
2. Paste your URL
3. Check for any errors or warnings

---

## 📊 Step 3: Google Search Console Submission

### 3.1 Access Google Search Console

1. Go to: https://search.google.com/search-console
2. Log in with your Google account
3. If `maquillajeembarazadas.com` is not already added:
   - Click "Add Property"
   - Choose "URL prefix": `https://www.maquillajeembarazadas.com`
   - Verify ownership (DNS, HTML file, or Google Analytics)

### 3.2 Submit Sitemap

1. In Google Search Console, go to **Sitemaps** (left menu)
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Status should show as "Success" within minutes

Expected result:
```
✅ Sitemap submitted successfully
📄 URLs discovered: ~10-15 (depending on blog posts)
```

### 3.3 Request Indexing for Landing Page

This is **critical** for immediate visibility:

1. Go to **URL Inspection** (left menu)
2. Enter: `https://www.maquillajeembarazadas.com/maquillaje-para-embarazadas`
3. Click "Test Live URL"
4. If valid, click **"Request Indexing"**
5. Google will prioritize crawling this page

**Expected timeline:**
- Immediate crawl: Within 24-48 hours
- Ranking improvements: 1-2 weeks
- Full ranking potential: 4-8 weeks

---

## 📈 Step 4: Monitoring & Tracking Setup

### 4.1 Google Search Console Metrics to Monitor

Track these metrics weekly in Google Search Console:

**Performance Report** (`Performance` → `Search Results`)

| Metric | Baseline (Week 1) | Target (Month 1) | Target (Month 3) |
|--------|-------------------|------------------|------------------|
| **Impressions** | 188 | 250-300 | 400-500 |
| **Clicks** | 0 | 15-23 | 30-50 |
| **CTR** | 0% | 8-12% | 10-15% |
| **Average Position** | #1 | #1-3 | #1-2 |

**Key queries to monitor:**
- "maquillaje para embarazadas" (primary)
- "maquillaje seguro embarazo"
- "cosméticos embarazo"
- "productos belleza prenatal"
- "maquillaje hipoalergénico embarazadas"

### 4.2 Create Custom Dashboard

In Google Search Console:

1. Go to **Performance**
2. Click "Date: Last 3 months"
3. Add filters:
   - **Page**: Contains `/maquillaje-para-embarazadas`
4. Enable metrics:
   - Total clicks
   - Total impressions
   - Average CTR
   - Average position
5. Export weekly to track progress

### 4.3 Set Up Google Analytics (Optional but Recommended)

If you have Google Analytics 4:

1. Create custom event for cross-sell clicks:
```javascript
// Track belly painting CTA clicks
gtag('event', 'cross_sell_click', {
  'event_category': 'engagement',
  'event_label': 'belly_painting_cta',
  'value': 1
});
```

2. Monitor:
   - Landing page traffic: `/maquillaje-para-embarazadas`
   - Bounce rate (target: <60%)
   - Time on page (target: >2 minutes)
   - Conversion: clicks to `/kit` page

---

## 🎯 Step 5: Success Metrics & Goals

### Month 1 Goals (Weeks 1-4)

**SEO Performance:**
- ✅ Page indexed by Google
- ✅ CTR improves from 0% to 8-12%
- ✅ 15-23 clicks/month from "maquillaje para embarazadas"
- ✅ FAQ snippets appear in search results

**Business Impact:**
- 🎯 3-5 belly painting leads from landing page
- 🎯 10-15 clicks to `/kit` page

### Month 3 Goals (Weeks 1-12)

**SEO Performance:**
- ✅ CTR stabilizes at 10-15%
- ✅ 30-50 clicks/month
- ✅ Ranking for 5+ related keywords
- ✅ Featured snippets for FAQs

**Business Impact:**
- 🎯 8-12 belly painting leads/month
- 🎯 25-35 clicks to `/kit` page
- 🎯 2-4 kit purchases directly from landing page

---

## 🔧 Troubleshooting

### Issue: Page not indexed after 1 week

**Solutions:**
1. Check **Coverage Report** in GSC for errors
2. Verify robots.txt isn't blocking: https://www.maquillajeembarazadas.com/robots.txt
3. Re-submit via URL Inspection tool
4. Check for manual actions: GSC → Security & Manual Actions

### Issue: CTR remains at 0%

**Solutions:**
1. Verify title tag is compelling (check in GSC Performance)
2. Check if meta description displays correctly
3. Ensure page appears in search results for target keyword
4. Consider A/B testing different titles/descriptions

### Issue: FAQ snippets not showing

**Solutions:**
1. Validate FAQ schema: https://validator.schema.org/
2. Wait 2-4 weeks (rich snippets take time)
3. Ensure FAQs are visible in HTML (not hidden)
4. Check Google's guidelines: https://developers.google.com/search/docs/appearance/structured-data/faqpage

---

## 📧 Weekly Monitoring Routine (10 minutes)

**Every Monday:**

1. **Check Google Search Console:**
   - Performance for `/maquillaje-para-embarazadas`
   - Note impressions, clicks, CTR, position
   - Check for new queries ranking

2. **Review Landing Page:**
   - Test all CTAs still work
   - Check gallery loads properly
   - Verify mobile experience

3. **Track Conversions:**
   - How many clicks to `/kit` page?
   - Any contact form submissions mentioning "maquillaje"?
   - WhatsApp inquiries referencing the article?

4. **Document Progress:**
```
Week X Report:
- Impressions: XXX
- Clicks: XX
- CTR: X.X%
- Position: #X
- Leads generated: X
- Notes: [Any observations]
```

---

## 🎉 Expected Results Timeline

### Week 1-2: Initial Crawl
- ✅ Page appears in Google index
- ✅ Ranking for exact match "maquillaje para embarazadas"
- 📊 0-5 clicks

### Week 3-4: Early Traction
- ✅ FAQ snippets may start appearing
- ✅ CTR improves to 5-8%
- 📊 10-15 clicks

### Month 2: Growth Phase
- ✅ Ranking for related keywords
- ✅ CTR reaches 10-12%
- 📊 20-30 clicks
- 🎯 3-5 leads/month

### Month 3: Maturity
- ✅ Featured snippets for FAQs
- ✅ CTR stabilizes at 12-15%
- 📊 30-50 clicks
- 🎯 8-12 leads/month

---

## 📝 Important Notes

1. **Patience is Key:** SEO improvements take 4-8 weeks minimum
2. **Monitor Competitors:** Check who else ranks for your keywords
3. **Content Updates:** Refresh content every 3-6 months to maintain rankings
4. **Mobile-First:** Google prioritizes mobile experience
5. **Core Web Vitals:** Monitor page speed in GSC

---

## 🆘 Support Resources

- Google Search Console Help: https://support.google.com/webmasters
- Schema.org Documentation: https://schema.org/
- Google Rich Results Test: https://search.google.com/test/rich-results
- Web.dev (Performance): https://web.dev/measure/

---

## 🎯 Quick Reference: URLs to Monitor

| URL | Purpose | Expected Traffic |
|-----|---------|------------------|
| `/maquillaje-para-embarazadas` | Landing page | 188 impressions → 15-50 clicks/month |
| `/kit` | Conversion page | 10-30 clicks from landing page |
| `/blog` | Internal linking | Support for landing page SEO |
| `/sitemap.xml` | SEO crawling | Updated automatically |

---

**Ready to launch?** Follow the steps above in order, and track your progress weekly!

Good luck! 🚀
