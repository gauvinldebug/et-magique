// Accès au contenu : quels chapitres existent, dans quel ordre, avec quels compléments.
import { getCollection, getEntry } from 'astro:content';
import { PROGRAMME } from '../data/programme';
import { NIVEAUX } from '../data/site';
import { videoDuChapitre } from './youtube';

export const cleChapitre = (matiere: string, niveau: string, chapitre: string) => `${matiere}/${niveau}/${chapitre}`;

let publies: Promise<any[]> | undefined;
async function charger() {
  return Promise.all(
    (await getCollection('chapitres')).map(async (c) => {
      const [matiere, niveau, slug] = c.id.split('/');
      // La vidéo YouTube : écrite dans cours.md, ou trouvée toute seule dans le flux de la chaîne.
      const v = await videoDuChapitre(matiere, niveau, slug, c.data.court, c.data.video.youtube || undefined);
      const data = { ...c.data, video: { ...c.data.video, youtube: v.id, date: v.date } };
      return { ...c, data, matiere, niveau, slug };
    }),
  );
}
export async function chapitresPublies() {
  publies ??= charger();
  return publies as Promise<(Awaited<ReturnType<typeof getCollection<'chapitres'>>>[number] & { matiere: string; niveau: string; slug: string })[]>;
}

/** Le programme d'un niveau, avec pour chaque chapitre l'info « disponible ou pas ». */
export async function programmeNiveau(matiere: string, niveau: string) {
  const publies = await chapitresPublies();
  const dernier = await dernierChapitre(matiere);
  const liste = PROGRAMME[matiere]?.[niveau] ?? [];
  const connus = new Set(liste.map((c) => c.slug));
  const extra = publies
    .filter((p) => p.matiere === matiere && p.niveau === niveau && !connus.has(p.slug))
    .map((p) => ({ slug: p.slug, titre: p.data.court }));
  return [...liste, ...extra].map((c) => {
    const pub = publies.find((p) => p.matiere === matiere && p.niveau === niveau && p.slug === c.slug);
    return { ...c, titre: pub?.data.court ?? c.titre, dispo: !!pub, video: !!pub?.data.video.youtube, nouveau: !!pub && pub.id === dernier?.id };
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

/** Le dernier chapitre mis en ligne (date de publication, puis ordre dans le programme) : le seul marqué « Nouveau ».
 *  Dès qu'un nouveau chapitre est publié, le badge quitte automatiquement le précédent. */
export async function dernierChapitre(matiere: string) {
  const jour = (c: Awaited<ReturnType<typeof chapitresPublies>>[number]) => new Date(c.data.publie).getTime();
  const rangNiveau = (n: string) => NIVEAUX.findIndex((x) => x.slug === n);
  return (await chapitresPublies())
    .filter((c) => c.matiere === matiere)
    .sort((a, b) => jour(b) - jour(a) || rangNiveau(b.niveau) - rangNiveau(a.niveau) || (b.data.ordre ?? 0) - (a.data.ordre ?? 0))[0];
}
