---
titre: Le second degré
court: Second degré
description: Le second degré expliqué avec le jet d'eau d'une fontaine, la forme canonique, le discriminant, les racines, la factorisation et le signe d'un trinôme, avec des exercices corrigés pas à pas. Première spécialité maths.
ordre: 1
publie: 2026-11-22T20:30:00
video:
  youtube: ""
piege: "**Le signe de $a$ décide de tout.** Un trinôme est du signe de $a$ **à l'extérieur** des racines, et du signe contraire **entre** les racines. Si $a < 0$, la parabole est tournée vers le bas : le tableau de signes s'inverse."
pdf:
  cours: /pdf/maths/premiere/second-degre-cours.pdf
  fiche: /pdf/maths/premiere/second-degre-fiche.pdf
  exercices: /pdf/maths/premiere/second-degre-exercices.pdf
suivant: suites-numeriques
---

## Le problème

On lance une balle. Sa hauteur (en mètres) au bout de $\corange{x}$ secondes est $h(\corange{x}) = -5\corange{x}^2 + 10\corange{x} + 15$. Quand retombe-t-elle au sol ? À quelle hauteur maximale monte-t-elle ? Pendant combien de temps est-elle au-dessus de 15 mètres ?

Toutes ces questions mènent à des expressions de la forme $a\corange{x}^2 + b\corange{x} + c$ : les **trinômes du second degré**.

## L'idée : le jet d'eau de la fontaine

Regarde le jet d'eau d'une fontaine : il monte, atteint un sommet, et redescend en dessinant une courbe parfaitement symétrique. Cette courbe, c'est une <span class="o">parabole</span>, la courbe d'un trinôme.

- Le **sommet** du jet, c'est le maximum (ou le minimum) du trinôme.
- Les endroits où l'eau **touche le bassin**, ce sont les <mark>racines</mark> : les solutions de $a\corange{x}^2 + b\corange{x} + c = 0$.
- Selon la hauteur de la fontaine, le jet peut toucher le bassin en deux points, en un seul point (il l'effleure), ou jamais. C'est le **discriminant** $\Delta$ qui le dit.

## Fonction trinôme et parabole

<div class="encadre">

Une fonction **polynôme du second degré** (ou trinôme) s'écrit $\cbleu{f}(\corange{x}) = a\corange{x}^2 + b\corange{x} + c$, avec $a \ne 0$. Sa courbe est une **parabole** :

- tournée vers le haut si $a > 0$ (un bol), vers le bas si $a < 0$ (le jet d'eau) ;
- de sommet $S(\alpha\,;\beta)$ avec $\alpha = -\dfrac{b}{2a}$ et $\beta = \cbleu{f}(\alpha)$ ;
- symétrique par rapport à la droite $x = \alpha$.

</div>

## La forme canonique

<div class="encadre">

Tout trinôme s'écrit sous la forme $\cbleu{f}(\corange{x}) = a(\corange{x} - \alpha)^2 + \beta$. C'est la **forme canonique**. Elle donne directement le sommet.

</div>

Exemple : $\corange{x}^2 - 6\corange{x} + 5 = (\corange{x} - 3)^2 - 9 + 5 = (\corange{x} - 3)^2 - 4$. Le sommet est $S(3\,;-4)$.

## Le discriminant et les racines

<div class="encadre">

On pose $\Delta = b^2 - 4ac$.

- Si $\Delta > 0$ : deux racines, $\corange{x}_1 = \dfrac{-b - \sqrt{\Delta}}{2a}$ et $\corange{x}_2 = \dfrac{-b + \sqrt{\Delta}}{2a}$. Factorisation : $a(\corange{x} - \corange{x}_1)(\corange{x} - \corange{x}_2)$.
- Si $\Delta = 0$ : une racine double, $\corange{x}_0 = -\dfrac{b}{2a}$. Factorisation : $a(\corange{x} - \corange{x}_0)^2$.
- Si $\Delta < 0$ : aucune racine réelle, pas de factorisation.

</div>

Le jet d'eau : $\Delta > 0$, il touche le bassin en deux points ; $\Delta = 0$, il l'effleure en un seul point (le sommet est sur le bassin) ; $\Delta < 0$, il ne l'atteint jamais.

Quand on connaît une racine évidente ($1$, $-1$, $2$…), on peut trouver l'autre avec le **produit des racines** : $\corange{x}_1\corange{x}_2 = \dfrac{c}{a}$. Et la somme vaut $\corange{x}_1 + \corange{x}_2 = -\dfrac{b}{a}$.

<div class="labo" data-labo="parabole"></div>

## Le signe d'un trinôme

<div class="encadre">

- Si $\Delta > 0$ : $\cbleu{f}(\corange{x})$ est du **signe de $a$** à l'extérieur des racines, et du **signe contraire** entre les racines.
- Si $\Delta = 0$ : $\cbleu{f}(\corange{x})$ est du signe de $a$, et s'annule en $\corange{x}_0$.
- Si $\Delta < 0$ : $\cbleu{f}(\corange{x})$ est toujours du signe de $a$.

</div>

## Retour au problème

$h(\corange{x}) = -5\corange{x}^2 + 10\corange{x} + 15$, avec $a = -5$, $b = 10$, $c = 15$.

$$
\begin{aligned}
\Delta &= 10^2 - 4 \times (-5) \times 15 = 100 + 300 = 400 && \text{deux racines} \\
\corange{x}_1 &= \frac{-10 - 20}{-10} = 3 \quad \text{et} \quad \corange{x}_2 = \frac{-10 + 20}{-10} = -1 \\
\alpha &= -\frac{10}{2 \times (-5)} = 1 \quad \text{et} \quad \beta = h(1) = 20 && \text{le sommet}
\end{aligned}
$$

La balle monte à <mark>20 mètres</mark> au bout d'une seconde, et retombe au sol au bout de <mark>3 secondes</mark> (la racine $-1$ n'a pas de sens ici, le temps est positif).

Au-dessus de 15 m : $h(\corange{x}) > 15 \iff -5\corange{x}^2 + 10\corange{x} > 0 \iff -5\corange{x}(\corange{x} - 2) > 0$. Le trinôme est du signe contraire de $a$ (donc positif) entre ses racines 0 et 2 : pendant <mark>2 secondes</mark>.
