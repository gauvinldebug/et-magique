---
titre: Statistiques à deux variables
---

<div class="encadre">

**L'image.** Une ficelle tendue au milieu des clous du nuage : elle résume la tendance, sans toucher forcément un point.

</div>

## Les outils

- Point moyen $G(\bar{x}\,;\bar{y})$.
- Moindres carrés : $a = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}$, $b = \bar{y} - a\bar{x}$.
- La droite passe par $G$.

## Lire un ajustement

<div class="etape o">

| Situation | Ce qu'on en dit |
|---|---|
| $\lvert r \rvert$ proche de 1 | bon ajustement affine |
| valeur dans les données | interpolation, fiable |
| valeur hors des données | extrapolation, prudence |

</div>

## Changement de variable

1. Poser $z_i = \ln y_i$.
2. Ajuster $z = ax + b$.
3. Revenir à $y = e^be^{ax}$.

## Les pièges

- <span class="p">Corrélation n'est pas causalité</span>.
- Extrapoler loin est risqué.
- Bien arrondir seulement à la fin.
