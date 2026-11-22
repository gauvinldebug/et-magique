---
titre: Dérivation et convexité
---

<div class="encadre">

**L'image.** La voiture roule sur la courbe. $\cbleu{f}'$ = la pente de la route. $\cbleu{f}''$ = le sens du volant : $\cbleu{f}'' \ge 0$, la route fait un bol (convexe) ; $\cbleu{f}'' \le 0$, une bosse (concave). Changement de sens du volant = point d'inflexion.

</div>

## Dériver une composée

- $\big(g(a\corange{x} + b)\big)' = a\,g'(a\corange{x} + b)$ ; $(g \circ u)' = u' \times g' \circ u$.
- $(\mathrm{e}^{u})' = u'\mathrm{e}^{u}$ ; $(u^n)' = n\,u'u^{n-1}$ ; $(\sqrt{u})' = \frac{u'}{2\sqrt{u}}$ ; $\left(\frac{1}{u}\right)' = -\frac{u'}{u^2}$.

## Convexité

<div class="etape o">

**Convexe** sur $I$ : $\cbleu{f}'' \ge 0$ $\iff$ $\cbleu{f}'$ croissante $\iff$ courbe **au-dessus** de ses tangentes, **en dessous** de ses cordes.

**Concave** sur $I$ : $\cbleu{f}'' \le 0$ $\iff$ $\cbleu{f}'$ décroissante $\iff$ courbe **en dessous** de ses tangentes.

</div>

## La méthode type bac

1. Je calcule $\cbleu{f}'$, puis $\cbleu{f}''$.
2. J'étudie le **signe** de $\cbleu{f}''$ (tableau de signes).
3. J'en déduis les intervalles où $\cbleu{f}$ est convexe ou concave.
4. Là où $\cbleu{f}''$ s'annule **en changeant de signe** : point d'inflexion. Je calcule son ordonnée.

## À connaître

- $\corange{x}^2$, $\mathrm{e}^{\corange{x}}$ : convexes sur $\mathbb{R}$. $\sqrt{\corange{x}}$ : concave.
- $\mathrm{e}^{\corange{x}} \ge \corange{x} + 1$ pour tout $\corange{x}$ (tangente en 0).
- Tangente en $a$ : $y = \cbleu{f}'(a)(\corange{x} - a) + \cbleu{f}(a)$.

## Les pièges

- <span class="p">Convexe ne veut pas dire croissante</span> : la convexité se lit sur $\cbleu{f}''$, pas sur $\cbleu{f}'$.
- $\cbleu{f}''(a) = 0$ ne suffit pas : il faut un **changement de signe** ($\corange{x}^4$ en 0 n'a pas de point d'inflexion).
- Ne pas oublier le facteur $u'$ dans la dérivée d'une composée.
