---
titre: Vecteurs
---

<div class="encadre">

**L'image.** Un vecteur est la glissade d'un palet : une direction, un sens, une longueur. Il ne dit pas d'où il part.

</div>

## Les règles

- $\vec{AB} = \vec{CD} \iff ABDC$ parallélogramme.
- $\vec{BA} = -\vec{AB}$.
- Chasles : $\cbleu{\vec{AB}} + \corange{\vec{BC}} = \cvert{\vec{AC}}$.

## Les coordonnées

<div class="etape o">

| Objet | Formule |
|---|---|
| $\vec{AB}$ | $\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$ |
| milieu de $[AB]$ | $\left(\frac{x_A + x_B}{2}\,;\frac{y_A + y_B}{2}\right)$ |
| $AB$ (orthonormé) | $\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$ |
| $\det(\vec{u}, \vec{v})$ | $xy' - x'y$ |

</div>

## Colinéarité

- $\vec{u}$, $\vec{v}$ colinéaires $\iff \vec{v} = k\vec{u} \iff \det(\vec{u}, \vec{v}) = 0$.
- Alignés : $\vec{AB}$ et $\vec{AC}$ colinéaires.
- Parallèles : $\vec{AB}$ et $\vec{CD}$ colinéaires.

## Les réflexes

- Parallélogramme $ABCD$ : je vérifie $\vec{AB} = \vec{DC}$.
- Trouver un point : j'écris l'égalité de vecteurs, coordonnée par coordonnée.

## Les pièges

- <span class="p">Arrivée moins départ</span>, pas l'inverse.
- $ABCD$ parallélogramme : $\vec{AB} = \vec{DC}$, pas $\vec{CD}$.
- Le déterminant : produit en croix, avec un **moins**.
