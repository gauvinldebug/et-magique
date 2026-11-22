---
titre: Loi binomiale
---

<div class="encadre">

**L'image.** La planche de Galton : $n$ clous, à chaque clou la bille part à droite avec la probabilité $p$, indépendamment. Le nombre de rebonds à droite suit $\mathcal{B}(n\,;p)$. Il y a $\binom{n}{k}$ chemins vers la case $k$.

</div>

## Reconnaître

<div class="etape o">

Je justifie : « On répète $n$ fois, de façon **identique et indépendante**, une épreuve à deux issues : succès (…) de probabilité $p$. $X$ compte le nombre de succès, donc $X$ suit la loi binomiale $\mathcal{B}(n\,;p)$. »

</div>

## Les formules

- $P(X = k) = \binom{n}{k}p^k(1 - p)^{n - k}$.
- $E(X) = np$ ; $V(X) = np(1 - p)$ ; $\sigma(X) = \sqrt{np(1 - p)}$.
- $P(X = 0) = (1 - p)^n$ ; $P(X \ge 1) = 1 - (1 - p)^n$ (« au moins un » : passer par « aucun »).

## Calculatrice

| On cherche | On calcule |
|---|---|
| $P(X = k)$ | binomFdp$(n, p, k)$ |
| $P(X \le k)$ | binomFRép$(n, p, k)$ |
| $P(X \ge k)$ | $1 - P(X \le k - 1)$ |
| $P(a \le X \le b)$ | $P(X \le b) - P(X \le a - 1)$ |

## Seuil

$1 - (1 - p)^n \ge s \iff (1 - p)^n \le 1 - s \iff n \ge \frac{\ln(1 - s)}{\ln(1 - p)}$, car $\ln(1 - p) < 0$.

## Les pièges

- <span class="p">Sans remise, ce n'est pas binomial</span> (sauf très grande population).
- $P(X \ge k) = 1 - P(X \le k - 1)$, et pas $1 - P(X \le k)$.
