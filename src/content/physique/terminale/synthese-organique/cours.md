---
titre: Stratégies de synthèse organique
court: Synthèse organique
description: Familles fonctionnelles, nomenclature, polymères, catégories de réactions, optimisation d'une synthèse et protection de groupes, expliqués avec un peintre et son ruban de masquage. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 8
publie: 2026-11-24T01:07:00
video:
  youtube: ""
piege: "**Le catalyseur accélère, il n'améliore pas le rendement.** Pour augmenter le rendement d'une transformation non totale, il faut un réactif en excès ou l'élimination d'un produit."
pdf:
  cours: /pdf/physique/terminale/synthese-organique-cours.pdf
  fiche: /pdf/physique/terminale/synthese-organique-fiche.pdf
  exercices: /pdf/physique/terminale/synthese-organique-exercices.pdf
suivant: mouvement-et-newton
---

## Le problème

Le paracétamol, l'arôme de banane, le nylon d'un sac : tout cela se fabrique au laboratoire ou à l'usine à partir de molécules plus simples. Une molécule organique a souvent plusieurs endroits capables de réagir. Comment transformer **un seul** de ces endroits, sans abîmer le reste ?

## L'idée : le ruban de masquage du peintre

Un peintre qui doit repeindre un mur sans tacher les plinthes colle d'abord du ruban de masquage sur les plinthes. Il peint, puis il retire le ruban. Les plinthes n'ont rien vu.

En synthèse, c'est pareil : si une molécule possède deux groupes qui réagiraient tous les deux, on **protège** celui qu'on veut garder intact, on fait la réaction sur l'autre, puis on **déprotège**. Avant d'en arriver là, il faut savoir lire une molécule.

## Lire une molécule

Dans une **formule topologique**, la chaîne carbonée est une ligne brisée : chaque sommet et chaque extrémité est un atome de carbone, les hydrogènes portés par les carbones ne sont pas dessinés, les autres atomes sont écrits.

<div class="encadre">

| Famille | Groupe caractéristique | Suffixe | Exemple |
|---|---|---|---|
| alcool | hydroxyle $\mathrm{{-}OH}$ | -ol | éthanol |
| aldéhyde | $\mathrm{{-}CHO}$ en bout de chaîne | -al | éthanal |
| cétone | $\mathrm{C{=}O}$ dans la chaîne | -one | propanone |
| acide carboxylique | $\mathrm{{-}COOH}$ | acide …oïque | acide éthanoïque |
| ester | $\mathrm{{-}COO{-}}$ | …oate de …yle | éthanoate d'éthyle |
| amine | $\mathrm{{-}N}$ | -amine | éthanamine |
| amide | $\mathrm{{-}CO{-}N}$ | -amide | éthanamide |
| halogénoalcane | $\mathrm{{-}Cl}$, $\mathrm{{-}Br}$… | préfixe chloro-, bromo- | chloroéthane |

</div>

Deux molécules de même formule brute mais de formules développées différentes sont des **isomères de constitution**. Exemple : le propan-1-ol et le propan-2-ol, $\mathrm{C_3H_8O}$ tous les deux.

## Les catégories de réactions

On classe les réactions en comparant les réactifs et les produits :

- **Substitution** : un atome ou groupe est remplacé par un autre. $\mathrm{CH_3{-}Br} + \mathrm{HO^-} \longrightarrow \mathrm{CH_3{-}OH} + \mathrm{Br^-}$.
- **Addition** : deux molécules s'assemblent, une liaison multiple devient simple. $\mathrm{CH_2{=}CH_2} + \mathrm{H_2O} \longrightarrow \mathrm{CH_3{-}CH_2{-}OH}$.
- **Élimination** : une petite molécule est retirée, une liaison multiple apparaît. C'est l'inverse de l'addition.

On distingue aussi les réactions qui **modifient la chaîne** carbonée (allongement, raccourcissement, ramification) et celles qui **modifient le groupe caractéristique** (oxydation d'un alcool en aldéhyde, estérification…).

## Les polymères

Un **polymère** est une très grande molécule formée par la répétition d'un **motif**. On l'obtient à partir de petites molécules, les **monomères**, par polymérisation.

- **Polyaddition** : les monomères s'ajoutent les uns aux autres grâce à une double liaison $\mathrm{C{=}C}$. L'éthylène $\mathrm{CH_2{=}CH_2}$ donne le polyéthylène $\mathrm{({-}CH_2{-}CH_2{-})_n}$.
- **Polycondensation** : chaque liaison entre monomères s'accompagne de la libération d'une petite molécule (souvent de l'eau). C'est ainsi qu'on fabrique les polyesters et les polyamides (nylon).

## Optimiser une étape

Deux objectifs distincts, à ne pas confondre :

<div class="encadre">

**Aller plus vite** (cinétique) : augmenter la température, utiliser un **catalyseur**, augmenter la concentration des réactifs.

**Obtenir plus de produit** (rendement) : utiliser un **réactif en excès**, ou **éliminer un produit** au fur et à mesure (distillation, piège à eau). Le rendement vaut

$$
\eta = \frac{n_{\text{produit obtenu}}}{n_{\text{produit maximal}}}
$$

</div>

L'estérification en est l'exemple type : lente et limitée. L'acide sulfurique (catalyseur) l'accélère sans changer le rendement ; un excès d'alcool ou l'élimination de l'eau augmente le rendement. Le chauffage à reflux accélère sans perdre de matière, les vapeurs étant condensées et renvoyées dans le ballon.

## La stratégie en plusieurs étapes

Une synthèse réelle enchaîne souvent plusieurs étapes. Quand une étape risque d'attaquer un groupe qu'on veut conserver, on utilise le ruban de masquage :

1. **protection** : on transforme le groupe sensible en un groupe inerte dans les conditions de l'étape suivante ;
2. **réaction** sur l'autre groupe ;
3. **déprotection** : on régénère le groupe de départ.

Chaque étape a son rendement : le rendement global est le **produit** des rendements. Trois étapes à 80 % donnent $0{,}8^3 \approx 51\ \%$. Une bonne stratégie limite le nombre d'étapes, les solvants toxiques et les déchets : c'est la chimie dite **écoresponsable**.

## Les pièges

- Catalyseur et température jouent sur la **vitesse**, pas sur le rendement d'un équilibre.
- Le rendement global d'une synthèse en plusieurs étapes est le **produit**, pas la moyenne.
- Aldéhyde : $\mathrm{C{=}O}$ **en bout** de chaîne ; cétone : $\mathrm{C{=}O}$ **dans** la chaîne.
- Dans le nom d'un ester, la partie « …oate » vient de l'acide, la partie « …yle » de l'alcool.
