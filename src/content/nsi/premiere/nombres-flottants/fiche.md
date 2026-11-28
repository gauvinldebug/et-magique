---
titre: "Les nombres à virgule en machine"
---

<div class="encadre">

**L'image.** Une règle aux graduations très serrées mais en nombre fini : on lit la plus proche.

</div>

## L'essentiel

<div class="etape o">

Après la virgule en binaire : $\frac12, \frac14, \frac18\dots$ 0,1 a une écriture binaire infinie, donc stockée de façon approchée. Flottant IEEE 754 (64 bits) : signe, exposant (11 bits), mantisse (52 bits).

</div>

```python
0.1 + 0.2 == 0.3              # False
abs(0.1 + 0.2 - 0.3) < 1e-9   # True
```

## Les pièges

- <span class="p">Jamais de == entre flottants.</span>
- Les int sont exacts.
