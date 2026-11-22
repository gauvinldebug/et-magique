---
titre: Algorithmique et programmation
---

<div class="encadre">

**L'image.** Un algorithme est une recette : les variables sont des bols étiquetés, `=` veut dire « range dans le bol », les boucles répètent une étape.

</div>

## La syntaxe Python

| But | Code |
|---|---|
| affectation | `a = a + 1` |
| puissance | `x**2` (jamais `^`) |
| condition | `if ... :` / `elif ... :` / `else:` |
| boucle connue | `for k in range(n):` (k de 0 à n − 1) |
| boucle de seuil | `while condition:` |
| fonction | `def f(x):` puis `return ...` |
| liste | `L = [1, 2]` ; `L.append(3)` ; `L[0]` ; `len(L)` |

## Les deux algorithmes à savoir écrire

<div class="etape o">

**Terme d'une suite** ($u_{n+1} = g(u_n)$) :

```python
u = u0
for k in range(n):
    u = g(u)
```

**Seuil** (premier rang où $u_n$ dépasse $S$) :

```python
u = u0
n = 0
while u <= S:
    u = g(u)
    n = n + 1
```

</div>

## Les pièges

- <span class="p">`range(n)` s'arrête à n − 1</span> ; `=` range, `==` compare.
- L'indentation définit les blocs ; les décimaux s'écrivent avec un point (`0.5`).
