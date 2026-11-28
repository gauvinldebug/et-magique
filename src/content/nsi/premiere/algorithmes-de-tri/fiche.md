---
titre: "Les algorithmes de tri"
---

<div class="encadre">

**L'image.** Ranger une main de cartes : glisser chaque carte à sa place (insertion), ou prendre la plus petite à chaque fois (sélection).

</div>

## L'essentiel

| Tri | À chaque tour |
|---|---|
| sélection | chercher le minimum de la partie non triée, l'échanger avec la première case non triée |
| insertion | glisser l'élément suivant à sa place dans la partie triée |

<div class="etape o">

Invariant (insertion) : `t[0:i]` est trié au début du tour `i`. Coût : environ $n^2/2$ comparaisons (quadratique).

</div>

## Les pièges

- <span class="p">Quadratique : 10 fois plus de données, 100 fois plus de temps.</span>
- Ces fonctions modifient le tableau en place.
