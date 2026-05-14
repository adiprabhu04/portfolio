# Aditya Prabhudessai — Portfolio

Premium AI Engineer workspace-style portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Design System

- **Aesthetic**: Linear × Raycast — dark monochrome, warm amber accent
- **Typography**: Syne (display) + Geist Mono (code/UI)
- **Motion**: Framer Motion — stagger reveals, layout animations, smooth modals
- **Color**: `#0a0a0a` base · `#e8c547` accent · `#f0f0f0` text

## Features

- ⌘K Command palette with keyboard navigation
- Scroll-spy sidebar with active section indicator
- Animated workspace panels (Linear-style)
- Project deep-dive modals
- Terminal hero widget
- Typewriter role animation
- Scanline CSS effect on panels
- Responsive layout (mobile-first)
- Green availability status indicator

## Setup

```bash
# Install dependencies
npm install

# Add fonts (Geist — from Vercel)
# Download from https://vercel.com/font and place in src/app/fonts/
# GeistVF.woff + GeistMonoVF.woff

# Run dev server
npm run dev

# Build for production
npm run build
npm start
```

## Fonts Note

This project uses Geist Sans + Geist Mono (from Vercel) loaded as local fonts.
If you don't have them, the fallback is `system-ui` / `monospace` — works fine.

To use Geist:
1. Download from https://vercel.com/font
2. Place `GeistVF.woff` and `GeistMonoVF.woff` in `src/app/fonts/`

## Customization

All content is in `src/lib/data.ts`:
- `profile` — name, links, email
- `projects` — add/edit/remove projects
- `experience` — work history
- `skills` — stack categories
- `commandPaletteItems` — palette nav

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Deployment

Deploy to Vercel instantly:
```bash
npx vercel
```
