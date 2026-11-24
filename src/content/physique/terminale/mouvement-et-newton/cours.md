---
titre: Mouvement et deuxième loi de Newton
court: Mouvement et lois de Newton
description: Vecteurs position, vitesse et accélération, mouvements rectilignes et circulaires, repère de Frenet et deuxième loi de Newton, expliqués avec le passager d'une voiture. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 9
publie: 2026-11-24T01:08:00
video:
  youtube: ""
piege: "**Un mouvement circulaire à vitesse constante est accéléré.** La valeur de la vitesse ne change pas, mais sa direction change à chaque instant : l'accélération vaut $\\frac{v^2}{R}$ et pointe vers le centre."
pdf:
  cours: /pdf/physique/terminale/mouvement-et-newton-cours.pdf
  fiche: /pdf/physique/terminale/mouvement-et-newton-fiche.pdf
  exercices: /pdf/physique/terminale/mouvement-et-newton-exercices.pdf
suivant: mouvement-dans-un-champ-uniforme
---

## Le problème

En Première, on a relié la **variation** du vecteur vitesse aux forces ([Variation de la vitesse et forces](/physique/premiere/mouvement-et-forces/cours/)). En Terminale, on va plus loin : on veut prévoir la trajectoire et la vitesse d'un objet à **chaque instant**. Pour cela, il faut un outil mathématique, la dérivée, et une loi physique, la deuxième loi de Newton.

## L'idée : le passager de la voiture

Assis à l'avant d'une voiture, les yeux fermés, tu sens trois choses :

- la voiture **accélère** : tu es plaqué contre le siège ;
- elle **freine** : tu pars vers l'avant ;
- elle **tourne**, même sans changer de vitesse au compteur : tu es poussé sur le côté.

Dans les trois cas, le vecteur vitesse de la voiture change, en valeur ou en direction. C'est exactement ce que mesure l'**accélération**. Quand la voiture roule tout droit à vitesse constante, tu ne sens rien : l'accélération est nulle.

## Position, vitesse, accélération

Dans un repère $(O ; \vec{i}, \vec{j}, \vec{k})$ lié au référentiel d'étude, le point $M$ a pour vecteur position $\overrightarrow{OM}(\corange{t})$.

<div class="encadre">

$$
\cbleu{\vec{v}}(\corange{t}) = \frac{\mathrm{d}\overrightarrow{OM}}{\mathrm{d}t} \qquad\qquad \cbleu{\vec{a}}(\corange{t}) = \frac{\mathrm{d}\vec{v}}{\mathrm{d}t}
$$

En coordonnées : $v_x = \dfrac{\mathrm{d}x}{\mathrm{d}t}$, $a_x = \dfrac{\mathrm{d}v_x}{\mathrm{d}t}$, et de même selon $y$ et $z$. Unités : $\mathrm{m \cdot s^{-1}}$ et $\mathrm{m \cdot s^{-2}}$.

</div>

Le vecteur vitesse est **tangent** à la trajectoire. Dans le sens inverse, quand on connaît l'accélération, on retrouve la vitesse puis la position par **primitives**, en utilisant les conditions initiales.

## Les mouvements à connaître

| Mouvement | Accélération | Équations (selon $x$) |
|---|---|---|
| rectiligne uniforme | $\vec{a} = \vec{0}$ | $x(t) = v_0\,t + x_0$ |
| rectiligne uniformément varié | $\vec{a}$ constant, colinéaire à $\vec{v}$ | $v(t) = a\,t + v_0$, $\ x(t) = \frac{1}{2}a\,t^2 + v_0\,t + x_0$ |
| circulaire uniforme | $a = \dfrac{v^2}{R}$, vers le centre | $v$ constante, $R$ rayon |

## Le repère de Frenet

Pour un mouvement circulaire, on utilise un repère qui suit le point : $\vec{u}_T$ tangent à la trajectoire (dans le sens du mouvement), $\vec{u}_N$ dirigé vers le centre.

<div class="encadre">

Pour un mouvement circulaire de rayon $R$ :

$$
\vec{a} = \frac{\mathrm{d}v}{\mathrm{d}t}\,\vec{u}_T + \frac{v^2}{R}\,\vec{u}_N
$$

</div>

- La composante **tangentielle** $\frac{\mathrm{d}v}{\mathrm{d}t}$ dit si la voiture accélère ou freine.
- La composante **normale** $\frac{v^2}{R}$ dit qu'elle tourne. Elle n'est jamais nulle sur un cercle.

Si le mouvement est circulaire **uniforme**, $\frac{\mathrm{d}v}{\mathrm{d}t} = 0$ et l'accélération est **centripète**, de valeur $\frac{v^2}{R}$.

## Les lois de Newton

On étudie le mouvement du **centre de masse** du système, dans un référentiel **galiléen** (le référentiel terrestre l'est, approximativement, pour des expériences courtes).

<div class="encadre">

**Première loi (principe d'inertie).** Si $\sum \vec{F}_{\text{ext}} = \vec{0}$, le centre de masse est immobile ou en mouvement rectiligne uniforme, et réciproquement.

**Deuxième loi.** Pour un système de masse $m$ constante :

$$
\sum \vec{F}_{\text{ext}} = m\,\vec{a}_G
$$

**Troisième loi.** Si A exerce une force sur B, B exerce sur A une force opposée : $\vec{F}_{A/B} = -\vec{F}_{B/A}$.

</div>

La deuxième loi est le pont entre les causes (les forces) et le mouvement (l'accélération). Démarche type :

1. définir le système et le référentiel galiléen ;
2. faire le bilan des forces ;
3. écrire $\sum \vec{F} = m\vec{a}$ et projeter sur les axes ;
4. intégrer deux fois avec les conditions initiales.

## Les pièges

- Accélération nulle ne veut pas dire vitesse nulle : un objet peut aller vite à vitesse constante, en ligne droite.
- Un virage à vitesse constante est **accéléré**.
- La deuxième loi s'applique dans un référentiel **galiléen**, au **centre de masse**.
- Les deux forces de la troisième loi s'appliquent sur **deux systèmes différents** : elles ne se compensent pas.
