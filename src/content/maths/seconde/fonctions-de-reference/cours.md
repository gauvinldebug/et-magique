---
titre: Les fonctions de référence
court: Fonctions de référence
description: Fonctions affines, carré, inverse, racine carrée et cube, leurs courbes, leurs variations et leurs propriétés, expliquées comme des silhouettes à reconnaître au premier coup d'oeil, avec des exercices corrigés pas à pas. Seconde maths.
ordre: 5
publie: 2026-11-22T22:04:00
video:
  youtube: ""
piege: >-
  **La fonction carré n'est pas croissante partout.** Elle descend sur $]-\infty\,;0]$ puis monte. Donc $-3 < -2$ mais $(-3)^2 > (-2)^2$. Avant de comparer des carrés, regarde le **signe** des nombres.
pdf:
  cours: /pdf/maths/seconde/fonctions-de-reference-cours.pdf
  fiche: /pdf/maths/seconde/fonctions-de-reference-fiche.pdf
  exercices: /pdf/maths/seconde/fonctions-de-reference-exercices.pdf
suivant: vecteurs
---

## Le problème

Sans calculatrice, qui est le plus grand : $2{,}7^2$ ou $2{,}71^2$ ? $\frac{1}{0{,}3}$ ou $\frac{1}{0{,}31}$ ? Et $0{,}4^2$ ou $\sqrt{0{,}4}$ ?

Il suffit de connaître la **forme** de quelques courbes. Toutes les fonctions du lycée sont construites à partir d'elles.

## L'idée : des silhouettes à reconnaître

Comme on reconnaît une silhouette familière de loin, il faut reconnaître chaque fonction de référence **au premier coup d'oeil** :

- la **droite** : une rampe régulière ;
- le **carré** : un bol ;
- l'**inverse** : deux toboggans qui fuient le zéro ;
- la **racine carrée** : une rampe qui démarre fort puis s'aplatit ;
- le **cube** : une marche qui ondule et monte toujours.

Une fois la silhouette en tête, les variations se lisent toutes seules.

## Les fonctions affines

<div class="encadre">

$\cbleu{f}(\corange{x}) = m\corange{x} + p$. Sa courbe est une **droite**, de coefficient directeur $m$ et d'ordonnée à l'origine $p$.

- Si $m > 0$ : $\cbleu{f}$ est croissante. Si $m < 0$ : décroissante. Si $m = 0$ : constante.
- $\cbleu{f}$ s'annule en $\corange{x} = -\frac{p}{m}$, et change de signe à cet endroit : signe de $m$ à droite, signe contraire à gauche.

</div>

Cas particulier, $p = 0$ : $\cbleu{f}(\corange{x}) = m\corange{x}$ est **linéaire**, sa droite passe par l'origine (proportionnalité).

## La fonction carré

<div class="encadre">

$\cbleu{f}(\corange{x}) = \corange{x}^2$, définie sur $\mathbb{R}$. Sa courbe est une **parabole** de sommet $O$, symétrique par rapport à l'axe des ordonnées.

- Décroissante sur $]-\infty\,;0]$, croissante sur $[0\,;+\infty[$.
- $\corange{x}^2 \ge 0$ pour tout $\corange{x}$, minimum 0 en 0.

</div>

## La fonction inverse

<div class="encadre">

$\cbleu{f}(\corange{x}) = \dfrac{1}{\corange{x}}$, définie sur $\mathbb{R}^* = \mathbb{R} \setminus \{0\}$. Sa courbe est une **hyperbole**, symétrique par rapport à l'origine.

- Décroissante sur $]-\infty\,;0[$ et décroissante sur $]0\,;+\infty[$.
- Mais **pas** décroissante sur $\mathbb{R}^*$ : $-1 < 1$ et $\frac{1}{-1} < \frac{1}{1}$.

</div>

## Racine carrée et cube

<div class="encadre">

- $\cbleu{f}(\corange{x}) = \sqrt{\corange{x}}$, définie sur $[0\,;+\infty[$, **croissante**.
- $\cbleu{f}(\corange{x}) = \corange{x}^3$, définie sur $\mathbb{R}$, **croissante**, symétrique par rapport à l'origine.

**Position relative sur $[0\,;1]$** : $\corange{x}^2 \le \corange{x} \le \sqrt{\corange{x}}$. Sur $[1\,;+\infty[$, c'est l'inverse : $\sqrt{\corange{x}} \le \corange{x} \le \corange{x}^2$.

</div>

<div class="labo" data-labo="reference"></div>

## Retour au problème

- $0 < 2{,}7 < 2{,}71$ et le carré est croissant sur $[0\,;+\infty[$ : <mark>$2{,}7^2 < 2{,}71^2$</mark>.
- $0 < 0{,}3 < 0{,}31$ et l'inverse est décroissante sur $]0\,;+\infty[$ : <mark>$\frac{1}{0{,}3} > \frac{1}{0{,}31}$</mark>.
- $0{,}4 \in [0\,;1]$, donc <mark>$0{,}4^2 < \sqrt{0{,}4}$</mark>.

Pour revoir le vocabulaire (croissante, tableau de variations), retourne aux [Généralités sur les fonctions](/maths/seconde/generalites-sur-les-fonctions/cours/). La parabole reviendra en grand en Première, avec le [second degré](/maths/premiere/second-degre/cours/).
