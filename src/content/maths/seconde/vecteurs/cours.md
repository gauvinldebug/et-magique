---
titre: Les vecteurs du plan
court: Vecteurs
description: Vecteurs et translations, relation de Chasles, coordonnées, milieu, distance, colinéarité et déterminant, expliqués avec le palet qui glisse sur la glace, avec des exercices corrigés pas à pas. Seconde maths.
ordre: 6
publie: 2026-11-22T22:05:00
video:
  youtube: ""
piege: >-
  **Un vecteur ne dit pas où il commence.** $\vec{AB} = \vec{CD}$ ne veut pas dire que $A = C$ : c'est le même déplacement, fait depuis deux points différents. Et l'ordre des lettres compte, $\vec{BA} = -\vec{AB}$.
pdf:
  cours: /pdf/maths/seconde/vecteurs-cours.pdf
  fiche: /pdf/maths/seconde/vecteurs-fiche.pdf
  exercices: /pdf/maths/seconde/vecteurs-exercices.pdf
suivant: equations-de-droites
---

## Le problème

On donne quatre points $A(1\,;2)$, $B(4\,;3)$, $C(6\,;7)$ et $D(3\,;6)$. Le quadrilatère $ABCD$ est-il un parallélogramme ? Et les points $A$, $B$ et $E(10\,;5)$ sont-ils alignés ?

Les deux questions se règlent en quelques lignes avec un seul outil : le **vecteur**.

## L'idée : le palet qui glisse sur la glace

Imagine un palet de hockey qu'on pousse sur la glace. Son déplacement a trois caractéristiques :

- une **direction** (la droite qu'il suit) ;
- un **sens** (vers où il part sur cette droite) ;
- une **longueur** (la distance parcourue).

Un **vecteur**, c'est exactement ça : un déplacement. Peu importe d'où part le palet, si on le pousse de la même façon, c'est le même vecteur.

## Vecteur et translation

<div class="encadre">

La **translation** qui envoie $A$ sur $B$ fait glisser tous les points du plan de la même façon. On la note avec le vecteur $\cbleu{\vec{AB}}$.

- $\cbleu{\vec{AB}} = \corange{\vec{CD}}$ si et seulement si $ABDC$ est un **parallélogramme** (attention à l'ordre des lettres).
- Le vecteur nul $\vec{0} = \vec{AA}$ ne déplace rien.
- $\vec{BA} = -\vec{AB}$ : même direction, même longueur, sens contraire.

</div>

## La relation de Chasles

<div class="encadre">

Pour tous points $A$, $B$, $C$ :
$$\cbleu{\vec{AB}} + \corange{\vec{BC}} = \cvert{\vec{AC}}$$

</div>

Deux glissades à la suite, de $A$ à $B$ puis de $B$ à $C$, reviennent à une seule glissade de $A$ à $C$. La lettre du milieu « disparaît ».

## Coordonnées

<div class="encadre">

Dans un repère, si $A(x_A\,;y_A)$ et $B(x_B\,;y_B)$ :

- $\cbleu{\vec{AB}}\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$ (arrivée moins départ) ;
- le **milieu** $I$ de $[AB]$ a pour coordonnées $\left(\dfrac{x_A + x_B}{2}\,;\dfrac{y_A + y_B}{2}\right)$ ;
- dans un repère orthonormé, $AB = \|\vec{AB}\| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.

Si $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $k$ réel, alors $k\vec{u}\begin{pmatrix} kx \\ ky \end{pmatrix}$.

</div>

## Colinéarité

<div class="encadre">

Deux vecteurs sont **colinéaires** s'ils ont la même direction, c'est-à-dire si l'un est un multiple de l'autre : $\vec{v} = k\vec{u}$.

Avec les coordonnées : $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ sont colinéaires si et seulement si leur **déterminant** est nul :
$$\det(\vec{u}, \vec{v}) = xy' - x'y = 0.$$

</div>

Applications : $A$, $B$, $C$ sont **alignés** si et seulement si $\vec{AB}$ et $\vec{AC}$ sont colinéaires. Les droites $(AB)$ et $(CD)$ sont **parallèles** si et seulement si $\vec{AB}$ et $\vec{CD}$ sont colinéaires.

## Retour au problème

$\cbleu{\vec{AB}}\begin{pmatrix} 3 \\ 1 \end{pmatrix}$ et $\corange{\vec{DC}}\begin{pmatrix} 3 \\ 1 \end{pmatrix}$. Ils sont égaux, donc <mark>$ABCD$ est un parallélogramme</mark>.

$\vec{AE}\begin{pmatrix} 9 \\ 3 \end{pmatrix}$, et $\det(\vec{AB}, \vec{AE}) = 3 \times 3 - 9 \times 1 = 0$. <mark>$A$, $B$, $E$ sont alignés</mark>.

Ces vecteurs servent aussi à écrire les [équations de droites](/maths/seconde/equations-de-droites/cours/), et reviendront en Première avec le [produit scalaire](/maths/premiere/produit-scalaire/cours/).
