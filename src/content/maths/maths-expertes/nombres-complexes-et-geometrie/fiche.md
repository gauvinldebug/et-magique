---
titre: Complexes et géométrie
---

<div class="encadre">

**L'image.** Un complexe est une aiguille de boussole : une longueur (module) et une direction (argument). Multiplier, c'est zoomer et tourner.

</div>

## Module et argument

- $|a + ib| = \sqrt{a^2 + b^2}$ ; $AB = |z_B - z_A|$.
- $\arg z$ : angle $(\vec{u}, \overrightarrow{OM})$ à $2\pi$ près ; $\cos\theta = \frac{a}{r}$, $\sin\theta = \frac{b}{r}$.

## Formes

- $z = \cbleu{r}(\cos\corange{\theta} + i\sin\corange{\theta}) = \cbleu{r}e^{i\corange{\theta}}$.

<div class="etape o">

| Opération | Module | Argument |
|---|---|---|
| $zz'$ | $\lvert z\rvert\,\lvert z'\rvert$ | $\arg z + \arg z'$ |
| $\frac{z}{z'}$ | $\frac{\lvert z\rvert}{\lvert z'\rvert}$ | $\arg z - \arg z'$ |
| $z^n$ | $\lvert z\rvert^n$ | $n\arg z$ |
| $\bar{z}$ | $\lvert z\rvert$ | $-\arg z$ |

</div>

## Racines n-ièmes de l'unité

- $e^{2ik\pi/n}$, $k = 0, \dots, n - 1$ : polygone régulier ; somme nulle.

## Géométrie

- $(\overrightarrow{AB}, \overrightarrow{AC}) = \arg\frac{z_C - z_A}{z_B - z_A}$.
- Quotient réel : alignés ; imaginaire pur : perpendiculaires.

## Les pièges

- <span class="p">Placer le point avant de choisir l'argument</span>.
- $|z + z'| \ne |z| + |z'|$ en général.
- L'argument de 0 n'existe pas.
