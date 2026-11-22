---
titre: Limites de fonctions
---

<div class="encadre">

**L'image.** La courbe est un train, les asymptotes sont ses rails : rail horizontal $y = \ell$ si $\lim\limits_{\pm\infty} \cbleu{f} = \ell$, rail vertical $x = a$ si $\lim\limits_{a} \cbleu{f} = \pm\infty$.

</div>

## Les limites à connaître

- $\corange{x}^n \to +\infty$ en $+\infty$ ; $\frac{1}{\corange{x}} \to 0$ en $\pm\infty$ ; $\sqrt{\corange{x}} \to +\infty$ en $+\infty$.
- $\frac{1}{\corange{x}} \to +\infty$ en $0^+$ et $-\infty$ en $0^-$.
- $\mathrm{e}^{\corange{x}} \to +\infty$ en $+\infty$ et $\to 0$ en $-\infty$.

## Calculer

<div class="etape o">

**Formes indéterminées.** $\crouge{\infty - \infty}$, $\crouge{0 \times \infty}$, $\crouge{\frac{\infty}{\infty}}$, $\crouge{\frac{0}{0}}$ : je **factorise par le terme le plus fort** (plus haut degré, ou $\mathrm{e}^{\corange{x}}$).

</div>

- **Croissances comparées** : $\frac{\mathrm{e}^{\corange{x}}}{\corange{x}^n} \to +\infty$ en $+\infty$ ; $\corange{x}^n\mathrm{e}^{\corange{x}} \to 0$ en $-\infty$.
- **Composée** : je calcule la limite de l'intérieur $X$, puis la limite de l'extérieur quand $X$ tend vers cette valeur.
- **Valeur interdite** $a$ : j'étudie le **signe** du dénominateur à gauche et à droite de $a$.

## Justifier

| Je sais que… | J'écris… |
|---|---|
| $\lim\limits_{+\infty} \cbleu{f} = \ell$ | « la droite $y = \ell$ est asymptote horizontale en $+\infty$ » |
| $\lim\limits_{a} \cbleu{f} = \pm\infty$ | « la droite $x = a$ est asymptote verticale » |
| $g \le \cbleu{f} \le h$, $g$ et $h \to \ell$ | « d'après le théorème des gendarmes, $\cbleu{f} \to \ell$ » |
| $\cbleu{f} \ge g$ et $g \to +\infty$ | « par comparaison, $\cbleu{f} \to +\infty$ » |

## Les pièges

- <span class="p">$\frac{1}{0}$ n'existe pas</span> : on écrit $\frac{1}{0^+} \to +\infty$ ou $\frac{1}{0^-} \to -\infty$, selon le signe.
- L'exponentielle bat toujours les puissances de $\corange{x}$.
- Une asymptote verticale se cherche aux **valeurs interdites**, une horizontale en $\pm\infty$.
- Toujours préciser la limite de chaque morceau avant de conclure.
