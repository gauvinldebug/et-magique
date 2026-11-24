---
titre: Condensateur et circuit RC
court: Condensateur et circuit RC
description: Intensité et charge, capacité d'un condensateur, charge et décharge dans un circuit RC, équation différentielle et constante de temps, capteurs capacitifs, expliqués avec un réservoir rempli par un tuyau étroit. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 17
publie: 2026-11-24T01:16:00
video:
  youtube: ""
piege: "**Au bout d'une constante de temps $\\tau$, le condensateur n'est pas chargé : il l'est à 63 %.** On le considère chargé au bout d'environ $5\\tau$ (plus de 99 %)."
pdf:
  cours: /pdf/physique/terminale/circuit-rc-cours.pdf
  fiche: /pdf/physique/terminale/circuit-rc-fiche.pdf
  exercices: /pdf/physique/terminale/circuit-rc-exercices.pdf
---

## Le problème

Le flash d'un appareil photo a besoin d'une énergie libérée d'un coup ; l'écran tactile de ton téléphone sait où est ton doigt ; un défibrillateur délivre une décharge en quelques millisecondes. Dans les trois, un même composant : le **condensateur**, qui stocke des charges électriques et les rend.

## L'idée : le réservoir et le tuyau étroit

Un château d'eau (le générateur, de tension $E$) remplit un réservoir (le condensateur) à travers un tuyau étroit (la résistance $R$).

- Au début, le réservoir est vide, la différence de niveau est maximale : l'eau entre vite.
- Plus le réservoir se remplit, plus son niveau se rapproche de celui du château d'eau, plus le débit diminue.
- Le réservoir finit au niveau du château d'eau, et le débit s'annule.

Le niveau du réservoir, c'est la tension $u_C$ aux bornes du condensateur. Le débit, c'est l'intensité $i$. Un tuyau plus étroit (plus grand $R$) ou un réservoir plus large (plus grand $C$) rendent le remplissage plus lent.

## Intensité et capacité

<div class="encadre">

**Intensité** : débit de charges électriques, $\ i = \dfrac{\mathrm{d}q}{\mathrm{d}t}$ (A, avec $q$ en C).

**Condensateur** : deux armatures conductrices séparées par un isolant. Elles portent des charges opposées $+q$ et $-q$, proportionnelles à la tension :

$$
q = C \times u_C
$$

$C$ est la **capacité**, en farads (F). En convention récepteur : $\ i = \dfrac{\mathrm{d}q}{\mathrm{d}t} = C\,\dfrac{\mathrm{d}u_C}{\mathrm{d}t}$.

</div>

Les capacités usuelles vont du picofarad ($10^{-12}$ F) au millifarad, et jusqu'à plusieurs farads pour les supercondensateurs.

## La charge du condensateur

Un générateur de tension constante $E$ charge, à travers une résistance $R$, un condensateur initialement déchargé. Loi des mailles : $E = u_R + u_C = R\,i + u_C$, avec $i = C\,\frac{\mathrm{d}u_C}{\mathrm{d}t}$.

<div class="encadre">

$$
RC\,\frac{\mathrm{d}u_C}{\mathrm{d}t} + u_C = E \qquad\Longrightarrow\qquad \cbleu{u_C}(\corange{t}) = E\left(1 - \mathrm{e}^{-\corange{t}/\tau}\right)
$$

**Constante de temps** : $\tau = R\,C$, en secondes.

</div>

On vérifie : à $t = 0$, $u_C = 0$ (condensateur vide) ; quand $t \to +\infty$, $u_C \to E$. L'intensité, elle, vaut $i = \dfrac{E}{R}\mathrm{e}^{-t/\tau}$ : maximale au début, nulle à la fin. C'est le débit du tuyau.

**Lire $\tau$ sur une courbe** :

- à $t = \tau$, $u_C = E(1 - \mathrm{e}^{-1}) \approx 0{,}63\,E$ ;
- la tangente à l'origine coupe l'asymptote $u_C = E$ à la date $\tau$.

<mark>Le condensateur est considéré comme chargé au bout de $5\tau$</mark>, où $u_C \approx 0{,}99\,E$.

## La décharge

Le condensateur chargé sous la tension $E$ se décharge dans la résistance (le générateur est retiré du circuit). La loi des mailles donne $RC\,\frac{\mathrm{d}u_C}{\mathrm{d}t} + u_C = 0$, d'où

$$
u_C(\corange{t}) = E\,\mathrm{e}^{-\corange{t}/\tau}
$$

À $t = \tau$, il ne reste que 37 % de la tension initiale. Le réservoir se vide par le même tuyau étroit.

<div class="labo" data-labo="rc"></div>

## Les capteurs capacitifs

La capacité d'un condensateur dépend de la surface des armatures, de leur distance et de l'isolant entre elles. Si l'un de ces paramètres varie, $C$ varie, donc aussi la constante de temps $\tau = RC$ : en mesurant $\tau$, on détecte la variation. C'est le principe des **écrans tactiles** (ton doigt modifie la capacité locale), des capteurs d'humidité, de niveau de liquide ou d'accélération.

## Les pièges

- $\tau = RC$ est une **durée** : avec $R$ en ohms et $C$ en farads, on obtient des secondes.
- À $\tau$, chargé à **63 %**, pas à 100 %. À $5\tau$, à 99 %.
- La tension aux bornes d'un condensateur ne peut pas varier brusquement (elle est continue), l'intensité si.
- Convention récepteur pour écrire $i = C\,\frac{\mathrm{d}u_C}{\mathrm{d}t}$ ; sinon, un signe moins apparaît.
