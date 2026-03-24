import { defineConfig } from 'astro/config';

// Astro is configured for static output to satisfy the "static production site" requirement.
export default defineConfig({
  output: 'static',
  site: 'https://stitch-ux-principles.pages.dev'
});
