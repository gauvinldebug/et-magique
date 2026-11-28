---
titre: "Les graphes"
court: "Graphes"
description: "Graphes orientés et non orientés, sommets, arêtes et arcs, voisins, degré, chemins et cycles, graphes pondérés, représentation par matrice d'adjacence et par liste d'adjacence (dictionnaire), expliqués avec un plan de métro. Exercices corrigés. Spécialité NSI de terminale."
ordre: 6
publie: 2026-11-28T13:06:00
video:
  youtube: ""
piege: "**Dans un graphe non orienté, chaque arête apparaît deux fois** dans la liste d'adjacence : A est voisin de B et B est voisin de A. Oublier l'un des deux crée un sens unique."
pdf:
  cours: /pdf/nsi/terminale/graphes-cours.pdf
  fiche: /pdf/nsi/terminale/graphes-fiche.pdf
  exercices: /pdf/nsi/terminale/graphes-exercices.pdf
suivant: parcours-de-graphes
---

## Le problème

Un réseau social, des villes reliées par des routes, des pages web reliées par des liens : on veut savoir qui est relié à qui, trouver un chemin, détecter un cycle. Ni une liste ni un arbre ne représentent bien ces liens dans tous les sens.

## L'idée : le plan de métro

Un plan de métro, ce sont des stations et des lignes qui les relient. Peu importe la distance réelle sur la carte : ce qui compte, c'est quelles stations sont reliées. Un graphe, c'est exactement ça.

## Le vocabulaire

<div class="encadre">

Un **graphe** est formé de **sommets** reliés par des **arêtes**.

- Dans un graphe **orienté**, les liens ont un sens : on parle d'**arcs** (A → B n'implique pas B → A).
- Deux sommets reliés sont **voisins** (ou adjacents).
- Le **degré** d'un sommet est son nombre de voisins.
- Un **chemin** est une suite de sommets reliés deux à deux ; un **cycle** est un chemin qui revient à son départ.
- Un graphe est **pondéré** quand chaque arête porte une valeur (distance, durée, coût).

</div>

## Matrice d'adjacence

Les sommets sont numérotés de 0 à $n - 1$. La case $(i, j)$ vaut 1 s'il y a une arête de $i$ vers $j$, 0 sinon.

$$
M = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}
$$

Ici, 0 est relié à 1 et à 2. Pour un graphe non orienté, la matrice est **symétrique**.

## Liste d'adjacence

Pour chaque sommet, on stocke la liste de ses voisins, en Python avec un dictionnaire :

```python
g = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"],
}
len(g["A"])   # degré de A : 2
```

## Laquelle choisir ?

| | Matrice | Liste d'adjacence |
|---|---|---|
| savoir si A et B sont reliés | immédiat | parcourir les voisins de A |
| mémoire | $n^2$ cases | proportionnelle au nombre d'arêtes |

<mark>Pour un grand graphe avec peu de liens (un réseau social), la liste d'adjacence est bien plus économe.</mark>

## Les pièges

- Graphe non orienté : écrire chaque arête dans les deux sens.
- Un arbre est un graphe particulier (connexe, sans cycle) : tous les graphes ne sont pas des arbres.
- Le degré d'un sommet ne dit rien de la longueur des arêtes.
