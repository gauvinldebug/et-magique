---
titre: Intelligence artificielle
---

<div class="encadre">

**L'image.** Le conseil de classe : des coefficients, une moyenne pondérée, un seuil. Apprendre, c'est régler les coefficients.

</div>

## Le neurone

$$
s = w_1 x_1 + \cdots + w_k x_k
$$

Sortie $1$ si $s \geq \text{seuil}$, sinon $0$.

## Apprendre et évaluer

<div class="etape o">

| Étape | Données | But |
|---|---|---|
| entraînement | exemples étiquetés | régler les poids |
| test | exemples jamais vus | mesurer le taux d'erreur |

</div>

- Taux d'erreur $= \frac{\text{erreurs}}{\text{exemples}}$.
- Plus proches voisins : classe majoritaire des $k$ plus proches, distance $\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.

## Les pièges

- <span class="p">95 % de réussite peut cacher 0 % de détection</span>.
- Une IA reproduit les biais de ses données.
