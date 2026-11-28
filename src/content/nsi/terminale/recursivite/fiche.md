---
titre: "La récursivité"
---

<div class="encadre">

**L'image.** Des poupées russes : on ouvre jusqu'à la plus petite (cas de base), puis on remonte.

</div>

## L'essentiel

<div class="etape o">

Fonction récursive = cas de base + appel récursif sur un problème plus petit. Les appels en attente forment la pile d'appels (limite Python : environ 1 000).

</div>

```python
def factorielle(n):
    if n == 0:
        return 1
    return n * factorielle(n - 1)
```

Terminaison : une quantité entière positive qui diminue strictement à chaque appel.

## Les pièges

- <span class="p">Pas de cas de base : RecursionError.</span>
- Oublier le `return` devant l'appel.
