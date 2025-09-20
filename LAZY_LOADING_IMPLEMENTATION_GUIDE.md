# 🚀 Lazy Loading Implementation Guide

## ✅ What You Have Now

### Components Created:
1. **`components/LazyImage.js`** - Smart lazy loading image component
2. **`components/LazyBackground.js`** - Lazy loading for background images
3. **`hooks/useLazyLoading.js`** - Custom hooks for advanced scenarios
4. **`styles/lazyLoading.css`** - Optimized CSS with animations
5. **`pages/layouts/sections/wedding/header-optimized.js`** - Example implementation

## 🎯 Next Steps

### 1. Import the CSS in your main layout

Add to your main CSS file or `_app.js`:
```css
@import '../styles/lazyLoading.css';
```

### 2. Priority Images to Convert to WebP

**URGENT - These are your largest files:**
```
jenny-bg.png (569KB) → jenny-bg.webp
countdown-bg.png (389KB) → countdown-bg.webp  
attend.png (348KB) → attend.webp
bottom-pattern.png (67KB) → bottom-pattern.webp
croko_logo.png (71KB) → croko_logo.webp
```

### 3. Quick Replace Pattern

**Before:**
```jsx
<img alt="" className="img-fluid" src="/assets/images/wedding-img/about-us.png" />
```

**After:**
```jsx
import LazyImage from '../../../components/LazyImage';

<LazyImage 
  alt="About us" 
  className="img-fluid" 
  src="/assets/images/wedding-img/about-us.webp"
  placeholder="/assets/images/wedding-img/about-us-placeholder.jpg"
/>
```

### 4. Components to Update (Priority Order)

**HIGH PRIORITY** (Above the fold - visible immediately):
1. `pages/layouts/sections/wedding/header.js` - Main hero image
2. `containers/common/center-logo-header.js` - Logo images

**MEDIUM PRIORITY** (Near top of page):
3. `pages/layouts/sections/wedding/about.js` - About section images
4. `containers/blog/card/detail-wrapper.js` - Blog images

**LOW PRIORITY** (Below the fold):
5. `containers/blog/instagram/index.js` - Instagram grid
6. `containers/portfolio/*.js` - Portfolio images

## 🔧 Implementation Strategies

### Strategy 1: Critical Images (Above the Fold)
```jsx
// For hero/main images - load immediately but with optimization
<LazyImage 
  src="/assets/images/main-hero.webp"
  alt="Main hero"
  className="img-fluid"
  // No lazy loading delay for critical images
/>
```

### Strategy 2: Background Images
```jsx
// For large background images
<LazyBackground 
  backgroundImage="/assets/images/wedding-img/backgrounds/main-bg.webp"
  className="wedding bg slider-bg"
  placeholder="/assets/images/wedding-img/backgrounds/main-bg-placeholder.jpg"
>
  <div>Your content here</div>
</LazyBackground>
```

### Strategy 3: Gallery/Grid Images
```jsx
// For multiple images in grids
{images.map((img, index) => (
  <LazyImage 
    key={index}
    src={img.webp}
    alt={img.alt}
    className="img-fluid"
    placeholder="data:image/svg+xml;base64,..." // Tiny placeholder
  />
))}
```

## 📱 Performance Tips

### 1. Placeholder Strategies
```jsx
// Option 1: Blur placeholder (for same image, low quality)
placeholder="/assets/images/hero-blur.jpg" // 5KB version

// Option 2: SVG placeholder (for geometric shapes)
placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+PC9zdmc+"

// Option 3: Solid color (fastest)
// Just use CSS background-color in the component
```

### 2. Critical vs Non-Critical Images

**Critical Images** (load immediately):
- Logo
- Hero image
- Main product images above the fold

**Non-Critical Images** (lazy load):
- Gallery images
- Blog thumbnails
- Background decorations
- Social media images

### 3. Advanced Optimization

```jsx
// Preload critical images
import { useImagePreloader } from '../hooks/useLazyLoading';

const criticalImages = [
  '/assets/images/hero.webp',
  '/assets/images/logo.webp'
];

const { preloadedImages } = useImagePreloader(criticalImages);
```

## 🐛 Troubleshooting

### Common Issues:

1. **Images not loading**: Check file paths and WebP support
2. **Slow loading**: Reduce rootMargin in IntersectionObserver
3. **Layout shift**: Set explicit width/height on image containers
4. **Flickering**: Ensure smooth transition CSS is applied

### Browser Fallbacks:
```jsx
// The LazyImage component automatically falls back to regular loading if needed
// Modern browsers: WebP + Intersection Observer
// Older browsers: PNG/JPG + native lazy loading
```

## 📊 Expected Results

After implementation:
- **LCP improvement**: 3-4 seconds faster
- **Data savings**: 60-80% reduction in image sizes
- **Better UX**: Smooth loading animations
- **SEO boost**: Better Core Web Vitals scores

## 🚀 Mass Update Script

Use this find-and-replace pattern in your IDE:

**Find:** `<img(.*)src="([^"]*)"([^>]*)>`
**Replace:** `<LazyImage$1src="$2"$3/>`

Then manually add imports and convert image paths to WebP.