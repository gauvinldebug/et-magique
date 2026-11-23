---
titre: Généralités sur les fonctions
court: Généralités sur les fonctions
description: Image, antécédent, courbe représentative, résolution graphique, variations, extremums et signe d'une fonction, expliqués avec une machine à transformer et le profil d'une randonnée, avec des exercices corrigés pas à pas. Seconde maths.
ordre: 4
publie: 2026-11-22T22:03:00
video:
  youtube: ""
piege: >-
  **Une image est unique, un antécédent ne l'est pas.** Un nombre a une seule image par $f$, mais une valeur peut avoir zéro, un ou plusieurs antécédents. Sur la courbe, on lit l'image sur l'axe des **ordonnées**, l'antécédent sur l'axe des **abscisses**.
pdf:
  cours: /pdf/maths/seconde/generalites-sur-les-fonctions-cours.pdf
  fiche: /pdf/maths/seconde/generalites-sur-les-fonctions-fiche.pdf
  exercices: /pdf/maths/seconde/generalites-sur-les-fonctions-exercices.pdf
suivant: fonctions-de-reference
---

## Le problème

Le prix d'un trajet en taxi dépend de la distance : 4 € de prise en charge, puis 1,50 € par kilomètre. Combien coûte un trajet de 12 km ? Quelle distance peut-on faire avec 25 € ? Une **fonction** répond aux deux questions, dans un sens puis dans l'autre.

## L'idée : la machine à transformer

Une fonction $\cbleu{f}$ est une **machine** : on met un nombre $\corange{x}$ à l'entrée, elle en ressort un seul, $\cbleu{f}(\corange{x})$.

- Le nombre qui ressort est l'**image** de $\corange{x}$.
- Si on connaît la sortie et qu'on cherche ce qu'il fallait mettre à l'entrée, on cherche un **antécédent**.

Le taxi : $\cbleu{f}(\corange{x}) = 4 + 1{,}5\corange{x}$. Entrée 12 km, sortie $\cbleu{f}(12) = 22$ €.

## Vocabulaire

<div class="encadre">

- L'**ensemble de définition** $D_f$ est l'ensemble des $\corange{x}$ qu'on a le droit de mettre dans la machine.
- Si $\cbleu{f}(\corange{a}) = b$, alors $b$ est **l'image** de $\corange{a}$, et $\corange{a}$ est **un antécédent** de $b$.
- La **courbe représentative** $\mathcal{C}_f$ est l'ensemble des points $M(\corange{x}\,;\cbleu{f}(\corange{x}))$. Un point $M(x\,;y)$ est sur la courbe si et seulement si $y = \cbleu{f}(x)$.

</div>

Exemple : avec $\cbleu{f}(\corange{x}) = \frac{1}{\corange{x} - 2}$, on ne peut pas mettre $\corange{x} = 2$ (division par 0). $D_f = \mathbb{R} \setminus \{2\}$.

## Résoudre graphiquement

<div class="encadre">

- $\cbleu{f}(\corange{x}) = k$ : on trace la droite horizontale $y = k$, on lit les **abscisses** des points d'intersection avec $\mathcal{C}_f$.
- $\cbleu{f}(\corange{x}) > k$ : on lit les abscisses des points de $\mathcal{C}_f$ situés **au-dessus** de la droite.
- $\cbleu{f}(\corange{x}) = g(\corange{x})$ : abscisses des points d'intersection des deux courbes.

</div>

## Le profil de la randonnée

Regarde la courbe comme le **profil d'une randonnée**, parcouru de gauche à droite.

<div class="encadre">

- $\cbleu{f}$ est **croissante** sur $I$ quand on **monte** : si $a < b$ dans $I$, alors $\cbleu{f}(a) \le \cbleu{f}(b)$.
- $\cbleu{f}$ est **décroissante** sur $I$ quand on **descend** : si $a < b$, alors $\cbleu{f}(a) \ge \cbleu{f}(b)$.
- Le **maximum** est le plus haut sommet, le **minimum** le point le plus bas.

</div>

On résume tout dans un **tableau de variations** : une flèche qui monte, une flèche qui descend, et les valeurs aux sommets.

Le **signe** de $\cbleu{f}$ : $\cbleu{f}(\corange{x}) > 0$ quand la courbe est au-dessus de l'axe des abscisses (au-dessus du niveau de la mer), négatif en dessous. On le résume dans un **tableau de signes**.

## Retour au problème

- Pour 12 km : <mark>$\cbleu{f}(12) = 4 + 18 = 22$ €</mark>.
- Avec 25 € : on cherche l'antécédent de 25. $4 + 1{,}5\corange{x} = 25 \iff \corange{x} = 14$. <mark>On peut faire 14 km</mark>.

Les grandes familles de fonctions sont dans le chapitre suivant : [Fonctions de référence](/maths/seconde/fonctions-de-reference/cours/).
