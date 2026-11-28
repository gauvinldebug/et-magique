// Les questions du défi du jour d'une matière et d'un niveau.
// La page choisit la question du jour dans cette liste, d'après la date : la même pour tout le monde.
import type { APIRoute } from 'astro';
import { chapitresPublies, complements } from '../../../lib/contenu';
import { md } from '../../../lib/markdown';

export async function getStaticPaths() {
  const vus = new Set<string>();
  for (const c of await chapitresPublies()) vus.add(`${c.matiere}/${c.niveau}`);
  return [...vus].map((k) => { const [matiere, niveau] = k.split('/'); return { params: { matiere, niveau } }; });
}

export const GET: APIRoute = async ({ params }) => {
  const chapitres = (await chapitresPublies())
    .filter((c) => c.matiere === params.matiere && c.niveau === params.niveau)
    .sort((a, b) => a.data.ordre - b.data.ordre);
  const out: object[] = [];
  for (const c of chapitres) {
    for (const q of (await complements(c.id)).qcm) {
      out.push({ q: md(q.question, true), c: q.choix.map((x) => md(x, true)), b: q.bonne, e: md(q.explication), h: `/${c.matiere}/${c.niveau}/${c.slug}/`, t: c.data.court });
    }
  }
  // Mélange à graine fixe : deux jours de suite ne tombent pas sur le même chapitre.
  let g = 12345;
  for (let i = out.length - 1; i > 0; i--) { g = (g * 1103515245 + 12345) % 2147483648; const j = g % (i + 1); [out[i], out[j]] = [out[j], out[i]]; }
  return new Response(JSON.stringify({ questions: out }), { headers: { 'content-type': 'application/json; charset=utf-8' } });
};
