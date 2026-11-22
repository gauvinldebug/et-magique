---
titre: Géométrie dans l'espace
court: Géométrie dans l'espace
description: Les vecteurs, droites et plans de l'espace expliqués avec un drone et sa télécommande, les représentations paramétriques, le produit scalaire, le vecteur normal et l'équation cartésienne d'un plan, avec des exercices corrigés type bac. Terminale spécialité maths.
ordre: 10
publie: 2026-11-22T20:20:00
video:
  youtube: ""
piege: "**Un vecteur normal n'est pas un vecteur directeur.** Le plan d'équation $2x - y + 3z = 5$ a pour vecteur **normal** $\\vec{n}(2\\,;-1\\,;3)$ : ce vecteur est perpendiculaire au plan, il ne le parcourt pas."
pdf:
  cours: /pdf/maths/terminale/geometrie-dans-l-espace-cours.pdf
  fiche: /pdf/maths/terminale/geometrie-dans-l-espace-fiche.pdf
  exercices: /pdf/maths/terminale/geometrie-dans-l-espace-exercices.pdf
suivant: denombrement
---

## Le problème

Dans le plan, une droite s'écrit $y = mx + p$. Mais dans l'espace, il y a une troisième coordonnée, $z$. Comment décrire une droite qui file en diagonale à travers une pièce ? Comment savoir si elle traverse un mur, et où ?

Il faut un nouvel outil : les **vecteurs de l'espace**, et une nouvelle façon d'écrire les droites et les plans.

## L'idée : le drone et sa télécommande

Tu pilotes un drone. Pour décrire sa trajectoire en ligne droite, deux informations suffisent :

- le **point de départ** $A$ ;
- la **direction** dans laquelle il vole, donnée par un vecteur $\vec{u}$ : c'est le joystick de la télécommande.

Au temps $t$, le drone est au point $M$ tel que $\overrightarrow{AM} = t\,\vec{u}$. C'est la <span class="o">représentation paramétrique</span> d'une droite.

Pour un plan, c'est différent. Imagine un mât planté **bien droit** dans le sol : sa direction est perpendiculaire au sol. Ce mât, c'est le <mark>vecteur normal</mark> du plan. Il suffit d'un point et d'un vecteur normal pour décrire tout le plan.

## Vecteurs de l'espace

Dans un repère $(O\,;\vec{\imath},\vec{\jmath},\vec{k})$, un vecteur a trois coordonnées : $\vec{u}(a\,;b\,;c)$. Si $A(x_A\,;y_A\,;z_A)$ et $B(x_B\,;y_B\,;z_B)$ :

$$
\overrightarrow{AB}\,(x_B - x_A\,;\,y_B - y_A\,;\,z_B - z_A) \qquad AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}
$$

<div class="encadre">

**Colinéaires.** $\vec{u}$ et $\vec{v}$ sont colinéaires s'il existe un réel $k$ tel que $\vec{v} = k\,\vec{u}$.

**Coplanaires.** $\vec{u}$, $\vec{v}$, $\vec{w}$ sont coplanaires s'il existe des réels $a$ et $b$ tels que $\vec{w} = a\,\vec{u} + b\,\vec{v}$ (avec $\vec{u}$, $\vec{v}$ non colinéaires).

</div>

## Représentation paramétrique d'une droite

<div class="encadre">

La droite passant par $A(x_A\,;y_A\,;z_A)$ et de vecteur directeur $\vec{u}(a\,;b\,;c)$ est l'ensemble des points $M(x\,;y\,;z)$ tels que :

$$
\begin{cases} x = x_A + a\,t \\ y = y_A + b\,t \\ z = z_A + c\,t \end{cases} \qquad t \in \mathbb{R}
$$

</div>

Pour savoir si un point est sur la droite, on cherche **un même** $t$ qui marche pour les trois lignes.

## Le produit scalaire dans l'espace

<div class="encadre">

Si $\vec{u}(a\,;b\,;c)$ et $\vec{v}(a'\,;b'\,;c')$ dans un repère orthonormé :

$$
\vec{u} \cdot \vec{v} = aa' + bb' + cc' \qquad\qquad \|\vec{u}\| = \sqrt{a^2 + b^2 + c^2}
$$

$\vec{u}$ et $\vec{v}$ sont **orthogonaux** si et seulement si $\vec{u} \cdot \vec{v} = 0$.

</div>

## Vecteur normal et équation de plan

<div class="encadre">

Un vecteur $\vec{n}$ non nul est **normal** à un plan $\mathcal{P}$ s'il est orthogonal à deux vecteurs non colinéaires de $\mathcal{P}$. Il est alors orthogonal à tous les vecteurs du plan.

Le plan de vecteur normal $\vec{n}(a\,;b\,;c)$ a une équation de la forme $ax + by + cz + d = 0$. Réciproquement, $ax + by + cz + d = 0$ est l'équation d'un plan de vecteur normal $\vec{n}(a\,;b\,;c)$.

</div>

Exemple : le plan passant par $A(1\,;0\,;2)$ et de vecteur normal $\vec{n}(2\,;-1\,;3)$ a une équation $2x - y + 3z + d = 0$. Comme $A$ est dans le plan, $2 - 0 + 6 + d = 0$, donc $d = -8$ : <mark>$2x - y + 3z - 8 = 0$</mark>.

## Positions relatives

- Une droite de vecteur directeur $\vec{u}$ est **orthogonale** au plan si $\vec{u}$ est colinéaire à $\vec{n}$ : le drone vole le long du mât.
- Elle est **parallèle** au plan si $\vec{u} \cdot \vec{n} = 0$ : le drone vole à l'horizontale, il ne touche jamais le sol (ou y reste).
- Sinon, elle **coupe** le plan en un point. Pour le trouver, on remplace $x$, $y$, $z$ de la représentation paramétrique dans l'équation du plan, et on résout en $t$.

## Projeté orthogonal et distance

Le **projeté orthogonal** d'un point $M$ sur un plan $\mathcal{P}$ est le point $H$ de $\mathcal{P}$ tel que $\overrightarrow{MH}$ est colinéaire au vecteur normal. C'est l'endroit où tombe le drone s'il descend à la verticale du mât. La distance de $M$ au plan, c'est $MH$ : c'est la plus courte distance entre $M$ et un point du plan.
