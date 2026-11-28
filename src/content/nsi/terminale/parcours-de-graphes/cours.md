---
titre: "Parcourir un graphe"
court: "Parcours de graphes"
description: "Parcours en largeur avec une file et parcours en profondeur avec une pile ou en récursif, sommets déjà visités, recherche d'un chemin, plus court chemin en nombre d'arêtes, détection de cycle, expliqués avec une tache d'encre et un explorateur de labyrinthe. Exercices corrigés. Spécialité NSI de terminale."
ordre: 7
publie: 2026-11-28T13:07:00
video:
  youtube: ""
piege: "**Sans mémoriser les sommets déjà visités, le parcours tourne en rond.** Dès qu'il y a un cycle, on revisite les mêmes sommets à l'infini."
pdf:
  cours: /pdf/nsi/terminale/parcours-de-graphes-cours.pdf
  fiche: /pdf/nsi/terminale/parcours-de-graphes-fiche.pdf
  exercices: /pdf/nsi/terminale/parcours-de-graphes-exercices.pdf
suivant: bases-de-donnees
---

## Le problème

Dans un réseau social, combien d'intermédiaires séparent deux personnes ? Dans un labyrinthe, existe-t-il une sortie ? Pour répondre, il faut visiter les sommets d'un graphe de façon organisée, sans en oublier et sans tourner en rond.

## L'idée : la tache d'encre et l'explorateur

Une goutte d'encre sur un buvard s'étale en cercles : d'abord les voisins immédiats, puis les voisins des voisins. C'est le **parcours en largeur**. Un explorateur dans un labyrinthe, lui, fonce dans un couloir jusqu'au bout, puis revient au dernier carrefour : c'est le **parcours en profondeur**.

## Le parcours en largeur (BFS)

<div class="encadre">

On utilise une **file** : on enfile le départ, puis tant que la file n'est pas vide, on défile un sommet et on enfile ses voisins **pas encore visités**.

</div>

```python
from collections import deque

def largeur(g, depart):
    visites = [depart]
    file = deque([depart])
    while file:
        s = file.popleft()
        for v in g[s]:
            if v not in visites:
                visites.append(v)
                file.append(v)
    return visites
```

<mark>Le parcours en largeur trouve le chemin le plus court en nombre d'arêtes</mark> : les sommets sont atteints par distance croissante au départ.

## Le parcours en profondeur (DFS)

On remplace la file par une **pile**, ou on écrit une fonction récursive :

```python
def profondeur(g, s, visites=None):
    if visites is None:
        visites = []
    visites.append(s)
    for v in g[s]:
        if v not in visites:
            profondeur(g, v, visites)
    return visites
```

Il sert à savoir si un chemin existe, à détecter un cycle ou à explorer un labyrinthe.

## À quoi ça sert

| Question | Parcours |
|---|---|
| le plus court chemin en nombre d'étapes | largeur |
| un chemin existe-t-il ? | l'un ou l'autre |
| explorer à fond une branche, détecter un cycle | profondeur |

## Les pièges

- Oublier de marquer les sommets visités : boucle infinie dès qu'il y a un cycle.
- Le parcours en largeur donne le plus court chemin en **nombre d'arêtes**, pas en distance dans un graphe pondéré.
- L'ordre de visite dépend de l'ordre des voisins dans les listes.
