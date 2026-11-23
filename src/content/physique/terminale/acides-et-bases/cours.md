---
titre: Acides, bases et pH
court: Acides, bases et pH
description: Les acides et les bases de Brønsted expliqués avec un ballon qui passe de main en main, les couples acide-base, l'eau amphotère, le pH et les acides forts, avec des exercices corrigés pas à pas. Terminale spécialité physique-chimie.
ordre: 1
publie: 2026-11-24T01:00:00
video:
  youtube: ""
piege: "**Le pH n'est pas proportionnel à la concentration.** Diluer 10 fois une solution d'acide fort fait monter son pH de **1**, pas le multiplier par 10 : $\\mathrm{pH} = -\\log\\left(\\frac{[\\mathrm{H_3O^+}]}{c^\\circ}\\right)$ est un logarithme."
pdf:
  cours: /pdf/physique/terminale/acides-et-bases-cours.pdf
  fiche: /pdf/physique/terminale/acides-et-bases-fiche.pdf
  exercices: /pdf/physique/terminale/acides-et-bases-exercices.pdf
suivant: force-des-acides-et-des-bases
---

## Le problème

Le vinaigre pique, le savon glisse, le jus de citron attaque le calcaire. Derrière ces trois réactions, il se passe toujours la même chose, à l'échelle des molécules : un tout petit morceau d'atome change de propriétaire. Ce morceau, c'est l'**ion hydrogène** $\mathrm{H^+}$, c'est-à-dire un simple proton.

## L'idée : le ballon qui passe de main en main

Imagine des joueurs qui se passent un ballon. Le ballon, c'est le proton $\mathrm{H^+}$.

- Celui qui **lance** le ballon est un <span class="o">acide</span>.
- Celui qui **l'attrape** est une <span class="o">base</span>.

Un ballon ne disparaît jamais tout seul dans les tribunes : pour qu'un acide lâche son proton, il faut qu'une base soit là pour le recevoir. Une réaction acide-base, c'est **une passe**.

## Les définitions

<div class="encadre">

**Acide (Brønsted).** Espèce chimique capable de **céder** un ion hydrogène $\mathrm{H^+}$.

**Base (Brønsted).** Espèce chimique capable de **capter** un ion hydrogène $\mathrm{H^+}$.

**Couple acide-base.** Un acide $\mathrm{AH}$ et la base $\mathrm{A^-}$ obtenue quand il a perdu son proton forment un couple noté $\mathrm{AH/A^-}$, relié par la demi-équation

$$
\cbleu{\mathrm{AH}} \rightleftharpoons \cvert{\mathrm{A^-}} + \corange{\mathrm{H^+}}
$$

</div>

Dans un couple, on écrit **toujours l'acide à gauche**. L'acide et sa base ne diffèrent que d'un $\mathrm{H^+}$ : c'est le même joueur, avec ou sans le ballon.

## Les couples à reconnaître

| Famille | Acide | Base conjuguée | Exemple |
|---|---|---|---|
| Acide carboxylique | $\mathrm{R{-}COOH}$ | ion carboxylate $\mathrm{R{-}COO^-}$ | acide éthanoïque $\mathrm{CH_3COOH/CH_3COO^-}$ |
| Amine | ion ammonium $\mathrm{R{-}NH_3^+}$ | amine $\mathrm{R{-}NH_2}$ | $\mathrm{NH_4^+/NH_3}$ |
| Eau (acide) | $\mathrm{H_2O}$ | $\mathrm{HO^-}$ | couple $\mathrm{H_2O/HO^-}$ |
| Eau (base) | $\mathrm{H_3O^+}$ | $\mathrm{H_2O}$ | couple $\mathrm{H_3O^+/H_2O}$ |
| Acide de l'atmosphère | $\mathrm{CO_2, H_2O}$ | $\mathrm{HCO_3^-}$ | dioxyde de carbone dissous |

Pour trouver la base conjuguée, on **enlève un H et on retire une charge +** (ou on ajoute une charge −). Pour trouver l'acide, on fait l'inverse.

## L'eau, le joueur qui fait les deux

L'eau apparaît dans deux couples : elle peut lancer le ballon ($\mathrm{H_2O/HO^-}$) ou l'attraper ($\mathrm{H_3O^+/H_2O}$). Une espèce qui est l'acide d'un couple et la base d'un autre est dite <span class="o">amphotère</span>. L'ion hydrogénocarbonate $\mathrm{HCO_3^-}$ l'est aussi.

Les acides aminés vont encore plus loin : ils portent un groupe acide $\mathrm{{-}COOH}$ et un groupe basique $\mathrm{{-}NH_2}$ sur la même molécule. En solution, ils existent surtout sous forme d'**amphion** (ou zwitterion), $\mathrm{{-}COO^-}$ et $\mathrm{{-}NH_3^+}$ à la fois.

## Écrire l'équation d'une réaction acide-base

Une passe a toujours deux joueurs, donc on combine **deux demi-équations** : celle de l'acide qui cède, et celle de la base qui capte. Les $\mathrm{H^+}$ s'éliminent.

Exemple : l'acide éthanoïque réagit avec l'ammoniac.

$$
\begin{aligned}
\cbleu{\mathrm{CH_3COOH}} &\rightleftharpoons \mathrm{CH_3COO^-} + \corange{\mathrm{H^+}} \\
\cbleu{\mathrm{NH_3}} + \corange{\mathrm{H^+}} &\rightleftharpoons \mathrm{NH_4^+} \\
\hline
\mathrm{CH_3COOH} + \mathrm{NH_3} &\longrightarrow \mathrm{CH_3COO^-} + \mathrm{NH_4^+}
\end{aligned}
$$

<mark>Le $\mathrm{H^+}$ n'apparaît jamais dans l'équation finale</mark> : le ballon est passé, il n'est pas resté en l'air.

## Le pH

En solution aqueuse, ce qui rend un milieu acide, c'est l'ion oxonium $\mathrm{H_3O^+}$. On mesure sa concentration avec le pH.

<div class="encadre">

**pH d'une solution diluée.**

$$
\cbleu{\mathrm{pH}} = -\log\left(\frac{[\mathrm{H_3O^+}]}{c^\circ}\right) \qquad\Longleftrightarrow\qquad [\mathrm{H_3O^+}] = c^\circ \times 10^{-\cbleu{\mathrm{pH}}}
$$

avec $c^\circ = 1\ \mathrm{mol \cdot L^{-1}}$ la concentration standard. Le pH n'a pas d'unité.

</div>

À 25 °C : une solution est **acide** si $\mathrm{pH} < 7$, **neutre** si $\mathrm{pH} = 7$, **basique** si $\mathrm{pH} > 7$.

Ce qu'il faut sentir : <mark>une unité de pH = un facteur 10 sur $[\mathrm{H_3O^+}]$</mark>. Une solution à pH 3 contient 10 fois plus d'ions oxonium qu'une solution à pH 4, et 100 fois plus qu'une solution à pH 5.

On mesure le pH avec un **pH-mètre** (précis, au dixième ou au centième) ou du papier pH (à l'unité près).

## Acide fort, base forte

Certains acides lancent leur ballon à coup sûr : dans l'eau, ils réagissent **totalement**. On les appelle **acides forts**. Exemple : le chlorure d'hydrogène, qui donne l'acide chlorhydrique.

$$
\mathrm{HCl} + \mathrm{H_2O} \longrightarrow \mathrm{H_3O^+} + \mathrm{Cl^-}
$$

Pour un acide fort de concentration apportée $\corange{c}$, tout l'acide s'est transformé : $[\mathrm{H_3O^+}] = \corange{c}$, donc

$$
\cvert{\mathrm{pH} = -\log\left(\frac{c}{c^\circ}\right)}
$$

De même, une **base forte** capte totalement les protons de l'eau. L'hydroxyde de sodium (soude) libère directement des ions $\mathrm{HO^-}$ : $[\mathrm{HO^-}] = \corange{c}$.

Les autres, qui ne lancent le ballon qu'une fois sur dix, ou sur mille, sont des acides **faibles**. C'est le sujet du [chapitre suivant](/physique/terminale/force-des-acides-et-des-bases/cours/).

## Les pièges

- Le $\mathrm{H^+}$ s'écrit dans les **demi-équations**, jamais dans l'équation de réaction.
- Dans un couple, l'acide est **à gauche** : $\mathrm{NH_4^+/NH_3}$, pas $\mathrm{NH_3/NH_4^+}$.
- Diluer 10 fois un acide fort augmente son pH de 1. Diluer 100 fois l'augmente de 2.
- La formule $\mathrm{pH} = -\log(c/c^\circ)$ ne vaut **que pour un acide fort**.
