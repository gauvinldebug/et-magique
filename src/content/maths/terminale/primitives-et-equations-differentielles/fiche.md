---
titre: Primitives et équations différentielles
---

<div class="encadre">

**L'image.** Le compteur de vitesse ($\cbleu{f}$) ne suffit pas à savoir où tu es : il faut aussi le point de départ. Les primitives sont les $F + C$ ; la **condition initiale** fixe $C$.

</div>

## Primitives à connaître

| $\cbleu{f}$ | $F$ |
|---|---|
| $\corange{x}^n$ ($n \ne -1$) | $\frac{\corange{x}^{n+1}}{n+1}$ |
| $\frac{1}{\corange{x}}$ | $\ln \corange{x}$ |
| $\frac{1}{\sqrt{\corange{x}}}$ | $2\sqrt{\corange{x}}$ |
| $\mathrm{e}^{\corange{x}}$ ; $\cos \corange{x}$ ; $\sin \corange{x}$ | $\mathrm{e}^{\corange{x}}$ ; $\sin \corange{x}$ ; $-\cos \corange{x}$ |
| $u'\mathrm{e}^{u}$ ; $u'u^n$ ; $\frac{u'}{u}$ ; $\frac{u'}{\sqrt{u}}$ | $\mathrm{e}^{u}$ ; $\frac{u^{n+1}}{n+1}$ ; $\ln u$ ; $2\sqrt{u}$ |

## Équations différentielles

<div class="etape o">

- $y' = ay$ : $y = C\mathrm{e}^{a\corange{x}}$.
- $y' = ay + b$ : $y = C\mathrm{e}^{a\corange{x}} - \frac{b}{a}$.
- $y' = ay + \cbleu{f}$ : $y = p + C\mathrm{e}^{a\corange{x}}$, où $p$ est une solution particulière.

</div>

## La méthode type bac

1. Je **vérifie** la solution particulière $p$ : $p' = ap + \cbleu{f}$ ?
2. J'écris $p + C\mathrm{e}^{a\corange{x}}$, puis la **condition initiale** donne $C$.

## Les pièges

- <span class="p">Ne pas oublier le $+ C$</span> quand on donne **toutes** les primitives.
- $y' = ay + b$ : la solution constante est $-\frac{b}{a}$, avec un signe moins.
- Une primitive de $\mathrm{e}^{k\corange{x}}$ est $\frac{1}{k}\mathrm{e}^{k\corange{x}}$, pas $k\,\mathrm{e}^{k\corange{x}}$.
