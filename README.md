# patelparth.me

Personal portfolio for Parth Patel: software engineer (backend, full stack, data). Built as a single-page React app with a Swiss-brutalist design system: cream background, heavy display type, red accent, mono labels, and an interactive terminal.

Live: [patelparth.me](https://patelparth.me)

## Stack

- **React 19** + **TypeScript**, bundled with **Vite 7**
- **Tailwind CSS 3** for styling (custom `paper` / `ink` / `accent` tokens in `tailwind.config.ts`)
- **Framer Motion** for scroll/entrance animation
- Self-hosted fonts via `@fontsource` (Archivo Black, Inter, JetBrains Mono)
- Deployed on **Vercel**, analytics via `@vercel/analytics`

## Structure

```
src/
  data/          content: profile, work experience, projects, achievements, tech stack
  sections/      one component per page section (About, Work, Projects, Achievements, TechStack, Contact)
  components/    shared UI (Navbar, ProjectCard, TerminalMock, Marquee, BenchmarkBars, ...)
  lib/motion.ts  shared framer-motion variants
public/
  projects/      project screenshots (webp)
  Resume_Parth.pdf
```

All page copy lives in `src/data/` as typed objects, not hardcoded in JSX. To update content (a new project, a role change, a new cert), edit the relevant file in `src/data/` rather than the section components.

## Sections

1. **Hero / About** — name, one-line positioning, achievement badges, resume/social links, an interactive fake-terminal (`src/components/TerminalMock.tsx`) with a few easter-egg commands, and a scrolling tech-stack marquee.
2. **Experience** — work history timeline, sourced from `src/data/experience.ts`.
3. **Projects** — featured projects as case-study rows (problem, how it works, impact, stack, live/GitHub links), plus a collapsible "earlier work" list for older projects. Sourced from `src/data/projects.ts`.
4. **Achievements** — hackathon wins, industry awards, certifications.
5. **Toolkit** — categorized tech stack.
6. **Contact** — email (click-to-copy), GitHub, LinkedIn, resume.

## Development

```bash
npm install
npm run dev       # start dev server
npm run build      # typecheck + production build
npm run preview    # serve the production build locally
npm run lint       # eslint
```

## Deployment

Pushing to `main` triggers a Vercel deploy via its GitHub integration. There is no separate CI config; `npm run build` is the only gate.

## Updating images

Project screenshots live in `public/projects/` as `.webp`. To keep the site fast, resize to a sane max width and convert with `cwebp` before committing, e.g.:

```bash
sips -Z 1600 screenshot.png
cwebp -q 80 screenshot.png -o public/projects/my-project.webp
```
