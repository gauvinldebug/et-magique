---
titre: "Les graphes"
---

<div class="encadre">

**L'image.** Un plan de métro : des stations (sommets) et des liaisons (arêtes).

</div>

## L'essentiel

<div class="etape o">

Graphe = sommets + arêtes (ou arcs s'il est orienté). Degré = nombre de voisins. Pondéré : arêtes valuées. Représentations : matrice d'adjacence ($n^2$ cases) ou liste d'adjacence (dictionnaire de listes de voisins).

</div>

```python
g = {"A": ["B", "C"], "B": ["A"], "C": ["A"]}
```

## Les pièges

- <span class="p">Non orienté : chaque arête dans les deux sens.</span>
- Matrice symétrique si et seulement si le graphe est non orienté.
