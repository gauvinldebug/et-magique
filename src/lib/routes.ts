// getStaticPaths partagé par les 5 pages d'un chapitre.
import { chapitresPublies, complements } from './contenu';
import { niveau as getNiveau, matiere as getMatiere } from '../data/site';
import { PROGRAMME } from '../data/programme';

export async function cheminsChapitres() {
  const chapitres = await chapitresPublies();
  return Promise.all(
    chapitres.map(async (c) => {
      const plus = await complements(c.id);
      const suivant = c.data.suivant
        ? PROGRAMME[c.matiere]?.[c.niveau]?.find((p) => p.slug === c.data.suivant)
        : undefined;
      const suivantPublie = suivant ? chapitres.some((x) => x.id === `${c.matiere}/${c.niveau}/${suivant.slug}`) : false;
      return {
        params: { matiere: c.matiere, niveau: c.niveau, chapitre: c.slug },
        props: {
          chapitre: c,
          niveau: getNiveau(c.niveau)!,
          matiere: getMatiere(c.matiere)!,
          ...plus,
          suivant: suivant ? { ...suivant, publie: suivantPublie } : undefined,
        },
      };
    }),
  );
}
export type ChapitreProps = Awaited<ReturnType<typeof cheminsChapitres>>[number]['props'];
