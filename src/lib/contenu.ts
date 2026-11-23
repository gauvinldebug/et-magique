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

/** La dernière vidéo longue mise en ligne sur la chaîne (les Shorts sont ignorés), avec son chapitre s'il est connu.
 *  Lue dans le flux de la chaîne au moment de construire le site ; à défaut, la plus récente des vidéos rattachées à un chapitre.
 *  La page la remet à jour au chargement via /api/video?derniere=1, sans attendre une reconstruction. */
export async function derniereVideo(matiere: string) {
  const { videosChaine } = await import('./youtube');
  const chapitres = (await chapitresPublies()).filter((c) => c.matiere === matiere && c.data.video.youtube);
  const t = (d?: string | Date) => (d ? new Date(d).getTime() : 0);
  const v = [...(await videosChaine(matiere))].sort((a, b) => t(b.date) - t(a.date))[0];
  if (v) return { id: v.id, titre: v.titre, date: v.date, chapitre: chapitres.find((c) => c.data.video.youtube === v.id) };
  const c = chapitres.sort((a, b) => t(b.data.video.date ?? b.data.publie) - t(a.data.video.date ?? a.data.publie))[0];
  return c ? { id: c.data.video.youtube as string, titre: c.data.titre as string, date: String(c.data.video.date ?? c.data.publie), chapitre: c } : undefined;
}
