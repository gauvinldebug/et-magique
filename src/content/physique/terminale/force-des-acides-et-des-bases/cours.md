---
titre: Force des acides et des bases
court: Force des acides et des bases
description: Constante d'acidité, pKa, produit ionique de l'eau, diagrammes de prédominance et de distribution, solutions tampons, expliqués avec un joueur qui hésite à lâcher le ballon. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 2
publie: 2026-11-24T01:01:00
video:
  youtube: ""
piege: "**Plus le pKa est petit, plus l'acide est fort.** C'est l'inverse du réflexe « grand nombre = fort » : l'acide éthanoïque (pKa 4,8) est plus fort que l'ion ammonium (pKa 9,2)."
pdf:
  cours: /pdf/physique/terminale/force-des-acides-et-des-bases-cours.pdf
  fiche: /pdf/physique/terminale/force-des-acides-et-des-bases-fiche.pdf
  exercices: /pdf/physique/terminale/force-des-acides-et-des-bases-exercices.pdf
suivant: dosages-et-titrages
---

## Le problème

Une solution d'acide chlorhydrique à $1{,}0 \times 10^{-2}\ \mathrm{mol \cdot L^{-1}}$ a un pH de 2. Une solution de vinaigre dilué (acide éthanoïque) à la même concentration a un pH d'environ 3,4. Même quantité d'acide apportée, et pourtant 25 fois moins d'ions oxonium. Pourquoi ?

## L'idée : le joueur qui hésite

Reprends l'image du [chapitre précédent](/physique/terminale/acides-et-bases/cours/) : l'acide lance le ballon $\mathrm{H^+}$, la base l'attrape.

- Un acide **fort** lance son ballon à chaque fois : la réaction avec l'eau est **totale**.
- Un acide **faible** hésite : la plupart du temps, il garde le ballon. Sa réaction avec l'eau est **non totale**, elle s'arrête à un <span class="o">équilibre</span> où l'acide et sa base coexistent.

Plus un acide hésite, plus il est faible. On mesure cette hésitation par un nombre : la constante d'acidité.

## La constante d'acidité

Pour un couple $\mathrm{AH/A^-}$, la réaction de l'acide avec l'eau s'écrit

$$
\mathrm{AH} + \mathrm{H_2O} \rightleftharpoons \mathrm{A^-} + \mathrm{H_3O^+}
$$

<div class="encadre">

**Constante d'acidité** (à l'équilibre, en solution diluée) :

$$
\cbleu{K_A} = \frac{[\mathrm{A^-}]_{\mathrm{\acute eq}} \times [\mathrm{H_3O^+}]_{\mathrm{\acute eq}}}{[\mathrm{AH}]_{\mathrm{\acute eq}} \times c^\circ} \qquad\qquad \cbleu{\mathrm{p}K_A} = -\log K_A
$$

$K_A$ ne dépend que du couple et de la température. Elle n'a pas d'unité.

</div>

<mark>Plus $K_A$ est grand (plus le $\mathrm{p}K_A$ est petit), plus l'acide est fort</mark> : il lâche plus volontiers son ballon. Et sa base conjuguée est d'autant plus faible.

| Couple | $\mathrm{p}K_A$ à 25 °C |
|---|---|
| $\mathrm{HCOOH/HCOO^-}$ (acide méthanoïque) | 3,8 |
| $\mathrm{CH_3COOH/CH_3COO^-}$ (acide éthanoïque) | 4,8 |
| $\mathrm{CO_2, H_2O/HCO_3^-}$ | 6,4 |
| $\mathrm{NH_4^+/NH_3}$ | 9,2 |
| $\mathrm{HCO_3^-/CO_3^{2-}}$ | 10,3 |

## L'eau et son produit ionique

L'eau joue contre elle-même : une molécule lance le ballon à une autre. C'est l'**autoprotolyse** de l'eau.

$$
2\,\mathrm{H_2O} \rightleftharpoons \mathrm{H_3O^+} + \mathrm{HO^-}
$$

<div class="encadre">

**Produit ionique de l'eau.** Dans toute solution aqueuse diluée :

$$
\cbleu{K_e} = \frac{[\mathrm{H_3O^+}] \times [\mathrm{HO^-}]}{c^{\circ 2}} = 1{,}0 \times 10^{-14} \text{ à } 25\ ^\circ\mathrm{C} \qquad \mathrm{p}K_e = 14
$$

</div>

Conséquence : pour une **base forte** de concentration $\corange{c}$, $[\mathrm{HO^-}] = \corange{c}$, donc $[\mathrm{H_3O^+}] = K_e \times c^{\circ 2} / \corange{c}$ et

$$
\cvert{\mathrm{pH} = 14 + \log\left(\frac{c}{c^\circ}\right)} \quad \text{à } 25\ ^\circ\mathrm{C}
$$

Une solution de soude à $1{,}0 \times 10^{-2}\ \mathrm{mol \cdot L^{-1}}$ a donc un pH de 12.

## Le taux d'avancement final

Pour un acide faible de concentration apportée $\corange{c}$, on compare ce qu'il a vraiment lâché à ce qu'il aurait pu lâcher :

$$
\tau = \frac{x_f}{x_{\max}} = \frac{[\mathrm{H_3O^+}]_f}{\corange{c}}
$$

Pour l'acide éthanoïque à $1{,}0 \times 10^{-2}\ \mathrm{mol \cdot L^{-1}}$ : $[\mathrm{H_3O^+}] = 10^{-3{,}4} \approx 4{,}0 \times 10^{-4}\ \mathrm{mol \cdot L^{-1}}$, donc $\tau \approx 0{,}04$. Seules 4 molécules sur 100 ont lancé leur ballon. Pour un acide fort, $\tau = 1$.

## Qui domine ? Le diagramme de prédominance

En prenant le logarithme de $K_A$, on obtient une relation très utile :

<div class="encadre">

$$
\mathrm{pH} = \mathrm{p}K_A + \log\left(\frac{[\mathrm{A^-}]}{[\mathrm{AH}]}\right)
$$

- si $\mathrm{pH} < \mathrm{p}K_A$ : $[\mathrm{AH}] > [\mathrm{A^-}]$, **l'acide prédomine** ;
- si $\mathrm{pH} = \mathrm{p}K_A$ : $[\mathrm{AH}] = [\mathrm{A^-}]$ ;
- si $\mathrm{pH} > \mathrm{p}K_A$ : **la base prédomine**.

</div>

Le $\mathrm{p}K_A$ est la **ligne de mi-terrain** : à gauche (pH bas), l'acide a le ballon ; à droite (pH haut), c'est la base.

Exemple : dans le sang, à pH 7,4, le couple $\mathrm{CO_2, H_2O/HCO_3^-}$ ($\mathrm{p}K_A = 6{,}4$) est surtout sous forme $\mathrm{HCO_3^-}$, puisque $7{,}4 > 6{,}4$. Et même $[\mathrm{HCO_3^-}]/[\mathrm{CO_2}] = 10^{7{,}4 - 6{,}4} = 10$.

Un **diagramme de distribution** trace les pourcentages de $\mathrm{AH}$ et de $\mathrm{A^-}$ en fonction du pH. Les deux courbes se croisent à 50 % pour $\mathrm{pH} = \mathrm{p}K_A$ : c'est ainsi qu'on lit un $\mathrm{p}K_A$ sur un graphique.

Un **indicateur coloré** est un couple dont l'acide et la base n'ont pas la même couleur. Sa zone de virage se situe autour de son $\mathrm{p}K_A$.

## Les solutions tampons

Un mélange d'un acide faible et de sa base conjuguée en quantités proches a un pH voisin de son $\mathrm{p}K_A$. Ce pH **varie peu** quand on ajoute un peu d'acide, un peu de base, ou quand on dilue modérément : c'est une <span class="o">solution tampon</span>. Le sang est tamponné autour de 7,4, ce qui est vital.

## Les pièges

- Petit $\mathrm{p}K_A$ = acide **fort**. Grand $\mathrm{p}K_A$ = base conjuguée forte.
- $\mathrm{pH} = -\log(c/c^\circ)$ ne s'applique **pas** à un acide faible : il ne libère qu'une partie de ses protons.
- $\mathrm{p}K_e = 14$ seulement à 25 °C.
- Dans $\mathrm{pH} = \mathrm{p}K_A + \log([\mathrm{A^-}]/[\mathrm{AH}])$, la **base** est au numérateur.
