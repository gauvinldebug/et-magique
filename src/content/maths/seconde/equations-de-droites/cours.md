---
titre: Équations de droites et systèmes
court: Équations de droites et systèmes
description: Équations réduites et cartésiennes de droites, coefficient directeur, vecteur directeur, droites parallèles et systèmes de deux équations, expliqués avec la pente d'une route et un carrefour, avec des exercices corrigés pas à pas. Seconde maths.
ordre: 7
publie: 2026-11-22T22:06:00
video:
  youtube: ""
piege: >-
  **Une droite verticale n'a pas d'équation réduite $y = mx + p$.** Sa pente serait infinie. Son équation est $x = c$. Pense à ce cas dès que deux points ont la même abscisse.
pdf:
  cours: /pdf/maths/seconde/equations-de-droites-cours.pdf
  fiche: /pdf/maths/seconde/equations-de-droites-fiche.pdf
  exercices: /pdf/maths/seconde/equations-de-droites-exercices.pdf
suivant: statistiques
---

## Le problème

Deux forfaits de téléphone : le forfait A coûte 10 € par mois plus 2 € par giga, le forfait B coûte 25 € par mois plus 0,50 € par giga. À partir de combien de gigas le forfait B devient-il plus intéressant ?

Chaque forfait est une **droite**. La réponse est l'endroit où les deux droites se **croisent**.

## L'idée : la pente d'une route, et le carrefour

Une droite, c'est une **route toute droite** vue de profil.

- Sa **pente** dit de combien on monte quand on avance de 1 vers la droite : c'est le **coefficient directeur** $\corange{m}$.
- Là où la route coupe l'axe des ordonnées, c'est l'**ordonnée à l'origine** $\cbleu{p}$.

Et deux routes qui se croisent forment un **carrefour** : trouver ce point, c'est résoudre un **système**.

## Équation réduite

<div class="encadre">

Toute droite non verticale a une équation de la forme $y = \corange{m}x + \cbleu{p}$ : c'est son **équation réduite**.

- $\corange{m}$ est le coefficient directeur. Pour deux points $A$ et $B$ de la droite : $\corange{m} = \dfrac{y_B - y_A}{x_B - x_A}$.
- $\cbleu{p}$ est l'ordonnée à l'origine : la droite passe par $(0\,;\cbleu{p})$.

Une droite **verticale** a une équation de la forme $x = c$.

</div>

Lecture graphique : depuis un point de la droite, on avance de 1, on monte de $\corange{m}$ (ou on descend si $\corange{m} < 0$).

## Vecteur directeur et équation cartésienne

<div class="encadre">

Un **vecteur directeur** de la droite est un vecteur qui donne sa direction (un vecteur $\vec{AB}$ avec $A$ et $B$ sur la droite). La droite $y = \corange{m}x + \cbleu{p}$ a pour vecteur directeur $\vec{u}\begin{pmatrix} 1 \\ \corange{m} \end{pmatrix}$.

Toute droite a une **équation cartésienne** $ax + by + c = 0$, avec $(a\,;b) \ne (0\,;0)$. Un vecteur directeur est alors $\vec{u}\begin{pmatrix} -b \\ a \end{pmatrix}$.

</div>

Un point $M(x\,;y)$ est sur la droite passant par $A$ et dirigée par $\vec{u}$ si et seulement si $\vec{AM}$ et $\vec{u}$ sont colinéaires : $\det(\vec{AM}, \vec{u}) = 0$. C'est le déterminant du chapitre [Vecteurs](/maths/seconde/vecteurs/cours/).

## Droites parallèles

<div class="encadre">

Deux droites non verticales sont **parallèles** si et seulement si elles ont le **même coefficient directeur**. Deux routes de même pente ne se croisent jamais (ou sont confondues).

</div>

## Systèmes de deux équations

<div class="encadre">

Résoudre le système $\begin{cases} ax + by = c \\ a'x + b'y = c' \end{cases}$, c'est trouver le point d'intersection des deux droites.

- Si les droites sont sécantes ($ab' - a'b \ne 0$), il y a **une seule solution**.
- Si elles sont parallèles, aucune solution (ou une infinité si elles sont confondues).

Deux méthodes : **substitution** (on isole une inconnue et on la remplace) ou **combinaison** (on multiplie les lignes pour éliminer une inconnue).

</div>

## Retour au problème

Avec $x$ gigas : forfait A, $y = 2x + 10$ ; forfait B, $y = 0{,}5x + 25$. Le carrefour :

$$
2x + 10 = 0{,}5x + 25 \iff 1{,}5x = 15 \iff x = 10
$$

Les deux forfaits coûtent 30 € pour 10 gigas. La droite B a une pente plus faible, donc <mark>au-delà de 10 gigas, le forfait B est moins cher</mark>.
