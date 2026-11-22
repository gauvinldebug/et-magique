// Réglages KaTeX partagés par tout le site (cours en Markdown, exercices et QCM en YAML).
// Les macros donnent le code couleur des vidéos :
//   \cbleu{u}   la suite / l'objet étudié      (bleu)
//   \corange{n} l'indice, k, l'hérédité        (orange)
//   \cvert{..}  initialisation, résultat validé (vert)
//   \crouge{..} piège, limite                   (rouge)
// Raccourcis : \un = u_n, \unn = u_{n+1}, \uk = u_k, \ukk = u_{k+1}, \ukkk = u_{k+2}, \uz = u_0
export const katexMacros = {
  '\\cbleu': '\\htmlClass{t}{#1}',
  '\\corange': '\\htmlClass{i}{#1}',
  '\\cvert': '\\htmlClass{o}{#1}',
  '\\crouge': '\\htmlClass{p}{#1}',
  '\\U': '\\cbleu{u}',
  '\\un': '\\cbleu{u}_{\\corange{n}}',
  '\\unn': '\\cbleu{u}_{\\corange{n+1}}',
  '\\uk': '\\cbleu{u}_{\\corange{k}}',
  '\\ukk': '\\cbleu{u}_{\\corange{k+1}}',
  '\\ukkk': '\\cbleu{u}_{\\corange{k+2}}',
  '\\uz': '\\cbleu{u}_{\\corange{0}}',
  '\\N': '\\mathbb{N}',
  '\\R': '\\mathbb{R}',
};

export const katexOptions = {
  macros: katexMacros,
  strict: false,
  // \htmlClass sert seulement à poser les classes de couleur.
  trust: (ctx) => ctx.command === '\\htmlClass',
};
