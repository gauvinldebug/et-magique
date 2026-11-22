---
titre: Limites de suites
---

<div class="encadre">

**L'image.** La fourmi ($\un$) finit par entrer dans n'importe quelle bande autour du drapeau ($\cvert{\ell}$) et n'en sort plus : $\lim \un = \cvert{\ell}$, la suite converge.

</div>

## Les limites à connaître

- $\corange{n}$, $\corange{n}^2$, $\sqrt{\corange{n}}$ $\to +\infty$ ; $\frac{1}{\corange{n}}$, $\frac{1}{\corange{n}^2}$, $\frac{1}{\sqrt{\corange{n}}}$ $\to 0$.
- $q^{\corange{n}}$ : $q > 1 \Rightarrow +\infty$ ; $-1 < q < 1 \Rightarrow 0$ ; $q = 1 \Rightarrow 1$ ; $q \le -1 \Rightarrow$ pas de limite.

## Calculer

<div class="etape o">

**Formes indéterminées.** $\crouge{\infty - \infty}$, $\crouge{0 \times \infty}$, $\crouge{\frac{\infty}{\infty}}$, $\crouge{\frac{0}{0}}$ : je **factorise par le terme le plus fort**, puis je conclus par opérations.

</div>

## Justifier

| Je sais que… | J'écris… |
|---|---|
| $\un \le v_{\corange{n}}$ et $\un \to +\infty$ | « par comparaison, $v_{\corange{n}} \to +\infty$ » |
| $v_{\corange{n}} \le \un \le w_{\corange{n}}$, $v$ et $w \to \ell$ | « d'après le théorème des gendarmes, $\un \to \ell$ » |
| $\cbleu{u}$ croissante et majorée | « d'après le théorème de la limite monotone, $\cbleu{u}$ converge » |
| $\un = a + b\,q^{\corange{n}}$ avec $-1 < q < 1$ | « par limite d'une suite géométrique, $\un \to a$ » |

## La méthode de la suite auxiliaire (bac)

1. Je montre que $v_{\corange{n}+1} = q\,v_{\corange{n}}$ : $v$ est géométrique.
2. J'écris $v_{\corange{n}} = v_0\,q^{\corange{n}}$, puis $\un$ en fonction de $\corange{n}$.
3. Je conclus avec la limite de $q^{\corange{n}}$.

## Les pièges

- <span class="p">$\infty - \infty$ ne fait pas 0</span>, $\frac{\infty}{\infty}$ ne fait pas 1.
- **La barrière n'est pas le drapeau** : majorée par 3 ne veut pas dire limite 3.
- Une suite croissante ne tend pas forcément vers $+\infty$.
- Gendarmes : il faut **la même** limite des deux côtés.
- Toujours citer le théorème utilisé.
