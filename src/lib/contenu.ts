// Accès au contenu : quels chapitres existent, dans quel ordre, avec quels compléments.
import { getCollection, getEntry } from 'astro:content';
import { PROGRAMME } from '../data/programme';
import { NIVEAUX } from '../data/site';

export const cleChapitre = (matiere: string, niveau: string, chapitre: string) => `${matiere}/${niveau}/${chapitre}`;

export async function chapitresPublies() {
  return (await getCollection('chapitres')).map((c) => {
    const [matiere, niveau, slug] = c.id.split('/');
    return { ...c, matiere, niveau, slug };
  });
}

/** Le programme d'un niveau, avec pour chaque chapitre l'info « disponible ou pas ». */
export async function programmeNiveau(matiere: string, niveau: string) {
  const publies = await chapitresPublies();
  const liste = PROGRAMME[matiere]?.[niveau] ?? [];
  const connus = new Set(liste.map((c) => c.slug));
  const extra = publies
    .filter((p) => p.matiere === matiere && p.niveau === niveau && !connus.has(p.slug))
    .map((p) => ({ slug: p.slug, titre: p.data.court }));
  return [...liste, ...extra].map((c) => {
    const pub = publies.find((p) => p.matiere === matiere && p.niveau === niveau && p.slug === c.slug);
    return { ...c, titre: pub?.data.court ?? c.titre, dispo: !!pub, video: !!pub?.data.video.youtube };
  });
}

/** Tout le menu (pour le méga-menu et le menu téléphone). */
export async function menuMatiere(matiere: string) {
  const out: Record<string, Awaited<ReturnType<typeof programmeNiveau>>> = {};
  for (const n of NIVEAUX) out[n.slug] = await programmeNiveau(matiere, n.slug);
  return out;
}

export async function complements(id: string) {
  const [exercices, qcm, fiche] = await Promise.all([
    getEntry('exercices', id),
    getEntry('qcm', id),
    getEntry('fiches', id),
  ]);
  return {
    exercices: exercices?.data.exercices ?? [],
    qcm: qcm?.data.questions ?? [],
    fiche,
  };
}
