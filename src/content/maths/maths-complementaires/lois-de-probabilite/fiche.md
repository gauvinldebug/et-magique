---
titre: Lois de probabilité
---

<div class="encadre">

**L'image.** Une série de tirs au but : même tir, deux issues, indépendants. On compte les buts.

</div>

## Variable aléatoire

- $E(X) = \sum p_ix_i$.
- $V(X) = \sum p_i(x_i - E(X))^2$, $\sigma = \sqrt{V(X)}$.

## Les lois

<div class="etape o">

| Loi | $P$ | $E(X)$ |
|---|---|---|
| binomiale $\mathcal{B}(n\,;p)$ | $\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ |
| géométrique | $(1-p)^{k-1}p$ | $\frac{1}{p}$ |
| uniforme sur $[a\,;b]$ | $\frac{d - c}{b - a}$ | $\frac{a+b}{2}$ |

</div>

## Justifier une binomiale

1. Épreuve à deux issues, succès de probabilité $p$.
2. Répétée $n$ fois, identique et indépendante.
3. $X$ compte les succès.

## Les pièges

- <span class="p">Sans remise : pas binomial</span>.
- Au moins 1 : $1 - P(X = 0)$.
- $V(X) = np(1 - p)$, pas $np$.
