// Les questions du défi du jour, une liste par niveau (toutes matières mélangées).
// La page d'accueil choisit la question du jour dans cette liste, d'après la date : la même pour tout le monde.
import type { APIRoute } from 'astro';
import { MATIERES, niveauDe } from '../../data/site';
import { chapitresPublies, complements } from '../../lib/contenu';
import { md } from '../../lib/markdown';


const MAX = 150;

export function getStaticPaths() {
  return ['6e', '5e', '4e', '3e', 'seconde', 'premiere', 'terminale'].map((niveau) => ({ params: { niveau } }));
}

export const GET: APIRoute = async ({ params }) => {
  const niveau = params.niveau!;
  const actives = new Set(MATIERES.filter((m) => m.active).map((m) => m.slug));
  const chapitres = (await chapitresPublies())
    .filter((c) => c.niveau === niveau && actives.has(c.matiere))
    .sort((a, b) => a.matiere.localeCompare(b.matiere) || a.data.ordre - b.data.ordre);
  // Une question de chaque chapitre à tour de rôle : les matières et les chapitres alternent.
  const paquets = await Promise.all(chapitres.map(async (c) => ({ c, qcm: (await complements(c.id)).qcm })));
  const out: object[] = [];
  for (let k = 0; out.length < MAX && paquets.some((p) => p.qcm[k]); k++) {
    for (const { c, qcm } of paquets) {
      const q = qcm[k];
      if (!q || out.length >= MAX) continue;
      const m = MATIERES.find((x) => x.slug === c.matiere)!;
      out.push({
        q: md(q.question, true),
        c: q.choix.map((x) => md(x, true)),
        b: q.bonne,
        e: md(q.explication),
        h: `/${c.matiere}/${c.niveau}/${c.slug}/`,
        t: c.data.court,
        m: m.nom,
      });
    }
  }
  // Mélange fixe (graine constante) pour que deux jours de suite ne tombent pas sur la même matière par habitude.
  let g = 12345;
  for (let i = out.length - 1; i > 0; i--) { g = (g * 1103515245 + 12345) % 2147483648; const j = g % (i + 1); [out[i], out[j]] = [out[j], out[i]]; }
  return new Response(JSON.stringify({ niveau: niveauDe('maths', niveau)?.nom ?? niveau, questions: out }), { headers: { 'content-type': 'application/json; charset=utf-8' } });
};
