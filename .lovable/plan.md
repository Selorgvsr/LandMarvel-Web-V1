
# Land Marvel — Home Page Plan

A premium real-estate landing page with a consistent blue + white theme, generated hero/section imagery, and a clean header/footer.

## Design system (src/styles.css)

- Primary: deep navy blue `oklch(0.30 0.12 255)`
- Accent: bright blue `oklch(0.55 0.18 250)`
- Background: white; muted: soft blue-gray
- Typography: Inter (body) + Playfair Display (headings) via Google Fonts
- Tokens: `--gradient-hero`, `--gradient-cta`, `--shadow-elegant`, `--shadow-card`
- Smooth section spacing, rounded-2xl cards, soft hover lift

## Header (sticky)

Logo "Land Marvel" + nav: Buy, Sell, Projects, Contact Us + "Get in Touch" CTA. Mobile hamburger via Sheet.

## Page sections (in order)

1. **Hero Banner** — full-bleed generated image of a modern Chennai skyline/apartment, overlay gradient, headline "Find Your Dream Home with Land Marvel", subcopy, two CTAs (Explore Projects / Contact Us), trust stats strip.
2. **About Land Marvel** — image left / content right, "Building Trust. Creating Communities.", 4 checkmark highlights, Learn More CTA.
3. **Buy / Sell / Exchange Services** — 3 cards with icons, hover lift.
4. **Why Choose Land Marvel** — 4 feature cards (Prime Locations, Verified Docs, Premium Construction, End-to-End Support) with Lucide icons.
5. **Featured Property Categories** — 4 image cards (Villas, Apartments, Plots, Commercial) + "View All Properties" button. Generated images per category.
6. **Completed Projects** — 3 project cards with generated images, location chip, CTA "View Projects".
7. **Our Journey Timeline** — vertical/horizontal timeline 2004 → 2026 with 5 milestones.
8. **Statistics Section** — 4 stats: 20+ Years, 150+ Projects, 2000+ Families, 6+ Locations on blue gradient band.
9. **Testimonials** — 3 client cards with avatar initials, quote, name/location.
10. **Featured Locations** — 6 location cards (Anna Nagar, Adyar, OMR, Velachery, Tambaram, Porur) with map-pin icons + Explore Locations button.
11. **Awards & Recognition** — premium dark-blue background with 4 award items.
12. **Home Loan Assistance** — split section, partner-bank concept, "Check Eligibility" CTA.
13. **Final CTA Banner** — full-width blue gradient, "Your Dream Property Awaits", two buttons.

## Footer

- Brand blurb + social icons
- Links: About Us, Portfolio, Terms & Conditions, Privacy & Policy
- Contact line (Chennai address, phone, email)
- Copyright bar

## Images (generated)

- `hero-skyline.jpg` — Chennai modern apartment skyline at golden hour
- `about-team.jpg` — premium residential building exterior
- `cat-villa.jpg`, `cat-apartment.jpg`, `cat-plot.jpg`, `cat-commercial.jpg`
- `project-1/2/3.jpg` — completed apartment projects

## File structure

- `src/styles.css` — extend tokens + fonts
- `src/routes/__root.tsx` — update meta title/description (Land Marvel)
- `src/routes/index.tsx` — compose page from section components
- `src/components/landmarvel/Header.tsx`
- `src/components/landmarvel/Hero.tsx`
- `src/components/landmarvel/About.tsx`
- `src/components/landmarvel/Services.tsx`
- `src/components/landmarvel/WhyChooseUs.tsx`
- `src/components/landmarvel/Categories.tsx`
- `src/components/landmarvel/Projects.tsx`
- `src/components/landmarvel/Timeline.tsx`
- `src/components/landmarvel/Stats.tsx`
- `src/components/landmarvel/Testimonials.tsx`
- `src/components/landmarvel/Locations.tsx`
- `src/components/landmarvel/Awards.tsx`
- `src/components/landmarvel/HomeLoan.tsx`
- `src/components/landmarvel/FinalCTA.tsx`
- `src/components/landmarvel/Footer.tsx`

## Notes

- Single H1 (hero). All section headings H2.
- Semantic tokens only — no hardcoded hex in components.
- SEO meta + JSON-LD RealEstateAgent on home route.
- Nav links Buy/Sell/Projects/Contact scroll to in-page sections for now (separate routes can be added later).
