---
titre: Cristaux, mailles cubiques et compacité
court: Cristaux et mailles
description: Maille cubique simple et cubique à faces centrées, nombre d'atomes par maille, contact entre atomes et diagonale du carré, compacité, masse volumique d'un cristal, expliqués avec les pommes empilées du marchand de fruits, avec des exercices corrigés pas à pas. Enseignement scientifique de Première, partie maths.
ordre: 3
publie: 2026-11-23T09:03:00
video:
  youtube: ""
piege: >-
  **Un atome placé sur un sommet ne compte pas pour un.** Il est partagé entre 8 mailles voisines : il compte pour $\frac{1}{8}$. Un atome au centre d'une face est partagé entre 2 mailles : il compte pour $\frac{1}{2}$. Et dans la maille à faces centrées, les atomes se touchent le long de la **diagonale d'une face**, pas le long d'une arête.
pdf:
  cours: /pdf/maths/ens-scientifique-premiere/cristaux-et-mailles-cours.pdf
  fiche: /pdf/maths/ens-scientifique-premiere/cristaux-et-mailles-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-premiere/cristaux-et-mailles-exercices.pdf
suivant: radioactivite-et-datation
---

## Le problème

Le cuivre cristallise dans une maille cubique à faces centrées d'arête $a = 361$ pm ($1$ pm $= 10^{-12}$ m). Un atome de cuivre a une masse de $1{,}055 \times 10^{-25}$ kg. Peut-on retrouver par le calcul la masse volumique du cuivre, environ $8\,960\ \text{kg/m}^3$ ?

## L'idée : les pommes du marchand

Le marchand de fruits empile ses pommes. S'il les pose en carrés, bien alignées les unes au-dessus des autres, il reste beaucoup de vide entre elles. S'il décale chaque couche pour que les pommes tombent dans les creux, il en loge beaucoup plus dans le même cageot.

Un cristal, c'est pareil : des atomes (les pommes) rangés selon un motif qui se répète. Le motif de base s'appelle la **maille**. <mark>La compacité mesure la part de la maille réellement occupée par les atomes</mark>.

## Compter les atomes d'une maille

<div class="encadre">

Une maille cubique est entourée d'autres mailles identiques. Un atome est donc partagé :

- au **sommet** : entre 8 mailles, il compte pour $\corange{\frac{1}{8}}$ ;
- au **centre d'une face** : entre 2 mailles, il compte pour $\corange{\frac{1}{2}}$ ;
- au **centre du cube** : il compte pour $1$.

**Cubique simple** : $8 \times \frac{1}{8} = \cbleu{1}$ atome par maille. **Cubique à faces centrées** : $8 \times \frac{1}{8} + 6 \times \frac{1}{2} = \cbleu{4}$ atomes par maille.

</div>

## Le contact entre atomes

<div class="encadre">

Les atomes sont des sphères de rayon $r$ qui se touchent.

- **Cubique simple** : contact le long d'une arête, donc $a = 2r$.
- **Faces centrées** : contact le long de la diagonale d'une face. Par le théorème de Pythagore, cette diagonale vaut $a\sqrt{2}$, donc $a\sqrt{2} = 4r$.

</div>

## Compacité et masse volumique

<div class="encadre">

$$
\text{compacité} = \frac{N \times \frac{4}{3}\pi r^3}{a^3}
\qquad
\rho = \frac{N \times m_\text{atome}}{a^3}
$$

où $N$ est le nombre d'atomes par maille. Cubique simple : compacité $\frac{\pi}{6} \approx 0{,}52$. Faces centrées : $\frac{\pi}{3\sqrt{2}} \approx \crouge{0{,}74}$, l'empilement le plus compact possible.

</div>

## Retour au problème

$N = 4$ et $a = 361 \times 10^{-12}$ m, donc $a^3 \approx 4{,}70 \times 10^{-29}\ \text{m}^3$.

$$
\rho = \frac{4 \times 1{,}055 \times 10^{-25}}{4{,}70 \times 10^{-29}} \approx 8\,980\ \text{kg/m}^3
$$

<mark>Le calcul redonne bien la masse volumique du cuivre</mark>, à moins de 1 % près.

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-premiere/cristaux-et-mailles/exercices/). La suite : [radioactivité et datation](/maths/ens-scientifique-premiere/radioactivite-et-datation/cours/). Pour revoir Pythagore : [théorème de Pythagore](/maths/4e/theoreme-de-pythagore/cours/).
