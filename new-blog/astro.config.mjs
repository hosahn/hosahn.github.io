import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hosahn.github.io',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    smartypants: true,
  },
  build: {
    assets: 'assets',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
