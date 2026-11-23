// Index de la recherche rapide (barre de recherche) : chapitres du programme et pages utiles.
import type { APIRoute } from 'astro';
import { MATIERES, niveauxDe } from '../data/site';
import { programmeNiveau, chapitresPublies } from '../lib/contenu';

export const GET: APIRoute = async () => {
  const items: { t: string; s: string; u: string; k: string; d: 0 | 1 }[] = [];
  const publies = await chapitresPublies();
  for (const m of MATIERES.filter((x) => x.active)) {
    for (const n of niveauxDe(m.slug)) {
      for (const c of await programmeNiveau(m.slug, n.slug)) {
        const p = publies.find((x) => x.matiere === m.slug && x.niveau === n.slug && x.slug === c.slug);
        const titres = p ? (p.body ?? '').match(/^##\s+.+$/gm)?.map((h) => h.replace(/^##\s+/, '').replace(/\$[^$]*\$/g, '')).join(' ') ?? '' : '';
        items.push({
          t: c.titre,
          s: `${m.nom} · ${n.nom}${c.dispo ? '' : ' · bientôt'}`,
          u: c.dispo
            ? `/${m.slug}/${n.slug}/${c.slug}/`
            : `/demandes/?type=chapitre&niveau=${n.slug}&chapitre=${encodeURIComponent(c.titre)}`,
          k: [n.nom, n.court, p?.data.titre, p?.data.description, titres].filter(Boolean).join(' '),
          d: c.dispo ? 1 : 0,
        });
      }
      items.push({ t: `Tous les chapitres de ${n.nom}`, s: `${m.nom} · niveau`, u: `/${m.slug}/${n.slug}/`, k: `${n.nom} ${n.court} programme`, d: 1 });
    }
    if (m.bac) items.push(
      { t: 'Annales du bac', s: 'Sujets et corrigés', u: `/${m.slug}/annales/`, k: 'annales sujets bac examen corrigés épreuve', d: 1 },
      { t: 'Planning de révision du bac', s: 'Par e-mail', u: `/${m.slug}/planning-bac/`, k: 'planning newsletter email révisions', d: 1 },
    );
    items.push({ t: `Fiches de révision de ${m.nom.toLowerCase()}`, s: 'À imprimer', u: `/${m.slug}/fiches/`, k: `fiches résumé réviser ${m.nom}`, d: 1 });
  }
  items.push({ t: 'Faire une demande', s: 'Chapitre, erreur, question', u: '/demandes/', k: 'demande contact erreur question', d: 1 });
  return new Response(JSON.stringify(items), { headers: { 'content-type': 'application/json' } });
};
