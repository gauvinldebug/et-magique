---
titre: Divisibilité, division euclidienne et congruences
court: Divisibilité et congruences
description: Divisibilité dans Z, division euclidienne, congruences modulo n et leurs propriétés, calcul de restes de grandes puissances, expliqués avec le cadran d'une horloge, avec des exercices corrigés pas à pas. Terminale maths expertes.
ordre: 3
publie: 2026-11-23T02:02:00
video:
  youtube: ""
piege: >-
  **Le reste d'une division euclidienne est toujours positif et plus petit que le diviseur.** Pour $-17$ divisé par 5, on écrit $-17 = 5 \times (-4) + 3$ : le reste est **3**, pas $-2$. Et on ne divise pas une congruence : $2a \equiv 2b\ [6]$ n'entraîne pas $a \equiv b\ [6]$.
pdf:
  cours: /pdf/maths/maths-expertes/divisibilite-et-congruences-cours.pdf
  fiche: /pdf/maths/maths-expertes/divisibilite-et-congruences-fiche.pdf
  exercices: /pdf/maths/maths-expertes/divisibilite-et-congruences-exercices.pdf
suivant: pgcd-bezout-gauss
---

## Le problème

Quel est le chiffre des unités de $7^{2026}$ ? La calculatrice abandonne : ce nombre a plus de 1 700 chiffres. Pourtant, la réponse tient en trois lignes.

## L'idée : le cadran de l'horloge

Sur une horloge, après 12 h, on revient à 1 h : on ne compte pas « 15 h », on dit « 3 h ». Sur le cadran, $15$ et $3$ sont **au même endroit**. On ne garde que le **reste** de la division par 12.

Pour le chiffre des unités, on utilise une horloge à **10 heures** : seul le reste de la division par 10 compte. Et sur une horloge, les puissances finissent toujours par **tourner en rond**.

## Divisibilité

<div class="encadre">

Pour $a$ et $b$ entiers relatifs, $b \ne 0$ : $b$ **divise** $a$ (noté $b \mid a$) s'il existe un entier $k$ tel que $a = kb$.

- Si $b \mid a$ et $a \mid c$, alors $b \mid c$ ;
- si $b \mid a$ et $b \mid c$, alors $b$ divise toute **combinaison** $ua + vc$ ($u$, $v$ entiers).

</div>

## Division euclidienne

<div class="encadre">

Pour $a \in \mathbb{Z}$ et $b \in \mathbb{N}^*$, il existe un **unique** couple $(q\,;r)$ d'entiers tel que

$$
a = bq + r \quad \text{et} \quad 0 \le \corange{r} < b.
$$

$q$ est le **quotient**, $\corange{r}$ le **reste**.

</div>

## Congruences

<div class="encadre">

$n \ge 2$. On dit que $a$ est **congru à $b$ modulo $n$**, et on écrit $a \equiv b\ [n]$, si $a$ et $b$ ont le même reste dans la division par $n$, c'est-à-dire si $n \mid a - b$.

**Propriétés** : si $a \equiv b\ [n]$ et $c \equiv d\ [n]$, alors

- $a + c \equiv b + d\ [n]$ et $ac \equiv bd\ [n]$ ;
- $a^k \equiv b^k\ [n]$ pour tout entier naturel $k$.

</div>

On peut donc **remplacer un nombre par son reste** dans les sommes, les produits et les puissances. Mais on ne peut **pas simplifier** par un facteur commun en général.

**Tableau de congruences** : pour étudier les restes de $x^2$ modulo 5, on teste les 5 restes possibles de $x$ : $0, 1, 2, 3, 4$ donnent $0, 1, 4, 4, 1$. Un carré n'est donc jamais congru à 2 ou 3 modulo 5.

## Retour au problème

On cherche le reste de $7^{2026}$ modulo 10. Les puissances de 7 tournent sur le cadran :

$$
7^1 \equiv 7, \quad 7^2 \equiv 9, \quad 7^3 \equiv 3, \quad 7^4 \equiv 1\ [10]
$$

Comme $7^4 \equiv 1$, et $2026 = 4 \times 506 + 2$ :

$$
7^{2026} = (7^4)^{506} \times 7^2 \equiv 1^{506} \times 49 \equiv 9\ [10].
$$

<mark>Le chiffre des unités de $7^{2026}$ est 9</mark>.

La suite : [PGCD, Bézout et Gauss](/maths/maths-expertes/pgcd-bezout-gauss/cours/). Les bases (nombres premiers, critères de divisibilité) sont dans l'[arithmétique de 3e](/maths/3e/arithmetique/cours/).
