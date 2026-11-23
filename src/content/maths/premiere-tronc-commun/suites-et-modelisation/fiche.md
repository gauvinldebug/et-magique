---
titre: Suites et modélisation
---

<div class="encadre">

**L'image.** L'escalier monte de marches égales (linéaire). La rumeur est multipliée à chaque étape (exponentielle).

</div>

## Les deux suites

<div class="etape o">

| | Arithmétique | Géométrique |
|---|---|---|
| récurrence | $u_{n+1} = u_n + r$ | $u_{n+1} = qu_n$ |
| formule | $u_0 + nr$ | $u_0q^n$ |
| graphique | points alignés | courbe qui s'envole |

</div>

- Évolution de $t\,\%$ : $q = 1 + \frac{t}{100}$.

## Au tableur

1. Valeur de départ en A2.
2. En A3 : `=A2+r` ou `=A2*q`.
3. Recopier vers le bas.

## Reconnaître

- Différences constantes : arithmétique.
- Quotients constants : géométrique.

## Les pièges

- <span class="p">Bien repérer le rang du premier terme</span>.
- +5 % : $q = 1{,}05$, pas $0{,}05$.
- L'exponentielle finit par dépasser le linéaire.
