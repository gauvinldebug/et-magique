---
titre: Intégration
court: Intégration
description: L'intégrale expliquée avec le compteur kilométrique d'une voiture, l'aire sous la courbe, le calcul avec une primitive, la linéarité, la relation de Chasles, la valeur moyenne et l'intégration par parties, avec des exercices corrigés type bac. Terminale spécialité maths.
ordre: 9
publie: 2026-11-22T20:12:00
video:
  youtube: ""
piege: "**Une intégrale n'est pas toujours une aire.** Quand la fonction est négative, l'intégrale compte l'aire **en négatif**. Pour une aire entre une courbe et l'axe, il faut découper là où la fonction change de signe."
pdf:
  cours: /pdf/maths/terminale/integration-cours.pdf
  fiche: /pdf/maths/terminale/integration-fiche.pdf
  exercices: /pdf/maths/terminale/integration-exercices.pdf
suivant: geometrie-dans-l-espace
---

## Le problème

Une voiture roule à une vitesse qui change tout le temps : $v(t) = 3t^2$ (en m/s). Quelle distance parcourt-elle entre $t = 1$ et $t = 2$ ? On ne peut pas faire « vitesse × temps », puisque la vitesse n'est jamais la même.

Autre question : quelle est l'aire de la surface coincée entre la courbe de $\corange{x}^2$, l'axe des abscisses et les droites $x = 0$ et $x = 1$ ? Ce n'est ni un rectangle, ni un triangle.

Ces deux questions ont la même réponse : une <span class="o">intégrale</span>.

## L'idée : le compteur kilométrique

Dans le [chapitre précédent](/maths/terminale/primitives-et-equations-differentielles/cours/), on regardait le **compteur de vitesse**. Regarde maintenant l'autre cadran : le **compteur kilométrique**. Il additionne, instant après instant, tous les petits bouts de chemin parcourus.

Sur le graphique de la vitesse, chaque petit bout de chemin, c'est un rectangle très fin de hauteur $v(t)$ et de largeur minuscule. Les additionner, c'est remplir <mark>l'aire sous la courbe</mark>.

La distance parcourue entre $t = a$ et $t = b$, c'est ce qu'affiche le compteur kilométrique à l'arrivée, moins ce qu'il affichait au départ. Et le compteur kilométrique, c'est une primitive de la vitesse.

## La définition

<div class="encadre">

**Aire.** Si $\cbleu{f}$ est continue et **positive** sur $[a\,;b]$, l'intégrale $\displaystyle\int_a^b \cbleu{f}(\corange{x})\,\mathrm{d}\corange{x}$ est l'**aire** (en unités d'aire) du domaine compris entre la courbe, l'axe des abscisses et les droites $x = a$ et $x = b$.

**Calcul.** Si $\cbleu{f}$ est continue sur $[a\,;b]$ et si $F$ est une primitive de $\cbleu{f}$ :

$$
\int_a^b \cbleu{f}(\corange{x})\,\mathrm{d}\corange{x} = \Big[F(\corange{x})\Big]_a^b = F(b) - F(a).
$$

</div>

Retour à la voiture : une primitive de $3t^2$ est $t^3$, donc la distance vaut $\int_1^2 3t^2\,\mathrm{d}t = 2^3 - 1^3 = \cvert{7}$ mètres.

Et l'aire sous $\corange{x}^2$ : $\int_0^1 \corange{x}^2\,\mathrm{d}\corange{x} = \left[\frac{\corange{x}^3}{3}\right]_0^1 = \frac{1}{3} - 0 = \cvert{\frac{1}{3}}$ unité d'aire.

Le lien avec les primitives est même plus fort : si $\cbleu{f}$ est continue, la fonction $\corange{x} \mapsto \int_a^{\corange{x}} \cbleu{f}(t)\,\mathrm{d}t$ est **la** primitive de $\cbleu{f}$ qui s'annule en $a$. C'est le compteur kilométrique remis à zéro au départ.

## Les propriétés

<div class="encadre">

Pour $\cbleu{f}$ et $g$ continues sur un intervalle contenant $a$, $b$, $c$, et $\lambda$ réel :

- **Linéarité** : $\int_a^b (\cbleu{f} + g) = \int_a^b \cbleu{f} + \int_a^b g$ et $\int_a^b \lambda \cbleu{f} = \lambda \int_a^b \cbleu{f}$.
- **Chasles** : $\int_a^b \cbleu{f} = \int_a^c \cbleu{f} + \int_c^b \cbleu{f}$. Et $\int_b^a \cbleu{f} = -\int_a^b \cbleu{f}$.
- **Positivité** : si $a \le b$ et $\cbleu{f} \ge 0$ sur $[a\,;b]$, alors $\int_a^b \cbleu{f} \ge 0$.
- **Croissance** : si $a \le b$ et $\cbleu{f} \le g$ sur $[a\,;b]$, alors $\int_a^b \cbleu{f} \le \int_a^b g$.

</div>

Chasles, c'est le trajet en deux étapes : la distance de $a$ à $b$ est la distance de $a$ à $c$, plus celle de $c$ à $b$.

## Quand la fonction est négative

Si $\cbleu{f} \le 0$ sur $[a\,;b]$, la voiture **recule**. L'intégrale est négative, et l'aire vaut $-\int_a^b \cbleu{f}$.

Exemple : $\int_0^{2\pi} \sin \corange{x}\,\mathrm{d}\corange{x} = \big[-\cos \corange{x}\big]_0^{2\pi} = -1 + 1 = 0$. Pourtant l'aire entre la courbe et l'axe n'est pas nulle : la partie au-dessus de l'axe et la partie en dessous se compensent.

## Aire entre deux courbes

<div class="encadre">

Si $\cbleu{f} \ge g$ sur $[a\,;b]$, l'aire du domaine compris entre les deux courbes et les droites $x = a$ et $x = b$ vaut $\displaystyle\int_a^b \big(\cbleu{f}(\corange{x}) - g(\corange{x})\big)\,\mathrm{d}\corange{x}$.

</div>

Toujours « celle du haut moins celle du bas ».

## La valeur moyenne

<div class="encadre">

La **valeur moyenne** de $\cbleu{f}$ sur $[a\,;b]$ (avec $a < b$) est $\mu = \dfrac{1}{b - a}\displaystyle\int_a^b \cbleu{f}(\corange{x})\,\mathrm{d}\corange{x}$.

</div>

Pour la voiture : $\frac{1}{2 - 1}\int_1^2 3t^2\,\mathrm{d}t = 7$ m/s. C'est la vitesse constante qui ferait parcourir la même distance dans le même temps.

## L'intégration par parties

Quand la fonction est un **produit** qu'on ne sait pas primitiver directement, comme $\corange{x}\,\mathrm{e}^{\corange{x}}$ :

<div class="encadre">

Si $u$ et $v$ sont dérivables à dérivées continues sur $[a\,;b]$ :

$$
\int_a^b u(\corange{x})\,v'(\corange{x})\,\mathrm{d}\corange{x} = \Big[u(\corange{x})\,v(\corange{x})\Big]_a^b - \int_a^b u'(\corange{x})\,v(\corange{x})\,\mathrm{d}\corange{x}.
$$

</div>

Exemple : $\int_0^1 \corange{x}\,\mathrm{e}^{\corange{x}}\,\mathrm{d}\corange{x}$. On pose $u = \corange{x}$ (qui devient plus simple en dérivant : $u' = 1$) et $v' = \mathrm{e}^{\corange{x}}$, donc $v = \mathrm{e}^{\corange{x}}$.

$$
\int_0^1 \corange{x}\,\mathrm{e}^{\corange{x}}\,\mathrm{d}\corange{x} = \Big[\corange{x}\,\mathrm{e}^{\corange{x}}\Big]_0^1 - \int_0^1 \mathrm{e}^{\corange{x}}\,\mathrm{d}\corange{x} = \mathrm{e} - (\mathrm{e} - 1) = \cvert{1}.
$$
