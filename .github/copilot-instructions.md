<!-- Copilot / AI agent instructions for the DigiLabs repo -->

# DigiLabs — Copilot Instructions

Short, targeted guidance to help AI coding agents be productive in this repository.

1) Project summary
- Framework: Next.js (App Router, `app/`), React 19, TypeScript.
- Styling: TailwindCSS (v4), shadcn/ui-style components live under `components/ui/`.
- Purpose: Static, front-end marketing site (no server/backend logic). See `README.md`.

2) Big picture / architecture
- Root layout: `app/layout.tsx` is the canonical place for site chrome (Navbar, Footer, Particles). Treat it as the app-level wrapper and primary SEO metadata location.
- Pages: `app/page.tsx` (home) and `app/about/page.tsx` etc. Most routes use the App Router conventions.
- Components: UI primitives and tokens are under `components/ui/` (shadcn-style). Higher-level sections live in `components/` (e.g., `Hero.tsx`, `Services.tsx`, `Navbar.tsx`).
- Utilities: `lib/utils.ts` exports `cn(...)` which merges Tailwind classes via `clsx` + `tailwind-merge`. Prefer this helper when composing classes.

3) Important conventions to follow
- Client vs Server components: Files that rely on hooks, browser-only APIs, or `next-themes` include the `'use client'` directive at the top. Example client components: `components/Hero.tsx`, `components/Services.tsx`, `components/Navbar.tsx`.
- Absolute imports: Code uses the `@/*` alias (see `tsconfig.json`). Use `@/components/...` and `@/lib/utils` rather than relative traversal when possible.
- Images: Static images live in `public/` and are referenced via `next/image` (e.g., `src="/hero.png"`). Use `priority` for critical hero images.
- Animations & motion: `framer-motion` and `gsap` are used. Motion patterns appear in `Hero.tsx` and `Services.tsx`. Prefer `whileInView` + `viewport={{ once: true }}` for entrance animations.
- Theme handling: `next-themes` is used via `components/ThemeProvider.tsx` and `ModeToggle.tsx`. Theme toggling code depends on mounting-state pattern (`useEffect` to avoid SSR mismatch).

4) Build / dev / test commands
- Install: `npm install` (Node ≥18).
- Dev server: `npm run dev` → runs `next dev` (port 3000).
- Build: `npm run build` → runs `next build`.
- Start (production): `npm run start` → runs `next start`.

5) Patterns & examples (copyable snippets)
- Client component header (required for hooks / browser APIs):
  ```tsx
  "use client";
  import { useState } from 'react';
  export default function Component() { /* ... */ }
  ```
- Using `cn` util from `lib/utils.ts`:
  ```ts
  import { cn } from '@/lib/utils';
  <div className={cn('p-4', condition && 'bg-blue-500')} />
  ```
- Absolute import example (component): `import Hero from '@/components/Hero';`

6) Files to reference when editing/adding UI
- `app/layout.tsx` — site chrome, metadata.
- `components/Navbar.tsx` — navigation, mobile menu pattern, `usePathname` usage.
- `components/ModeToggle.tsx` & `components/ThemeProvider.tsx` — theme handling pattern.
- `components/Hero.tsx`, `components/Services.tsx` — section composition examples (framer-motion, gradients, skeleton loading UX).
- `components/ui/*` — shadcn-inspired primitives (Card, Button, Skeleton, Input). Keep new primitives consistent with these.

7) Non-obvious notes / gotchas
- This is a purely front-end site — there is no API layer to mock or call. Avoid adding server routes unless explicitly requested.
- Many components rely on Tailwind utility layering (gradients, glass panels, neon blurs). Small changes to Tailwind config or global CSS can have broad visual impact; prefer confined class edits.
- `ThemeProvider` exists but may not be applied in every file; double-check layout usage if working on theme bugs.
- Use `next/image` for images in `public/`; avoid external URLs unless necessary and add domains in `next.config.ts` when required.

8) When in doubt / PR guidance
- Keep changes small and visually localized; include screenshots for UI changes.
- Preserve `"use client"` declarations when moving logic into new files that use browser-only APIs.
- Update the `README.md` when you introduce a new public page or major layout change.

If any part of this file is unclear or you'd like me to expand on a specific area (e.g., how the `components/ui` primitives are implemented, or where assets live in `public/`), tell me which section and I'll iterate.
