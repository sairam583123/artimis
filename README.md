# PipeFlow — Taps, Sanitaryware & Bathroom Fittings Website

A static, fully responsive marketing website built with **Angular 18 (standalone components)** and **Tailwind CSS**, inspired by bathroom/plumbing fittings brands like BAFIT and LEO Taps.

## Getting Started

```bash
npm install
npm start
```

Then open **http://localhost:4200**.

To build a production-ready static bundle:

```bash
npm run build
```

The output will be in `dist/pipeflow/browser`. This folder can be deployed to any static host (Netlify, Vercel, GitHub Pages, S3, cPanel, etc.) — no backend/server required.

## What's Included

- **Desktop layout**: fixed left sidebar navigation (280px) with an expandable "Products" menu listing every category.
- **Mobile layout**: top bar with hamburger menu that opens a slide-in drawer with the same navigation — fully responsive down to small phone widths.
- **Pages**:
  - `/` — Home (hero, stats, why-choose-us, category grid, testimonials, CTA)
  - `/about` — About Us (story, values, timeline)
  - `/products` — Product category grid with live search
  - `/products/:slug` — Individual category page listing all products in that category
  - `/gallery` — Filterable visual gallery
  - `/contact` — Contact form (Angular Reactive Forms with validation) + embedded map
  - `**` — 404 page
- **Color palette**: deep "water" blue (`brand`) + brass/copper gold (`brass`), matching the plumbing/bathroom fittings industry look.
- **Product data**: centralized in `src/app/core/data/products.data.ts` — edit this one file to add/remove categories or products across the whole site.

## About the Visuals

Since no real product photography was available, all "photos" in this build are **placeholder gradient tiles with icons** (see `src/app/shared/ui/visual-tile.component.ts`). They keep the layout, spacing and card designs production-ready — swap them out with real photos before going live:

1. Drop your images into `public/images/`.
2. Replace `<app-visual-tile ...>` usages with `<img src="/images/your-photo.jpg" ...>` (keep the same wrapper classes for consistent aspect ratio and rounded corners).

## Customizing

- **Colors**: edit `tailwind.config.js` -> `theme.extend.colors.brand` / `brass`.
- **Fonts**: loaded via Google Fonts `<link>` tags in `src/index.html` (Poppins for headings, Plus Jakarta Sans for body).
- **Contact form**: currently front-end only (`src/app/pages/contact/contact.component.ts`). Wire the `onSubmit()` method to a real backend, or a service like Formspree / EmailJS, to actually send messages.
- **Company details** (phone, email, address): search for `1800 1200 171`, `contact@pipeflow.example`, and `Ahmedabad` across `src/app` and replace with your real details.

## Tech Stack

- Angular 18 (standalone components, lazy-loaded routes, signals)
- Tailwind CSS 3
- Angular Reactive Forms
- No external UI/component libraries — everything is hand-built and easy to restyle.
