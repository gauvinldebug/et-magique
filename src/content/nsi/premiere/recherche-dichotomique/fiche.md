---
titre: "La recherche dichotomique"
---

<div class="encadre">

**L'image.** Le nombre mystère : chaque réponse « plus grand » ou « plus petit » élimine la moitié.

</div>

## L'essentiel

<div class="etape o">

Tableau trié. Comparer au milieu, garder une moitié, recommencer. Variant : `d - g` diminue strictement. Coût : environ $\log_2 n$ (20 étapes pour un million).

</div>

```python
while g <= d:
    m = (g + d) // 2
    if t[m] == x: return m
    if t[m] < x: g = m + 1
    else: d = m - 1
```

## Les pièges

- <span class="p">Seulement sur un tableau trié.</span>
- `g = m + 1` et `d = m - 1`, pas `m`.
