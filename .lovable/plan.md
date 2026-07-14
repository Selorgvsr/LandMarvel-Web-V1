## Goal
Replace all user-visible "Land Marvel" brand text with the logo image on every page, while keeping SEO metadata, legal text, and image alt text unchanged.

## What will change
- Add a reusable inline logo component (`src/components/landmarvel/LogoName.tsx`) that renders the existing `land-marvel-logo.png` asset.
- Use it to replace visible "Land Marvel" text in:
  - `src/components/landmarvel/BuySections.tsx`
  - `src/routes/index.tsx`
  - `src/routes/about.tsx`
  - `src/routes/business-park.tsx`
  - `src/routes/heights.tsx`
  - `src/routes/contact.tsx`
  - `src/routes/portfolio.tsx`
  - `src/routes/buy.tsx`
  - `src/routes/projects.tsx`
  - `src/routes/green-valley.tsx`
- Keep as text (do not modify):
  - Page `<title>`, `meta`, `og:*`, JSON-LD
  - `src/routes/terms.tsx` and `src/routes/privacy.tsx` legal copy
  - `alt` attributes on images

## Notes / risks
- Project names like "Land Marvel Green Valley" will become `[logo image] Green Valley`. This matches the requested "everywhere except legal/meta" scope, but may look unusual in property cards. If you prefer to keep project names as text, let me know.
- Inline images inside headings/paragraphs need size and alignment tuning so they do not break line height. The component will expose `className` and size props for each context.
- The existing header and footer already use the logo image; no changes needed there.

## Steps
1. Create `LogoName.tsx` using the existing `land-marvel-logo.png.asset.json` asset.
2. Replace visible "Land Marvel" strings in the files listed above.
3. Build and visually verify the preview for key pages.