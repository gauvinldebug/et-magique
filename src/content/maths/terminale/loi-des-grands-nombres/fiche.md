---
titre: Loi des grands nombres
---

<div class="encadre">

**L'image.** Une chorale où chacun chante un peu faux : seul, on s'écarte de la note ; ensemble, les erreurs se compensent. La moyenne $M_n$ se rapproche de l'espérance $\mu$ quand $n$ grandit.

</div>

## Sommes

- $E(X + Y) = E(X) + E(Y)$ ; $E(aX + b) = aE(X) + b$.
- $V(aX + b) = a^2V(X)$.
- $X$, $Y$ **indépendantes** : $V(X + Y) = V(X) + V(Y)$.

## Échantillon de taille $n$ (espérance $\mu$, variance $V$)

<div class="etape o">

$E(S_n) = n\mu$ ; $V(S_n) = nV$ ; $E(M_n) = \mu$ ; $V(M_n) = \frac{V}{n}$.

</div>

## Les inégalités

| Nom | Formule |
|---|---|
| Bienaymé-Tchebychev | $P(\lvert X - \mu\rvert \ge \delta) \le \frac{V(X)}{\delta^2}$ |
| Concentration | $P(\lvert M_n - \mu\rvert \ge \delta) \le \frac{V}{n\delta^2}$ |
| Loi des grands nombres | $P(\lvert M_n - \mu\rvert \ge \delta) \to 0$ quand $n \to +\infty$ |

## Les méthodes

- « Au moins $95\,\%$ de chances d'être entre $\mu - \delta$ et $\mu + \delta$ » : je veux $\frac{V}{n\delta^2} \le 0{,}05$, et je résous en $n$.
- Passer au contraire : $P(|X - \mu| < \delta) \ge 1 - \frac{V}{\delta^2}$.
- $|X - \mu| < \delta \iff \mu - \delta < X < \mu + \delta$.

## Les pièges

- <span class="p">$V(X + Y) = V(X) + V(Y)$ seulement si indépendantes</span>.
- $V(2X) = 4V(X)$, pas $2V(X)$. Et $V(X - Y) = V(X) + V(Y)$ (indépendantes).
- Bienaymé-Tchebychev donne une **majoration**, pas la valeur exacte.
