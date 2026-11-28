// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';
import { katexOptions } from './src/lib/katex-options.mjs';

// Adresse publique du site (canonique, sitemap) : variable SITE_URL (à mettre dans Cloudflare,
// https://etmagique.fr une fois le domaine branché), sinon celle fournie par Netlify (URL).
const SITE_URL = process.env.SITE_URL || process.env.URL || 'https://et-magique.etmagique.workers.dev';
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
    // code coloré, clair ou sombre selon le thème du site
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' }, defaultColor: false },
  },
});
