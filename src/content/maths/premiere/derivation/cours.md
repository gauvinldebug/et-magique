---
titre: La dérivation
court: Dérivation
description: La dérivation expliquée avec une loupe qui transforme la courbe en droite, le taux d'accroissement, le nombre dérivé, la tangente, les formules de dérivées et l'étude des variations, avec des exercices corrigés pas à pas. Première spécialité maths.
ordre: 3
publie: 2026-11-22T20:32:00
video:
  youtube: ""
piege: "**Le signe de $\\cbleu{f}'$, pas celui de $\\cbleu{f}$.** Les variations de $\\cbleu{f}$ se lisent sur le **signe de sa dérivée**. Une fonction peut être négative et croissante, ou positive et décroissante."
pdf:
  cours: /pdf/maths/premiere/derivation-cours.pdf
  fiche: /pdf/maths/premiere/derivation-fiche.pdf
  exercices: /pdf/maths/premiere/derivation-exercices.pdf
suivant: fonction-exponentielle
---

## Le problème

Une voiture parcourt $d(t) = t^2$ mètres en $t$ secondes. Sa vitesse **moyenne** entre 2 s et 4 s se calcule facilement : $\frac{16 - 4}{4 - 2} = 6$ m/s. Mais quelle est sa vitesse **exactement** à l'instant $t = 3$, celle qu'affiche le compteur ?

Sur un graphique, c'est la même question : une courbe n'est pas droite, alors quelle est sa **pente** en un point précis ?

## L'idée : la loupe

Prends une courbe bien lisse et regarde-la à la loupe autour d'un point. Zoome encore. Et encore. À force de zoomer, la courbe <mark>ressemble de plus en plus à une droite</mark>.

Cette droite, c'est la **tangente** à la courbe en ce point. Sa pente, c'est le <span class="o">nombre dérivé</span>. C'est la vitesse instantanée de la voiture, la pente de la route sous tes pieds.

## Taux d'accroissement et nombre dérivé

<div class="encadre">

Le **taux d'accroissement** de $\cbleu{f}$ entre $a$ et $a + h$ (avec $h \ne 0$) est la pente de la sécante :

$$
\frac{\cbleu{f}(a + h) - \cbleu{f}(a)}{h}
$$

$\cbleu{f}$ est **dérivable en $a$** si ce taux tend vers un nombre réel quand $h$ tend vers 0. Ce nombre est le **nombre dérivé** de $\cbleu{f}$ en $a$, noté $\cbleu{f}'(a)$.

</div>

Faire tendre $h$ vers 0, c'est zoomer avec la loupe : les deux points de la sécante se rapprochent jusqu'à se confondre.

Pour la voiture, en $a = 3$ :

$$
\frac{(3 + h)^2 - 9}{h} = \frac{6h + h^2}{h} = 6 + h \;\longrightarrow\; \cvert{6} \quad \text{quand } h \to 0
$$

La vitesse instantanée à $t = 3$ est $d'(3) = 6$ m/s.

## La tangente

<div class="encadre">

Si $\cbleu{f}$ est dérivable en $a$, la **tangente** à la courbe au point d'abscisse $a$ est la droite passant par $A(a\,;\cbleu{f}(a))$ de coefficient directeur $\cbleu{f}'(a)$. Son équation est :

$$
y = \cbleu{f}'(a)(\corange{x} - a) + \cbleu{f}(a)
$$

</div>

Sur un graphique, on lit $\cbleu{f}'(a)$ comme la pente de la tangente : « on avance de 1, on monte de $\cbleu{f}'(a)$ ».

## La fonction dérivée et les formules

Si $\cbleu{f}$ est dérivable en tout point d'un intervalle $I$, la fonction $\corange{x} \mapsto \cbleu{f}'(\corange{x})$ est la **fonction dérivée** de $\cbleu{f}$.

| Fonction | Dérivée | Sur |
|---|---|---|
| $k$ (constante) | $0$ | $\mathbb{R}$ |
| $\corange{x}$ | $1$ | $\mathbb{R}$ |
| $\corange{x}^n$ ($n \ge 1$) | $n\,\corange{x}^{n-1}$ | $\mathbb{R}$ |
| $\dfrac{1}{\corange{x}}$ | $-\dfrac{1}{\corange{x}^2}$ | $\mathbb{R}^*$ |
| $\sqrt{\corange{x}}$ | $\dfrac{1}{2\sqrt{\corange{x}}}$ | $]0\,;+\infty[$ |

<div class="encadre">

**Opérations.** Pour $u$ et $v$ dérivables et $k$ réel :

$$
(u + v)' = u' + v' \qquad (ku)' = ku' \qquad (uv)' = u'v + uv' \qquad \left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}
$$

Et $\big(\cbleu{f}(a\corange{x} + b)\big)' = a\,\cbleu{f}'(a\corange{x} + b)$.

</div>

## Dérivée et variations

<div class="encadre">

Soit $\cbleu{f}$ dérivable sur un intervalle $I$.

- Si $\cbleu{f}' \ge 0$ sur $I$ (s'annulant en des points isolés), $\cbleu{f}$ est **croissante** sur $I$.
- Si $\cbleu{f}' \le 0$ sur $I$, $\cbleu{f}$ est **décroissante** sur $I$.
- Si $\cbleu{f}'$ s'annule **en changeant de signe** en $a$, $\cbleu{f}$ admet un **extremum local** en $a$.

</div>

À la loupe : si la tangente monte, la courbe monte. Au sommet d'une colline, la tangente est horizontale, $\cbleu{f}'(a) = 0$.

## La méthode complète

Pour $\cbleu{f}(\corange{x}) = \corange{x}^3 - 3\corange{x}$ (le signe de $\cbleu{f}'$ se lit avec le [second degré](/maths/premiere/second-degre/cours/)) :

$$
\begin{aligned}
\cbleu{f}'(\corange{x}) &= 3\corange{x}^2 - 3 = 3(\corange{x} - 1)(\corange{x} + 1) && \text{on dérive et on factorise} \\
\cbleu{f}'(\corange{x}) &> 0 \text{ si } \corange{x} < -1 \text{ ou } \corange{x} > 1 && \text{signe d'un trinôme} \\
\cbleu{f}(-1) &= 2 \quad \text{et} \quad \cbleu{f}(1) = -2 && \text{les extremums}
\end{aligned}
$$

$\cbleu{f}$ est croissante sur $]-\infty\,;-1]$, décroissante sur $[-1\,;1]$, croissante sur $[1\,;+\infty[$. Maximum local $2$ en $-1$, minimum local $-2$ en $1$.
