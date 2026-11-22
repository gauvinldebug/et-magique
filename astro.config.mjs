// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { katexOptions } from './src/lib/katex-options.mjs';
import sitemap from '@astrojs/sitemap';

// Adresse publique du site (canonique, sitemap). etmagique.fr pas encore acheté.
const SITE_URL = process.env.SITE_URL || 'https://et-magique.netlify.app';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap({ filter: (page) => !page.includes('/admin') })],
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, katexOptions]],
  },
});
