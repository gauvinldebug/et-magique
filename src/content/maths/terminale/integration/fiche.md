---
titre: Intégration
---

<div class="encadre">

**L'image.** L'intégrale, c'est le **compteur kilométrique** : il additionne tous les petits bouts de chemin, donc l'aire sous la courbe de la vitesse. Distance = compteur à l'arrivée moins compteur au départ : $F(b) - F(a)$.

</div>

## Calculer

<div class="etape o">

$\displaystyle\int_a^b \cbleu{f}(\corange{x})\,\mathrm{d}\corange{x} = \Big[F(\corange{x})\Big]_a^b = F(b) - F(a)$, où $F$ est une primitive de $\cbleu{f}$.

</div>

- **Linéarité** : $\int (\cbleu{f} + g) = \int \cbleu{f} + \int g$ ; $\int \lambda\cbleu{f} = \lambda\int \cbleu{f}$.
- **Chasles** : $\int_a^b = \int_a^c + \int_c^b$ ; $\int_b^a = -\int_a^b$.
- **Positivité, croissance** : $\cbleu{f} \le g$ sur $[a\,;b]$ avec $a \le b$ $\Rightarrow$ $\int_a^b \cbleu{f} \le \int_a^b g$.
- **Par parties** : $\int_a^b uv' = [uv]_a^b - \int_a^b u'v$. Je choisis pour $u$ ce qui se simplifie en dérivant ($\corange{x}$, $\ln \corange{x}$).

## Interpréter

| Je cherche… | Je calcule… |
|---|---|
| l'aire sous $\cbleu{f} \ge 0$ | $\int_a^b \cbleu{f}$ |
| l'aire quand $\cbleu{f} \le 0$ | $-\int_a^b \cbleu{f}$ |
| l'aire entre $\cbleu{f}$ (en haut) et $g$ (en bas) | $\int_a^b (\cbleu{f} - g)$ |
| la valeur moyenne | $\frac{1}{b - a}\int_a^b \cbleu{f}$ |

## Les pièges

- <span class="p">Une intégrale peut être négative</span> : ce n'est une aire que si $\cbleu{f} \ge 0$.
- Pour une aire, **découper** là où $\cbleu{f}$ change de signe.
- $F(b) - F(a)$, dans cet ordre.
- Une aire s'exprime en unités d'aire (u.a.) : penser à convertir si on donne les unités des axes.
