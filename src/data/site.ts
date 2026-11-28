// Réglages généraux. Une matière = une chaîne YouTube = une section du site (/maths, /physique…).

export const SITE = {
  // Nom du site : le changer ici suffit pour l'accueil, le pied de page, les titres et les partages.
  nom: 'Et Magique',
  autresNoms: ['Maths et Magique', 'Maths & Magique', 'mathsetmagique'],
  domaine: 'etmagique.fr',
  url: 'https://etmagique.fr',
  // Contact affiché dans les mentions légales.
  contact: 'gauvinl@icloud.com',
};

export type Matiere = {
  slug: string;
  nom: string; // premier mot du logo : « Maths » et Magique
  couleur: string; // variable CSS de la matière
  youtube?: string; // URL de la chaîne
  youtubeId?: string; // identifiant de la chaîne (UC…), pour lire son flux RSS
  instagram?: string; // URL du compte Instagram
  active: boolean;
  nomLong?: string; // « physique-chimie » dans les phrases (sinon nom en minuscules)
  niveaux?: string[]; // niveaux proposés (par défaut : tous)
  sousTitres?: Record<string, string>; // sous-titre d'un niveau propre à la matière
  bac?: boolean; // annales et planning bac disponibles
  specialite?: boolean; // spécialité de 1re et terminale (pour la personnalisation)
};

export const MATIERES: Matiere[] = [
  { slug: 'maths', nom: 'Maths', couleur: 'var(--terme)', specialite: true, youtube: 'https://www.youtube.com/@mathsetmagique', youtubeId: 'UChNsi3Kbyr6fey6cAJy6I5A', instagram: 'https://www.instagram.com/maths_et_magique/', active: true, bac: true },
  {
    slug: 'physique', specialite: true, nom: 'Physique-chimie', nomLong: 'physique-chimie', couleur: 'var(--physique)', active: true,
    niveaux: ['6e', '5e', '4e', '3e', 'seconde', 'premiere', 'terminale', 'ens-scientifique-premiere', 'ens-scientifique-terminale'],
    sousTitres: { '6e': 'sciences et technologie', 'ens-scientifique-premiere': 'partie physique-chimie', 'ens-scientifique-terminale': 'partie physique-chimie' },
  },
  {
    slug: 'svt', specialite: true, nom: 'SVT', nomLong: 'SVT', couleur: 'var(--svt)', active: true,
    niveaux: ['6e', '5e', '4e', '3e', 'seconde', 'premiere', 'terminale', 'ens-scientifique-premiere', 'ens-scientifique-terminale'],
    sousTitres: { '6e': 'sciences et technologie', 'ens-scientifique-premiere': 'partie SVT', 'ens-scientifique-terminale': 'partie SVT' },
  },
  {
    slug: 'nsi', specialite: true, nom: 'NSI', nomLong: 'NSI', couleur: 'var(--nsi)', active: true,
    niveaux: ['seconde', 'premiere', 'terminale'],
    sousTitres: { seconde: 'SNT' },
  },
  {
    slug: 'technologie', nom: 'Technologie', nomLong: 'technologie', couleur: 'var(--rose)', active: true,
    niveaux: ['5e', '4e', '3e'],
  },
  // Matières à venir : affichées « Bientôt » (pictogramme et couleur dans affiches.ts).
  { slug: 'francais', nom: 'Français', couleur: 'var(--francais)', active: false, niveaux: ['6e', '5e', '4e', '3e', 'seconde', 'premiere'] },
  { slug: 'histoire', nom: 'Histoire-géo', nomLong: 'histoire-géo', couleur: 'var(--histoire)', active: false, niveaux: ['6e', '5e', '4e', '3e', 'seconde', 'premiere', 'terminale'] },
  { slug: 'anglais', nom: 'Anglais', couleur: '#E0263C', active: false, niveaux: ['6e', '5e', '4e', '3e', 'seconde', 'premiere', 'terminale'] },
  { slug: 'espagnol', nom: 'Espagnol', couleur: '#F2E94E', active: false, niveaux: ['5e', '4e', '3e', 'seconde', 'premiere', 'terminale'] },
  { slug: 'allemand', nom: 'Allemand', couleur: '#00A6A6', active: false, niveaux: ['5e', '4e', '3e', 'seconde', 'premiere', 'terminale'] },
  { slug: 'latin', nom: 'Latin', couleur: '#C9A227', active: false, niveaux: ['5e', '4e', '3e', 'seconde', 'premiere', 'terminale'] },
  { slug: 'philosophie', nom: 'Philosophie', couleur: '#5B6B7F', active: false, niveaux: ['terminale'] },
  { slug: 'ses', nom: 'SES', nomLong: 'SES', couleur: '#8BC34A', active: false, specialite: true, niveaux: ['seconde', 'premiere', 'terminale'] },
  { slug: 'hggsp', nom: 'HGGSP', nomLong: 'HGGSP', couleur: '#004E64', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'hlp', nom: 'HLP', nomLong: 'HLP', couleur: '#E8D3B0', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'si', nom: 'Sciences de l\'ingénieur', nomLong: 'sciences de l\'ingénieur', couleur: '#6D4C41', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'llcer', nom: 'LLCER', nomLong: 'LLCER', couleur: '#D8DCE3', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'llca', nom: 'LLCA', nomLong: 'LLCA', couleur: '#E09F3E', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'biologie-ecologie', nom: 'Biologie-écologie', couleur: '#556B2F', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'eppcs', nom: 'EPPCS', nomLong: 'EPPCS', couleur: '#FFB5A7', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'arts', nom: 'Arts plastiques', couleur: '#FF4FD8', active: false, specialite: true, niveaux: ['6e', '5e', '4e', '3e', 'premiere', 'terminale'] },
  { slug: 'musique', nom: 'Musique', couleur: '#3FA9F5', active: false, specialite: true, niveaux: ['6e', '5e', '4e', '3e', 'premiere', 'terminale'] },
  { slug: 'cinema', nom: 'Cinéma-audiovisuel', couleur: '#B39DFF', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'theatre', nom: 'Théâtre', couleur: '#8E1B3A', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'danse', nom: 'Danse', couleur: '#3DDC97', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'histoire-des-arts', nom: 'Histoire des arts', couleur: '#4B1D6B', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
  { slug: 'cirque', nom: 'Arts du cirque', couleur: '#C1E1FF', active: false, specialite: true, niveaux: ['premiere', 'terminale'] },
];

export const matiere = (slug: string) => MATIERES.find((m) => m.slug === slug);

export type Niveau = {
  slug: string;
  court: string; // « Tle »
  nom: string; // « Terminale »
  sousTitre?: string;
  cycle: 'Collège' | 'Lycée' | 'Options' | 'Ens. scientifique';
  examen?: 'bac' | 'brevet';
};

export const NIVEAUX: Niveau[] = [
  { slug: '6e', court: '6e', nom: '6e', cycle: 'Collège' },
  { slug: '5e', court: '5e', nom: '5e', cycle: 'Collège' },
  { slug: '4e', court: '4e', nom: '4e', cycle: 'Collège' },
  { slug: '3e', court: '3e', nom: '3e', cycle: 'Collège', examen: 'brevet' },
  { slug: 'seconde', court: '2de', nom: 'Seconde', cycle: 'Lycée' },
  { slug: 'premiere', court: '1re', nom: 'Première', sousTitre: 'spécialité', cycle: 'Lycée' },
  { slug: 'terminale', court: 'Tle', nom: 'Terminale', sousTitre: 'spécialité', cycle: 'Lycée', examen: 'bac' },
  { slug: 'premiere-tronc-commun', court: '1re TC', nom: 'Maths de 1re (tronc commun)', sousTitre: 'sans la spécialité', cycle: 'Options' },
  { slug: 'maths-complementaires', court: 'Compl.', nom: 'Maths complémentaires', sousTitre: 'option de terminale', cycle: 'Options' },
  { slug: 'maths-expertes', court: 'Expertes', nom: 'Maths expertes', sousTitre: 'option de terminale', cycle: 'Options' },
  { slug: 'ens-scientifique-premiere', court: 'ES 1re', nom: 'Enseignement scientifique 1re', sousTitre: 'partie maths', cycle: 'Ens. scientifique' },
  { slug: 'ens-scientifique-terminale', court: 'ES Tle', nom: 'Enseignement scientifique Tle', sousTitre: 'partie maths', cycle: 'Ens. scientifique' },
];

export const niveau = (slug: string) => NIVEAUX.find((n) => n.slug === slug);

/** Les niveaux d'une matière, avec ses sous-titres propres (6e : « sciences et technologie » en physique-chimie). */
export const niveauxDe = (slug: string): Niveau[] => {
  const m = matiere(slug);
  return NIVEAUX.filter((n) => !m?.niveaux || m.niveaux.includes(n.slug)).map((n) =>
    m?.sousTitres?.[n.slug] ? { ...n, sousTitre: m.sousTitres[n.slug] } : n,
  );
};
export const niveauDe = (matiereSlug: string, niveauSlug: string) => niveauxDe(matiereSlug).find((n) => n.slug === niveauSlug);
/** « Maths et Magique », « Physique-chimie et Magique ». */
export const marque = (slug: string) => `${matiere(slug)?.nom ?? 'Maths'} et Magique`;
/** « maths », « physique-chimie ». */
export const nomDans = (slug: string) => { const m = matiere(slug); return m?.nomLong ?? m?.nom.toLowerCase() ?? 'maths'; };
