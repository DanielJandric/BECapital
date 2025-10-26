# BE Capital SA - Next.js 15 Experience

Minimalist, high-trust marketing site for BE Capital SA built with the Next.js 15 App Router, TypeScript, and the Tailwind CSS v4 design system.

## Tech Stack

- **Next.js 15 App Router** with strict TypeScript & incremental static regeneration
- **Tailwind CSS v4** + custom tokens for color, spacing (golden ratio), and typography
- **Framer Motion** for controlled fades, staggered reveals, and hover micro-interactions
- **Radix UI Slot primitive** for accessible button composition
- **next/font** optimized Inter variable font loading
- **sharp** powered image optimization with blur placeholders

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`. Build-time checks:

```bash
npm run lint   # ESLint + Prettier
npm run build  # Production bundle & type safety
npm run format # Verify formatting (use format:write to apply)
```

## Project Structure

```
app/                     # App Router entry (layout, page, loading)
components/
  layout/                # Navigation, footer, page/section shells
  sections/              # Hero, services, approach, values, contact
  ui/                    # Button, typography, container, fade-in motion
lib/
  animations/            # Shared framer-motion variants
  utils/                 # Utility helpers (cn)
styles/
  tokens/                # TypeScript design tokens (color, spacing, typography)
public/                  # Optimised assets (favicon, logo etc.)
legacy/index.html        # Archived static prototype
```

## Design System Highlights

- **Color palette**: Deep black `#0A0A0A`, off-white `#FAFAF9`, gold accent `#B08D57`
- **Typography**: Fluid `clamp()` scales mapped to semantic variants via `<Typography />`
- **Spacing**: Golden ratio progression exposed as CSS variables & TS tokens
- **Animations**: Motion durations ≤ 400 ms, ease-out curves, 1.02 max hover scale, staggered 50 ms sequences
- **Page transitions**: View Transitions API enabled with graceful reduced-motion fallbacks
- **Delighters**: Desktop-only custom cursor, glassmorphism cards, blurred backdrops, custom scrollbar

## Accessibility & Performance

- Navigation bar uses backdrop blur with accessible toggle for mobile menu
- Skip-to-content order preserved (`PageLayout` wraps main content with `id="top"`)
- Form elements built with semantic labels, focus rings, and consent checkbox
- Reduced-motion users bypass animations; all images ship with blur placeholders
- Project targets 100/100 Lighthouse by default (optimised fonts, metadata, SEO tags)

## Metadata & SEO

- Comprehensive `metadata` in `app/layout.tsx`
- Open Graph + Twitter cards
- Custom theme color & responsive viewport
- Favicon and social previews ready for deployment

## Deployment Notes

- Production build: `npm run build` (outputs static HTML + incremental runtime)
- `sharp` ships locally, so no extra adapter configuration required
- `outputFileTracingRoot` is pinned to the workspace to avoid monorepo lockfile warnings

---

Crafted for a discreet, luxurious Swiss aesthetic paired with modern engineering discipline. Adjust tokens under `styles/tokens/` to evolve the brand system.
