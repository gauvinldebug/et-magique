---
titre: Continuité
---

<div class="encadre">

**L'image.** Continue = on trace la courbe **sans lever le crayon**. Si le crayon part sous la rivière $y = k$ et arrive au-dessus, il la traverse au moins une fois (TVI). S'il ne fait que monter, une seule fois (corollaire).

</div>

## Les fonctions continues

- Polynômes, $\mathrm{e}^{\corange{x}}$, $\cos$, $\sin$ : continues sur $\mathbb{R}$. $\sqrt{\corange{x}}$ : sur $[0\,;+\infty[$.
- Sommes, produits, quotients, composées de fonctions continues : continues.
- **Dérivable implique continue** (la réciproque est fausse : $|\corange{x}|$ en 0).

## Les théorèmes

<div class="etape o">

**TVI.** $\cbleu{f}$ continue sur $[a\,;b]$, $k$ entre $\cbleu{f}(a)$ et $\cbleu{f}(b)$ : $\cbleu{f}(\corange{x}) = k$ a **au moins une** solution.

**Corollaire.** Si en plus $\cbleu{f}$ est **strictement monotone** : **une unique** solution.

</div>

## La rédaction type bac

1. « $\cbleu{f}$ est continue sur $[a\,;b]$ (car dérivable, ou polynôme…). »
2. « $\cbleu{f}$ est strictement croissante (ou décroissante) sur $[a\,;b]$. »
3. « $\cbleu{f}(a) = \dots$ et $\cbleu{f}(b) = \dots$, donc $k$ est compris entre $\cbleu{f}(a)$ et $\cbleu{f}(b)$. »
4. « D'après le corollaire du TVI, $\cbleu{f}(\corange{x}) = k$ admet une unique solution $\alpha$ dans $[a\,;b]$. »

## Encadrer

- **Balayage** : je calcule $\cbleu{f}$ avec un pas de $0{,}1$, puis $0{,}01$, et je repère le changement de signe.
- **Dichotomie** : je coupe l'intervalle en deux et je garde la moitié où le signe change.

## Suites

Si $\unn = \cbleu{f}(\un)$, $\un \to \ell$ et $\cbleu{f}$ continue en $\ell$, alors $\cbleu{f}(\ell) = \ell$.

## Les pièges

- <span class="p">TVI seul = au moins une solution</span>, pas une seule.
- Ne pas oublier de citer la **continuité** : sans elle, le crayon peut sauter la rivière.
- Vérifier que $k$ est bien **entre** $\cbleu{f}(a)$ et $\cbleu{f}(b)$.
