---
titre: Puissance et énergie électriques
court: Puissance et énergie électriques
description: La puissance d'un appareil et la relation P = U × I, l'énergie consommée et la relation E = P × t, le kilowattheure et la facture d'électricité, les risques de surcharge et le rôle du disjoncteur, avec l'image d'un robinet. Exercices corrigés type brevet. Troisième physique-chimie.
ordre: 5
publie: 2026-11-24T01:54:00
video:
  youtube: ""
piege: "**La puissance et l'énergie ne sont pas la même chose.** Une ampoule de 10 W allumée 100 heures consomme autant qu'un radiateur de 1000 W allumé une heure."
pdf:
  cours: /pdf/physique/3e/puissance-et-energie-electriques-cours.pdf
  fiche: /pdf/physique/3e/puissance-et-energie-electriques-fiche.pdf
  exercices: /pdf/physique/3e/puissance-et-energie-electriques-exercices.pdf
suivant: l-univers
---

## Le problème

Sur un sèche-cheveux, on lit « 2000 W ». Sur une ampoule LED, « 8 W ». Sur la facture d'électricité, on paie des « kWh ». Que veulent dire ces chiffres, et lequel coûte vraiment de l'argent ?

## L'idée : le robinet

Pense à un robinet qui remplit une baignoire.

- La **puissance**, c'est le **débit** du robinet : ouvert à fond, il remplit vite. Un appareil puissant consomme beaucoup d'énergie chaque seconde.
- L'**énergie**, c'est la **quantité d'eau** dans la baignoire à la fin. Elle dépend du débit **et** du temps pendant lequel le robinet est resté ouvert.

Un petit filet d'eau laissé toute la nuit peut remplir autant qu'un robinet à fond pendant cinq minutes. <mark>Ce qu'on paie, c'est l'eau dans la baignoire : l'énergie.</mark>

## La puissance électrique

<div class="encadre">

$$
\cbleu{P} = \corange{U} \times \cvert{I}
$$

$P$ la puissance en watts (W), $U$ la tension en volts (V), $I$ l'intensité en ampères (A).

</div>

Chaque appareil porte une **puissance nominale**, celle qu'il reçoit quand il est branché sous sa tension nominale (230 V en France pour le secteur).

| Appareil | Puissance |
|---|---|
| ampoule LED | 5 à 15 W |
| ordinateur portable | 50 W |
| télévision | 100 W |
| four | 2500 W |
| radiateur | 1000 à 2000 W |

## L'énergie électrique

<div class="encadre">

$$
E = P \times t
$$

- $P$ en W et $t$ en secondes : $E$ en **joules** (J).
- $P$ en kW et $t$ en heures : $E$ en **kilowattheures** (kWh).

$1\ \mathrm{kWh} = 1000\ \mathrm{W} \times 3600\ \mathrm{s} = 3{,}6 \times 10^{6}\ \mathrm{J}$.

</div>

Le fournisseur d'électricité facture en kWh. Le **compteur** mesure l'énergie consommée dans le logement.

## La surcharge et la sécurité

Dans une maison, les appareils sont branchés **en dérivation** : ils reçoivent tous 230 V, et leurs intensités **s'additionnent** dans le fil principal.

Si on branche trop d'appareils sur la même prise multiple, l'intensité devient trop grande, les fils **chauffent** : c'est la **surcharge**, qui peut provoquer un incendie. Le **disjoncteur** (ou le fusible) coupe le courant quand l'intensité dépasse une valeur maximale, par exemple 16 A.

Pour trouver l'intensité dans un appareil : $I = \dfrac{P}{U}$.

## Les pièges

- **W** pour la puissance, **J** ou **kWh** pour l'énergie.
- Dans $E = P \times t$, garder des unités cohérentes : W et s, ou kW et h.
- 1500 W = 1,5 kW.
- Les intensités des appareils en dérivation s'**additionnent**.
