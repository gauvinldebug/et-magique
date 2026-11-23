---
titre: PGCD, Bézout et Gauss
---

<div class="encadre">

**L'image.** Un carrelage : le plus grand carreau qui pave un mur sans découpe, c'est le PGCD des deux côtés.

</div>

## PGCD et Euclide

- $a = bq + r$ $\Rightarrow$ $\text{PGCD}(a\,;b) = \text{PGCD}(b\,;r)$.
- Le PGCD est le **dernier reste non nul**.
- Premiers entre eux : $\text{PGCD} = 1$.

## Les deux théorèmes

<div class="etape o">

| Théorème | Énoncé |
|---|---|
| Bézout | $\text{PGCD}(a\,;b) = 1 \iff \exists\, u, v : au + bv = 1$ |
| Gauss | $a \mid bc$ et $\text{PGCD}(a\,;b) = 1$ $\Rightarrow$ $a \mid c$ |
| Fermat | $p$ premier, $p \nmid a$ $\Rightarrow$ $a^{p-1} \equiv 1\ [p]$ |

</div>

## Équation $ax + by = c$

1. Solution particulière $(x_0\,;y_0)$.
2. $a(x - x_0) = -b(y - y_0)$.
3. Gauss : $x = x_0 + bk$, $y = y_0 - ak$ (si $a$, $b$ premiers entre eux).

## Les pièges

- <span class="p">Gauss exige « premiers entre eux »</span>.
- $au + bv = 3$ ne prouve pas que le PGCD vaut 3.
- Toujours vérifier la solution particulière.
