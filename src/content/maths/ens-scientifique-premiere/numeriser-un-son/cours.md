---
titre: Numériser un son, échantillonnage et quantification
court: Numériser un son
description: Signal analogique et numérique, fréquence d'échantillonnage, quantification sur n bits et 2 puissance n niveaux, taille d'un fichier audio, débit, taux de compression, expliqués avec un folioscope et une règle graduée, avec des exercices corrigés pas à pas. Enseignement scientifique de Première, partie maths.
ordre: 6
publie: 2026-11-23T09:06:00
video:
  youtube: ""
piege: >-
  **Bits et octets ne sont pas la même unité.** Un octet vaut 8 bits. La taille d'un fichier se calcule d'abord en bits (fréquence × bits × voies × durée), puis on divise par 8 pour l'avoir en octets. Et 1 Mo $= 10^6$ octets.
pdf:
  cours: /pdf/maths/ens-scientifique-premiere/numeriser-un-son-cours.pdf
  fiche: /pdf/maths/ens-scientifique-premiere/numeriser-un-son-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-premiere/numeriser-un-son-exercices.pdf
---

## Le problème

Un CD audio enregistre le son en stéréo, avec 44 100 mesures par seconde, chacune codée sur 16 bits. Quelle place occupe une chanson de 3 minutes ? Et pourquoi un fichier MP3 de la même chanson tient-il dans 3 Mo ?

## L'idée : le folioscope et la règle graduée

Un **folioscope** (flip-book) donne l'illusion du mouvement avec des dessins pris à intervalles réguliers. Plus il y a de dessins par seconde, plus le mouvement est fidèle : c'est l'**échantillonnage**.

Mesure ensuite chaque dessin avec une **règle graduée** : tu dois arrondir à la graduation la plus proche. Plus la règle a de graduations, plus la mesure est précise : c'est la **quantification**. <mark>Numériser un son, c'est prendre des mesures régulières, puis les arrondir sur une règle de $2^n$ graduations</mark>.

## Échantillonnage

<div class="encadre">

Un son est un signal **analogique** : sa valeur varie continûment. On mesure sa valeur à intervalles réguliers. Le nombre de mesures par seconde est la **fréquence d'échantillonnage** $\corange{f_e}$ (en Hz).

Pour reproduire fidèlement un son dont la fréquence maximale est $f_\text{max}$, il faut $\crouge{f_e > 2 f_\text{max}}$. L'oreille entend jusqu'à environ 20 000 Hz : d'où les 44 100 Hz du CD.

</div>

## Quantification

<div class="encadre">

Chaque mesure est arrondie à l'une des valeurs permises, puis codée en binaire. Avec $\corange{n}$ bits, on dispose de

$$
\cbleu{2^n} \text{ valeurs possibles}
$$

8 bits : 256 niveaux. 16 bits : 65 536 niveaux. Plus $n$ est grand, plus l'arrondi est fin.

</div>

## Taille et débit

<div class="encadre">

$$
\text{taille (bits)} = f_e \times n \times \text{nombre de voies} \times \text{durée (s)}
$$

Le **débit** est le nombre de bits par seconde : $f_e \times n \times \text{voies}$. Le **taux de compression** est le rapport $\frac{\text{taille initiale}}{\text{taille compressée}}$. La compression MP3 supprime les sons que l'oreille ne perçoit pas.

</div>

## Retour au problème

Taille en bits : $44\,100 \times 16 \times 2 \times 180 = 254\,016\,000$ bits. En octets : $254\,016\,000 \div 8 = 31\,752\,000$ octets.

<mark>La chanson occupe environ 31,8 Mo sur le CD</mark>. Le MP3 de 3 Mo correspond à un taux de compression d'environ $\frac{31{,}8}{3} \approx 10{,}6$.

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-premiere/numeriser-un-son/exercices/). Pour revoir les puissances : [puissances](/maths/4e/puissances/cours/). La suite logique en Terminale : [enseignement scientifique de Terminale](/maths/ens-scientifique-terminale/).
