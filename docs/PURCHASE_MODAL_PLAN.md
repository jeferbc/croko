# Purchase Modal - Implementation Plan

## Overview
Create a multi-step modal that opens when users click "Comprar" or "Obtener Kit" to collect baby gender, 3 design selections, and baby name before redirecting to Wompi checkout.

## Files to Create

| File | Purpose |
|------|---------|
| `/src/components/PurchaseModal/index.js` | Main modal with step navigation |
| `/src/components/PurchaseModal/PurchaseModal.scss` | Modal styling |
| `/src/components/PurchaseModal/StepIndicator.js` | Progress indicator (1/2/3) |
| `/src/components/PurchaseModal/steps/GenderStep.js` | Step 1: Boy/Girl selection |
| `/src/components/PurchaseModal/steps/ImageSelectionStep.js` | Step 2: 3-image grid selection |
| `/src/components/PurchaseModal/steps/BabyNameStep.js` | Step 3: Baby name input |
| `/src/components/PurchaseModal/ImageGridItem.js` | Selectable image component |
| `/src/hooks/usePurchaseModal.js` | Modal state & localStorage hook |
| `/src/data/designImages.js` | Image catalog by gender |

## Files to Modify

| File | Changes |
|------|---------|
| `/src/bootstrap-minimal.scss` | Add modal CSS imports |
| `/src/app/ClientLayout.js` | Mount `<PurchaseModal />` globally |
| `/src/containers/kit/header/headerDesktop.js` | Convert `<a>` to `<button onClick>` |
| `/src/containers/kit/header/headerMobile.js` | Convert `<a>` to `<button onClick>` |
| `/src/containers/wedding/product.js` | Convert `<a>` to `<button onClick>` |
| `/src/components/StickyCTA.js` | Convert `<a>` to `<button onClick>` |
| `/src/hooks/useWhatsAppRedirect.js` | Include selections in WhatsApp message |

## Modal Flow

```
[Click "Comprar/Obtener Kit"]
         ↓
┌─────────────────────────────┐
│  Step 1: ¿Es niño o niña?   │
│  [👶 Niño]    [👶 Niña]     │
└─────────────────────────────┘
         ↓
┌─────────────────────────────┐
│  Step 2: Elige 3 diseños    │
│  [img][img][img]            │
│  [img][img][img]  (2/3)     │
│  [img][img][img]            │
└─────────────────────────────┘
         ↓
┌─────────────────────────────┐
│  Step 3: Nombre del bebé    │
│  [____________] (requerido) │
│                             │
│  [← Atrás]  [Continuar →]   │
└─────────────────────────────┘
         ↓
[Redirect to Wompi Checkout]
```

## Configuration

- **Baby name:** Required field (user must enter a name to proceed)
- **Design display:** Show gender-specific + unisex designs (e.g., boy selection shows boy + unisex)
- **Images:** Need to be uploaded to ImageKit first

## Data Storage Strategy

**localStorage schema:**
```javascript
{
  gender: 'boy' | 'girl',
  selectedImages: ['design_id_1', 'design_id_2', 'design_id_3'],
  babyName: 'Sofia',  // Required
  timestamp: 1706123456789
}
```

**Wompi Integration:** Store in localStorage, then include in WhatsApp message on /gracias page after payment completes.

## Implementation Phases

### Phase 0: Pre-requisite (User Action)
- Upload square design images to ImageKit organized by category (boy/girl/unisex)
- Provide the ImageKit paths for each image

### Phase 1: Foundation
1. Create `/src/data/designImages.js` with image catalog (using provided ImageKit paths)
2. Create `/src/hooks/usePurchaseModal.js` hook
3. Update `/src/bootstrap-minimal.scss` with modal imports

### Phase 2: Modal Shell
1. Create modal component structure
2. Create StepIndicator component
3. Add modal to ClientLayout.js

### Phase 3: Step Components
1. GenderStep (simplest)
2. BabyNameStep (simple input)
3. ImageSelectionStep (grid with multi-select)

### Phase 4: Button Integration
1. Update all 4 purchase button locations
2. Wire up modal open trigger

### Phase 5: WhatsApp Integration
1. Update useWhatsAppRedirect to read localStorage
2. Include selections in WhatsApp message

## Verification
1. Click "Obtener Kit" → modal opens
2. Select gender → proceed to step 2
3. Select 3 images → proceed to step 3
4. Enter name → redirects to Wompi
5. Complete payment → /gracias page shows selections in WhatsApp message
