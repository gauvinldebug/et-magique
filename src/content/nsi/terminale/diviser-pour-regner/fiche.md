---
titre: "Diviser pour régner"
---

<div class="encadre">

**L'image.** Un tas de copies coupé en deux, encore et encore, puis refusionné en tas triés.

</div>

## L'essentiel

<div class="etape o">

Diviser, résoudre (récursivement), combiner. Tri fusion : couper en deux, trier chaque moitié, fusionner. Coût : environ $n \log_2 n$, contre $n^2$ pour le tri par insertion.

</div>

Fusion : comparer les premiers éléments des deux listes, prendre le plus petit, recommencer.

## Les pièges

- <span class="p">Fusionner n'est pas concaténer.</span>
- Cas de base : liste de taille 0 ou 1.
