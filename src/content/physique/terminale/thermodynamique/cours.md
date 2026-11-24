---
titre: Thermodynamique et transferts thermiques
court: Thermodynamique
description: Gaz parfait, énergie interne, premier principe, capacité thermique, conduction, convection, rayonnement, flux et résistance thermiques, loi de Newton du refroidissement, expliqués avec un compte en banque. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 13
publie: 2026-11-24T01:12:00
video:
  youtube: ""
piege: "**Dans $PV = nRT$, la température est en kelvins et le volume en mètres cubes.** $T(\\mathrm{K}) = \\theta(^\\circ\\mathrm{C}) + 273{,}15$ et $1\\ \\mathrm{L} = 10^{-3}\\ \\mathrm{m^3}$. Avec des degrés Celsius, une température de 0 °C donnerait un volume nul."
pdf:
  cours: /pdf/physique/terminale/thermodynamique-cours.pdf
  fiche: /pdf/physique/terminale/thermodynamique-fiche.pdf
  exercices: /pdf/physique/terminale/thermodynamique-exercices.pdf
suivant: ondes-et-sons
---

## Le problème

Un café chaud refroidit, vite au début puis de plus en plus lentement. Une pompe à vélo chauffe quand on gonfle un pneu. Une maison mal isolée coûte cher en chauffage. Toutes ces situations parlent d'**énergie qui entre ou sort** d'un système, sous forme de travail ou de chaleur.

## L'idée : le compte en banque

Un système possède une réserve d'énergie cachée dans l'agitation et les interactions de ses molécules : c'est son **énergie interne** $U$. Vois-la comme le **solde d'un compte en banque**.

- Le **travail** $W$ (une force qui déplace, comme le piston de la pompe) est un premier type de virement.
- Le **transfert thermique** $Q$ (la « chaleur », qui passe toute seule du chaud vers le froid) en est un second.

Le relevé de compte est simple : la variation du solde est la somme des virements reçus. Un virement reçu est compté positif, un virement versé négatif. C'est le premier principe.

## Le gaz parfait

À l'échelle microscopique, un gaz est fait de molécules en mouvement désordonné. Leurs chocs sur les parois créent la **pression** ; leur agitation est reliée à la **température**.

<div class="encadre">

**Équation d'état du gaz parfait** :

$$
P \, V = n \, R \, T
$$

$P$ en Pa, $V$ en $\mathrm{m^3}$, $n$ en mol, $T$ en K, $R = 8{,}314\ \mathrm{J \cdot mol^{-1} \cdot K^{-1}}$.

</div>

Le modèle est valable pour les gaz à **faible pression** (molécules éloignées, interactions négligeables). À haute pression, il s'écarte du comportement réel.

## Énergie interne et premier principe

<div class="encadre">

**Premier principe** pour un système fermé, au repos macroscopique, entre un état initial et un état final :

$$
\Delta U = W + Q
$$

$W$ et $Q$ sont **comptés positivement quand le système les reçoit**.

**Système incompressible** (liquide, solide) : son énergie interne ne varie qu'avec sa température,

$$
\Delta U = C\,\Delta T = m\,c\,\Delta T
$$

$C$ capacité thermique ($\mathrm{J \cdot K^{-1}}$), $c$ capacité thermique massique ($\mathrm{J \cdot kg^{-1} \cdot K^{-1}}$). Pour l'eau liquide, $c \approx 4{,}18 \times 10^3\ \mathrm{J \cdot kg^{-1} \cdot K^{-1}}$.

</div>

Une variation de température a la même valeur en kelvins et en degrés Celsius : $\Delta T$ en K $= \Delta\theta$ en °C.

## Les trois modes de transfert thermique

- **Conduction** : de proche en proche, sans déplacement de matière. La cuillère dans le thé chaud.
- **Convection** : avec déplacement de matière dans un fluide. L'air chaud qui monte au-dessus d'un radiateur.
- **Rayonnement** : par ondes électromagnétiques, même dans le vide. Le Soleil qui chauffe la Terre.

Le transfert thermique se fait **spontanément du corps chaud vers le corps froid**, jamais l'inverse.

## Flux et résistance thermiques

<div class="encadre">

**Flux thermique** : énergie transférée par unité de temps, $\Phi = \dfrac{Q}{\Delta t}$ en watts.

**Résistance thermique** d'une paroi (conduction) :

$$
R_{th} = \frac{T_1 - T_2}{\Phi} \qquad (\mathrm{K \cdot W^{-1}})
$$

</div>

Plus la résistance thermique est grande, mieux la paroi isole. Pour une paroi plane, $R_{th} = \dfrac{e}{\lambda S}$, avec $e$ l'épaisseur, $S$ la surface et $\lambda$ la conductivité thermique du matériau. Des parois traversées l'une après l'autre (un mur puis un isolant) ont des résistances qui **s'additionnent**.

## Refroidir comme un café

Pour un objet de capacité thermique $C$ placé dans un milieu de température constante $T_{\text{ext}}$, la **loi de Newton** (phénoménologique) modélise le flux échangé à sa surface : $\Phi = h\,S\,(T_{\text{ext}} - T)$. Avec le premier principe, $C\,\frac{\mathrm{d}T}{\mathrm{d}t} = h\,S\,(T_{\text{ext}} - T)$, d'où

$$
T(\corange{t}) = T_{\text{ext}} + (T_0 - T_{\text{ext}})\,\mathrm{e}^{-\corange{t}/\tau} \qquad \tau = \frac{C}{hS}
$$

Le café refroidit vite au début, puis de plus en plus lentement, et sa température tend vers celle de la pièce. On retrouve l'exponentielle de la [cinétique](/physique/terminale/cinetique-chimique/cours/) et de la [radioactivité](/physique/terminale/decroissance-radioactive/cours/).

## Les pièges

- Températures en **kelvins** dans $PV = nRT$ ; volumes en $\mathrm{m^3}$.
- Signes : énergie **reçue** par le système = positive.
- « Chaleur » et « température » ne sont pas la même chose : $Q$ est un transfert d'énergie, $T$ une grandeur d'état.
- Résistances thermiques en série : elles **s'ajoutent**.
