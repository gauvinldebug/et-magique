---
titre: Le temps et les roches
court: Le temps et les roches
description: Datation relative (superposition, recoupement, inclusion, fossiles stratigraphiques) et datation absolue par radiochronologie (demi-vie, couples potassium-argon et rubidium-strontium, isochrone), expliquées avec une pile de journaux et un sablier. Exercices corrigés. Terminale spécialité SVT.
ordre: 5
publie: 2026-11-28T11:05:00
video:
  youtube: ""
piege: "**Une datation relative ne donne pas d'âge en années.** Elle dit seulement ce qui est plus vieux ou plus jeune. Seule la radiochronologie donne un âge chiffré."
pdf:
  cours: /pdf/svt/terminale/le-temps-et-les-roches-cours.pdf
  fiche: /pdf/svt/terminale/le-temps-et-les-roches-fiche.pdf
  exercices: /pdf/svt/terminale/le-temps-et-les-roches-exercices.pdf
suivant: passe-mouvemente-de-la-terre
---

## Le problème

Une falaise montre des couches de roches empilées, traversées par un filon, avec des fossiles. Dans quel ordre tout cela s'est-il formé ? Et quel âge a chaque roche, en millions d'années ?

## L'idée : la pile de journaux et le sablier

Deux façons de dater, comme pour une pile de vieux journaux.

- **La pile** : sans lire les dates, tu sais que le journal du dessous a été posé avant celui du dessus. C'est la **datation relative** : un ordre, pas un âge.
- **Le sablier** : un sablier retourné au moment où la roche se forme. Le sable qui tombe à vitesse connue indique le temps écoulé. C'est la **datation absolue** : les éléments radioactifs sont le sable.

## La datation relative

<div class="encadre">

- **Superposition** : une couche est plus récente que celle qu'elle recouvre (sauf si la série a été retournée).
- **Recoupement** : une structure qui en recoupe une autre (faille, filon) est plus récente qu'elle.
- **Inclusion** : un morceau de roche inclus dans une autre est plus ancien que la roche qui l'englobe.
- **Continuité** : une même couche a le même âge sur toute son étendue.
- **Identité paléontologique** : deux couches qui contiennent les mêmes fossiles stratigraphiques ont le même âge.

</div>

Un **fossile stratigraphique** a vécu peu de temps, en grand nombre et sur une large zone : les ammonites, par exemple. Les grandes coupures de l'échelle des temps géologiques correspondent à des **crises biologiques** (comme la disparition des dinosaures non aviens il y a 66 Ma).

## La datation absolue

Un élément radioactif **père** $P$ se désintègre en élément **fils** $F$ à un rythme fixe. La **demi-vie** $t_{1/2}$ est la durée au bout de laquelle la moitié des atomes pères a disparu.

<div class="encadre">

$$
P = P_0\,\mathrm{e}^{-\lambda t} \qquad\text{et}\qquad t = \frac{1}{\lambda}\ln\left(1 + \frac{F}{P}\right) \quad\text{si } F_0 = 0
$$

avec $\lambda = \dfrac{\ln 2}{t_{1/2}}$.

</div>

Le chronomètre démarre quand la roche se **ferme** : quand le minéral cristallise et piège les atomes. <mark>On date donc la formation de la roche, pas l'âge des atomes.</mark>

| Méthode | Demi-vie | Usage |
|---|---|---|
| Carbone 14 | 5 730 ans | restes organiques, jusqu'à 50 000 ans environ |
| Potassium-argon | 1,3 milliard d'années | roches volcaniques ($^{40}$Ar absent au départ) |
| Rubidium-strontium | 49 milliards d'années | roches magmatiques anciennes, méthode de l'isochrone |

<div class="labo" data-labo="datation"></div>

## La méthode de l'isochrone (Rb-Sr)

Dans une roche, il y a déjà du strontium au départ : on ne peut pas utiliser la formule simple. On mesure plusieurs minéraux d'une même roche et on trace $\dfrac{^{87}\mathrm{Sr}}{^{86}\mathrm{Sr}}$ en fonction de $\dfrac{^{87}\mathrm{Rb}}{^{86}\mathrm{Sr}}$. Les points s'alignent sur une droite, l'**isochrone**, dont le coefficient directeur $a$ donne l'âge :

$$
a = \mathrm{e}^{\lambda t} - 1 \qquad\Longrightarrow\qquad t = \frac{\ln(a + 1)}{\lambda}
$$

## Les pièges

- Relatif : un **ordre**. Absolu : un **âge**.
- Le chronomètre démarre à la **fermeture** du système (cristallisation).
- Choisir une méthode dont la demi-vie est adaptée à l'âge cherché : le carbone 14 ne date pas un granite.
- Superposition : valable seulement si les couches n'ont pas été renversées.
