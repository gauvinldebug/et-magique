// Réglages généraux. Une matière = une chaîne YouTube = une section du site (/maths, /physique…).

export const SITE = {
  nom: 'Et Magique',
  domaine: 'etmagique.fr',
  url: 'https://etmagique.fr',
  // Contact affiché dans les mentions légales (à compléter par Louison).
  contact: 'contact@etmagique.fr',
};

export type Matiere = {
  slug: string;
  nom: string; // premier mot du logo : « Maths » et Magique
  couleur: string; // variable CSS de la matière
  youtube?: string; // URL de la chaîne
  youtubeId?: string; // identifiant de la chaîne (UC…), pour lire son flux RSS
  instagram?: string; // URL du compte Instagram
  active: boolean;
};

export const MATIERES: Matiere[] = [
  { slug: 'maths', nom: 'Maths', couleur: 'var(--terme)', youtube: 'https://www.youtube.com/@mathsetmagique', youtubeId: 'UChNsi3Kbyr6fey6cAJy6I5A', instagram: 'https://www.instagram.com/maths_et_magique/', active: true },
  { slug: 'physique', nom: 'Physique', couleur: 'var(--physique)', active: false },
  { slug: 'svt', nom: 'SVT', couleur: 'var(--svt)', active: false },
  { slug: 'histoire', nom: 'Histoire', couleur: 'var(--histoire)', active: false },
  { slug: 'francais', nom: 'Français', couleur: 'var(--francais)', active: false },
];

export const matiere = (slug: string) => MATIERES.find((m) => m.slug === slug);

export type Niveau = {
  slug: string;
  court: string; // « Tle »
  nom: string; // « Terminale »
  sousTitre?: string;
  cycle: 'Collège' | 'Lycée';
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
];

export const niveau = (slug: string) => NIVEAUX.find((n) => n.slug === slug);
