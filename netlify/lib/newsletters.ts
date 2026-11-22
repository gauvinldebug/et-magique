// Les textes des e-mails envoyés aux inscrits au planning.
//
//   - bienvenue : envoyé automatiquement quand l'inscrit clique sur le lien de confirmation ;
//   - ANNONCES  : nouvelle vidéo / nouveau chapitre ;
//   - PLANNINGS : le planning de la semaine, par niveau.
//
// Les annonces et les plannings ne partent JAMAIS tout seuls : dans /admin, onglet «&nbsp;E-mails&nbsp;»,
// on s'envoie d'abord un test, puis on clique «&nbsp;Envoyer aux inscrits&nbsp;». Un même e-mail
// n'est jamais envoyé deux fois à la même personne.
//
// Règles d'écriture : tutoiement, phrases courtes, pas d'emoji, un seul bouton principal.
import { esc, gabarit, p, titre, liste, etape, piege, bouton, surligne, lienDesinscription } from './emails';

export type Inscrit = { cle: string; email: string; prenom: string; niveau: string; age: string };
export type Email = { sujet: string; html: string };

const bonjour = (i: Inscrit) => p(i.prenom ? `Bonjour ${esc(i.prenom)},` : 'Bonjour,');
const parent = (i: Inscrit) => i.age === 'moins15';
const raison = 'Tu reçois cet e-mail parce que cette adresse est inscrite au planning de révision de Maths et Magique.';

/** Chapitres déjà en ligne, par niveau (à compléter à chaque nouveau chapitre). */
export const EN_LIGNE: Record<string, { titre: string; chemin: string }[]> = {
  terminale: [
    { titre: 'Suites et récurrence', chemin: '/maths/terminale/suites-et-recurrence/' },
    { titre: 'Limites de suites', chemin: '/maths/terminale/limites-de-suites/' },
  ],
};

const NOM_NIVEAU: Record<string, string> = { terminale: 'terminale', premiere: 'première', '3e': '3e' };

/* ---------- E-mail 2 : bienvenue (automatique, juste après la confirmation) ---------- */

export function bienvenue(origine: string, i: Inscrit): Email {
  const chapitres = EN_LIGNE[i.niveau] ?? [];
  const pourParent = parent(i)
    ? p(`Le planning arrivera à cette adresse : ${surligne('pense à le transmettre à ton enfant')}, ou mieux, faites le point ensemble une fois par semaine. Cinq minutes suffisent.`)
    : '';
  const commencer = chapitres.length
    ? titre('Pour commencer dès maintenant') +
      p(`Les chapitres de ${NOM_NIVEAU[i.niveau]} déjà en ligne, chacun avec sa vidéo, le cours, des exercices corrigés, un QCM et une fiche à imprimer :`) +
      liste(chapitres.map((c) => `<a href="${origine}${c.chemin}" style="color:#1F6FD1;font-weight:700">${c.titre}</a>`))
    : titre('Pour commencer') +
      p(`Les premiers chapitres de ${NOM_NIVEAU[i.niveau] ?? 'ton niveau'} sont en préparation. Ton planning démarre dès qu'ils sont en ligne, et on te prévient par e-mail. En attendant, tu peux demander en priorité le chapitre qui pose le plus problème :`) +
      `<p style="margin:0 0 18px">${bouton('Demander un chapitre', `${origine}/demandes/`, false)}</p>`;

  const corps =
    bonjour(i) +
    p(`C'est confirmé : ton inscription au planning de révision de Maths et Magique est validée. ${surligne('Bienvenue.')}`) +
    pourParent +
    titre('Ce qui va se passer') +
    liste([
      `<b>Chaque lundi</b>, un e-mail avec le planning de la semaine : le chapitre à revoir, la vidéo à regarder, les exercices à faire. Environ 1&nbsp;h&nbsp;30 de travail, en trois séances courtes.`,
      `<b>Le dernier mois avant l'épreuve</b>, deux e-mails par semaine.`,
      `<b>Quand une vidéo sort</b>, un court e-mail pour te prévenir.`,
    ]) +
    p(`Tout est gratuit, et ça le restera.`) +
    commencer +
    titre('Une astuce') +
    p(`Ajoute cette adresse à tes contacts. Sinon, le planning risque de finir dans les spams, et c'est le seul endroit où il ne sert à rien.`) +
    p(`À lundi,<br>Maths et Magique`);

  return {
    sujet: "C'est confirmé : ton planning arrive chaque lundi",
    html: gabarit({ preheader: 'Ce qui va se passer, et par quoi commencer dès aujourd’hui.', corps, origine, desinscription: lienDesinscription(origine, i.cle), raison }),
  };
}

/* ---------- Annonces et plannings : envoyés depuis l'admin ---------- */

export type Newsletter = {
  id: string; // ne jamais changer une fois envoyé (sert à ne pas renvoyer deux fois)
  type: 'annonce' | 'planning';
  nom: string; // ce qu'on voit dans l'admin
  niveaux: string[]; // qui le reçoit (niveau choisi à l'inscription)
  pret: boolean; // false = visible dans l'admin mais impossible à envoyer (ex. vidéo pas encore publiée)
  attente?: string; // ce qui manque quand pret = false
  rendu: (origine: string, i: Inscrit) => Email;
};

const LIMITES_VIDEO = ''; // lien YouTube de la vidéo «&nbsp;Limites de suites&nbsp;», à remplir à sa sortie

export const NEWSLETTERS: Newsletter[] = [
  {
    id: 'annonce-terminale-limites-de-suites',
    type: 'annonce',
    nom: 'Nouvelle vidéo : Limites de suites (terminale)',
    niveaux: ['terminale', 'autre'],
    pret: !!LIMITES_VIDEO,
    attente: 'Il manque le lien YouTube de la vidéo (elle doit être publiée).',
    rendu: (origine, i) => {
      const chapitre = `${origine}/maths/terminale/limites-de-suites/`;
      const corps =
        bonjour(i) +
        p(`La vidéo sur les ${surligne('limites de suites')} est en ligne. Tu vas suivre une fourmi qui marche vers un drapeau : c'est exactement ce que veut dire «&nbsp;la suite tend vers ℓ&nbsp;». Une fois que tu as vu la fourmi, la définition ne s'oublie plus.`) +
        titre('En 10 minutes') +
        liste([
          'les limites à connaître par cœur ;',
          'comment lever une forme indéterminée, sans réciter de recette ;',
          'le théorème des gendarmes et la limite monotone ;',
          'un exercice type bac corrigé pas à pas.',
        ]) +
        `<p style="margin:6px 0 22px">${bouton('Regarder la vidéo', LIMITES_VIDEO || chapitre)}</p>` +
        titre('Le piège du chapitre') +
        piege(`«&nbsp;Croissante et majorée par 5&nbsp;» ne veut pas dire «&nbsp;tend vers 5&nbsp;». La suite converge, oui, mais vers une limite qui peut être plus petite que 5. <b>La barrière n'est pas le drapeau.</b>`) +
        p(`Sur le site, tu trouves aussi le cours, 8 exercices corrigés, un QCM de 10 questions et la fiche à imprimer.`) +
        `<p style="margin:0 0 22px">${bouton('Ouvrir le chapitre', chapitre, false)}</p>` +
        p(`Bon visionnage,<br>Maths et Magique`);
      return {
        sujet: 'Nouvelle vidéo : les limites de suites',
        html: gabarit({ preheader: 'Une fourmi, un drapeau, et les formes indéterminées deviennent claires.', corps, origine, desinscription: lienDesinscription(origine, i.cle), raison }),
      };
    },
  },
  {
    id: 'planning-terminale-s1',
    type: 'planning',
    nom: 'Planning terminale, semaine 1 (suites)',
    niveaux: ['terminale'],
    pret: true,
    rendu: (origine, i) => {
      const ch = (slug: string, onglet = '') => `${origine}/maths/terminale/${slug}/${onglet}`;
      const a = (href: string, t: string) => `<a href="${href}" style="color:#1F6FD1;font-weight:700">${t}</a>`;
      const corps =
        bonjour(i) +
        p(`Voici ton premier planning. Le principe : ${surligne('1&nbsp;h&nbsp;30 dans la semaine, en trois séances de 30 minutes')}, plutôt qu'un marathon la veille du contrôle. Cette semaine, on consolide les suites, la base de tout le début d'année.`) +
        titre('Ta semaine') +
        etape('1', 'Suites et récurrence (30 min)',
          `Regarde la ${a(ch('suites-et-recurrence'), 'vidéo')} (6 min), puis relis la ${a(ch('suites-et-recurrence', 'fiche/'), 'fiche')}. Objectif : savoir rédiger les trois étapes d'une récurrence sans regarder.`) +
        etape('2', 'Limites de suites (30 min)',
          `Regarde la ${a(ch('limites-de-suites'), 'vidéo')} (10 min), puis fais les ${a(ch('limites-de-suites', 'exercices/'), 'exercices 1 à 3')} : opérations et formes indéterminées.`) +
        etape('3', 'Le test (30 min)',
          `Fais le QCM ${a(ch('suites-et-recurrence', 'qcm/'), 'Suites et récurrence')} et le QCM ${a(ch('limites-de-suites', 'qcm/'), 'Limites de suites')}, puis l'${a(ch('limites-de-suites', 'exercices/'), 'exercice 5')} (les gendarmes). Chaque question ratée, tu la notes dans la marge de ton cahier : c'est ta liste de la semaine prochaine.`) +
        titre('Le point méthode') +
        piege(`Une forme indéterminée n'est pas une réponse. Si tu écris «&nbsp;∞&nbsp;−&nbsp;∞&nbsp;», c'est le signal pour <b>factoriser par le terme le plus fort</b>, pas pour conclure.`) +
        p(`Bonne semaine,<br>Maths et Magique`);
      return {
        sujet: 'Ton planning de la semaine : les suites',
        html: gabarit({ preheader: '3 séances de 30 minutes pour consolider les suites.', corps, origine, desinscription: lienDesinscription(origine, i.cle), raison }),
      };
    },
  },
];

export const newsletter = (id: string) => NEWSLETTERS.find((n) => n.id === id);
