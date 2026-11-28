---
titre: "Listes, piles et files"
---

<div class="encadre">

**L'image.** Pile d'assiettes : on reprend la dernière posée. File du self : premier arrivé, premier servi.

</div>

## L'essentiel

| Structure | Ajout | Retrait | Règle |
|---|---|---|---|
| pile | empiler (sommet) | dépiler (sommet) | LIFO |
| file | enfiler (arrière) | défiler (avant) | FIFO |

<div class="etape o">

Python : pile = liste avec `append` et `pop()`. File = `deque` avec `append` et `popleft()`.

</div>

## Les pièges

- <span class="p">Pile : dernier entré, premier sorti. File : premier entré, premier sorti.</span>
- Tester si la structure est vide avant de retirer.
