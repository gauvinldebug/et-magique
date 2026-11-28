---
titre: Suites et modèles d'évolution
court: Suites et évolutions
description: Suites arithmétiques et géométriques, évolutions à taux constant, sommes de termes, seuil et limite d'une suite géométrique, expliqués avec une tirelire et une boule de neige, avec des exercices corrigés pas à pas. Terminale maths complémentaires.
ordre: 1
publie: 2026-11-23T02:10:00
video:
  youtube: ""
piege: >-
  **Une hausse de 3 % par an n'est pas une suite arithmétique.** On ne rajoute pas 3 chaque année, on **multiplie** par $1{,}03$ : c'est une suite géométrique de raison $q = 1{,}03$, et pas $q = 0{,}03$ ni $q = 3$.
pdf:
  cours: /pdf/maths/maths-complementaires/suites-et-modeles-d-evolution-cours.pdf
  fiche: /pdf/maths/maths-complementaires/suites-et-modeles-d-evolution-fiche.pdf
  exercices: /pdf/maths/maths-complementaires/suites-et-modeles-d-evolution-exercices.pdf
suivant: derivation-et-convexite
---

## Le problème

Une ville compte 20 000 habitants et sa population augmente de 3 % par an. Au bout de combien d'années dépassera-t-elle 30 000 habitants ?

## L'idée : la tirelire et la boule de neige

Dans une **tirelire**, tu glisses 10 € chaque semaine : tu **ajoutes** toujours la même somme. La tirelire grossit en ligne droite.

Une **boule de neige** qui roule, elle, grossit d'autant plus qu'elle est déjà grosse : elle est **multipliée** à chaque tour. Au début, elle semble lente, puis elle dépasse n'importe quelle tirelire.

La tirelire, c'est une suite **arithmétique**. La boule de neige, une suite **géométrique**.

## Suites arithmétiques

<div class="encadre">

$(u_n)$ est **arithmétique** de raison $r$ si $u_{n+1} = u_n + r$ pour tout $n$.

- Terme général : $u_n = u_0 + nr$.
- Somme : $u_0 + u_1 + \cdots + u_n = (n + 1) \times \dfrac{u_0 + u_n}{2}$.
- Modèle : évolution **linéaire** (on ajoute une quantité fixe).

</div>

## Suites géométriques

<div class="encadre">

$(u_n)$ est **géométrique** de raison $q$ si $u_{n+1} = q \times u_n$ pour tout $n$.

- Terme général : $u_n = u_0 \times q^n$.
- Somme : $1 + q + \cdots + q^n = \dfrac{1 - q^{n+1}}{1 - q}$ ($q \ne 1$).
- Une évolution de $t\,\%$ correspond à $\corange{q = 1 + \frac{t}{100}}$ (une baisse donne $q < 1$).

</div>

**Limite** : si $q > 1$ et $u_0 > 0$, $q^n$ tend vers $+\infty$. Si $0 < q < 1$, $q^n$ tend vers 0.

**Suite arithmético-géométrique** $u_{n+1} = au_n + b$ : on cherche le nombre $\ell$ tel que $\ell = a\ell + b$, puis $v_n = u_n - \ell$ est géométrique de raison $a$.

<div class="labo" data-labo="suite"></div>

## Retour au problème

La population vérifie $u_n = 20\,000 \times 1{,}03^n$. On cherche $n$ tel que $1{,}03^n > 1{,}5$.

Avec le logarithme : $n > \dfrac{\ln 1{,}5}{\ln 1{,}03} \approx 13{,}7$. On vérifie : $1{,}03^{13} \approx 1{,}469$ et $1{,}03^{14} \approx 1{,}513$.

<mark>La population dépasse 30 000 habitants au bout de 14 ans</mark>.

La suite : [dérivation et convexité](/maths/maths-complementaires/derivation-et-convexite/cours/). Pour revoir les bases : les [suites de 1re](/maths/premiere/suites-numeriques/cours/).
