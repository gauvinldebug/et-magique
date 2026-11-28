---
titre: "Fonctions, spécification et tests"
---

<div class="encadre">

**L'image.** Une machine à café : des entrées, une sortie, l'intérieur n'a pas besoin d'être connu.

</div>

## L'essentiel

```python
def f(x, y):
    """Spécification."""
    assert precondition
    return resultat
assert f(1, 2) == 3   # test
```

<div class="etape o">

`for` : nombre de tours connu. `while` : tant qu'une condition est vraie. `return` termine la fonction et renvoie une valeur. Tester les cas limites.

</div>

## Les pièges

- <span class="p">print affiche, return renvoie.</span>
- `=` affecte, `==` compare.
