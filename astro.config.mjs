// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';
import { katexOptions } from './src/lib/katex-options.mjs';

// Adresse publique du site : Netlify la fournit au build (variable URL), elle deviendra
// automatiquement https://etmagique.fr quand le domaine sera branché.
const SITE_URL = process.env.URL || 'https://et-magique.netlify.app';
const NON_INDEXEES = ['/admin', '/recherche', '/merci', '/404', '/r/', '/qr/'];

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap({ filter: (page) => !NON_INDEXEES.some((x) => page.includes(x)) })],
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, katexOptions]],
  },
});
