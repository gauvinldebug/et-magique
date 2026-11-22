---
titre: Logarithme népérien
---

<div class="encadre">

**L'image.** $\ln$ est le **chemin retour** de l'exponentielle : $\mathrm{e}^{\ln a} = a$ et $\ln(\mathrm{e}^{\corange{x}}) = \corange{x}$. Les courbes sont symétriques par rapport à $y = x$. Son super-pouvoir : il change les $\times$ en $+$.

</div>

## Les règles

- $\ln 1 = 0$ ; $\ln \mathrm{e} = 1$ ; $\ln$ définie sur $]0\,;+\infty[$ uniquement.
- $\ln(ab) = \ln a + \ln b$ ; $\ln\frac{a}{b} = \ln a - \ln b$ ; $\ln\frac{1}{b} = -\ln b$.
- $\ln(a^n) = n\ln a$ ; $\ln\sqrt{a} = \frac{1}{2}\ln a$.

## Résoudre

<div class="etape o">

1. J'écris l'**ensemble de résolution** : tout ce qui est dans un $\ln$ doit être $> 0$.
2. $\ln A = \ln B \iff A = B$ ; $\ln A < \ln B \iff A < B$ ; $\ln \corange{x} = k \iff \corange{x} = \mathrm{e}^k$.
3. Pour $q^{\corange{n}} \ge k$ : je passe au $\ln$ et je divise par $\ln q$ (attention au **signe** de $\ln q$).
4. Je vérifie que les solutions sont dans l'ensemble de résolution.

</div>

## Étude

- $(\ln \corange{x})' = \frac{1}{\corange{x}}$ ; $(\ln u)' = \frac{u'}{u}$.
- $\ln$ strictement croissante, concave ; négative sur $]0\,;1[$, positive sur $]1\,;+\infty[$.
- $\lim\limits_{+\infty} \ln = +\infty$ ; $\lim\limits_{0^+} \ln = -\infty$ (asymptote $x = 0$).
- **Croissances comparées** : $\frac{\ln \corange{x}}{\corange{x}^n} \to 0$ en $+\infty$ ; $\corange{x}^n\ln \corange{x} \to 0$ en $0^+$.
- $\frac{\ln(1 + \corange{x})}{\corange{x}} \to 1$ en 0.

## Les pièges

- <span class="p">$\ln(a + b) \ne \ln a + \ln b$</span>.
- Si $0 < q < 1$, $\ln q < 0$ : diviser par $\ln q$ **change le sens** de l'inégalité.
- $\ln(\corange{x}^2) = 2\ln|\corange{x}|$, et pas $2\ln \corange{x}$ quand $\corange{x} < 0$.
- Ne jamais oublier l'ensemble de résolution.
