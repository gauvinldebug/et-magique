// Le contenu du site. Un chapitre = un dossier :
//   src/content/<matiere>/<niveau>/<chapitre>/
//     cours.md         la page chapitre (en-tête) + le cours écrit
//     exercices.yaml   les exercices corrigés étape par étape
//     qcm.yaml         le QCM d'auto-évaluation
//     fiche.md         la fiche de révision (1 page à imprimer)
// L'identifiant de chaque entrée est « matiere/niveau/chapitre ».
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const dossier = ({ entry }: { entry: string }) => entry.split('/').slice(0, 3).join('/');


const chapitres = defineCollection({
  loader: glob({ base: './src/content', pattern: '*/*/*/cours.md', generateId: dossier }),
  schema: z.object({
    titre: z.string(), // titre long : « Suites et raisonnement par récurrence »
    court: z.string(), // titre du menu : « Suites et récurrence »
    description: z.string(), // pour Google et les partages
    ordre: z.number().default(99),
    publie: z.coerce.date(),
    video: z.object({
      youtube: z.string().optional(), // identifiant YouTube, vide tant que la vidéo n'est pas en ligne
      duree: z.string().optional(), // « 10 min »
      chapitres: z.array(z.object({ t: z.string(), titre: z.string() })).default([]),
    }),
    piege: z.string().optional(), // le piège du chapitre, en Markdown
    pdf: z
      .object({ cours: z.string().optional(), fiche: z.string().optional(), exercices: z.string().optional() })
      .default({}),
    suivant: z.string().optional(), // slug du chapitre suivant
  }),
});

const etape = z.object({
  type: z.enum(['init', 'her', 'conc', 'calcul', 'piege', 'methode']).default('calcul'),
  titre: z.string(),
  texte: z.string(),
  note: z.string().optional(), // annotation manuscrite (Caveat, orange)
});

const exercices = defineCollection({
  loader: glob({ base: './src/content', pattern: '*/*/*/exercices.yaml', generateId: dossier }),
  schema: z.object({
    exercices: z.array(
      z.object({
        titre: z.string(),
        difficulte: z.number().min(1).max(3),
        type: z.enum(['application', 'methode', 'bac', 'brevet', 'piege']).default('application'),
        enonce: z.string(),
        indice: z.string().optional(),
        etapes: z.array(etape).min(1),
      }),
    ),
  }),
});

const qcm = defineCollection({
  loader: glob({ base: './src/content', pattern: '*/*/*/qcm.yaml', generateId: dossier }),
  schema: z.object({
    questions: z.array(
      z.object({
        question: z.string(),
        choix: z.array(z.string()).min(2).max(5),
        bonne: z.number(), // index (à partir de 0) de la bonne réponse
        explication: z.string(),
        revoir: z.enum(['video', 'cours', 'exercices']).optional(),
      }),
    ),
  }),
});

const fiches = defineCollection({
  loader: glob({ base: './src/content', pattern: '*/*/*/fiche.md', generateId: dossier }),
  schema: z.object({ titre: z.string() }),
});

const annales = defineCollection({
  loader: glob({ base: './src/content-annales', pattern: '**/*.md' }),
  schema: z.object({
    titre: z.string(),
    matiere: z.string(),
    examen: z.enum(['bac', 'brevet', 'bac-blanc', 'brevet-blanc']),
    annee: z.number(),
    session: z.string(), // « Métropole, juin »
    sujet: z.string().optional(), // lien PDF
    chapitres: z.array(z.string()).default([]),
  }),
});

export const collections = { chapitres, exercices, qcm, fiches, annales };

