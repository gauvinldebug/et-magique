---
titre: Calcul littéral, équations et inéquations
court: Calcul littéral et équations
description: Développer, factoriser, les identités remarquables, les équations produit nul et quotient, et les inéquations, expliqués avec un cadeau qu'on emballe et une balance, avec des exercices corrigés pas à pas. Seconde maths.
ordre: 2
publie: 2026-11-22T22:01:00
video:
  youtube: ""
piege: >-
  **Multiplier ou diviser une inéquation par un nombre négatif change le sens.** $-2x < 6$ donne $x > -3$, pas $x < -3$. La balance se retourne.
pdf:
  cours: /pdf/maths/seconde/calcul-litteral-cours.pdf
  fiche: /pdf/maths/seconde/calcul-litteral-fiche.pdf
  exercices: /pdf/maths/seconde/calcul-litteral-exercices.pdf
suivant: proportions-et-evolutions
---

## Le problème

Résoudre $(2\corange{x} - 1)^2 = 9$. Développer donne une équation avec du $\corange{x}^2$ qu'on ne sait pas résoudre directement. Pourtant, en Seconde, on y arrive en trois lignes. Le secret : choisir entre **développer** et **factoriser**.

## L'idée : le cadeau qu'on emballe

Une expression, c'est comme un cadeau.

- **Développer**, c'est **déballer** : $3(\corange{x} + 2)$ devient $3\corange{x} + 6$. On voit chaque morceau, c'est pratique pour additionner et simplifier.
- **Factoriser**, c'est **emballer** : $3\corange{x} + 6$ redevient $3(\corange{x} + 2)$. On obtient un seul paquet, un **produit**, et c'est la forme qui permet de résoudre une équation.

Et une équation, c'est une **balance** en équilibre : tout ce qu'on fait d'un côté, on le fait de l'autre.

## Développer

<div class="encadre">

- $k(a + b) = ka + kb$
- $(a + b)(c + d) = ac + ad + bc + bd$

**Les identités remarquables** :

- $\cbleu{(a + b)^2 = a^2 + 2ab + b^2}$
- $\corange{(a - b)^2 = a^2 - 2ab + b^2}$
- $\cvert{(a + b)(a - b) = a^2 - b^2}$

</div>

Exemple : $(2\corange{x} + 3)^2 = 4\corange{x}^2 + 12\corange{x} + 9$. Le double produit $2 \times 2\corange{x} \times 3$ est celui qu'on oublie le plus souvent.

## Factoriser

Pour emballer, on cherche :

1. un **facteur commun** : $5\corange{x}^2 - 10\corange{x} = 5\corange{x}(\corange{x} - 2)$ ;
2. sinon, une **identité remarquable** lue à l'envers : $\corange{x}^2 - 49 = (\corange{x} - 7)(\corange{x} + 7)$.

Le facteur commun peut être une parenthèse entière : $(\corange{x} + 1)(2\corange{x} - 3) + (\corange{x} + 1)(\corange{x} + 4) = (\corange{x} + 1)(3\corange{x} + 1)$.

## Les équations

<div class="encadre">

**Équation du premier degré.** On isole $\corange{x}$ en faisant la même opération des deux côtés de la balance.

**Équation produit nul.** Un produit est nul si et seulement si l'un de ses facteurs est nul :
$$A \times B = 0 \iff A = 0 \ \text{ou}\ B = 0$$

**Équation quotient.** $\dfrac{A}{B} = 0 \iff A = 0$ et $B \ne 0$.

**Équation $\corange{x}^2 = a$.** Si $a > 0$, deux solutions : $\sqrt{a}$ et $-\sqrt{a}$. Si $a = 0$, une seule : 0. Si $a < 0$, aucune.

</div>

La méthode : tout passer du même côté pour avoir « $\dots = 0$ », **factoriser**, puis utiliser le produit nul.

## Les inéquations

<div class="encadre">

On résout comme une équation, avec une règle en plus : quand on **multiplie ou divise par un nombre négatif**, on **change le sens** de l'inégalité.

</div>

Exemple : $3 - 2\corange{x} \ge 7 \iff -2\corange{x} \ge 4 \iff \corange{x} \le -2$. Donc $S = \,]-\infty\,;-2]$ (les intervalles sont dans [Ensembles de nombres](/maths/seconde/ensembles-de-nombres/cours/)).

Pour une inéquation produit, comme $(\corange{x} - 1)(\corange{x} + 3) > 0$, on fait un **tableau de signes** : une ligne par facteur, et la règle des signes.

## Retour au problème

$(2\corange{x} - 1)^2 = 9 \iff (2\corange{x} - 1)^2 - 3^2 = 0$. C'est $a^2 - b^2$, on emballe :

$$
\begin{aligned}
(2\corange{x} - 1 - 3)(2\corange{x} - 1 + 3) &= 0 \\
(2\corange{x} - 4)(2\corange{x} + 2) &= 0 \\
2\corange{x} - 4 = 0 \ &\text{ou}\ 2\corange{x} + 2 = 0
\end{aligned}
$$

<mark>$S = \{-1\,;2\}$</mark>. Plus tard, en Première, le [second degré](/maths/premiere/second-degre/cours/) donnera une méthode pour toutes les équations de ce type.
