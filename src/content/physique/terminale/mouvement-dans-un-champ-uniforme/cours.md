---
titre: Mouvement dans un champ uniforme
court: Mouvement dans un champ uniforme
description: Chute libre avec vitesse initiale, équations horaires, trajectoire parabolique, particule chargée dans un champ électrique uniforme et accélérateur linéaire, expliqués avec deux ombres. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 10
publie: 2026-11-24T01:09:00
video:
  youtube: ""
piege: "**Au sommet de la trajectoire, la vitesse n'est pas nulle.** Seule sa composante verticale s'annule ; la composante horizontale, elle, n'a pas changé depuis le lancer."
pdf:
  cours: /pdf/physique/terminale/mouvement-dans-un-champ-uniforme-cours.pdf
  fiche: /pdf/physique/terminale/mouvement-dans-un-champ-uniforme-fiche.pdf
  exercices: /pdf/physique/terminale/mouvement-dans-un-champ-uniforme-exercices.pdf
suivant: planetes-et-satellites
---

## Le problème

Un basketteur tire en suspension. Le ballon décrit une courbe, monte, redescend, et rentre (ou pas) dans le panier. Peut-on prévoir sa trajectoire à partir de la vitesse de tir ? Et pourquoi un électron dans un vieil écran de télévision suit-il une courbe de la même forme ?

## L'idée : deux ombres

Imagine le ballon éclairé par deux lampes.

- Une lampe **au plafond** projette son ombre sur le sol. Cette ombre avance en ligne droite, à **vitesse constante** : rien ne la pousse ni ne la freine horizontalement.
- Une lampe **sur le côté** projette son ombre sur un mur. Cette ombre monte, ralentit, s'arrête un instant, puis redescend de plus en plus vite : exactement comme une balle lancée **verticalement**.

<mark>Un mouvement parabolique, c'est deux mouvements simples qui se déroulent en même temps</mark> : un mouvement uniforme dans la direction perpendiculaire au champ, un mouvement uniformément accéléré dans la direction du champ.

## La chute libre dans le champ de pesanteur

Un objet est en **chute libre** s'il n'est soumis qu'à son poids. Dans un repère avec $\vec{j}$ vertical vers le haut, on lance le projectile depuis l'origine avec une vitesse $\vec{v}_0$ qui fait un angle $\alpha$ avec l'horizontale.

<div class="encadre">

**Deuxième loi de Newton** : $m\vec{a} = m\vec{g}$, donc $\vec{a} = \vec{g}$, indépendante de la masse.

$$
\begin{cases} a_x = 0 \\ a_y = -g \end{cases} \quad
\begin{cases} v_x = v_0 \cos\alpha \\ v_y = -g\,t + v_0 \sin\alpha \end{cases} \quad
\begin{cases} x = v_0 \cos\alpha \cdot t \\ y = -\frac{1}{2} g\,t^2 + v_0 \sin\alpha \cdot t \end{cases}
$$

</div>

Les équations en $x$ décrivent l'ombre sur le sol, celles en $y$ l'ombre sur le mur.

**Équation de la trajectoire.** On élimine le temps : $t = \dfrac{x}{v_0\cos\alpha}$, d'où

$$
\cbleu{y} = -\frac{g}{2\,v_0^2 \cos^2\alpha}\,\corange{x}^2 + \tan\alpha \cdot \corange{x}
$$

C'est une **parabole**. Le sommet (la flèche) est atteint quand $v_y = 0$ ; le point de chute, quand $y$ redevient égal à sa valeur de départ.

## Une particule chargée dans un champ électrique uniforme

Entre deux plaques parallèles distantes de $d$ et soumises à une tension $U$, règne un **champ électrique uniforme**, perpendiculaire aux plaques, dirigé de la plaque + vers la plaque −, de valeur

$$
E = \frac{U}{d} \qquad (\mathrm{V \cdot m^{-1}})
$$

Une particule de charge $q$ y subit la force $\vec{F} = q\vec{E}$. Son poids est **négligeable** devant cette force (on le vérifie en comparant les ordres de grandeur). La deuxième loi donne

$$
\vec{a} = \frac{q\,\vec{E}}{m}
$$

C'est la même situation que la chute libre : une accélération constante. Si la particule entre perpendiculairement au champ, elle suit une parabole, comme le ballon. Si elle entre parallèlement au champ, elle est accélérée en ligne droite.

## L'accélérateur linéaire

Une particule chargée, accélérée par une tension $U$ entre deux plaques percées, gagne de l'énergie cinétique. Le travail de la force électrique vaut $W = q\,U$. Le théorème de l'énergie cinétique donne

$$
\frac{1}{2} m v_B^2 - \frac{1}{2} m v_A^2 = q\,U_{AB}
$$

Partant du repos, un électron accéléré sous une tension de quelques milliers de volts atteint des dizaines de milliers de kilomètres par seconde. C'est le principe des accélérateurs linéaires utilisés en radiothérapie.

## Aspects énergétiques

En chute libre, la seule force est le poids, force conservative : l'énergie mécanique $E_m = \frac{1}{2}mv^2 + mgy$ se conserve. On retrouve ainsi une vitesse sans passer par les équations horaires.

## Les pièges

- Au sommet, $v_y = 0$ mais $v_x = v_0\cos\alpha$ : la vitesse **n'est pas nulle**.
- Le mouvement ne dépend **pas** de la masse en chute libre.
- Avec $\vec{j}$ vers le haut, $a_y = -g$ : le signe dépend de l'orientation de l'axe.
- Pour une particule chargée, le poids est en général négligeable devant $q\vec{E}$ : il faut le justifier.
