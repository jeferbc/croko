# SEO Monitoring Plan: URL Migration `/kit` → `/kit-pinta-barriguitas`

**Migration Date:** November 12, 2025
**Old URL:** https://www.maquillajeembarazadas.com/kit
**New URL:** https://www.maquillajeembarazadas.com/kit-pinta-barriguitas
**Redirect Type:** 308 Permanent Redirect

---

## 📊 Monitoring Timeline

### Week 1-2: Critical Monitoring Period
- **Daily checks** for technical issues
- Monitor Search Console for crawl errors
- Track initial indexing status

### Week 3-4: Transition Period
- **Every 2-3 days** monitoring
- Compare traffic patterns
- Check ranking positions

### Week 5-8: Stabilization Period
- **Weekly checks**
- Confirm full migration complete
- Analyze long-term impact

### After Week 8: Normal Monitoring
- Return to regular SEO monitoring schedule

---

## ✅ Daily Checklist (Days 1-14)

### Day 1 (Today - Nov 12, 2025)
- [x] Deploy changes to production
- [x] Verify 308 redirect working
- [x] Verify new URL loads correctly
- [x] Submit updated sitemap to GSC
- [x] Request indexing for new URL
- [ ] Take baseline screenshot of GSC performance (last 28 days)
- [ ] Document current rankings for key terms

### Days 2-7 (Nov 13-19)
Check daily:
- [ ] **Technical Health Check** (5 min)
  ```bash
  # Test redirect still working
  curl -I https://www.maquillajeembarazadas.com/kit | grep "308"

  # Test new URL still loading
  curl -s -o /dev/null -w "%{http_code}" https://www.maquillajeembarazadas.com/kit-pinta-barriguitas
  ```
  Expected: 308 redirect + 200 OK on new URL

- [ ] **Google Search Console** (10 min)
  - Navigate to: Coverage Report
  - Check for new errors related to `/kit` or `/kit-pinta-barriguitas`
  - Look for "Redirect error" or "404" errors
  - Review "Page Indexing" status

- [ ] **Indexing Status** (5 min)
  - URL Inspection for new URL
  - Check if Google has indexed the new URL
  - Verify old URL shows redirect in inspection

### Days 8-14 (Nov 20-26)
Continue daily checks above, plus:
- [ ] **Traffic Comparison** (Google Analytics)
  - Compare page views week-over-week
  - Note any significant drops (>20% = investigate)
  - Check bounce rate and engagement metrics

---

## 📈 Weekly Deep Dive (Weeks 2-8)

### Every Monday:

#### 1. Google Search Console Analysis (15 min)
- **Performance Report:**
  - Filter by page: `/kit-pinta-barriguitas`
  - Compare to previous period
  - Document: Impressions, Clicks, CTR, Position

- **Create comparison table:**
  | Metric | Old URL (Pre-migration) | New URL (Current) | Change |
  |--------|-------------------------|-------------------|--------|
  | Impressions | ___ | ___ | ___% |
  | Clicks | ___ | ___ | ___% |
  | CTR | ___% | ___% | ___% |
  | Avg Position | ___ | ___ | ___ |

#### 2. Manual Search Tests (10 min)
Test these search queries in incognito mode:
- "kit maquillaje embarazadas"
- "kit belly painting colombia"
- "pinta barriguitas embarazadas"
- "kit pintar barriga embarazada"

Document position for each query.

#### 3. Backlink Check (5 min)
- Review if any external sites link to `/kit`
- If found, consider reaching out to update to new URL
- Document any high-value backlinks

#### 4. Site: Search Check (2 min)
```
site:maquillajeembarazadas.com/kit-pinta-barriguitas
```
Verify Google shows the new URL in search results.

---

## 🚨 Red Flags - Take Action Immediately If:

### Critical Issues:
- [ ] **404 errors** on new URL
- [ ] **Redirect loop** detected
- [ ] **Redirect returns error** (not 308)
- [ ] **Traffic drops >30%** in first week
- [ ] **GSC shows "Redirect error"** in coverage report

### Action Steps:
1. Document the exact error
2. Test both URLs immediately
3. Check server logs if available
4. Consider rollback if critical business impact
5. Contact hosting support if needed

### Medium Priority Issues:
- [ ] Traffic drops 15-30% (monitor closely)
- [ ] New URL not indexed after 7 days
- [ ] Old URL still appearing in search results after 14 days
- [ ] CTR drops significantly

### Action Steps:
1. Re-submit sitemap
2. Request indexing again for new URL
3. Check robots.txt isn't blocking
4. Verify canonical tags if applicable

---

## 📝 Data Collection Template

### Baseline Data (Before Migration - Nov 12, 2025)

**From Google Search Console (Last 28 days):**
- Total Impressions: ___________
- Total Clicks: ___________
- Average CTR: ___________
- Average Position: ___________

**Top Keywords:**
1. ___________: Position ___, Clicks ___
2. ___________: Position ___, Clicks ___
3. ___________: Position ___, Clicks ___

**From Google Analytics (Last 28 days):**
- Page Views: ___________
- Unique Page Views: ___________
- Avg. Time on Page: ___________
- Bounce Rate: ___________%

---

### Week 1 Progress (Nov 13-19, 2025)

**Date: Nov ___, 2025**
- Redirect Status: ⬜ Working ⬜ Issues
- New URL Status: ⬜ 200 OK ⬜ Issues
- GSC Errors: ⬜ None ⬜ Found: ___________
- Indexing Status: ⬜ Indexed ⬜ Pending ⬜ Not Found

**Notes:**
_______________________________________
_______________________________________

---

### Week 2 Progress (Nov 20-26, 2025)

**Google Search Console Data:**
- Total Impressions: ___________  (Δ ___%)
- Total Clicks: ___________  (Δ ___%)
- Average CTR: ___________  (Δ ___%)
- Average Position: ___________  (Δ ___)

**Issues Found:**
⬜ None
⬜ Issue: ___________________________

**Actions Taken:**
_______________________________________

---

### Week 4 Progress (Dec 4-10, 2025)

**Google Search Console Data:**
- Total Impressions: ___________  (Δ ___%)
- Total Clicks: ___________  (Δ ___%)
- Average CTR: ___________  (Δ ___%)
- Average Position: ___________  (Δ ___)

**Migration Status:**
⬜ Complete - No issues
⬜ In Progress - Monitoring
⬜ Issues Detected - Action Required

**Notes:**
_______________________________________

---

### Week 8 Progress (Jan 8-14, 2026)

**Final Assessment:**

**Google Search Console Data:**
- Total Impressions: ___________  (Δ ___% vs baseline)
- Total Clicks: ___________  (Δ ___% vs baseline)
- Average CTR: ___________  (Δ ___% vs baseline)
- Average Position: ___________  (Δ ___ vs baseline)

**Migration Success Criteria:**
- ⬜ Traffic maintained or increased
- ⬜ Rankings maintained or improved
- ⬜ New URL fully indexed
- ⬜ Old URL showing redirect in GSC
- ⬜ No technical errors
- ⬜ Improved CTR from better URL

**Overall Assessment:**
⬜ **Success** - Migration met all goals
⬜ **Partial Success** - Some areas need improvement
⬜ **Needs Attention** - Action required

**Long-term Recommendations:**
_______________________________________
_______________________________________

---

## 🔧 Quick Reference Commands

### Test Redirect (anytime):
```bash
curl -I https://www.maquillajeembarazadas.com/kit
```
Should return: `HTTP/2 308` and `location: /kit-pinta-barriguitas`

### Test New URL (anytime):
```bash
curl -s -o /dev/null -w "%{http_code}" https://www.maquillajeembarazadas.com/kit-pinta-barriguitas
```
Should return: `200`

### Check Sitemap (anytime):
```bash
curl -s https://www.maquillajeembarazadas.com/sitemap.xml | grep "kit-pinta-barriguitas"
```
Should show the new URL with proper metadata

### Google Site Search:
```
site:maquillajeembarazadas.com/kit-pinta-barriguitas
```

---

## 📚 Resources

### Google Search Console Links:
- **Performance:** https://search.google.com/search-console/performance/search-analytics
- **Coverage:** https://search.google.com/search-console/coverage
- **URL Inspection:** https://search.google.com/search-console/inspect
- **Sitemaps:** https://search.google.com/search-console/sitemaps

### Expected Timeline:
- **Day 1-3:** Google discovers redirect
- **Day 3-7:** New URL gets indexed
- **Day 7-14:** Rankings begin stabilizing
- **Day 14-30:** Full transition of ranking signals
- **Day 30-60:** Long-term performance becomes clear

---

## 📞 Emergency Contact Info

If critical issues arise:
- Check hosting platform status: Vercel Status Page
- Review recent deployments: Vercel Dashboard
- Rollback option: `git revert` commit 282bb0ac
- Support: Document issue in GitHub or contact hosting support

---

## ✅ Success Indicators

### Short-term (Week 1-2):
- ✅ No 404 errors
- ✅ Redirect working consistently
- ✅ New URL indexed by Google
- ✅ No significant traffic drop (<15%)

### Medium-term (Week 3-4):
- ✅ Rankings maintained within 3 positions
- ✅ CTR improved or stable
- ✅ Old URL showing redirect in GSC
- ✅ No crawl errors

### Long-term (Week 5-8):
- ✅ Traffic matches or exceeds pre-migration levels
- ✅ Improved CTR from descriptive URL
- ✅ New URL ranking for additional keywords
- ✅ Better brand recognition

---

**Document Version:** 1.0
**Last Updated:** November 12, 2025
**Next Review Date:** November 19, 2025 (Week 1 Review)
