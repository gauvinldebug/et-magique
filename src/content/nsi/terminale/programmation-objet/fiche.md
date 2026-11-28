---
titre: "La programmation orientée objet"
---

<div class="encadre">

**L'image.** Une classe est un moule, chaque objet est un gâteau sorti du moule.

</div>

## L'essentiel

<div class="etape o">

Classe = nouveau type. Objet = instance. Attributs = données (`self.solde`). Méthodes = fonctions de la classe, avec `self` en premier paramètre. `__init__` = constructeur.

</div>

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def deplacer(self, dx, dy):
        self.x += dx
        self.y += dy
```

## Les pièges

- <span class="p">`self` en premier paramètre de chaque méthode.</span>
- `self.x` (attribut) n'est pas `x` (variable locale).
