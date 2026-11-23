---
titre: Le théorème de Thalès et sa réciproque
court: Théorème de Thalès
description: Le théorème de Thalès en configuration triangle et papillon, sa réciproque pour prouver un parallélisme, agrandissements et réductions, expliqués avec l'ombre d'un arbre au soleil, avec des exercices corrigés type brevet. 3e maths.
ordre: 4
publie: 2026-11-23T01:03:00
video:
  youtube: ""
piege: >-
  **Pour la réciproque, l'ordre des points compte.** Il faut que les points soient alignés **dans le même ordre** sur les deux droites. Sinon, même avec des rapports égaux, on ne peut pas conclure au parallélisme.
pdf:
  cours: /pdf/maths/3e/theoreme-de-thales-cours.pdf
  fiche: /pdf/maths/3e/theoreme-de-thales-fiche.pdf
  exercices: /pdf/maths/3e/theoreme-de-thales-exercices.pdf
suivant: trigonometrie
---

## Le problème

Comment mesurer la hauteur d'un arbre sans y grimper ? Un jour de soleil, tu plantes un bâton de 1,50 m bien droit : son ombre mesure 2 m. Au même moment, l'ombre de l'arbre mesure 12 m. Quelle est la hauteur de l'arbre ?

## L'idée : l'ombre au soleil

Les rayons du soleil arrivent **parallèles** entre eux. Le bâton et son ombre forment un petit triangle, l'arbre et son ombre un grand triangle de **même forme**. Le grand est un **agrandissement** du petit : toutes les longueurs sont multipliées par le même nombre.

C'est exactement ce que dit le théorème de Thalès : des droites parallèles découpent des triangles **proportionnels**.

## Le théorème de Thalès

<div class="encadre">

Soit deux droites $(BM)$ et $(CN)$ sécantes en $A$. Si les droites $(\cbleu{MN})$ et $(\corange{BC})$ sont **parallèles**, alors
$$\frac{AM}{AB} = \frac{AN}{AC} = \frac{\cbleu{MN}}{\corange{BC}}.$$

</div>

Deux configurations :

- **triangle** : $M$ est sur le segment $[AB]$ et $N$ sur $[AC]$, le petit triangle $AMN$ est dans le grand $ABC$ ;
- **papillon** : $M$ et $N$ sont de l'autre côté de $A$, les deux triangles sont tête-bêche.

**Méthode** : on écrit les trois rapports (petit triangle en haut, grand en bas), on remplace par les longueurs connues, puis on utilise un **produit en croix**.

## La réciproque

<div class="encadre">

Si les points $A$, $M$, $B$ d'une part et $A$, $N$, $C$ d'autre part sont **alignés dans le même ordre**, et si
$$\frac{AM}{AB} = \frac{AN}{AC},$$
alors les droites $(MN)$ et $(BC)$ sont **parallèles**.

</div>

Si les deux rapports sont **différents**, les droites ne sont **pas** parallèles (c'est la contraposée du théorème).

## Agrandissement et réduction

<div class="encadre">

Dans un agrandissement ou une réduction de rapport $k$ :

- les **longueurs** sont multipliées par $k$ ;
- les **aires** sont multipliées par $k^2$ ;
- les **volumes** sont multipliés par $k^3$ ;
- les angles ne changent pas.

Si $k > 1$ c'est un agrandissement, si $0 < k < 1$ une réduction.

</div>

## Retour au problème

Les rayons sont parallèles : on est dans une configuration de Thalès. Le rapport d'agrandissement est $\frac{12}{2} = 6$.

$$
\frac{\text{hauteur de l'arbre}}{1{,}5} = \frac{12}{2} \iff \text{hauteur} = \frac{1{,}5 \times 12}{2} = 9
$$

<mark>L'arbre mesure 9 m</mark>. Thalès aurait mesuré une pyramide de cette façon.

Dans un triangle rectangle, la [trigonométrie](/maths/3e/trigonometrie/cours/) permet aussi de trouver des longueurs, avec un angle.
