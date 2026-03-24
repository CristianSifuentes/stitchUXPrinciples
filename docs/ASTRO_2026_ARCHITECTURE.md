# Astro 2026 Landing: Estructura y guía técnica

## Estructura del proyecto

```txt
.
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ public/
│  └─ social-card.svg
├─ src/
│  ├─ components/
│  │  ├─ Hero.astro
│  │  ├─ MainNav.astro
│  │  └─ PrincipleCard.astro
│  ├─ data/
│  │  └─ principles.ts
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ 404.astro
│  │  ├─ index.astro
│  │  └─ principles/
│  │     ├─ [slug].astro
│  │     └─ index.astro
│  ├─ styles/
│  │  └─ global.css
│  ├─ types/
│  │  └─ principle.ts
│  └─ env.d.ts
└─ docs/
   └─ ASTRO_2026_ARCHITECTURE.md
```

## Dónde está cada concepto solicitado

- **Syntax (Astro frontmatter + template):** todos los `.astro`, especialmente `src/pages/index.astro`.
- **Astro components:** `src/components/Hero.astro`, `MainNav.astro`, `PrincipleCard.astro`.
- **Layouts:** `src/layouts/BaseLayout.astro`.
- **Styles:** `src/styles/global.css` + estilos scoped en cada componente/página.
- **Navigation between screens:** enlaces en `MainNav.astro` y páginas.
- **Structure:** separación por `components`, `layouts`, `pages`, `data`, `types`, `styles`.
- **Props:** tipadas en componentes y layout (`interface Props`).
- **404 page:** `src/pages/404.astro`.
- **Introduction View Transitions:** `<ViewTransitions />` en `BaseLayout.astro`.
- **Static production site:** `output: 'static'` en `astro.config.mjs`.
- **Animations between screens:** `transition:name` en Hero/Nav/Cards y páginas.
- **Generation of 151 pages at build time:** `principles.ts` + `getStaticPaths()` en `src/pages/principles/[slug].astro`.
- **Reading dynamic arguments per URL:** `Astro.params.slug` en `[slug].astro`.
- **Name Transitions:** `transition:name="hero-title"`, `transition:name={...}` en varios archivos.
- **Conditional styling:** `class:list` en `MainNav.astro` y `PrincipleCard.astro`.
- **TypeScript path alias:** `tsconfig.json` (`@components/*`, `@layouts/*`, etc.).
- **Interfaces and typing:** `src/types/principle.ts` y uso en componentes/páginas.
- **Basic meta tags for SEO:** `BaseLayout.astro` (`title`, `description`, `og:image`, Twitter tags).
- **Testing social sharing links:** usar card de `public/social-card.svg` y validar con:
  - LinkedIn Post Inspector
  - X Card Validator
  - Facebook Sharing Debugger

## Deploy recomendado (Cloudflare Pages)

1. Build command: `npm run build`
2. Output directory: `dist`
3. Framework preset: `Astro`

## Nota de arquitectura

Este proyecto está optimizado para **contenido + performance** con capacidades modernas (transiciones, rutas dinámicas precompiladas y tipado estricto), manteniendo la filosofía de Astro en 2026: menos JavaScript en cliente, más HTML útil por defecto.
