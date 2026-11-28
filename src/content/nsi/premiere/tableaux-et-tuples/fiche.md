---
titre: "Tableaux et p-uplets"
---

<div class="encadre">

**L'image.** Des casiers numérotés à partir de 0 (tableau) et une enveloppe scellée (p-uplet).

</div>

## L'essentiel

| | p-uplet | tableau |
|---|---|---|
| écriture | `(3, 5)` | `[3, 5]` |
| modifiable | non | oui |
| usage | renvoyer plusieurs valeurs | collection qui évolue |

<div class="etape o">

Indices de 0 à `len(t) - 1`. Compréhension : `[f(x) for x in t if condition]`. Grille : `g[ligne][colonne]`.

</div>

## Les pièges

- <span class="p">`b = a` : alias. Copie : `a.copy()`.</span>
- Grille : `[[0] * n for _ in range(n)]`.
