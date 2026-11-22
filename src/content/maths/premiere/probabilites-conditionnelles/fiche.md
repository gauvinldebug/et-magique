---
titre: Probabilités conditionnelles
---

<div class="encadre">

**L'image.** Le projecteur n'éclaire que $A$ : $P_A(B)$ est la proportion de $B$ dans la lumière. Déplacer le projecteur change le résultat : $P_A(B) \ne P_B(A)$.

</div>

## Les formules

<div class="etape o">

$P_A(B) = \frac{P(A \cap B)}{P(A)}$ ; $P(A \cap B) = P(A) \times P_A(B)$.

**Probabilités totales** : $P(B) = P(A)P_A(B) + P(\bar{A})P_{\bar{A}}(B)$.

</div>

## L'arbre

- Premier niveau : $P(A)$, $P(\bar{A})$. Second niveau : probabilités **sachant**.
- Somme des branches d'un nœud = 1. Chemin = **produit**. Plusieurs chemins vers $B$ = **somme**.
- Pour « sachant $B$ » alors que l'arbre commence par $A$ : $P_B(A) = \frac{P(A \cap B)}{P(B)}$, avec $P(B)$ par les probabilités totales.

## Indépendance

- $A$, $B$ indépendants $\iff P(A \cap B) = P(A)P(B) \iff P_A(B) = P(B)$.
- Indépendants $\ne$ incompatibles.

## Variable aléatoire

- $E(X) = \sum p_ix_i$ ; $V(X) = \sum p_i(x_i - E(X))^2$ ; $\sigma = \sqrt{V}$.
- Jeu équitable : $E(X) = 0$.

## Les pièges

- <span class="p">$P_A(B) \ne P_B(A)$</span>.
- $P(A \cap B)$ (un chemin) $\ne P_A(B)$ (une branche).
- Sur les branches du second niveau, ce sont des probabilités **conditionnelles**.
- Toujours définir les événements avec une phrase avant de calculer.
