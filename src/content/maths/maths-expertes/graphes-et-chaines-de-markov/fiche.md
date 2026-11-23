---
titre: Graphes et chaînes de Markov
---

<div class="encadre">

**L'image.** Un plan de métro : des stations, des liaisons. Un voyageur qui tire au sort sa prochaine station, c'est une chaîne de Markov.

</div>

## Graphes

- Ordre : nombre de sommets. Degré : nombre d'arêtes d'un sommet.
- Somme des degrés $= 2 \times$ nombre d'arêtes.
- Connexe : tous les sommets sont reliés par une chaîne.

## Matrices

<div class="etape o">

| Matrice | Ce qu'elle donne |
|---|---|
| adjacence $A$ | $a_{ij}$ : arêtes de $i$ vers $j$ |
| $A^k$ | chaînes de longueur $k$ de $i$ vers $j$ |
| transition $P$ | $p_{ij}$ : probabilité de $i$ vers $j$ |

</div>

## Markov

1. Chaque ligne de $P$ a pour somme 1.
2. $\pi_{n+1} = \pi_n P$, donc $\pi_n = \pi_0P^n$ ($\pi_n$ en ligne).
3. État stable : $\pi = \pi P$ et somme des coefficients égale à 1.

## Les pièges

- <span class="p">Ce sont les lignes de $P$ qui font 1</span>.
- $\pi_n P$, pas $P\pi_n$.
- Respecter le même ordre des états partout.
