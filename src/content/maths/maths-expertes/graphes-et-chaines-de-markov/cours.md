---
titre: Graphes et chaînes de Markov
court: Graphes et Markov
description: Graphes, degrés, chaînes et connexité, matrice d'adjacence et nombre de chaînes, graphes probabilistes, matrice de transition et état stable d'une chaîne de Markov, expliqués avec un plan de métro, avec des exercices corrigés pas à pas. Terminale maths expertes.
ordre: 6
publie: 2026-11-23T02:05:00
video:
  youtube: ""
piege: >-
  **Dans une matrice de transition, c'est chaque ligne qui fait 1**, pas chaque colonne : la ligne $i$ donne où l'on va en partant de l'état $i$. Et l'état probabiliste est une matrice **ligne** : on calcule $\pi_{n+1} = \pi_n P$, dans cet ordre, pas $P\pi_n$.
pdf:
  cours: /pdf/maths/maths-expertes/graphes-et-chaines-de-markov-cours.pdf
  fiche: /pdf/maths/maths-expertes/graphes-et-chaines-de-markov-fiche.pdf
  exercices: /pdf/maths/maths-expertes/graphes-et-chaines-de-markov-exercices.pdf
---

## Le problème

Lina va au lycée à vélo ou en bus. Si elle prend le vélo un jour, elle le reprend le lendemain avec une probabilité de 0,8. Si elle prend le bus, elle passe au vélo le lendemain avec une probabilité de 0,4. Sur le long terme, quelle part des jours se fait à vélo ?

## L'idée : le plan du métro

Sur un plan de métro, on ne garde que l'essentiel : des **stations** (les points) et des **liaisons** (les traits). Peu importe la longueur réelle des tunnels. C'est un **graphe**.

Maintenant, imagine un voyageur qui, à chaque station, **tire au sort** sa prochaine destination, avec des probabilités écrites sur les flèches. Où sera-t-il dans 10 trajets ? C'est une **chaîne de Markov** : l'avenir ne dépend que de la station où il est **maintenant**.

## Graphes

<div class="encadre">

Un **graphe** est formé de **sommets** reliés par des **arêtes** (des flèches, ou **arcs**, s'il est orienté).

- L'**ordre** est le nombre de sommets. Le **degré** d'un sommet est le nombre d'arêtes qui en partent.
- <span class="p">La somme des degrés vaut **deux fois** le nombre d'arêtes</span>.
- Une **chaîne** (un **chemin** si le graphe est orienté) est une suite d'arêtes qui se suivent ; sa **longueur** est son nombre d'arêtes.
- Un graphe est **connexe** si deux sommets quelconques sont toujours reliés par une chaîne.

</div>

## Matrice d'adjacence

<div class="encadre">

Pour un graphe d'ordre $n$, la **matrice d'adjacence** $A$ a pour coefficient $a_{ij}$ le nombre d'arêtes allant du sommet $i$ au sommet $j$.

Le coefficient $(i\,;j)$ de $\corange{A^k}$ est le **nombre de chaînes de longueur $k$** allant de $i$ à $j$.

</div>

## Chaînes de Markov

<div class="encadre">

Un **graphe probabiliste** est un graphe orienté dont chaque arc porte une probabilité ; les probabilités qui partent d'un sommet ont pour somme 1.

- La **matrice de transition** $P$ a pour coefficient $p_{ij}$ la probabilité de passer de l'état $i$ à l'état $j$. **Chaque ligne a pour somme 1.**
- L'**état probabiliste** au temps $n$ est la matrice ligne $\pi_n$. On a $\pi_{n+1} = \pi_n P$, donc $\cvert{\pi_n = \pi_0 P^n}$.
- Un **état stable** est une matrice ligne $\pi$ (de somme 1) telle que $\pi = \pi P$.

</div>

Pour un graphe probabiliste à deux états dont la matrice $P$ n'a aucun coefficient nul, l'état $\pi_n$ converge vers l'état stable, quel que soit le départ.

<div class="labo" data-labo="markov"></div>

## Retour au problème

Les états sont V (vélo) et B (bus), dans cet ordre :

$$
P = \begin{pmatrix} 0{,}8 & 0{,}2 \\ 0{,}4 & 0{,}6 \end{pmatrix}.
$$

On cherche $\pi = (x\ \ 1 - x)$ avec $\pi = \pi P$. La première coordonnée donne $x = 0{,}8x + 0{,}4(1 - x)$, soit $0{,}6x = 0{,}4$ et $x = \frac{2}{3}$.

<mark>Sur le long terme, Lina va au lycée à vélo deux jours sur trois</mark>.

Pour revoir le calcul de $P^n$ : les [matrices](/maths/maths-expertes/matrices/cours/). Pour les probabilités conditionnelles : les [probabilités de 1re](/maths/premiere/probabilites-conditionnelles/cours/).
