# Logo Setup Instructions

## Where to Place Your Logo

Place your logo file in the following location:
```
public/images/logo.png
```

## Logo Requirements

**Recommended Specifications:**
- **Format**: PNG (with transparent background preferred) or SVG
- **Dimensions**: 
  - Width: 150-300px
  - Height: 40-80px
  - Aspect ratio: Horizontal/landscape orientation works best
- **File size**: Under 100KB for optimal performance
- **Background**: Transparent or matching your brand colors

## Where Your Logo Appears

Your logo will be displayed in:
1. **Header Navigation** (top-left corner)
   - Mobile: 32px height (h-8)
   - Desktop: 40px height (h-10)
2. **Browser Tab** (favicon)

## File Naming

You can use any of these names (update in the code if different):
- `logo.png` (recommended)
- `logo.svg` (for vector graphics)
- `logo.webp` (for modern browsers)

## Current Setup

The logo is already configured in:
- `public/index.html` (line 5) - for favicon
- `src/components/ui/Header.tsx` (line 25) - for header logo

Simply drop your logo file into `public/images/` and it will automatically appear!

## Alternative: Text Logo

If you prefer a text-based logo instead of an image, let me know and I can update the header to display your name or brand name as a styled text logo.
