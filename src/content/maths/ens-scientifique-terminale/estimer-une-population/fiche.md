---
titre: Estimer une population
---

<div class="encadre">

**L'image.** Les poissons marqués de l'étang : la part de marqués dans le filet ressemble à la part de marqués dans l'étang.

</div>

## Capture-recapture

$$
N \approx \frac{M \times n}{m}
$$

$M$ marqués au départ, $n$ recapturés, dont $m$ marqués.

## Intervalle de confiance à 95 %

$$
\left[\, f - \frac{1}{\sqrt{n}} \,;\, f + \frac{1}{\sqrt{n}} \,\right]
$$

<div class="etape o">

| Taille $n$ | 100 | 400 | 2 500 |
|---|---|---|---|
| Marge $\frac{1}{\sqrt{n}}$ | 0,1 | 0,05 | 0,02 |

</div>

## Les pièges

- <span class="p">Précision $\times 2$ : taille $\times 4$</span>.
- 95 % : environ 5 % des intervalles ne contiennent pas $p$.
- Hypothèses : bon mélange, population stable.
