---
titre: Variables aléatoires
---

<div class="encadre">

**L'image.** Le stand de fête foraine : chaque case porte une étiquette avec un gain. $X$ lit l'étiquette, la loi donne les probabilités, $E(X)$ est le gain moyen par partie, $\sigma(X)$ mesure le risque.

</div>

## Loi

- Tableau des valeurs $x_i$ et des probabilités $p_i = P(X = x_i)$, avec $\sum p_i = 1$.
- $P(X \le a)$ : j'additionne les $p_i$ des $x_i \le a$.

## Les formules

<div class="etape o">

$E(X) = \sum p_i x_i$ ; $V(X) = \sum p_i (x_i - E(X))^2 = E(X^2) - E(X)^2$ ; $\sigma(X) = \sqrt{V(X)}$.

</div>

- $E(aX + b) = aE(X) + b$ ; $V(aX + b) = a^2V(X)$ ; $\sigma(aX + b) = |a|\sigma(X)$.

## Interpréter

| Résultat | Sens |
|---|---|
| $E(X) > 0$ | jeu favorable au joueur |
| $E(X) = 0$ | jeu équitable |
| $E(X) < 0$ | jeu défavorable au joueur |
| $\sigma(X)$ grand | résultats très dispersés, jeu risqué |

## La méthode

1. Je définis $X$ par une phrase (« $X$ est le gain net en euros »).
2. Je liste les valeurs possibles et je calcule leurs probabilités (arbre, tableau).
3. Je vérifie que la somme vaut 1, je calcule et j'**interprète**.

## Les pièges

- <span class="p">Gain net = gain moins la mise</span>.
- $V(aX + b) \ne aV(X) + b$ : le $a$ passe au carré, le $b$ disparaît.
