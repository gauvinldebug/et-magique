---
titre: Géométrie dans l'espace
---

<div class="encadre">

**L'image.** Une droite = un drone : un point de départ $A$ + une direction $\vec{u}$ (le joystick). Un plan = un sol avec un mât planté droit : un point + un vecteur **normal** $\vec{n}$.

</div>

## Les formules (repère orthonormé)

- $\overrightarrow{AB}\,(x_B - x_A\,;y_B - y_A\,;z_B - z_A)$ ; $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.
- $\vec{u} \cdot \vec{v} = aa' + bb' + cc'$ ; $\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0$.

## Droites et plans

<div class="etape o">

**Droite** par $A$, de direction $\vec{u}(a\,;b\,;c)$ : $x = x_A + at$, $y = y_A + bt$, $z = z_A + ct$.

**Plan** de vecteur normal $\vec{n}(a\,;b\,;c)$ : $ax + by + cz + d = 0$ ; on trouve $d$ avec un point du plan.

</div>

## Les méthodes

| Je veux… | Je fais… |
|---|---|
| un vecteur normal à un plan $(ABC)$ | je cherche $\vec{n}$ avec $\vec{n} \cdot \overrightarrow{AB} = 0$ et $\vec{n} \cdot \overrightarrow{AC} = 0$ |
| savoir si $M$ est sur une droite | je cherche un **même** $t$ pour les trois coordonnées |
| l'intersection droite-plan | je remplace $x$, $y$, $z$ en fonction de $t$ dans l'équation du plan |
| droite $\perp$ plan ; droite $\parallel$ plan | $\vec{u}$ colinéaire à $\vec{n}$ ; $\vec{u} \cdot \vec{n} = 0$ |
| le projeté de $M$ sur $\mathcal{P}$ | droite par $M$ dirigée par $\vec{n}$, puis intersection avec $\mathcal{P}$ |

## Les pièges

- <span class="p">Vecteur normal $\ne$ vecteur directeur</span>.
- Deux droites de l'espace peuvent n'être ni parallèles ni sécantes : elles sont **non coplanaires**.
- Le produit scalaire avec les coordonnées exige un repère **orthonormé**.
