---
titre: Dérivation
---

<div class="encadre">

**L'image.** À la loupe, une courbe lisse ressemble à une droite : la **tangente**. Sa pente est le **nombre dérivé** $\cbleu{f}'(a)$, la vitesse instantanée.

</div>

## Définitions

- Taux d'accroissement : $\frac{\cbleu{f}(a + h) - \cbleu{f}(a)}{h}$ ; sa limite quand $h \to 0$ est $\cbleu{f}'(a)$.
- Tangente en $a$ : $y = \cbleu{f}'(a)(\corange{x} - a) + \cbleu{f}(a)$.

## Les formules

| $\cbleu{f}$ | $k$ | $\corange{x}^n$ | $\frac{1}{\corange{x}}$ | $\sqrt{\corange{x}}$ |
|---|---|---|---|---|
| $\cbleu{f}'$ | $0$ | $n\corange{x}^{n-1}$ | $-\frac{1}{\corange{x}^2}$ | $\frac{1}{2\sqrt{\corange{x}}}$ |

<div class="etape o">

$(u + v)' = u' + v'$ ; $(ku)' = ku'$ ; $(uv)' = u'v + uv'$ ; $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ ; $\big(\cbleu{f}(a\corange{x} + b)\big)' = a\,\cbleu{f}'(a\corange{x} + b)$.

</div>

## Étudier les variations

1. Je calcule $\cbleu{f}'(\corange{x})$ et je la **factorise**.
2. J'étudie son **signe** (tableau de signes).
3. $\cbleu{f}' > 0$ : $\cbleu{f}$ croissante ; $\cbleu{f}' < 0$ : $\cbleu{f}$ décroissante.
4. Je complète le tableau de variations avec les valeurs de $\cbleu{f}$ aux bornes et aux extremums.

## Les pièges

- <span class="p">Variations = signe de $\cbleu{f}'$</span>, pas signe de $\cbleu{f}$.
- $(uv)' \ne u'v'$ : utiliser la formule du produit.
- $\sqrt{\corange{x}}$ n'est pas dérivable en 0.
- $\cbleu{f}'(a) = 0$ sans changement de signe : pas d'extremum ($\corange{x}^3$ en 0).
