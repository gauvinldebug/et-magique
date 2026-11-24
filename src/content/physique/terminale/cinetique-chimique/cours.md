---
titre: Cinétique chimique
court: Cinétique chimique
description: Facteurs cinétiques, catalyse, vitesse volumique, temps de demi-réaction, loi de vitesse d'ordre 1 et mécanisme réactionnel, expliqués avec la sortie d'un stade. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 4
publie: 2026-11-24T01:03:00
video:
  youtube: ""
piege: "**Le temps de demi-réaction n'est pas la moitié de la durée totale.** C'est la date où l'avancement atteint la moitié de sa valeur finale. Une réaction avec $t_{1/2} = 5$ min n'est pas finie au bout de 10 min : pour une loi d'ordre 1, il reste encore un quart du réactif."
pdf:
  cours: /pdf/physique/terminale/cinetique-chimique-cours.pdf
  fiche: /pdf/physique/terminale/cinetique-chimique-fiche.pdf
  exercices: /pdf/physique/terminale/cinetique-chimique-exercices.pdf
suivant: decroissance-radioactive
---

## Le problème

Un comprimé effervescent se dissout en une minute, le fer rouille en plusieurs mois, une explosion dure une fraction de seconde. Le bilan de matière dit **ce que** devient le système, pas **à quelle vitesse**. La cinétique répond à cette deuxième question, et dit surtout comment accélérer ou ralentir une transformation.

## L'idée : la sortie d'un stade

À la fin d'un match, des milliers de spectateurs sortent par les portes. Au début, la foule est dense et le débit est énorme. Plus le stade se vide, plus le débit baisse : il y a moins de monde pour se presser aux portes.

Une transformation chimique se comporte de la même façon : <mark>plus il reste de réactifs, plus la réaction va vite</mark>. Et on peut jouer sur trois leviers :

- **La concentration** : un stade plein se vide plus vite au début qu'un stade à moitié plein.
- **La température** : si les gens marchent plus vite, ils sortent plus vite. À l'échelle des molécules, les chocs sont plus fréquents et plus énergiques.
- **Un catalyseur** : on ouvre une porte de plus. Le stade se vide plus vite, et la porte est toujours là à la fin.

## Facteurs cinétiques et catalyse

<div class="encadre">

**Facteur cinétique.** Paramètre qui modifie la durée d'une transformation : la **température**, la **concentration** des réactifs, la surface de contact pour un solide.

**Catalyseur.** Espèce qui accélère une réaction sans être consommée : elle est absente de l'équation de réaction. On distingue la catalyse **homogène** (même phase que les réactifs), **hétérogène** (phases différentes, souvent un solide) et **enzymatique** (une enzyme).

</div>

Un catalyseur ne change **pas l'état final**, seulement la durée pour l'atteindre. La trempe, au contraire, ralentit brutalement une réaction en la refroidissant (et en la diluant) : on s'en sert pour arrêter une transformation avant de l'analyser.

## La vitesse volumique

<div class="encadre">

Pour un réactif $\mathrm{R}$ et un produit $\mathrm{P}$, en $\mathrm{mol \cdot L^{-1} \cdot s^{-1}}$ :

$$
\cbleu{v_{d}}(\mathrm{R}) = -\frac{\mathrm{d}[\mathrm{R}]}{\mathrm{d}t} \qquad\qquad \cbleu{v_{f}}(\mathrm{P}) = \frac{\mathrm{d}[\mathrm{P}]}{\mathrm{d}t}
$$

</div>

Sur la courbe $[\mathrm{R}] = f(t)$, la vitesse de disparition à la date $\corange{t}$ est l'opposé du **coefficient directeur de la tangente** en ce point. La courbe s'aplatit avec le temps : la vitesse diminue, le stade se vide de moins en moins vite.

Le signe moins sert à avoir une vitesse positive, puisque $[\mathrm{R}]$ diminue.

## Le temps de demi-réaction

<div class="encadre">

**Temps de demi-réaction** $t_{1/2}$ : durée au bout de laquelle l'avancement atteint la **moitié de sa valeur finale**. Pour une réaction totale, c'est la date où la moitié du réactif limitant a été consommée.

</div>

Il donne l'**ordre de grandeur** de la durée de la transformation, que l'on considère achevée au bout de quelques $t_{1/2}$.

## La loi de vitesse d'ordre 1

Pour beaucoup de réactions, la vitesse est proportionnelle à la concentration du réactif : c'est la sortie du stade.

<div class="encadre">

**Loi de vitesse d'ordre 1** par rapport au réactif $\mathrm{R}$ :

$$
v_d(\mathrm{R}) = k \, [\mathrm{R}] \qquad\Longrightarrow\qquad [\mathrm{R}](\corange{t}) = [\mathrm{R}]_0 \, \mathrm{e}^{-k\corange{t}}
$$

$k$ est la constante de vitesse, en $\mathrm{s^{-1}}$. Le temps de demi-réaction vaut alors $t_{1/2} = \dfrac{\ln 2}{k}$, **indépendant** de la concentration initiale.

</div>

On le montre en écrivant $-\frac{\mathrm{d}[\mathrm{R}]}{\mathrm{d}t} = k[\mathrm{R}]$ : c'est une équation différentielle $y' = -k\,y$ dont la solution est une exponentielle.

**Comment vérifier qu'une réaction est d'ordre 1 ?** On trace $\ln([\mathrm{R}])$ en fonction de $t$ : si on obtient une droite, de coefficient directeur $-k$, la loi est d'ordre 1. On peut aussi vérifier que $v$ est proportionnelle à $[\mathrm{R}]$.

## Le mécanisme réactionnel

L'équation de réaction donne le bilan. En réalité, la transformation passe souvent par plusieurs étapes, les **actes élémentaires**, qui forment le **mécanisme réactionnel**.

- Une espèce formée lors d'un acte et consommée dans un acte suivant est un <span class="o">intermédiaire réactionnel</span> : elle n'apparaît pas dans le bilan.
- Un **catalyseur** est consommé dans un acte puis régénéré dans un autre : il n'apparaît pas non plus dans le bilan. Il propose un autre chemin, plus rapide.

Pour décrire un acte élémentaire, on utilise des **flèches courbes** : chacune va d'un **doublet d'électrons** (doublet non liant ou liaison) d'un site **donneur** (riche en électrons) vers un site **accepteur** (pauvre en électrons). Elle représente la formation ou la rupture d'une liaison.

## Les pièges

- Un catalyseur ne figure **pas** dans l'équation de réaction et ne modifie pas l'état final.
- La vitesse de disparition est l'**opposé** de la pente de $[\mathrm{R}](t)$.
- $t_{1/2}$ se lit à la moitié de l'avancement **final**, pas à la moitié de la durée.
- La flèche courbe part toujours des **électrons**, jamais d'un atome pauvre en électrons.
