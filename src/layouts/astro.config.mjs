import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://axiom-reviews.vercel.app',
  output: 'static',
  build: {
    concurrency: 1,
  },
});
