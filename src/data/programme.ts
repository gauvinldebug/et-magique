// Le programme officiel, chapitre par chapitre. Un chapitre listé ici apparaît dans le menu
// (grisé « bientôt ») ; il devient cliquable dès que son dossier existe dans src/content/.
// Pour ajouter un chapitre au site : voir CONTRIBUER.md.

export type ChapitreProgramme = { slug: string; titre: string };

export const PROGRAMME: Record<string, Record<string, ChapitreProgramme[]>> = {
  maths: {
    '6e': [
      { slug: 'nombres-entiers-et-decimaux', titre: 'Nombres entiers et décimaux' },
      { slug: 'fractions', titre: 'Fractions' },
      { slug: 'angles', titre: 'Angles' },
      { slug: 'symetrie-axiale', titre: 'Symétrie axiale' },
      { slug: 'proportionnalite', titre: 'Proportionnalité' },
      { slug: 'perimetres-et-aires', titre: 'Périmètres et aires' },
    ],
    '5e': [
      { slug: 'nombres-relatifs', titre: 'Nombres relatifs' },
      { slug: 'calculs-avec-les-fractions', titre: 'Calculs avec les fractions' },
      { slug: 'priorites-operatoires', titre: 'Priorités opératoires' },
      { slug: 'triangles', titre: 'Triangles' },
      { slug: 'symetrie-centrale', titre: 'Symétrie centrale' },
      { slug: 'statistiques', titre: 'Statistiques' },
    ],
    '4e': [
      { slug: 'puissances', titre: 'Puissances' },
      { slug: 'calcul-litteral', titre: 'Calcul littéral' },
      { slug: 'equations', titre: 'Équations' },
      { slug: 'theoreme-de-pythagore', titre: 'Théorème de Pythagore' },
      { slug: 'introduction-aux-fonctions', titre: 'Introduction aux fonctions' },
      { slug: 'probabilites', titre: 'Probabilités' },
    ],
    '3e': [
      { slug: 'arithmetique', titre: 'Arithmétique' },
      { slug: 'developper-et-factoriser', titre: 'Développer et factoriser' },
      { slug: 'fonctions-lineaires-et-affines', titre: 'Fonctions linéaires et affines' },
      { slug: 'theoreme-de-thales', titre: 'Théorème de Thalès' },
      { slug: 'trigonometrie', titre: 'Trigonométrie' },
      { slug: 'probabilites', titre: 'Probabilités' },
    ],
    seconde: [
      { slug: 'ensembles-de-nombres', titre: 'Ensembles de nombres' },
      { slug: 'vecteurs', titre: 'Vecteurs' },
      { slug: 'fonctions-de-reference', titre: 'Fonctions de référence' },
      { slug: 'equations-de-droites', titre: 'Équations de droites' },
      { slug: 'statistiques', titre: 'Statistiques' },
      { slug: 'probabilites', titre: 'Probabilités' },
    ],
    premiere: [
      { slug: 'second-degre', titre: 'Second degré' },
      { slug: 'suites-numeriques', titre: 'Suites numériques' },
      { slug: 'derivation', titre: 'Dérivation' },
      { slug: 'fonction-exponentielle', titre: 'Fonction exponentielle' },
      { slug: 'trigonometrie', titre: 'Trigonométrie' },
      { slug: 'produit-scalaire', titre: 'Produit scalaire' },
      { slug: 'probabilites-conditionnelles', titre: 'Probabilités conditionnelles' },
      { slug: 'variables-aleatoires', titre: 'Variables aléatoires' },
      { slug: 'algorithmique', titre: 'Algorithmique et programmation' },
    ],
    terminale: [
      { slug: 'suites-et-recurrence', titre: 'Suites et récurrence' },
      { slug: 'limites-de-suites', titre: 'Limites de suites' },
      { slug: 'limites-de-fonctions', titre: 'Limites de fonctions' },
      { slug: 'continuite', titre: 'Continuité' },
      { slug: 'derivation-et-convexite', titre: 'Dérivation et convexité' },
      { slug: 'logarithme-neperien', titre: 'Logarithme népérien' },
      { slug: 'fonctions-trigonometriques', titre: 'Fonctions trigonométriques' },
      { slug: 'primitives-et-equations-differentielles', titre: 'Primitives et équations différentielles' },
      { slug: 'integration', titre: 'Intégration' },
      { slug: 'geometrie-dans-l-espace', titre: "Géométrie dans l'espace" },
      { slug: 'denombrement', titre: 'Dénombrement' },
      { slug: 'loi-binomiale', titre: 'Loi binomiale' },
      { slug: 'loi-des-grands-nombres', titre: 'Loi des grands nombres' },
    ],
  },
};
