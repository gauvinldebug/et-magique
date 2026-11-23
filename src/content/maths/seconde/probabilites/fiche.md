---
titre: Probabilités et échantillonnage
---

<div class="encadre">

**L'image.** Une expérience aléatoire, c'est la main dans un sac de billes. Un échantillon, c'est une cuillère de soupe : elle donne une idée du tout, avec un peu de fluctuation.

</div>

## Les règles

- Équiprobabilité : $P(A) = \frac{\text{favorables}}{\text{total}}$.
- $0 \le P(A) \le 1$ ; somme des probabilités des issues $= 1$.
- $P(\bar{A}) = 1 - P(A)$.

## Et, ou

<div class="etape o">

| Situation | Formule |
|---|---|
| cas général | $\corange{P(A \cup B)} = P(A) + P(B) - \cbleu{P(A \cap B)}$ |
| $A$, $B$ incompatibles | $P(A \cup B) = P(A) + P(B)$ |

</div>

- Tableau à double entrée ou arbre pour ne rien oublier.

## Échantillonnage

- Proportion $\cvert{p}$ dans la population, fréquence $f$ dans l'échantillon de taille $n$.
- Au moins 95 % des échantillons : $f \in \left[\cvert{p} - \frac{1}{\sqrt{n}}\,;\cvert{p} + \frac{1}{\sqrt{n}}\right]$.
- $n$ multiplié par 4 : l'intervalle est 2 fois plus étroit.

## Les réflexes

- « Au moins un » : je passe par le contraire, « aucun ».
- Vérifier que les probabilités d'une loi font 1.

## Les pièges

- <span class="p">Ne pas compter deux fois $A \cap B$</span>.
- Une fréquence observée n'est pas la probabilité.
- Incompatibles ne veut pas dire contraires.
