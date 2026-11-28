---
titre: Dosages par étalonnage et titrages
court: Dosages et titrages
description: Doser une espèce en solution par étalonnage (loi de Beer-Lambert, loi de Kohlrausch) ou par titrage (équivalence, suivi pH-métrique et conductimétrique), expliqué avec un nuancier et des chaises. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 3
publie: 2026-11-24T01:02:00
video:
  youtube: ""
piege: "**À l'équivalence, ce sont les quantités de matière qui sont dans les proportions de l'équation, pas les volumes.** On écrit $\\frac{n_A}{a} = \\frac{n_B}{b}$, puis seulement $c_A V_A$ et $c_B V_E$."
pdf:
  cours: /pdf/physique/terminale/dosages-et-titrages-cours.pdf
  fiche: /pdf/physique/terminale/dosages-et-titrages-fiche.pdf
  exercices: /pdf/physique/terminale/dosages-et-titrages-exercices.pdf
suivant: cinetique-chimique
---

## Le problème

Sur une bouteille de vinaigre, il est écrit « 6 % d'acidité ». Dans un sérum physiologique, « 0,9 % de chlorure de sodium ». Comment un laboratoire vérifie-t-il ces nombres ? Il faut **doser** l'espèce, c'est-à-dire déterminer sa concentration. Deux familles de méthodes : comparer à des solutions connues (l'**étalonnage**), ou faire réagir l'espèce jusqu'au bout (le **titrage**).

## Le dosage par étalonnage : le nuancier

Pour repeindre un mur de la même couleur, on compare un éclat de peinture à un nuancier. Le dosage par étalonnage, c'est pareil : on prépare des solutions **étalons** de concentrations connues, on mesure une grandeur pour chacune, et on place la solution inconnue sur cette échelle.

La grandeur mesurée doit dépendre simplement de la concentration. Deux lois le permettent.

<div class="encadre">

**Loi de Beer-Lambert** (espèce colorée, solution diluée) :

$$
\cbleu{A} = \varepsilon \times \ell \times \corange{c} = k \times \corange{c}
$$

$A$ absorbance (sans unité), $\varepsilon$ coefficient d'absorption molaire, $\ell$ épaisseur de solution traversée.

**Loi de Kohlrausch** (espèces ioniques, solution diluée) :

$$
\cbleu{\sigma} = \sum_i \lambda_i \, [X_i]
$$

$\sigma$ conductivité en $\mathrm{S \cdot m^{-1}}$, $\lambda_i$ conductivité molaire ionique en $\mathrm{S \cdot m^2 \cdot mol^{-1}}$, $[X_i]$ en $\mathrm{mol \cdot m^{-3}}$.

</div>

Pour un seul soluté ionique, $\sigma$ est proportionnelle à sa concentration. Dans les deux cas, la **droite d'étalonnage** passe par l'origine : on lit la concentration inconnue sur la droite, ou on la calcule avec le coefficient directeur.

L'absorbance se mesure au spectrophotomètre, à la longueur d'onde où l'espèce absorbe le plus. La conductivité se mesure au conductimètre.

## Le titrage : les invités et les chaises

Imagine une salle où sont debout des invités, en nombre inconnu. Tu apportes des chaises une à une. Tant qu'il reste des invités debout, chaque chaise trouve preneur. Au moment précis où le dernier invité s'assoit, tu peux compter les chaises apportées : tu connais le nombre d'invités.

- Les invités : l'espèce **titrée**, de concentration inconnue, dans le bécher.
- Les chaises : l'espèce **titrante**, de concentration connue, dans la burette.
- Le moment où tout le monde est assis : l'<span class="o">équivalence</span>.

<div class="encadre">

**Réaction support d'un titrage** : elle doit être **totale**, **rapide** et **unique**.

**Équivalence** : les réactifs ont été introduits dans les proportions stœchiométriques. Le réactif limitant change. Pour la réaction $a\,\mathrm{A} + b\,\mathrm{B} \longrightarrow \dots$ (A titré, B titrant) :

$$
\frac{n_{\mathrm{A}}}{a} = \frac{n_{\mathrm{B},E}}{b} \qquad\text{soit}\qquad \frac{\corange{c_A} \, V_A}{a} = \frac{c_B \, \cvert{V_E}}{b}
$$

</div>

## Repérer l'équivalence

**Par changement de couleur.** Si une espèce colorée disparaît ou apparaît à l'équivalence, ou avec un **indicateur coloré** dont la zone de virage contient le pH à l'équivalence.

**Par suivi pH-métrique.** La courbe $\mathrm{pH} = f(V)$ présente un **saut de pH** à l'équivalence. On trouve $V_E$ par la méthode des **tangentes parallèles**, ou au maximum de la dérivée $\frac{\mathrm{d}\,\mathrm{pH}}{\mathrm{d}V}$.

**Par suivi conductimétrique.** La courbe $\sigma = f(V)$ est faite de deux segments de droite. Ils se coupent à l'équivalence : on parle de **rupture de pente**. Pour que les segments soient droits, on ajoute beaucoup d'eau au départ, afin que la dilution soit négligeable.

Pour un titrage d'acide faible par une base forte, à la **demi-équivalence** ($V = V_E/2$) on a $[\mathrm{AH}] = [\mathrm{A^-}]$, donc $\mathrm{pH} = \mathrm{p}K_A$. C'est une façon de mesurer un $\mathrm{p}K_A$.

<div class="labo" data-labo="titrage"></div>

## Comment interpréter les pentes en conductimétrie

On fait l'inventaire des ions avant et après l'équivalence. Exemple : acide chlorhydrique titré par la soude, $\mathrm{H_3O^+} + \mathrm{HO^-} \longrightarrow 2\,\mathrm{H_2O}$.

- **Avant** : chaque $\mathrm{HO^-}$ ajouté détruit un $\mathrm{H_3O^+}$ et apporte un $\mathrm{Na^+}$. Or $\lambda(\mathrm{H_3O^+})$ est bien plus grand que $\lambda(\mathrm{Na^+})$ : $\sigma$ **diminue**.
- **Après** : on ajoute des $\mathrm{Na^+}$ et des $\mathrm{HO^-}$ qui ne réagissent plus : $\sigma$ **augmente**.

## Les pièges

- L'équivalence porte sur les **quantités de matière**, avec les coefficients stœchiométriques.
- À l'équivalence en pH-métrie, le pH n'est **pas forcément 7** (il vaut 7 seulement pour un acide fort titré par une base forte).
- Dans la loi de Kohlrausch, les concentrations sont en $\mathrm{mol \cdot m^{-3}}$ : $1\ \mathrm{mol \cdot L^{-1}} = 1000\ \mathrm{mol \cdot m^{-3}}$.
- Beer-Lambert et Kohlrausch ne valent que pour des solutions **diluées**.
