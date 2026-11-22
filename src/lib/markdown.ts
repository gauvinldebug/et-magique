// Transforme un petit texte Markdown + LaTeX (venant des fichiers YAML d'exercices et de QCM)
// en HTML, avec exactement les mêmes réglages que les pages de cours.
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import { katexOptions } from './katex-options.mjs';

const processor = unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeKatex, katexOptions)
  .use(rehypeStringify);

const cache = new Map<string, string>();

/** Markdown -> HTML. `inline` retire le <p> englobant quand le texte tient en un paragraphe. */
export function md(source: string | undefined | null, inline = false): string {
  if (!source) return '';
  const key = (inline ? 'i:' : 'b:') + source;
  const hit = cache.get(key);
  if (hit) return hit;
  // Une formule centrée $$…$$ écrite sur sa propre ligne devient un vrai bloc.
  const src = source.trim().replace(/^[ \t]*\$\$(.+?)\$\$[ \t]*$/gm, '\n$$$$\n$1\n$$$$\n');
  let html = String(processor.processSync(src));
  if (inline) {
    const m = html.match(/^<p>([\s\S]*)<\/p>$/);
    if (m && !m[1].includes('<p>')) html = m[1];
  }
  cache.set(key, html);
  return html;
}
