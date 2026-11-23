---
titre: Décroissance radioactive
court: Décroissance radioactive
description: Noyaux radioactifs, désintégrations alpha et bêta, loi de décroissance exponentielle, demi-vie, activité et datation au carbone 14, expliqués avec un grand lancer de pièces. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 5
publie: 2026-11-24T01:04:00
video:
  youtube: ""
piege: "**Au bout de deux demi-vies, il ne reste pas zéro noyau, mais un quart.** La moitié de la moitié. Et au bout de dix demi-vies, il en reste encore environ un millième."
pdf:
  cours: /pdf/physique/terminale/decroissance-radioactive-cours.pdf
  fiche: /pdf/physique/terminale/decroissance-radioactive-fiche.pdf
  exercices: /pdf/physique/terminale/decroissance-radioactive-exercices.pdf
suivant: equilibre-chimique
---

## Le problème

On a retrouvé un os dans une grotte. Il contient encore un peu de carbone 14, un noyau radioactif, mais quatre fois moins qu'un os actuel. Quel âge a-t-il ? Pour répondre, il faut savoir à quel rythme les noyaux radioactifs disparaissent.

## L'idée : le grand lancer de pièces

Donne une pièce à chacun des 1 000 élèves d'un lycée. Chaque minute, tout le monde lance sa pièce. Ceux qui tombent sur pile sortent du jeu.

- Personne ne peut prédire **qui** sortira à la prochaine minute : c'est du hasard.
- Mais on sait très bien **combien** : environ la moitié de ceux qui restent.

Après 1 minute, il reste environ 500 joueurs, après 2 minutes 250, après 3 minutes 125. Le nombre de joueurs est divisé par 2 à chaque minute. Les noyaux radioactifs font exactement la même chose : chacun se désintègre au hasard, mais la population entière suit une loi très régulière.

## Les noyaux et les désintégrations

Un noyau se note $^{A}_{Z}\mathrm{X}$, avec $Z$ le nombre de protons et $A$ le nombre de nucléons. Deux **isotopes** ont le même $Z$ mais pas le même $A$.

Un noyau **radioactif** est instable : il se transforme spontanément en un autre noyau en émettant une particule.

<div class="encadre">

| Type | Particule émise | Exemple |
|---|---|---|
| $\alpha$ | noyau d'hélium $^{4}_{2}\mathrm{He}$ | $^{238}_{92}\mathrm{U} \longrightarrow {}^{234}_{90}\mathrm{Th} + {}^{4}_{2}\mathrm{He}$ |
| $\beta^-$ | électron $^{\ 0}_{-1}\mathrm{e}$ | $^{14}_{6}\mathrm{C} \longrightarrow {}^{14}_{7}\mathrm{N} + {}^{\ 0}_{-1}\mathrm{e}$ |
| $\beta^+$ | positon $^{0}_{1}\mathrm{e}$ | $^{18}_{9}\mathrm{F} \longrightarrow {}^{18}_{8}\mathrm{O} + {}^{0}_{1}\mathrm{e}$ |

**Lois de conservation** : dans une équation de réaction nucléaire, la somme des $A$ et la somme des $Z$ se conservent.

</div>

Le noyau fils est souvent dans un état excité : il se désexcite en émettant un rayonnement électromagnétique très énergétique, le rayonnement $\gamma$.

## La loi de décroissance

Appelons $N(\corange{t})$ le nombre de noyaux radioactifs encore présents. Pendant une petite durée $\mathrm{d}t$, le nombre de désintégrations est proportionnel au nombre de noyaux présents et à la durée : $\mathrm{d}N = -\lambda\,N\,\mathrm{d}t$.

<div class="encadre">

**Loi de décroissance radioactive.**

$$
\frac{\mathrm{d}N}{\mathrm{d}t} = -\lambda N \qquad\Longrightarrow\qquad \cbleu{N}(\corange{t}) = N_0 \, \mathrm{e}^{-\lambda \corange{t}}
$$

$\lambda$ est la **constante radioactive**, en $\mathrm{s^{-1}}$ : la probabilité de désintégration par unité de temps, propre à chaque noyau.

**Demi-vie** $t_{1/2}$ : durée au bout de laquelle la moitié des noyaux présents se sont désintégrés.

$$
t_{1/2} = \frac{\ln 2}{\lambda}
$$

</div>

La demi-vie, c'est la minute du lancer de pièces. Elle va de la fraction de seconde à des milliards d'années selon les noyaux : 8 jours pour l'iode 131, 5 730 ans pour le carbone 14, 4,5 milliards d'années pour l'uranium 238.

<mark>Au bout de $n$ demi-vies, il reste $N_0 / 2^n$ noyaux</mark>.

## L'activité

On ne compte pas les noyaux, on compte les désintégrations : c'est ce que mesure un compteur Geiger.

<div class="encadre">

**Activité** d'un échantillon, en becquerels (Bq), 1 Bq = 1 désintégration par seconde :

$$
\cbleu{A}(\corange{t}) = -\frac{\mathrm{d}N}{\mathrm{d}t} = \lambda\,N(\corange{t}) = A_0\,\mathrm{e}^{-\lambda \corange{t}}
$$

</div>

L'activité suit la même loi que $N$ : elle est divisée par 2 à chaque demi-vie.

## La datation

Un être vivant échange du carbone avec l'atmosphère : la proportion de carbone 14 dans son corps reste constante. À sa mort, les échanges s'arrêtent, le carbone 14 n'est plus renouvelé et décroît. En comparant l'activité d'un échantillon ancien à celle d'un échantillon actuel, on remonte au temps écoulé :

$$
\corange{t} = \frac{1}{\lambda} \ln\left(\frac{A_0}{A}\right) = \frac{t_{1/2}}{\ln 2} \ln\left(\frac{A_0}{A}\right)
$$

Pour l'os du début, $A_0 / A = 4$, donc $t = 2\,t_{1/2} \approx 11\,500$ ans. Le carbone 14 date jusqu'à environ 50 000 ans. Au-delà, on utilise d'autres noyaux de plus grande demi-vie (potassium-argon, uranium-plomb).

## Se protéger

Les rayonnements ionisants abîment les cellules. On s'en protège par trois moyens : **la distance** à la source, **la durée** d'exposition, et **un écran** (une feuille de papier arrête les particules $\alpha$, quelques millimètres d'aluminium les $\beta$, il faut du plomb ou du béton épais contre les $\gamma$). En médecine, on choisit des noyaux de courte demi-vie, comme le fluor 18 ($t_{1/2} \approx 110$ min) en imagerie, pour que l'activité dans le corps disparaisse vite.

## Les pièges

- Une désintégration est **aléatoire** pour un noyau, la loi ne vaut que pour un **grand nombre** de noyaux.
- Deux demi-vies : il reste $\frac{1}{4}$, pas 0.
- $\lambda$ et $t_{1/2}$ doivent être dans **la même unité de temps** que $t$.
- La demi-vie ne dépend ni de la quantité de noyaux, ni de la température, ni de l'état chimique.
