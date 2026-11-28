// Défis à manipuler affichés en tête de la page d'exercices d'un chapitre.
// Clé : matiere/niveau/chapitre. Valeur : noms des défis (src/scripts/labos/defis.ts).
export const DEFIS: Record<string, string[]> = {
  'maths/premiere/derivation': ['defi-tangente-horizontale'],
  'maths/premiere/second-degre': ['defi-racine-double'],
  'maths/premiere/fonction-exponentielle': ['defi-exp-origine'],
  'maths/premiere/trigonometrie': ['defi-angle'],
  'maths/premiere/produit-scalaire': ['defi-produit-scalaire'],
  'maths/terminale/limites-de-suites': ['defi-rang'],
  'maths/terminale/continuite': ['defi-deux-solutions'],
  'maths/terminale/derivation-et-convexite': ['defi-inflexion'],
  'maths/terminale/logarithme-neperien': ['defi-ln'],
  'maths/terminale/integration': ['defi-rectangles'],
  'maths/terminale/loi-binomiale': ['defi-binomiale'],
  'physique/terminale/mouvement-dans-un-champ-uniforme': ['defi-cible'],
  'physique/premiere/lentilles-et-images': ['defi-image-double'],
};
