---
titre: Matrices
---

<div class="encadre">

**L'image.** Le ticket de caisse : quantités fois prix, puis on additionne. C'est le produit ligne par colonne.

</div>

## Opérations

- Somme et produit par un réel : coefficient par coefficient.
- $AB$ : ligne de $A$ fois colonne de $B$. En général $AB \ne BA$.
- $I_n$ : $AI_n = I_nA = A$.

## Inverse 2×2

<div class="etape o">

| $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ | |
|---|---|
| déterminant | $\det A = ad - bc$ |
| inversible | $\iff \det A \ne 0$ |
| inverse | $\frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ |

</div>

- Système $AX = B$ : $X = A^{-1}B$.

## Suites de matrices

1. $U_{n+1} = AU_n$ $\Rightarrow$ $U_n = A^nU_0$.
2. $U_{n+1} = AU_n + B$ : état stable $L = AL + B$, puis $V_n = U_n - L$.
3. $A^n$ : conjecturer, puis récurrence.

## Les pièges

- <span class="p">$AB \ne BA$ en général</span>.
- $X = A^{-1}B$, pas $BA^{-1}$.
- Vérifier les tailles avant de multiplier.
