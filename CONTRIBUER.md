# Ajouter un chapitre

Un chapitre = un dossier `src/content/<matiere>/<niveau>/<chapitre>/` avec 4 fichiers.
Le plus simple : copier `src/content/maths/terminale/suites-et-recurrence/` et remplacer le contenu.

| Fichier | Rôle | Onglet |
|---|---|---|
| `cours.md` | en-tête du chapitre (titre, vidéo, chapitres de la vidéo, piège, PDF) + le cours écrit | Vidéo, Cours |
| `exercices.yaml` | exercices, chacun avec énoncé, indice et étapes de correction | Exercices |
| `qcm.yaml` | questions, choix, bonne réponse (index à partir de 0), explication | QCM |
| `fiche.md` | fiche de révision d'une page | Fiche |

- Le `<chapitre>` doit être le `slug` prévu dans `src/data/programme.ts` : le chapitre devient alors cliquable dans le menu. Un chapitre hors programme s'ajoute à la fin de la liste.
- Quand la vidéo est en ligne : mettre son identifiant YouTube dans `video.youtube` (la partie après `v=`).
- Les PDF : `npm run build && npm run pdf && npm run build`. Ils sont proposés au téléchargement dès qu'ils existent dans `public/pdf/`.
- Le build vérifie la forme des fichiers (`src/content.config.ts`) : une erreur de frappe dans le YAML fait échouer le build au lieu de casser une page.

## Écrire les maths

Entre `$…$` (dans la ligne) ou `$$…$$` (formule centrée, sur sa propre ligne). Code couleur des vidéos :

| Macro | Rendu | Sens |
|---|---|---|
| `\cbleu{u}` | bleu | la suite, l'objet étudié |
| `\corange{n}` | orange | l'indice, k, l'hérédité |
| `\cvert{…}` | vert | initialisation, résultat validé |
| `\crouge{…}` | rouge | piège, limite |
| `\un`, `\unn`, `\uk`, `\ukk`, `\ukkk`, `\uz` | $u_n$, $u_{n+1}$, $u_k$, $u_{k+1}$, $u_{k+2}$, $u_0$ en couleurs | raccourcis |

Le surligneur : `<mark>…</mark>`. Dans le YAML, utiliser `|` ou `>-` dès qu'un texte contient « : ».

## Étapes de correction (`type`)

`init` (vert), `her` (orange), `conc` (bleu), `calcul`, `methode` (gris), `piege` (rouge). `note` ajoute une annotation manuscrite.
