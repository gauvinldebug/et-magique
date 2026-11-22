// Les sujets du bac (APMEP), avec le thème de chaque exercice. Mis à jour par scripts/annales_apmep.py.
import data from '../data/annales-bac.json';
import { PROGRAMME } from '../data/programme';

export type Exo = { n: number | string; theme: 'suites' | 'fonctions' | 'espace' | 'probas'; chapitres: string[] };
export type SujetBac = { annee: number; titre: string; sujet: string; corrige: string | null; exercices: Exo[] };

export const SOURCE_ANNALES = { nom: 'APMEP', page: data.page };
export const sujetsBac = (data.sujets as SujetBac[]).slice().sort((a, b) => b.annee - a.annee);

export const THEMES: Record<Exo['theme'], string> = { suites: 'Suites', fonctions: 'Fonctions', espace: 'Espace', probas: 'Probabilités' };

/** Les chapitres de terminale qui apparaissent dans au moins un sujet, dans l'ordre du programme. */
export const chapitresAnnales = () => {
  const vus = new Set(sujetsBac.flatMap((s) => s.exercices.flatMap((e) => e.chapitres)));
  return PROGRAMME.maths.terminale.filter((c) => vus.has(c.slug));
};

/** Les sujets dont au moins un exercice porte sur ce chapitre, avec le numéro des exercices concernés. */
export const sujetsDuChapitre = (slug: string) =>
  sujetsBac
    .map((s) => ({ ...s, exos: s.exercices.filter((e) => e.chapitres.includes(slug)).map((e) => e.n) }))
    .filter((s) => s.exos.length);
