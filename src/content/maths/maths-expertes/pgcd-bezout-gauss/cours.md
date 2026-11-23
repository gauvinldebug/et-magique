---
titre: PGCD, théorème de Bézout et théorème de Gauss
court: PGCD, Bézout et Gauss
description: PGCD et algorithme d'Euclide, nombres premiers entre eux, théorèmes de Bézout et de Gauss, équations diophantiennes, nombres premiers et petit théorème de Fermat, expliqués avec un carrelage, avec des exercices corrigés pas à pas. Terminale maths expertes.
ordre: 4
publie: 2026-11-23T02:03:00
video:
  youtube: ""
piege: >-
  **Gauss demande que les nombres soient premiers entre eux.** $6 \mid 4 \times 3$ et pourtant $6$ ne divise ni 4 ni 3 : ici $6$ et $4$ ne sont pas premiers entre eux. Et pour Bézout, $au + bv = 1$ prouve que $a$ et $b$ sont premiers entre eux, mais $au + bv = 3$ ne prouve **pas** que le PGCD vaut 3.
pdf:
  cours: /pdf/maths/maths-expertes/pgcd-bezout-gauss-cours.pdf
  fiche: /pdf/maths/maths-expertes/pgcd-bezout-gauss-fiche.pdf
  exercices: /pdf/maths/maths-expertes/pgcd-bezout-gauss-exercices.pdf
suivant: matrices
---

## Le problème

Un mur de salle de bain mesure 126 cm sur 90 cm. On veut le couvrir de carreaux **carrés**, tous identiques, les plus grands possible, sans en découper aucun. Quelle taille choisir ?

## L'idée : le carrelage

Un carreau de côté $c$ convient si $c$ divise 126 **et** 90. Le plus grand, c'est le **plus grand diviseur commun**.

Pour le trouver sans lister tous les diviseurs, on découpe le rectangle : on y place le plus grand carré possible ($90 \times 90$), il reste un rectangle $90 \times 36$. On recommence avec lui, jusqu'à ce qu'il ne reste **plus rien**. Le dernier carré posé est le carreau cherché. C'est exactement l'**algorithme d'Euclide**.

## Le PGCD

<div class="encadre">

Le **PGCD** de deux entiers $a$ et $b$ non tous deux nuls, noté $\text{PGCD}(a\,;b)$, est le plus grand entier qui divise à la fois $a$ et $b$.

**Algorithme d'Euclide** : si $a = bq + r$ (division euclidienne), alors $\text{PGCD}(a\,;b) = \text{PGCD}(b\,;r)$. On répète : **le PGCD est le dernier reste non nul**.

$a$ et $b$ sont **premiers entre eux** si $\text{PGCD}(a\,;b) = 1$.

</div>

Tout diviseur commun de $a$ et $b$ divise leur PGCD.

## Théorème de Bézout

<div class="encadre">

$a$ et $b$ sont premiers entre eux $\iff$ il existe deux entiers $u$ et $v$ tels que $\corange{au + bv = 1}$.

Plus généralement, il existe toujours $u$, $v$ avec $au + bv = \text{PGCD}(a\,;b)$.

</div>

Pour **trouver** $u$ et $v$, on remonte l'algorithme d'Euclide. Avec 17 et 5 : $17 = 5 \times 3 + 2$ puis $5 = 2 \times 2 + 1$. Donc $1 = 5 - 2 \times 2 = 5 - 2(17 - 5 \times 3) = 7 \times 5 - 2 \times 17$.

## Théorème de Gauss

<div class="encadre">

Si $a \mid bc$ et si $a$ et $b$ sont **premiers entre eux**, alors $a \mid c$.

**Conséquence** : si $a$ et $b$ sont premiers entre eux et divisent tous deux $n$, alors $ab \mid n$.

</div>

**Équation $ax + by = c$** (équation diophantienne) :

1. trouver une solution particulière $(x_0\,;y_0)$ ;
2. soustraire : $a(x - x_0) = -b(y - y_0)$ ;
3. appliquer Gauss (après avoir divisé par le PGCD) pour obtenir toutes les solutions.

## Nombres premiers et petit théorème de Fermat

<div class="encadre">

Un entier $p \ge 2$ est **premier** s'il a exactement deux diviseurs, 1 et $p$. Tout entier $n \ge 2$ se décompose de façon unique en produit de nombres premiers.

**Petit théorème de Fermat** : si $p$ est premier et $p$ ne divise pas $a$, alors $\cvert{a^{p-1} \equiv 1\ [p]}$.

</div>

Exemple : $3^6 \equiv 1\ [7]$, donc les puissances de 3 modulo 7 tournent avec une période qui divise 6.

## Retour au problème

On applique Euclide à 126 et 90 :

$$
126 = 90 \times 1 + 36, \quad 90 = 36 \times 2 + 18, \quad 36 = 18 \times 2 + 0.
$$

Le dernier reste non nul est 18. <mark>Les plus grands carreaux mesurent 18 cm de côté</mark> : il en faut $7 \times 5 = 35$.

La suite : les [matrices](/maths/maths-expertes/matrices/cours/). Pour revoir les restes et les congruences : [divisibilité et congruences](/maths/maths-expertes/divisibilite-et-congruences/cours/).
