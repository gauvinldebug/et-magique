---
titre: Intégrales et aires
---

<div class="encadre">

**L'image.** Le compteur kilométrique accumule la vitesse : la distance, c'est l'aire sous la courbe de la vitesse.

</div>

## Primitives

<div class="etape o">

| $f(x)$ | $F(x)$ |
|---|---|
| $x^n$ | $\frac{x^{n+1}}{n+1}$ |
| $\frac{1}{x}$ | $\ln x$ |
| $e^{ax}$ | $\frac{1}{a}e^{ax}$ |

</div>

## Intégrale

- $\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a)$.
- $f \ge 0$ : aire sous la courbe.
- Chasles : $\int_a^b f + \int_b^c f = \int_a^c f$.

## Méthode

1. Trouver une primitive $F$, la vérifier en dérivant.
2. Calculer $F(b) - F(a)$.
3. Valeur moyenne : diviser par $b - a$.
4. Entre deux courbes : $\int_a^b (\text{haut} - \text{bas})$.

## Les pièges

- <span class="p">Aire seulement si $f \ge 0$</span>.
- $F(b) - F(a)$, dans cet ordre.
- La primitive de $e^{2x}$ est $\frac{1}{2}e^{2x}$, pas $2e^{2x}$.
