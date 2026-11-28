---
titre: "La programmation dynamique"
---

<div class="encadre">

**L'image.** Un carnet où l'on note chaque calcul la première fois, pour ne jamais le refaire.

</div>

## L'essentiel

<div class="etape o">

Programmation dynamique : sous-problèmes qui se répètent, chacun calculé une seule fois et mémorisé. Descendante : récursif + dictionnaire (mémoïsation). Ascendante : tableau rempli des petits cas vers le grand.

</div>

Rendu de monnaie (pièces 1, 6, 10, somme 12) : glouton 3 pièces, dynamique 2 pièces (6 + 6).

## Les pièges

- <span class="p">Sans sous-problèmes répétés, aucun gain.</span>
- Le glouton n'est pas toujours optimal.
