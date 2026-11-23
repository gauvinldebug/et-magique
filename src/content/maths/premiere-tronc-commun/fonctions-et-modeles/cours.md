---
titre: Fonctions et modélisation
court: Fonctions et modèles
description: Fonction, image et antécédent, lecture graphique, fonctions affines et coefficient directeur, fonctions carré et inverse, résolution graphique pour comparer deux offres, expliquées avec le compteur d'un taxi, avec des exercices corrigés pas à pas. Première, maths du tronc commun.
ordre: 3
publie: 2026-11-23T02:22:00
video:
  youtube: ""
piege: >-
  **Une fonction affine n'est pas forcément proportionnelle.** $f(x) = 1{,}5x + 4$ ne double pas quand $x$ double, à cause de la prise en charge de 4. Seule $f(x) = ax$ (droite passant par l'origine) traduit une situation de proportionnalité.
pdf:
  cours: /pdf/maths/premiere-tronc-commun/fonctions-et-modeles-cours.pdf
  fiche: /pdf/maths/premiere-tronc-commun/fonctions-et-modeles-fiche.pdf
  exercices: /pdf/maths/premiere-tronc-commun/fonctions-et-modeles-exercices.pdf
suivant: suites-et-modelisation
---

## Le problème

Le taxi A facture 4 € de prise en charge, puis 1,50 € par kilomètre. Le taxi B ne prend rien au départ, mais facture 2 € par kilomètre. Quel taxi choisir selon la distance ?

## L'idée : le compteur du taxi

Quand tu montes dans un taxi, le compteur affiche déjà un montant : la **prise en charge**. Puis, à chaque kilomètre, il ajoute **toujours la même somme**.

C'est une **fonction affine** : un point de départ (l'**ordonnée à l'origine**) et une pente constante (le **coefficient directeur**). Sur un graphique, c'est une droite.

## Fonctions

<div class="encadre">

Une **fonction** $f$ associe à chaque nombre $x$ un **unique** nombre $f(x)$, son **image**. Si $f(a) = k$, on dit que $a$ est un **antécédent** de $k$.

La **courbe** de $f$ est l'ensemble des points $(x\,;f(x))$. Résoudre $f(x) = k$ graphiquement, c'est lire les abscisses des points de la courbe à la hauteur $k$.

</div>

## Fonctions affines

<div class="encadre">

$f(x) = ax + b$. Sa courbe est une **droite**.

- $b = f(0)$ est l'**ordonnée à l'origine** (la prise en charge).
- $a$ est le **coefficient directeur** (le prix au kilomètre) : $\corange{a = \frac{f(x_2) - f(x_1)}{x_2 - x_1}}$.
- Si $a > 0$, $f$ est croissante ; si $a < 0$, décroissante.

</div>

## Fonctions carré et inverse

<div class="encadre">

- **Carré** : $f(x) = x^2$. Sa courbe est une **parabole**, décroissante sur $]-\infty\,;0]$ et croissante sur $[0\,;+\infty[$. Elle modélise des aires, des distances de freinage.
- **Inverse** : $f(x) = \frac{1}{x}$ ($x \ne 0$). Sa courbe est une **hyperbole**. Elle modélise des quantités inversement proportionnelles (temps de trajet selon la vitesse).

</div>

## Retour au problème

Le prix vaut $A(x) = 1{,}5x + 4$ pour le taxi A et $B(x) = 2x$ pour le taxi B, où $x$ est la distance en km.

$A(x) < B(x) \iff 1{,}5x + 4 < 2x \iff 4 < 0{,}5x \iff x > 8$. Les deux droites se croisent au point $(8\,;16)$.

<mark>Pour moins de 8 km, le taxi B est moins cher ; au-delà de 8 km, c'est le taxi A</mark>.

La suite : [suites et modélisation](/maths/premiere-tronc-commun/suites-et-modelisation/cours/). Pour revoir les bases : [généralités sur les fonctions](/maths/seconde/generalites-sur-les-fonctions/cours/).
