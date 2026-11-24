---
titre: Le photon et l'effet photoélectrique
court: Effet photoélectrique
description: Modèle particulaire de la lumière, énergie du photon, effet photoélectrique, travail d'extraction, cellules photovoltaïques et rendement, expliqués avec un distributeur qui n'accepte qu'une seule pièce à la fois. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 16
publie: 2026-11-24T01:15:00
video:
  youtube: ""
piege: "**Une lumière plus intense n'arrache pas d'électrons si sa fréquence est trop basse.** L'intensité change le nombre de photons, pas l'énergie de chacun. Sous le seuil, même un projecteur géant ne fait rien."
pdf:
  cours: /pdf/physique/terminale/effet-photoelectrique-cours.pdf
  fiche: /pdf/physique/terminale/effet-photoelectrique-fiche.pdf
  exercices: /pdf/physique/terminale/effet-photoelectrique-exercices.pdf
suivant: circuit-rc
---

## Le problème

Éclairée par de la lumière ultraviolette, une plaque de zinc chargée négativement se décharge : elle perd des électrons. Éclairée par une lampe rouge, même très puissante, elle ne perd rien. Si la lumière était seulement une onde, plus d'intensité devrait suffire. Ce n'est pas le cas : il faut un autre modèle.

## L'idée : le distributeur à pièce unique

Imagine un distributeur qui ne libère une boisson que contre **une seule pièce** d'au moins 2 euros, et qui refuse d'additionner les petites pièces.

- Tu glisses une pièce de 2 euros : une boisson tombe.
- Tu glisses cent pièces de 10 centimes : rien. Elles ne s'additionnent pas.
- Tu glisses une pièce de 5 euros (si elle existait) : une boisson, et le distributeur te rend la monnaie.

Les électrons du métal sont ce distributeur. La lumière arrive en **paquets** d'énergie, les photons, et chaque électron ne peut absorber qu'**un seul photon à la fois**. Si un photon n'a pas assez d'énergie, il ne se passe rien, quel que soit le nombre de photons.

## Le photon

<div class="encadre">

La lumière est aussi constituée de **photons**, particules de masse nulle, se déplaçant à la vitesse $c$, transportant chacun l'énergie

$$
\cbleu{E} = h\,\nu = \frac{h\,c}{\lambda}
$$

$h = 6{,}63 \times 10^{-34}\ \mathrm{J \cdot s}$ (constante de Planck), $\nu$ fréquence en Hz, $\lambda$ longueur d'onde en m. On utilise souvent l'électronvolt : $1\ \mathrm{eV} = 1{,}60 \times 10^{-19}\ \mathrm{J}$.

</div>

Plus la longueur d'onde est courte, plus le photon est énergétique : un photon ultraviolet porte plus d'énergie qu'un photon rouge. L'**intensité** d'un faisceau, elle, est liée au **nombre** de photons par seconde.

La lumière a donc deux visages : ondulatoire (diffraction, interférences) et particulaire (effet photoélectrique). On parle de **dualité onde-particule**.

## L'effet photoélectrique

<div class="encadre">

Un électron lié au métal ne peut en être extrait que si le photon absorbé apporte au moins l'énergie $W$, le **travail d'extraction**, propre au métal. Il existe donc une **fréquence seuil** $\nu_s = \dfrac{W}{h}$.

Si $h\nu > W$, l'électron sort avec une énergie cinétique maximale

$$
E_{c,\max} = h\,\nu - W
$$

</div>

C'est la monnaie rendue par le distributeur. En dessous du seuil, aucun électron, quelle que soit l'intensité. Au-dessus, plus d'intensité veut dire plus d'électrons, mais pas des électrons plus rapides.

Pour le zinc, $W \approx 4{,}3$ eV, ce qui correspond à $\lambda_s = \dfrac{hc}{W} \approx 290$ nm : il faut de l'ultraviolet.

## Absorber et émettre : les applications

- **Cellule photovoltaïque** : un photon absorbé par un semi-conducteur libère un électron qui participe à un courant électrique. Elle ne fonctionne qu'avec des photons d'énergie suffisante.
- **Diode électroluminescente (DEL)** : le phénomène inverse. Un électron qui perd de l'énergie émet un photon, dont la couleur dépend du matériau.
- **Capteurs** d'appareils photo, détecteurs de présence, cellules des portes automatiques.

<div class="encadre">

**Rendement** d'une cellule photovoltaïque :

$$
\eta = \frac{P_{\text{électrique}}}{P_{\text{lumineuse}}} = \frac{U \times I}{E_{\text{éclairement}} \times S}
$$

avec l'éclairement énergétique $E$ en $\mathrm{W \cdot m^{-2}}$ et la surface $S$ en $\mathrm{m^2}$.

</div>

Le rendement des panneaux courants est de l'ordre de 15 à 22 %. Une cellule a une **caractéristique** $I = f(U)$ ; le point où le produit $U \times I$ est maximal est le **point de puissance maximale**.

## Les pièges

- L'intensité lumineuse joue sur le **nombre** d'électrons, la fréquence sur leur **énergie**.
- $E = hc/\lambda$ avec $\lambda$ en **mètres** : 500 nm $= 5{,}00 \times 10^{-7}$ m.
- Convertir les joules en électronvolts en **divisant** par $1{,}60 \times 10^{-19}$.
- Un électron absorbe **un** photon à la fois : les énergies de plusieurs photons ne s'additionnent pas.
