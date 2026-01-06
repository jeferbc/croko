# Website Changes for Meta Pixel Appeal - Final Priority List

**Goal:** Remove health-related language that triggers Meta's health data restrictions  
**Strategy:** Fix highest-impact items first, keep urgency messaging  
**Timeline:** Complete before filing appeal OR before launching WhatsApp ads

---

## Understanding the Problem

| Trigger | Risk Level | Action |
|---------|------------|--------|
| Domain: `maquillajeembarazadas.com` | 🔴 Highest | Long-term: migrate to croko.co |
| "100% Seguro Durante el Embarazo" | 🔴 High | **REMOVE** |
| "Salud Mental en el Embarazo" blog | 🔴 High | **REMOVE from carousel** |
| "hipoalergénicas / dermatológicamente probadas" | 🟡 Medium | **REMOVE** |
| "Maquillaje Seguro Para Embarazadas" blog | 🟡 Medium | **RENAME** |
| "28-36 semanas" | 🟡 Medium | ⏸️ **KEEP for now** |

---

## ✅ PHASE 1: Must Change (Before Appeal)

### Change 1: Counter Badge - Safety Claim
**Page:** Kit page (`/kit-pinta-barriguitas`)  
**Location:** Counter badges section (4 icons below product)

```jsx
// ❌ BEFORE
<h6 className="count-desc text-center">100% Seguro Durante el Embarazo</h6>

// ✅ AFTER
<h6 className="count-desc text-center">+300 Familias Felices</h6>
```

---

### Change 2: Product Section H2
**Page:** Kit page (`/kit-pinta-barriguitas`)  
**Location:** Product details section

```jsx
// ❌ BEFORE
<h2>Pinturas seguras para embarazadas</h2>

// ✅ AFTER
<h2>Pinturas certificadas para body art</h2>
```

---

### Change 3: Remove "Salud Mental" Blog from Carousel
**Page:** Homepage (`/`) AND Kit page (`/kit-pinta-barriguitas`)  
**Location:** "Publicaciones Recientes" blog carousel

**Action:** Remove this post from the featured posts array:
- Title: "Salud Mental en el Embarazo: Un Abrazo para Mamás con Croko y Tranquilamente"
- URL: `/blog/salud-mental-embarazo-croko-tranquilamente`

**Why:** "Salud Mental" (Mental Health) is an explicit health topic that Meta flags.

---

### Change 4: Rename "Maquillaje Seguro" Blog
**Page:** Homepage AND Kit page (blog carousel)  
**Location:** Blog post title

```
// ❌ BEFORE
Title: "Maquillaje Seguro Para Embarazadas: Guía Completa 2025"
URL: /maquillaje-para-embarazadas

// ✅ AFTER
Title: "Maquillaje Artístico Corporal: Guía Completa 2025"
URL: /maquillaje-artistico-corporal (optional, set up 301 redirect)
```

---

### Change 5: FAQ Answer - Paint Safety
**Page:** Kit page (`/kit-pinta-barriguitas`)  
**Location:** FAQ section, first question + FAQ Schema JSON-LD

```
// ❌ BEFORE
"¡Absolutamente! Nuestras pinturas hipoalergénicas son especialmente 
formuladas para pieles sensibles y 100% seguras durante el embarazo. 
Son dermatológicamente probadas, no tóxicas, de uso cosmético corporal..."

// ✅ AFTER
"¡Absolutamente! Nuestras pinturas son de uso cosmético corporal, 
fabricadas con ingredientes vegetales, ceras y minerales de alta 
pureza, sin perfume. Son no tóxicas y se remueven fácilmente con 
agua y jabón. Más de 300 familias las han usado para crear hermosos 
recuerdos."
```

**⚠️ CRITICAL:** Also update the FAQ Schema JSON-LD in the `<head>` to match!

---

### Change 6: FAQ Answer - Kit Contents
**Page:** Kit page (`/kit-pinta-barriguitas`)  
**Location:** FAQ section, last question + FAQ Schema JSON-LD

```
// ❌ BEFORE
"...15 colores de pinturas hipoalergénicas de uso cosmético..."

// ✅ AFTER
"...15 colores de pinturas de uso cosmético corporal..."
```

---

### Change 7: Homepage Hero Subtext
**Page:** Homepage (`/`)  
**Location:** Hero section, below main heading

```jsx
// ❌ BEFORE
<p>Celebra tu embarazo con arte y disfruta de un momento de relajación, 
mientras tu bebé es estimulado por el cosquilleo que producen los pinceles.</p>

// ✅ AFTER
<p>Celebra este momento especial con arte y disfruta de una experiencia 
creativa única, mientras creas recuerdos inolvidables en familia.</p>
```

**Why:** "bebé es estimulado" implies developmental/health benefits.

---

## ⏸️ KEEP FOR NOW (Don't Change)

### Keep: "28-36 semanas" Urgency Text
**Pages:** Kit page header trust badge, Sticky CTA  
**Reason:** Creates important sales urgency, medium risk compared to other issues

```html
<!-- KEEP AS-IS -->
<span>Momento ideal: 28-36 semanas</span>
```

---

### Keep: FAQ Timing Answer (Partial)
**Page:** Kit page FAQ  
**Action:** Keep the weeks reference but remove "tercer trimestre"

```
// ✅ ACCEPTABLE (keep weeks, remove clinical term)
"El momento ideal es entre las semanas 28-36, cuando la barriga está 
más redonda y la mamá se siente cómoda. Es perfecto como actividad 
de baby shower o como momento especial antes de que llegue el bebé."
```

---

### Keep: Meta Keywords
**Reason:** SEO value, domain already triggers categorization anyway

---

### Keep: Meta Description "pinturas seguras"
**Reason:** Lower priority, can change in Phase 2 if needed

---

## 📋 Implementation Checklist

### For Jefferson:

**Kit Page (`/kit-pinta-barriguitas`):**
- [ ] Change 1: Counter badge "100% Seguro Durante el Embarazo" → "+300 Familias Felices"
- [ ] Change 2: H2 "Pinturas seguras para embarazadas" → "Pinturas certificadas para body art"
- [ ] Change 5: FAQ safety answer - remove "hipoalergénicas", "pieles sensibles", "dermatológicamente probadas", "100% seguras durante el embarazo"
- [ ] Change 5b: Update FAQ Schema JSON-LD to match new safety answer
- [ ] Change 6: FAQ kit contents - remove "hipoalergénicas"
- [ ] Change 6b: Update FAQ Schema JSON-LD to match

**Homepage (`/`):**
- [ ] Change 3: Remove "Salud Mental en el Embarazo" blog from carousel
- [ ] Change 4: Rename "Maquillaje Seguro Para Embarazadas" blog title
- [ ] Change 7: Hero subtext - remove "bebé es estimulado"

**Both Pages:**
- [ ] Remove "Salud Mental" blog from carousels (appears on both)

**After Changes:**
- [ ] Deploy to production
- [ ] Clear CDN/Vercel cache
- [ ] Verify changes are live on both pages
- [ ] Take screenshots for appeal evidence

---

## 📊 Summary Table

| Item | Page | Action | Priority |
|------|------|--------|----------|
| "100% Seguro Durante el Embarazo" | Kit | Change to "+300 Familias Felices" | 🔴 High |
| "Pinturas seguras para embarazadas" | Kit | Change to "certificadas para body art" | 🔴 High |
| "Salud Mental" blog in carousel | Both | Remove from carousel | 🔴 High |
| "Maquillaje Seguro" blog title | Both | Rename to "Artístico Corporal" | 🟡 Medium |
| FAQ: "hipoalergénicas" etc. | Kit | Remove health terms | 🟡 Medium |
| FAQ Schema JSON-LD | Kit | Update to match visible text | 🟡 Medium |
| Hero: "bebé es estimulado" | Home | Rewrite subtext | 🟡 Medium |
| **"28-36 semanas"** | Kit | **⏸️ KEEP** | - |
| Meta description | Both | **⏸️ KEEP for now** | - |

---

## 🎯 What This Achieves

**Removes:**
- Direct pregnancy health safety claims
- Medical/clinical terminology (hypoallergenic, dermatologically tested)
- Mental health topic from featured content
- Developmental claims about baby

**Keeps:**
- Urgency messaging (28-36 semanas)
- Product quality messaging
- SEO keywords
- Sales conversion flow

---

## 📝 Appeal Language (After Changes)

Once changes are deployed, use this in your Meta appeal:

> "We sell art supplies for decorative body painting photography—specifically 
> paint kits with stencils, brushes, and cosmetic-grade body paints. We have 
> audited our website and removed health-related terminology. Our products 
> are creative art supplies marketed for family memory-making activities 
> and photography, not health or medical products. We do not make health 
> claims or provide health advice. Purchasing our kit indicates interest 
> in artistic activities, not any health condition."

---

## 🔄 Phase 2 (If Appeal Rejected)

Only if Phase 1 changes + appeal don't work:

1. Remove "28-36 semanas" → "barriga redondita"
2. Update all meta descriptions
3. Review image alt text
4. Consider domain migration to croko.co (removes "embarazadas" trigger entirely)

---

## 💡 Alternative: WhatsApp Ads

If you want to start advertising immediately without waiting for appeal:

**Click-to-WhatsApp Ads bypass the pixel problem entirely.**

- No pixel needed for optimization
- Meta optimizes for conversations
- Your domain doesn't matter
- Keep all urgency messaging on website

This can run in parallel with website changes.

---

**Document Version:** 2.0 (Final)  
**Created:** January 2025  
**Status:** Ready for implementation  
**Total Changes:** 7 items (down from 14)
