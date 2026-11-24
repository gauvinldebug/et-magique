---
titre: Combustions et énergie libérée
court: Combustions
description: Équation d'une combustion complète, combustion incomplète et monoxyde de carbone, pouvoir calorifique, énergie molaire de combustion calculée avec les énergies de liaison, avec l'image d'un chantier de démolition et de reconstruction. Exercices corrigés. Première spécialité physique-chimie.
ordre: 7
publie: 2026-11-24T01:26:00
video:
  youtube: ""
piege: "**Casser une liaison coûte de l'énergie, en former une en libère.** Une combustion libère de l'énergie parce que les liaisons formées ($\\mathrm{C{=}O}$, $\\mathrm{O{-}H}$) sont plus solides que celles qu'on a cassées. L'énergie molaire de combustion est donc négative."
pdf:
  cours: /pdf/physique/premiere/combustions-cours.pdf
  fiche: /pdf/physique/premiere/combustions-fiche.pdf
  exercices: /pdf/physique/premiere/combustions-exercices.pdf
suivant: interactions-et-champs
---

## Le problème

Le gaz de la cuisinière, l'essence de la voiture, le bois de la cheminée : on les brûle pour en tirer de l'énergie. Mais d'où vient cette énergie ? Elle était cachée dans les **liaisons** entre les atomes. Brûler, c'est réarranger ces liaisons, et le bilan est positif pour nous.

## L'idée : un chantier de démolition et de reconstruction

Imagine un chantier où l'on démonte des maisons pour en construire d'autres avec les mêmes briques.

- **Démonter** une maison (casser une liaison) demande du travail : il faut **fournir** de l'énergie.
- **Construire** une maison (former une liaison) en **rend** : de l'énergie est libérée.

Si les nouvelles maisons sont plus solides que les anciennes, le chantier rapporte plus qu'il ne coûte. C'est ce qui se passe dans une combustion.

## Écrire une combustion

<div class="encadre">

**Combustion complète d'une espèce organique** (formée de C, H et éventuellement O). Elle réagit avec le **dioxygène** et donne uniquement du **dioxyde de carbone** et de l'**eau**.

$$
\mathrm{CH_4(g)} + 2\,\mathrm{O_2(g)} \longrightarrow \mathrm{CO_2(g)} + 2\,\mathrm{H_2O(g)}
$$

</div>

Pour équilibrer, on procède toujours dans le même ordre : <mark>d'abord C, puis H, puis O en dernier</mark>, car le dioxygène ne contient que de l'oxygène et s'ajuste librement.

Exemple avec l'éthanol $\mathrm{C_2H_6O}$ :

- 2 C donnent $2\,\mathrm{CO_2}$ ;
- 6 H donnent $3\,\mathrm{H_2O}$ ;
- à droite, $4 + 3 = 7$ O ; l'éthanol en apporte 1, il en faut 6 de plus, donc $3\,\mathrm{O_2}$.

$$
\mathrm{C_2H_6O} + 3\,\mathrm{O_2} \longrightarrow 2\,\mathrm{CO_2} + 3\,\mathrm{H_2O}
$$

**Combustion incomplète.** Quand le dioxygène manque, il se forme aussi du **monoxyde de carbone** $\mathrm{CO}$, gaz incolore, inodore et mortel, et des particules de carbone (la suie). C'est pour cela qu'un chauffage au gaz doit être ventilé.

## Le pouvoir calorifique

Le <span class="o">pouvoir calorifique</span> $PC$ d'un combustible est l'énergie libérée par la combustion d'**un kilogramme**. Il s'exprime en $\mathrm{MJ \cdot kg^{-1}}$.

$$
\cbleu{Q} = \corange{m} \times \cvert{PC}
$$

| Combustible | $PC$ ($\mathrm{MJ \cdot kg^{-1}}$) |
|---|---|
| méthane (gaz naturel) | environ 50 |
| butane | environ 46 |
| essence | environ 45 |
| éthanol | environ 27 |
| bois sec | environ 15 |

## L'énergie molaire de combustion, avec les énergies de liaison

L'<span class="o">énergie de liaison</span> $E_\ell$ est l'énergie à fournir pour casser une mole de liaisons à l'état gazeux. Elle est toujours positive.

| Liaison | $\mathrm{C{-}H}$ | $\mathrm{C{-}C}$ | $\mathrm{C{-}O}$ | $\mathrm{O{-}H}$ | $\mathrm{O{=}O}$ | $\mathrm{C{=}O}$ |
|---|---|---|---|---|---|---|
| $E_\ell$ ($\mathrm{kJ \cdot mol^{-1}}$) | 415 | 348 | 358 | 463 | 498 | 804 |

<div class="encadre">

**Énergie molaire de réaction** (tout à l'état gazeux) :

$$
E_r = \cbleu{\sum E_\ell(\text{liaisons cassées})} - \corange{\sum E_\ell(\text{liaisons formées})}
$$

Si $E_r < 0$, la réaction libère de l'énergie : elle est **exothermique**.

</div>

Exemple, le méthane :

- on casse 4 $\mathrm{C{-}H}$ et 2 $\mathrm{O{=}O}$ : $4 \times 415 + 2 \times 498 = 2656\ \mathrm{kJ}$ ;
- on forme 2 $\mathrm{C{=}O}$ et 4 $\mathrm{O{-}H}$ : $2 \times 804 + 4 \times 463 = 3460\ \mathrm{kJ}$ ;
- $E_r = 2656 - 3460 = -804\ \mathrm{kJ \cdot mol^{-1}}$.

Une mole de méthane pèse 16 g. On retrouve le pouvoir calorifique : $804 / 0{,}016 \approx 50\ 000\ \mathrm{kJ \cdot kg^{-1}}$, soit $50\ \mathrm{MJ \cdot kg^{-1}}$.

## Les enjeux

Toute combustion d'un combustible carboné rejette du $\mathrm{CO_2}$, gaz à effet de serre. Brûler du pétrole, du gaz ou du charbon libère du carbone stocké sous terre depuis des millions d'années. Brûler de la biomasse (bois, biocarburant) rejette du carbone que la plante avait capté récemment, ce qui pèse moins sur le bilan, à condition de replanter.

## Les pièges

- Équilibrer **O en dernier**.
- Pour une espèce qui contient de l'oxygène, ne pas oublier ses atomes O dans le décompte.
- $E_r$ = cassées **moins** formées, et le résultat est négatif pour une combustion.
- Le $PC$ est par **kilogramme**, l'énergie molaire par **mole** : on passe de l'un à l'autre avec la masse molaire.
