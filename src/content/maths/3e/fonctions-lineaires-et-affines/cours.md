---
titre: Fonctions linéaires et fonctions affines
court: Fonctions linéaires et affines
description: Notion de fonction, image et antécédent, fonctions linéaires et proportionnalité, fonctions affines, représentation graphique et lecture du coefficient directeur, expliqués avec les tarifs d'une salle de sport, avec des exercices corrigés type brevet. 3e maths.
ordre: 3
publie: 2026-11-23T01:02:00
video:
  youtube: ""
piege: >-
  **Une fonction affine n'est pas proportionnelle (sauf si $b = 0$).** Si on double le nombre de séances avec l'abonnement, on ne double pas le prix : le fixe ne double pas. Seule la droite d'une fonction **linéaire** passe par l'origine.
pdf:
  cours: /pdf/maths/3e/fonctions-lineaires-et-affines-cours.pdf
  fiche: /pdf/maths/3e/fonctions-lineaires-et-affines-fiche.pdf
  exercices: /pdf/maths/3e/fonctions-lineaires-et-affines-exercices.pdf
suivant: theoreme-de-thales
---

## Le problème

Une salle de sport propose deux tarifs :

- **tarif A** : 8 € la séance ;
- **tarif B** : un abonnement de 30 € par mois, puis 3 € la séance.

À partir de combien de séances par mois le tarif B est-il plus avantageux ?

## L'idée : les tarifs de la salle de sport

Chaque tarif est une **fonction** : on donne le nombre de séances $\corange{x}$, elle renvoie le prix à payer.

- Le tarif A, c'est **payer à la séance** : 2 fois plus de séances, 2 fois plus cher. C'est une situation de **proportionnalité**, une fonction **linéaire**.
- Le tarif B, c'est **un fixe plus un prix par séance**. Ce n'est plus proportionnel : c'est une fonction **affine**.

## Fonction, image, antécédent

<div class="encadre">

Une **fonction** $\cbleu{f}$ associe à chaque nombre $\corange{x}$ un **unique** nombre noté $\cbleu{f}(\corange{x})$.

- $\cbleu{f}(\corange{x})$ est l'**image** de $\corange{x}$.
- Si $\cbleu{f}(\corange{a}) = b$, alors $\corange{a}$ est **un antécédent** de $b$.

</div>

On note $\cbleu{f} : \corange{x} \longmapsto 8\corange{x}$, ou $\cbleu{f}(\corange{x}) = 8\corange{x}$.

## Fonctions linéaires

<div class="encadre">

Une fonction **linéaire** s'écrit $\cbleu{f}(\corange{x}) = a\corange{x}$. Elle traduit une situation de **proportionnalité**, de coefficient $a$.

Sa représentation graphique est une **droite qui passe par l'origine**.

</div>

## Fonctions affines

<div class="encadre">

Une fonction **affine** s'écrit $\cbleu{f}(\corange{x}) = a\corange{x} + b$. Sa représentation graphique est une **droite**.

- $b$ est l'**ordonnée à l'origine** : la droite coupe l'axe des ordonnées en $(0\,;b)$.
- $a$ est le **coefficient directeur** : quand $\corange{x}$ augmente de 1, $\cbleu{f}(\corange{x})$ augmente de $a$.
- Si $a > 0$ la droite monte, si $a < 0$ elle descend.

Pour deux nombres $x_1 \ne x_2$ : $a = \dfrac{\cbleu{f}(x_2) - \cbleu{f}(x_1)}{x_2 - x_1}$.

</div>

Une fonction linéaire est une fonction affine avec $b = 0$. Une fonction **constante** ($a = 0$) est aussi affine : sa droite est horizontale.

**Tracer la droite** : deux points suffisent. On calcule deux images, on place les points, on trace.

## Retour au problème

Tarif A : $\cbleu{f}(\corange{x}) = 8\corange{x}$. Tarif B : $g(\corange{x}) = 3\corange{x} + 30$.

Les deux prix sont égaux quand $8\corange{x} = 3\corange{x} + 30 \iff 5\corange{x} = 30 \iff \corange{x} = 6$. Pour 6 séances, on paie 48 € dans les deux cas.

La droite B monte moins vite (coefficient 3 au lieu de 8). <mark>À partir de 7 séances par mois, le tarif B est plus avantageux</mark>.

Au lycée, toutes ces droites seront étudiées dans [Équations de droites et systèmes](/maths/seconde/equations-de-droites/cours/).
