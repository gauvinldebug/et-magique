---
titre: "Parcourir un graphe"
---

<div class="encadre">

**L'image.** Largeur : une tache d'encre qui s'étale. Profondeur : un explorateur qui va au bout de chaque couloir.

</div>

## L'essentiel

| Parcours | Structure | Usage |
|---|---|---|
| largeur (BFS) | file | plus court chemin en nombre d'arêtes |
| profondeur (DFS) | pile ou récursivité | existence d'un chemin, cycles, labyrinthes |

<div class="etape o">

Dans les deux cas, on mémorise les sommets déjà visités.

</div>

## Les pièges

- <span class="p">Sans liste des visités : boucle infinie.</span>
- BFS : plus court en nombre d'arêtes, pas en poids.
