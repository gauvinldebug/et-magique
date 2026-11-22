---
titre: Le produit scalaire
court: Produit scalaire
description: Le produit scalaire expliqué avec une lampe et une ombre, ses quatre formules (projection, cosinus, coordonnées, normes), l'orthogonalité, le théorème d'Al-Kashi et les équations de droites et de cercles, avec des exercices corrigés. Première spécialité maths.
ordre: 6
publie: 2026-11-22T20:41:00
video:
  youtube: ""
piege: "**Le produit scalaire est un nombre, pas un vecteur.** $\\vec{u} \\cdot \\vec{v}$ est un réel, qui peut être négatif (angle obtus) ou nul (vecteurs orthogonaux). On n'écrit jamais $\\vec{u} \\cdot \\vec{v} = \\vec{w}$."
pdf:
  cours: /pdf/maths/premiere/produit-scalaire-cours.pdf
  fiche: /pdf/maths/premiere/produit-scalaire-fiche.pdf
  exercices: /pdf/maths/premiere/produit-scalaire-exercices.pdf
suivant: probabilites-conditionnelles
---

## Le problème

Comment savoir si deux droites sont **perpendiculaires** sans rapporteur ? Comment calculer un angle d'un triangle quand on connaît ses trois côtés ? Comment trouver l'équation d'un cercle ?

Un seul outil répond à ces trois questions : le **produit scalaire**, une façon de « multiplier » deux vecteurs pour obtenir un nombre.

## L'idée : la lampe et l'ombre

Pose un vecteur $\vec{u}$ au sol, comme une règle. Au-dessus, une lampe éclaire **à la verticale**. Un second vecteur $\vec{v}$, penché, projette son **ombre** sur la règle.

Le produit scalaire $\vec{u} \cdot \vec{v}$, c'est la longueur de $\vec{u}$ multipliée par la longueur de cette ombre :

- si l'ombre va dans le même sens que $\vec{u}$, le produit est **positif** ;
- si elle va dans le sens opposé, il est **négatif** ;
- si $\vec{v}$ est debout, à la verticale, il n'a **pas d'ombre** : le produit est <mark>nul</mark>. C'est le signe que les vecteurs sont <span class="o">orthogonaux</span>.

## Les quatre formules

<div class="encadre">

**Projection.** Si $H$ est le projeté orthogonal de $C$ sur la droite $(AB)$ : $\overrightarrow{AB} \cdot \overrightarrow{AC} = \overrightarrow{AB} \cdot \overrightarrow{AH}$, soit $AB \times AH$ si $\overrightarrow{AH}$ a le même sens que $\overrightarrow{AB}$, et $-AB \times AH$ sinon.

**Cosinus.** $\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\vec{u}, \vec{v})$.

**Coordonnées** (repère orthonormé). Si $\vec{u}(x\,;y)$ et $\vec{v}(x'\,;y')$ : $\vec{u} \cdot \vec{v} = xx' + yy'$.

**Normes.** $\vec{u} \cdot \vec{v} = \frac{1}{2}\left(\|\vec{u} + \vec{v}\|^2 - \|\vec{u}\|^2 - \|\vec{v}\|^2\right)$.

</div>

Le choix de la formule dépend des données : une figure avec des angles, la formule du cosinus ; un repère, les coordonnées ; un projeté visible, la projection.

## Propriétés

<div class="encadre">

- **Symétrie** : $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$.
- **Bilinéarité** : $\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}$ et $(k\vec{u}) \cdot \vec{v} = k(\vec{u} \cdot \vec{v})$.
- $\vec{u} \cdot \vec{u} = \|\vec{u}\|^2$.
- **Orthogonalité** : $\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0$.

</div>

On retrouve les identités remarquables : $\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$.

## Le théorème d'Al-Kashi

<div class="encadre">

Dans un triangle $ABC$, avec $a = BC$, $b = AC$, $c = AB$ et $\hat{A}$ l'angle en $A$ :

$$
a^2 = b^2 + c^2 - 2bc\cos \hat{A}
$$

</div>

C'est un Pythagore « généralisé » : si $\hat{A} = 90°$, $\cos \hat{A} = 0$ et on retrouve $a^2 = b^2 + c^2$.

Exemple : $b = 5$, $c = 3$, $\hat{A} = 60°$. Alors $a^2 = 25 + 9 - 2 \times 5 \times 3 \times \frac{1}{2} = 19$, donc <mark>$a = \sqrt{19} \approx 4{,}36$</mark>.

## Équations de droites et de cercles

<div class="encadre">

**Vecteur normal.** Un vecteur $\vec{n}$ non nul est **normal** à une droite s'il est orthogonal à un de ses vecteurs directeurs. La droite de vecteur normal $\vec{n}(a\,;b)$ a une équation $ax + by + c = 0$.

**Cercle.** Le cercle de centre $\Omega(x_0\,;y_0)$ et de rayon $r$ a pour équation $(x - x_0)^2 + (y - y_0)^2 = r^2$.

**Cercle de diamètre $[AB]$.** C'est l'ensemble des points $M$ tels que $\overrightarrow{MA} \cdot \overrightarrow{MB} = 0$.

</div>

Le dernier résultat dit que, vu depuis n'importe quel point du cercle, un diamètre est vu sous un **angle droit**.
