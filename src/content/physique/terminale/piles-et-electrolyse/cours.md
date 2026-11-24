---
titre: Piles et électrolyse
court: Piles et électrolyse
description: Fonctionnement d'une pile, anode, cathode, capacité électrique, puis transformation forcée par électrolyse et accumulateurs, expliqués avec une piste de luge et son remonte-pente. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 7
publie: 2026-11-24T01:06:00
video:
  youtube: ""
piege: "**L'anode est toujours le siège de l'oxydation, mais elle n'est pas toujours le pôle moins.** Dans une pile, l'anode est la borne négative ; dans un électrolyseur, l'anode est reliée à la borne positive du générateur."
pdf:
  cours: /pdf/physique/terminale/piles-et-electrolyse-cours.pdf
  fiche: /pdf/physique/terminale/piles-et-electrolyse-fiche.pdf
  exercices: /pdf/physique/terminale/piles-et-electrolyse-exercices.pdf
suivant: synthese-organique
---

## Le problème

Une lame de zinc plongée dans du sulfate de cuivre se recouvre de cuivre : la réaction est spontanée, elle libère de l'énergie, mais sous forme de chaleur perdue. Comment récupérer cette énergie sous forme de courant électrique ? Et à l'inverse, comment recharger une batterie, c'est-à-dire faire tourner une réaction « dans le mauvais sens » ?

## L'idée : la luge et le remonte-pente

Sur une piste de luge, on descend **tout seul** : c'est spontané, et on peut récupérer cette énergie. Pour remonter, il faut un **remonte-pente**, qui consomme de l'énergie.

- La **pile**, c'est la descente : une transformation spontanée qui fait circuler des électrons dans un circuit.
- L'**électrolyse**, c'est le remonte-pente : un générateur force la transformation dans le sens qu'elle ne prendrait pas seule.

Dans les deux cas, ce qui se passe est une **oxydoréduction** : un réducteur cède des électrons, un oxydant les capte. La différence : dans une pile, on oblige les électrons à passer **par un fil** au lieu de sauter directement d'une espèce à l'autre.

## La pile

<div class="encadre">

Une **pile** est formée de deux **demi-piles** (chacune contient un couple oxydant/réducteur), reliées par un **pont salin** qui ferme le circuit en laissant circuler les ions.

- **Anode** : électrode où se produit l'**oxydation**. Elle cède des électrons au circuit : c'est la **borne négative**.
- **Cathode** : électrode où se produit la **réduction**. Elle reçoit les électrons : c'est la **borne positive**.

À l'extérieur de la pile, les électrons vont de la borne − vers la borne +, le courant de la borne + vers la borne −. Dans la pile et le pont salin, ce sont les **ions** qui transportent le courant.

</div>

Exemple, la pile Daniell, $\mathrm{Zn} \,|\, \mathrm{Zn^{2+}} \,\|\, \mathrm{Cu^{2+}} \,|\, \mathrm{Cu}$ :

$$
\begin{aligned}
\text{anode (−)} :\quad & \mathrm{Zn(s)} \longrightarrow \mathrm{Zn^{2+}} + 2\,\mathrm{e^-} \\
\text{cathode (+)} :\quad & \mathrm{Cu^{2+}} + 2\,\mathrm{e^-} \longrightarrow \mathrm{Cu(s)} \\
\text{bilan} :\quad & \mathrm{Zn(s)} + \mathrm{Cu^{2+}} \longrightarrow \mathrm{Zn^{2+}} + \mathrm{Cu(s)}
\end{aligned}
$$

Le sens de fonctionnement se prévoit avec le critère d'évolution spontanée du [chapitre précédent](/physique/terminale/equilibre-chimique/cours/) : la réaction se fait dans le sens où $Q_r$ tend vers $K$.

La **tension à vide** d'une pile est la tension entre ses bornes quand elle ne débite pas. Une pile **usée** est une pile dont le système a atteint l'équilibre : $Q_r = K$, plus de transformation, plus de courant. La luge est en bas.

## La capacité d'une pile

<div class="encadre">

**Charge électrique** débitée pendant $\Delta t$ par un courant d'intensité constante $I$ :

$$
\cbleu{Q} = I \times \Delta t = n(\mathrm{e^-}) \times \mathcal{F}
$$

$\mathcal{F} = N_A \times e \approx 9{,}65 \times 10^{4}\ \mathrm{C \cdot mol^{-1}}$ est le **faraday**, la charge d'une mole d'électrons.

La **capacité** d'une pile est la charge totale qu'elle peut débiter avant d'être usée. Elle se calcule à partir de la quantité du réactif limitant.

</div>

Les capacités sont souvent données en ampères-heures : $1\ \mathrm{A \cdot h} = 3\,600\ \mathrm{C}$.

## L'électrolyse : forcer la transformation

Un générateur de tension continue, branché aux bornes de deux électrodes plongées dans une solution, peut imposer une transformation **non spontanée** : c'est une **électrolyse**. Le générateur joue le rôle du remonte-pente.

<div class="encadre">

Dans un **électrolyseur** :

- l'**anode** (oxydation) est reliée à la **borne +** du générateur ;
- la **cathode** (réduction) est reliée à la **borne −** du générateur.

Le système évolue dans le sens **inverse** du sens spontané : $Q_r$ s'éloigne de $K$.

</div>

Exemples : électrolyse de l'eau pour produire du dihydrogène ($2\,\mathrm{H_2O} \longrightarrow 2\,\mathrm{H_2} + \mathrm{O_2}$), dépôt de métal (chromage, cuivrage), production industrielle de l'aluminium ou du dichlore.

La relation $Q = I\,\Delta t = n(\mathrm{e^-})\,\mathcal{F}$ s'applique aussi : elle donne la quantité de produit formée pendant une durée donnée.

## Les accumulateurs

Un **accumulateur** (batterie de téléphone, de voiture) fonctionne en pile quand il se décharge, et en électrolyseur quand on le recharge : on fait remonter la luge pour pouvoir redescendre. L'énergie électrique est ainsi **stockée** sous forme chimique.

## Les pièges

- Anode = **oxydation**, cathode = **réduction**, dans tous les cas. Ce sont les signes des bornes qui s'inversent entre pile et électrolyseur.
- Les électrons ne traversent **jamais** la solution ni le pont salin : ce sont les ions qui s'y déplacent.
- $Q = n(\mathrm{e^-})\,\mathcal{F}$ : attention au nombre d'électrons échangés par entité dans la demi-équation.
