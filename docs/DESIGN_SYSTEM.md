# Croko Design System

This document defines the visual design standards for the Croko baby belly painting landing page. Use this as a reference when implementing UI components.

---

## Color Palette

### Primary Color (Gold)
The main brand color used for primary actions and key UI elements.

| Shade | Hex Code | Usage |
|-------|----------|-------|
| Dark | `#BF862D` | Dark accents, hover states |
| **Default** | `#c0882f` | **Primary buttons, CTAs, links** |
| Light | `#d4af37` | Gradient endings, highlights |
| Cream | `#ECC878` | Light accents, backgrounds |

### Secondary Color (Gray)
Used for text and secondary elements.

| Shade | Hex Code | Usage |
|-------|----------|-------|
| Dark | `#2d2d2d` | Darkest text |
| **Default** | `#595959` | **Body text, secondary buttons** |
| Medium | `#808080` | Muted text |
| Light | `#bfbfbf` | Borders, dividers |
| Lighter | `#dbdbdb` | Light borders |

### Background Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| Light | `#f5f5f8` | Page backgrounds |
| Warm | `#fff8f0` | Section backgrounds |
| Gradient Start | `#fff8f0` | Testimonials gradient |
| Gradient End | `#ffe8d6` | Testimonials gradient |
| Trust Badges | `linear-gradient(90deg, #e6e6fa 0%, #e6f2ff 100%)` | Trust section |

### Accent Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| WhatsApp Green | `#25D366` | WhatsApp CTA buttons |
| Boy Blue | `#4A90D9` | Gender selection (boy) |
| Girl Pink | `#E91E8C` | Gender selection (girl) |
| Heart Red | `#fb3b64` | Like/favorite icons |
| Success Green | `#35b53e` | Success states |

### Alert Colors

| Type | Hex Code | Usage |
|------|----------|-------|
| Success | `#35b53e` | Success messages |
| Warning | `#ffa200` | Warning alerts |
| Danger | `#fb3b64` | Error messages |
| Info | `#357fef` | Information alerts |

### Black & White

| Color | Hex Code |
|-------|----------|
| White | `#FFFFFF` |
| Black | `#000000` |

---

## Typography

### Font Families

| Font | Usage |
|------|-------|
| **Poppins** | Body text, paragraphs, general UI |
| **Capriola** | H1, H2 headlines |
| **Montserrat** | Landing sections, stats, badges |
| **Work Sans** | Event pages (alternative) |
| **Roboto** | Fallback, subtitle text |

**Primary Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
```

---

### Headings

| Element | Font Family | Weight | Notes |
|---------|-------------|--------|-------|
| **H1** | Capriola | 700 | Hero headlines |
| **H2** | Capriola | 700 | Section titles |
| **H3** | Poppins | 600 | Subsection titles |
| **H4** | Poppins | 600 | Card titles |
| **H5** | Poppins | 500 | Small headings |
| **H6** | Poppins | 500 | Labels |

### Body Text

| Element | Font Size | Line Height | Weight |
|---------|-----------|-------------|--------|
| **Paragraph** | 14px (base) | 150% | 400 |
| **Large Text** | 16px | 150% | 400 |
| **Small Text** | 12px | 140% | 400 |

### Dynamic Font Scaling

The project uses fluid typography with CSS `calc()`:
```css
font-size: calc(22px + (50 - 22) * ((100vw - 300px) / (1920 - 300)));
```

This scales fonts smoothly between 300px and 1920px viewport widths.

---

## Buttons

### Primary Button (Gold)
Main call-to-action button.

**States:**
| State | Background | Text Color |
|-------|------------|------------|
| Default | `#c0882f` | White |
| Hover | `#BF862D` | White |
| Active | `#BF862D` | White |

**Gradient Variant:**
```css
background: linear-gradient(135deg, #c0882f 0%, #d4af37 100%);
```

### WhatsApp Button
Used for WhatsApp CTAs.

| State | Background | Text Color |
|-------|------------|------------|
| Default | `#25D366` | White |
| Hover | `#1da851` | White |

### Button Sizes

| Size | Padding | Font Size | Min Height |
|------|---------|-----------|------------|
| Small | 8px 16px | 14px | 36px |
| Normal | 12px 24px | 16px | 44px |
| Large | 16px 32px | 18px | 52px |

---

## Form Inputs

### Text Input
Standard text input styling.

**States:**
| State | Border | Background |
|-------|--------|------------|
| Default | `#dbdbdb` | White |
| Focus | `#c0882f` | White |
| Error | `#fb3b64` | White |
| Disabled | `#f5f5f8` | `#f5f5f8` |

### Select Input
Dropdown select with chevron indicator.

- Same states as text input
- Chevron color: `#595959`

---

## Cards

### Product Card
Used for displaying product/service information.

**Structure:**
```
+---------------------------+
|        [Image]            |
|                           |
|  Title                    |
|  Description text...      |
|                           |
|  [CTA Button]             |
+---------------------------+
```

**Styling:**
- Border radius: `12px`
- Padding: `20px - 25px`
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.1)`
- Hover shadow: `0 8px 24px rgba(0, 0, 0, 0.15)`
- Hover transform: `translateY(-5px)`

### Testimonial Card
Customer review card.

**Styling:**
- Background: White
- Border radius: `8px`
- Padding: `25px`
- Shadow on hover: `0 8px 24px rgba(0, 0, 0, 0.15)`

---

## Navigation

### Desktop Header
Horizontal navigation bar.

**Elements:**
- Logo (left)
- Menu items (center)
- WhatsApp CTA button (right)

**Styling:**
- Background: White or transparent
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`

### Mobile Header
Simplified mobile navigation.

**Elements:**
- Logo (left)
- Hamburger menu (right)

### Sticky CTA Bar (Mobile)
Fixed bottom bar for mobile devices.

**Styling:**
- Position: Fixed bottom
- Background: `linear-gradient(135deg, #c0882f 0%, #d4af37 100%)`
- Padding: `12px 15px`
- Min height: `48px`
- Shadow: `0 -4px 12px rgba(0, 0, 0, 0.15)`
- Hidden on desktop (992px+)

---

## Modals

### Purchase Modal
Product selection modal.

**Container:**
- Border radius: `16px`
- Background: `#fff8f0`
- Max width: `800px`

**Design Items Grid:**
- 4 columns on desktop
- 3 columns on tablet
- 2 columns on mobile
- Gap: `12px`

**Design Item:**
- Border radius: `12px`
- Padding: `8px`
- Border: `2px solid transparent`
- Selected border: `2px solid #c0882f`
- Hover: `translateY(-2px)`

---

## Badges & Labels

### Status Badges

| Type | Background | Text |
|------|------------|------|
| Default | `#f5f5f8` | `#595959` |
| Success | `#35b53e` | White |
| Warning | `#ffa200` | White |
| Premium | `linear-gradient(135deg, #c0882f, #d4af37)` | White |

**Styling:**
- Border radius: `25px` (pill shape)
- Padding: `4px 12px`
- Font size: `12px`
- Font weight: `600`

---

## Icons

### Icon Fonts Used
- **Font Awesome** - General icons
- **Themify Icons** - UI icons
- **Flaticon** - Custom icons

### Icon Sizes

| Size | Pixels | Usage |
|------|--------|-------|
| Small | 16px | Inline, buttons |
| Default | 24px | Standard UI |
| Medium | 32px | Features |
| Large | 48px | Section icons |
| Hero | 64px+ | Highlight icons |

### Common Icons
- WhatsApp icon
- Phone icon
- Instagram icon
- Heart/favorite
- Star (ratings)
- Check/checkmark
- Close (X)
- Menu (hamburger)
- Arrow (directions)
- Calendar

---

## Shadows & Elevation

| Level | Shadow | Usage |
|-------|--------|-------|
| None | `none` | Flat elements |
| Subtle | `0 2px 4px rgba(0, 0, 0, 0.05)` | Slight elevation |
| Card | `0 4px 12px rgba(0, 0, 0, 0.1)` | Cards, containers |
| Elevated | `0 8px 24px rgba(0, 0, 0, 0.15)` | Modals, hover states |
| Sticky | `0 -4px 12px rgba(0, 0, 0, 0.15)` | Sticky elements |

---

## Border Radius

| Element | Radius |
|---------|--------|
| Small elements | `4px` |
| Inputs | `8px` |
| Cards | `12px` |
| Modals | `16px` |
| Badges/Pills | `25px` |
| Circles/Avatars | `50%` |

---

## Spacing

Follow 4px/8px grid system:

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | `4px` | Micro spacing |
| `sm` | `8px` | Small gaps |
| `md` | `12px` | Medium gaps |
| `base` | `16px` | Standard spacing |
| `lg` | `20px` | Large spacing |
| `xl` | `24px` | Section padding |
| `2xl` | `32px` | Major sections |
| `3xl` | `48px` | Page sections |

---

## Transitions & Animations

### Standard Transitions

| Type | Duration | Easing |
|------|----------|--------|
| Quick | `0.2s` | `ease` |
| Standard | `0.3s` | `ease` |
| Slow | `0.5s` | `ease-in-out` |

### Common Animations

**Hover Lift:**
```css
transform: translateY(-5px);
transition: transform 0.3s ease;
```

**Scale on Hover:**
```css
transform: scale(1.02);
transition: transform 0.2s ease;
```

---

## Responsive Breakpoints

| Name | Width | Description |
|------|-------|-------------|
| xs | `< 380px` | Very small phones |
| sm | `< 576px` | Small phones |
| md | `< 768px` | Tablets portrait |
| lg | `< 992px` | Tablets landscape |
| xl | `< 1200px` | Small desktops |
| xxl | `< 1400px` | Large desktops |

**Mobile-First Media Queries:**
```css
/* Small devices and up */
@media (min-width: 576px) { }

/* Medium devices and up */
@media (min-width: 768px) { }

/* Large devices and up */
@media (min-width: 992px) { }

/* Extra large devices */
@media (min-width: 1200px) { }
```

---

## Trust & Social Proof Section

### Trust Badges

**Container:**
- Background: `linear-gradient(90deg, #e6e6fa 0%, #e6f2ff 100%)`
- Padding: `20px`
- Border radius: `8px`

**Badge Item:**
- Icon size: `2.5rem` (mobile), `3rem` (desktop)
- Title font: Montserrat 600
- Subtitle font: Roboto 400

### Counter/Stats

**Styling:**
- Icon color: `#c0882f`
- Icon size: `4.5rem` (mobile), `5.5rem` (desktop)
- Number font: Montserrat 700
- Number size: `3rem` (mobile), `4rem` (desktop)

---

## Quick Reference - CSS Variables

```scss
// Primary Colors (Gold)
$primary: #c0882f;
$primary-light: #d4af37;
$primary-dark: #BF862D;
$primary-cream: #ECC878;

// Secondary Colors (Gray)
$secondary: #595959;
$secondary-dark: #2d2d2d;
$secondary-light: #808080;

// Background Colors
$bg-light: #f5f5f8;
$bg-warm: #fff8f0;
$bg-gradient: linear-gradient(135deg, #fff8f0 0%, #ffe8d6 100%);

// Accent Colors
$whatsapp-green: #25D366;
$boy-blue: #4A90D9;
$girl-pink: #E91E8C;

// Status Colors
$success: #35b53e;
$warning: #ffa200;
$danger: #fb3b64;
$info: #357fef;

// Typography
$font-primary: 'Poppins', sans-serif;
$font-heading: 'Capriola', sans-serif;
$font-accent: 'Montserrat', sans-serif;

// Shadows
$shadow-subtle: 0 2px 4px rgba(0, 0, 0, 0.05);
$shadow-card: 0 4px 12px rgba(0, 0, 0, 0.1);
$shadow-elevated: 0 8px 24px rgba(0, 0, 0, 0.15);

// Border Radius
$radius-sm: 4px;
$radius-md: 8px;
$radius-lg: 12px;
$radius-xl: 16px;
$radius-pill: 25px;

// Transitions
$transition-quick: all 0.2s ease;
$transition-standard: all 0.3s ease;
```

---

## File Structure

**Source Styles:**
```
/src/
├── index.scss                    # Entry point
├── bootstrap-minimal.scss        # Bootstrap imports
├── assets/scss/
│   ├── counter.scss              # Stats section
│   ├── sticky-cta.scss           # Mobile CTA bar
│   ├── testimonials.scss         # Reviews section
│   ├── trust-badges.scss         # Trust section
│   └── gracias.scss              # Thank you page
└── components/
    └── PurchaseModal/
        └── PurchaseModal.scss    # Modal styles
```

**Theme Styles:**
```
/public/assets/scss/
├── app.scss                      # Master import
├── color-1.scss                  # Color variables
├── custom.scss                   # Customizations
├── landing.scss                  # Landing typography
└── theme/
    ├── _variable.scss            # Core variables
    ├── _style.scss               # Component styles
    ├── _responsive.scss          # Responsive rules
    └── _nav.scss                 # Navigation
```

---

## Accessibility

### Touch Targets
- Minimum touch target size: `48px`
- Button minimum height: `44px`

### Focus States
All interactive elements should have visible focus indicators using the primary gold color.

### Color Contrast
Ensure text meets WCAG AA standards:
- Normal text: 4.5:1 minimum
- Large text (24px+): 3:1 minimum
