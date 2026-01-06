# Homepage Changes for Meta Appeal

**Page:** https://www.maquillajeembarazadas.com/  
**Goal:** Remove health-related language that triggers Meta's health data restrictions  
**Priority:** Complete BEFORE submitting appeal to Meta

---

## 🔴 HIGH PRIORITY CHANGES

### Change 1: Hero Section Subtext

**Location:** Hero section, below "Maquillaje Prenatal" heading

**Current Text:**
```
Celebra tu embarazo con arte y disfruta de un momento de relajación, 
mientras tu bebé es estimulado por el cosquilleo que producen los pinceles.
```

**Problem:** "bebé es estimulado" implies developmental/health benefits

**New Text:**
```
Celebra este momento especial con arte y disfruta de una experiencia 
creativa única, mientras creas recuerdos inolvidables en familia.
```

**File to Edit:** `src/containers/wedding/header.js` (or similar component)

---

### Change 2: Remove/Rename "Salud Mental" Blog Post from Homepage

**Location:** Blog carousel section "Publicaciones Recientes"

**Current:**
- Title: "Salud Mental en el Embarazo: Un Abrazo para Mamás con Croko y Tranquilamente"
- URL: `/blog/salud-mental-embarazo-croko-tranquilamente`

**Problem:** "Salud Mental" (Mental Health) is an explicit health topic

**Options:**

**Option A - Remove from homepage carousel:**
Remove this post from the featured posts array

**Option B - Rename (requires more work):**
- New Title: "Bienestar Emocional para Futuras Mamás: Apoyo y Comunidad"
- New URL: `/blog/bienestar-emocional-futuras-mamas`
- Update all internal links

**Recommended:** Option A for speed before appeal

---

### Change 3: Rename "Maquillaje Seguro" Blog Post

**Location:** Blog carousel section

**Current:**
- Title: "Maquillaje Seguro Para Embarazadas: Guía Completa 2025"
- URL: `/maquillaje-para-embarazadas`

**Problem:** "Seguro" (Safe) in pregnancy context implies health/safety claims

**New Title:**
```
Maquillaje Artístico Corporal: Guía Completa 2025
```

**New URL (optional but recommended):**
```
/maquillaje-artistico-corporal
```

**Note:** If changing URL, set up 301 redirect from old URL

---

## 🟡 MEDIUM PRIORITY CHANGES

### Change 4: Meta Description

**Location:** `<head>` section, meta description tag

**Current:**
```html
<meta name="description" content="¿Buscas pintar tu barriga de embarazada en Medellín? 
Artista profesional va a tu casa con pinturas hipoalergenicas seguras. 
Crea recuerdos inolvidables con tu familia. Domicilios disponibles">
```

**Problem:** "hipoalergenicas seguras" sounds like health/medical claims

**New:**
```html
<meta name="description" content="¿Buscas pintar tu barriga en Medellín? 
Artista profesional va a tu casa con pinturas certificadas para body art. 
Crea recuerdos inolvidables con tu familia. Servicio a domicilio disponible.">
```

**File to Edit:** `src/app/page.js` or `src/app/layout.js` (Next.js metadata)

---

### Change 5: FAQ - Gestational Week Reference

**Location:** FAQ section, question "¿CUÁNDO SE ACONSEJA PINTARSE LA BARRIGA?"

**Current:**
```
Se aconseja realizarlo a partir de la semana 28, pero lo más importante es que 
sea en el momento en que la mami tenga la barriga grande y se sienta cómoda con ella.
```

**Problem:** "semana 28" is clinical/medical terminology (gestational age)

**New:**
```
Se aconseja realizarlo cuando la barriga esté bien redondita y la futura mamá 
se sienta cómoda. Normalmente esto es en los últimos meses, pero es algo muy 
personal y depende del momento en que cada una se sienta segura y con ganas de pintarse.
```

---

### Change 6: Consider "Prenatal" Terminology

**Location:** Main H1 heading and throughout page

**Current:**
```html
<h1 class="gradient-text">Maquillaje Prenatal</h1>
```

**Problem:** "Prenatal" is medical terminology (prenatal care, prenatal vitamins)

**Options:**

| Alternative | Pros | Cons |
|-------------|------|------|
| "Belly Art" | International, neutral | Less searchable in Spanish |
| "Arte Corporal" | Neutral, descriptive | Generic |
| "Pintura de Barriguitas" | Descriptive, friendly | Longer |
| Keep "Maquillaje Prenatal" | SEO established | Triggers Meta |

**Recommendation:** Keep for now but consider changing after domain migration to croko.co

---

## 🟢 LOWER PRIORITY (Monitor)

### Keywords Meta Tag

**Current includes terms like:**
- "maquillaje embarazadas"
- "maquillaje prenatal"
- "body paint embarazadas"

**Note:** These may contribute to categorization but are less visible. Focus on visible content first.

---

### OG/Twitter Meta Tags

**Current OG Title:**
```
Belly Painting Embarazadas Medellín: Artista Profesional a Domicilio | Croko
```

**Note:** Contains "Embarazadas" but this is also in domain name. Lower priority since domain is the main trigger.

---

## Implementation Checklist

### Before Appeal Submission:

- [ ] **Change 1:** Update hero subtext (remove "bebé es estimulado")
- [ ] **Change 2:** Remove "Salud Mental" post from homepage carousel
- [ ] **Change 3:** Rename "Maquillaje Seguro" blog post title
- [ ] **Change 4:** Update meta description (remove "hipoalergenicas seguras")
- [ ] **Change 5:** Update FAQ answer (remove "semana 28")
- [ ] Deploy changes to production
- [ ] Clear any CDN cache
- [ ] Verify changes are live
- [ ] Take screenshots for appeal evidence

### After Appeal (if rejected):

- [ ] **Change 6:** Consider renaming "Maquillaje Prenatal" heading
- [ ] Review and update keywords meta tag
- [ ] Update OG/Twitter meta tags
- [ ] Plan domain migration to croko.co

---

## Code Snippets for Jefferson

### Hero Subtext Update (React/Next.js)

```jsx
// Before
<p className="header-sub-text text-center">
  Celebra tu embarazo con arte y disfruta de un momento de relajación, 
  mientras tu bebé es estimulado por el cosquilleo que producen los pinceles.
</p>

// After
<p className="header-sub-text text-center">
  Celebra este momento especial con arte y disfruta de una experiencia 
  creativa única, mientras creas recuerdos inolvidables en familia.
</p>
```

### Meta Description Update (Next.js Metadata)

```jsx
// In page.js or layout.js
export const metadata = {
  description: "¿Buscas pintar tu barriga en Medellín? Artista profesional va a tu casa con pinturas certificadas para body art. Crea recuerdos inolvidables con tu familia. Servicio a domicilio disponible.",
  // ... other metadata
};
```

### FAQ Update

```jsx
// Find the FAQ item for timing
{
  question: "¿CUÁNDO SE ACONSEJA PINTARSE LA BARRIGA?",
  answer: "Se aconseja realizarlo cuando la barriga esté bien redondita y la futura mamá se sienta cómoda. Normalmente esto es en los últimos meses, pero es algo muy personal y depende del momento en que cada una se sienta segura y con ganas de pintarse."
}
```

---

## Verification After Changes

1. **Visual Check:** Browse the homepage and verify all text changes are visible
2. **View Source:** Check that meta tags are updated in HTML source
3. **Mobile Check:** Verify changes appear correctly on mobile
4. **Cache Clear:** Clear browser cache and verify
5. **Screenshot:** Take before/after screenshots for Meta appeal

---

## Notes for Meta Appeal

After making these changes, your appeal can emphasize:

> "Our website sells art supplies (body-safe paints, brushes, stencils) for 
> decorative body painting photography. We have reviewed our content and 
> removed any language that could be misinterpreted as health-related. 
> Our products are creative art supplies, not health or medical products. 
> Purchasing our kit indicates interest in artistic photography, not any 
> health condition."

---

**Document Version:** 1.0  
**Created:** January 2025  
**Status:** Ready for implementation
