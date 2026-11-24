---
titre: Probabilités conditionnelles et indépendance
court: Probabilités conditionnelles
description: Les probabilités conditionnelles expliquées avec un projecteur qui n'éclaire qu'une partie de la salle, les arbres pondérés, la formule des probabilités totales, l'indépendance et les variables aléatoires, avec des exercices corrigés. Première spécialité maths.
ordre: 7
publie: 2026-11-22T20:42:00
video:
  youtube: ""
piege: "**$P_A(B)$ n'est pas $P_B(A)$.** La probabilité qu'un malade ait un test positif n'est pas la probabilité qu'une personne testée positive soit malade. On ne change pas de projecteur sans refaire le calcul."
pdf:
  cours: /pdf/maths/premiere/probabilites-conditionnelles-cours.pdf
  fiche: /pdf/maths/premiere/probabilites-conditionnelles-fiche.pdf
  exercices: /pdf/maths/premiere/probabilites-conditionnelles-exercices.pdf
suivant: variables-aleatoires
---

## Le problème

Une maladie touche 1 % de la population. Un test la détecte chez 99 % des malades, mais il est aussi positif chez 2 % des personnes saines. Tu fais le test : il est positif. Quelle est la probabilité que tu sois vraiment malade ?

La plupart des gens répondent « 99 % ». La vraie réponse est bien plus faible. Pour la trouver, il faut savoir **tenir compte d'une information**.

## L'idée : le projecteur

Imagine une salle de spectacle plongée dans le noir, remplie de toute la population. On allume un **projecteur** qui n'éclaire qu'une partie de la salle : seulement les personnes de l'événement $A$.

La <span class="o">probabilité conditionnelle</span> $P_A(B)$, c'est la proportion de personnes de $B$ **parmi celles qui sont dans la lumière**. Le reste de la salle n'existe plus pour le calcul.

Changer d'information, c'est déplacer le projecteur. Et éclairer les malades pour regarder les positifs ne donne pas le même résultat qu'éclairer les positifs pour regarder les malades.

## La définition

<div class="encadre">

Soit $A$ un événement de probabilité non nulle. La **probabilité de $B$ sachant $A$** est :

$$
P_A(B) = \frac{P(A \cap B)}{P(A)}
$$

Conséquence : $P(A \cap B) = P(A) \times P_A(B)$.

</div>

## L'arbre pondéré

Un arbre pondéré organise les calculs.

- Sur les branches du premier niveau : $P(A)$ et $P(\bar{A})$.
- Sur les branches du second niveau : les probabilités **conditionnelles**, $P_A(B)$, $P_A(\bar{B})$, $P_{\bar{A}}(B)$, $P_{\bar{A}}(\bar{B})$.

<div class="encadre">

**Règles.** La somme des branches issues d'un même nœud vaut 1. La probabilité d'un chemin est le **produit** des probabilités le long de ce chemin.

</div>

## La formule des probabilités totales

<div class="encadre">

Si $A$ et $\bar{A}$ partagent l'univers :

$$
P(B) = P(A \cap B) + P(\bar{A} \cap B) = P(A)\,P_A(B) + P(\bar{A})\,P_{\bar{A}}(B)
$$

</div>

Sur l'arbre : on additionne les probabilités de **tous les chemins** qui mènent à $B$. Plus généralement, la formule marche avec toute **partition** de l'univers $A_1, \dots, A_n$.

<div class="labo" data-labo="arbre"></div>

## Retour au problème

On note $M$ « être malade » et $T$ « le test est positif ». $P(M) = 0{,}01$, $P_M(T) = 0{,}99$, $P_{\bar{M}}(T) = 0{,}02$.

$$
\begin{aligned}
P(M \cap T) &= 0{,}01 \times 0{,}99 = 0{,}0099 && \text{chemin malade et positif} \\
P(\bar{M} \cap T) &= 0{,}99 \times 0{,}02 = 0{,}0198 && \text{chemin sain et positif} \\
P(T) &= 0{,}0099 + 0{,}0198 = 0{,}0297 && \text{probabilités totales} \\
P_T(M) &= \frac{0{,}0099}{0{,}0297} = \frac{1}{3} && \text{on éclaire les positifs}
\end{aligned}
$$

Avec un test positif, on n'a qu'<mark>une chance sur trois</mark> d'être malade. La raison : les personnes saines sont tellement nombreuses que leurs 2 % de faux positifs pèsent plus lourd que les vrais malades.

## L'indépendance

<div class="encadre">

Deux événements $A$ et $B$ sont **indépendants** si $P(A \cap B) = P(A) \times P(B)$.

Si $P(A) \ne 0$, c'est équivalent à $P_A(B) = P(B)$ : savoir que $A$ est réalisé ne change rien à la probabilité de $B$.

</div>

Allumer le projecteur sur $A$ ne change pas la proportion de $B$. Si $A$ et $B$ sont indépendants, $\bar{A}$ et $B$ le sont aussi.

Attention : **indépendants** ne veut pas dire **incompatibles**. Deux événements incompatibles ($A \cap B = \varnothing$) de probabilités non nulles ne sont jamais indépendants : si $A$ arrive, $B$ devient impossible.

## Variables aléatoires

<div class="encadre">

Une **variable aléatoire** $X$ associe un nombre à chaque issue. Si elle prend les valeurs $x_1, \dots, x_n$ avec les probabilités $p_1, \dots, p_n$ :

$$
E(X) = \sum p_i\,x_i \qquad V(X) = \sum p_i\,(x_i - E(X))^2 \qquad \sigma(X) = \sqrt{V(X)}
$$

</div>

L'espérance est la valeur moyenne obtenue sur un très grand nombre de répétitions. Tout est détaillé dans le chapitre [Variables aléatoires](/maths/premiere/variables-aleatoires/cours/). Dans un jeu, $E(X) > 0$ veut dire qu'il est favorable au joueur.
