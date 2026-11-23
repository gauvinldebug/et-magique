---
titre: Matrices et suites de matrices
court: Matrices
description: Matrices, opérations, produit ligne par colonne, matrice inverse et déterminant 2×2, résolution de systèmes, puissances et suites de matrices, expliqués avec le ticket de caisse d'un marchand, avec des exercices corrigés pas à pas. Terminale maths expertes.
ordre: 5
publie: 2026-11-23T02:04:00
video:
  youtube: ""
piege: >-
  **Le produit de matrices n'est pas commutatif** : en général $AB \ne BA$. Et on ne « divise » pas par une matrice : pour résoudre $AX = B$, on multiplie **à gauche** par $A^{-1}$, ce qui donne $X = A^{-1}B$, et pas $BA^{-1}$.
pdf:
  cours: /pdf/maths/maths-expertes/matrices-cours.pdf
  fiche: /pdf/maths/maths-expertes/matrices-fiche.pdf
  exercices: /pdf/maths/maths-expertes/matrices-exercices.pdf
suivant: graphes-et-chaines-de-markov
---

## Le problème

Deux villes échangent des habitants. Chaque année, 10 % des habitants de la ville A partent vivre en B, et 20 % de ceux de B partent en A. Au départ, A compte 500 milliers d'habitants et B 400 milliers. Les populations vont-elles se stabiliser ?

## L'idée : le ticket de caisse

Au marché, tu achètes 3 kg de pommes à 2 € et 2 kg de poires à 4 €. Le marchand fait **quantités fois prix**, terme à terme, puis il **additionne** : $3 \times 2 + 2 \times 4 = 14$ €.

C'est exactement le **produit d'une ligne par une colonne**. Une matrice, c'est un ticket de caisse rangé dans un tableau : on peut faire tous les calculs d'un coup.

## Les matrices

<div class="encadre">

Une **matrice** de taille $n \times p$ est un tableau de nombres à $n$ lignes et $p$ colonnes. On note $a_{ij}$ le coefficient de la ligne $i$, colonne $j$.

- **Somme** : on additionne coefficient par coefficient (même taille).
- **Produit par un réel** $k$ : on multiplie chaque coefficient par $k$.
- **Produit** $AB$ (si $A$ a autant de colonnes que $B$ a de lignes) : le coefficient $(i\,;j)$ de $AB$ est le produit de la **ligne $i$** de $A$ par la **colonne $j$** de $B$.

</div>

$$
\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 \\ 6 \end{pmatrix} = \begin{pmatrix} 1 \times 5 + 2 \times 6 \\ 3 \times 5 + 4 \times 6 \end{pmatrix} = \begin{pmatrix} 17 \\ 39 \end{pmatrix}
$$

La matrice **identité** $I_n$ (des 1 sur la diagonale, des 0 ailleurs) joue le rôle du nombre 1 : $AI_n = I_nA = A$.

## Matrice inverse

<div class="encadre">

$A$ (carrée) est **inversible** s'il existe $A^{-1}$ telle que $AA^{-1} = A^{-1}A = I_n$.

Pour $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, on pose $\det A = ad - bc$. Si $\corange{\det A \ne 0}$ :

$$
A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}.
$$

</div>

**Système linéaire** : $\begin{cases} 2x + y = 4 \\ 5x + 3y = 11 \end{cases}$ s'écrit $AX = B$. Si $A$ est inversible, la solution unique est $X = A^{-1}B$.

## Puissances et suites de matrices

<div class="encadre">

- $A^n = A \times A \times \cdots \times A$ ($n$ fois). Souvent, on conjecture $A^n$ puis on le prouve **par récurrence**.
- Si $U_{n+1} = AU_n$, alors $\cvert{U_n = A^n U_0}$.
- Si $U_{n+1} = AU_n + B$, on cherche un **état stable** $L = AL + B$, puis $V_n = U_n - L$ vérifie $V_{n+1} = AV_n$.

</div>

## Retour au problème

On note $U_n = \begin{pmatrix} a_n \\ b_n \end{pmatrix}$. Les départs donnent $a_{n+1} = 0{,}9a_n + 0{,}2b_n$ et $b_{n+1} = 0{,}1a_n + 0{,}8b_n$, soit $U_{n+1} = MU_n$ avec

$$
M = \begin{pmatrix} 0{,}9 & 0{,}2 \\ 0{,}1 & 0{,}8 \end{pmatrix}.
$$

Un état stable vérifie $a = 0{,}9a + 0{,}2b$, soit $a = 2b$. Comme la population totale reste 900 : $b = 300$ et $a = 600$.

<mark>Les populations tendent vers 600 milliers en A et 300 milliers en B</mark> (on admet ici que la suite converge).

La suite : [graphes et chaînes de Markov](/maths/maths-expertes/graphes-et-chaines-de-markov/cours/). Pour revoir les systèmes : [équations de droites et systèmes](/maths/seconde/equations-de-droites/cours/).
