# Hero Background Image Setup

## To add your custom background image:

1. Save the provided wireframe/gradient background image to:
   ```
   public/images/hero-bg.jpg
   ```

2. The image will automatically be used in the Hero section.

3. Alternatively, you can update the background image path in:
   `src/components/sections/Hero.tsx` (line ~14)
   
   ```tsx
   style={{ backgroundImage: 'url(/images/YOUR_IMAGE_NAME.jpg)' }}
   ```

## Current Setup:
- The Hero section uses the background image with 40% opacity
- A gradient overlay is applied for better text readability
- The image is set to cover the entire section with center positioning

## Image Recommendations:
- Format: JPG or PNG
- Size: 1920x1080 or higher
- Keep file size under 500KB for optimal performance
- Dark-themed images work best with the current overlay settings
