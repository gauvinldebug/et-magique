// Le profil de l'élève (« Qui es-tu ? ») : sa classe, ses spécialités, ce qui lui pose problème.
// Tout reste dans le navigateur (localStorage), sans compte ni cookie.
// Une fois le profil rempli, le site masque ce qui ne concerne pas l'élève, avec un bouton « Tout afficher ».

export type Profil = { classe: string; specialites: string[]; difficultes: string[]; tout?: boolean };

const CLE = 'profil';

export const CLASSES: { slug: string; court: string }[] = [
  { slug: '6e', court: '6e' }, { slug: '5e', court: '5e' }, { slug: '4e', court: '4e' }, { slug: '3e', court: '3e' },
  { slug: 'seconde', court: '2de' }, { slug: 'premiere', court: '1re' }, { slug: 'terminale', court: 'Tle' },
];

/** Les spécialités proposées sur le site. */
export const SPECIALITES: { slug: string; nom: string }[] = [
  { slug: 'maths', nom: 'Maths' }, { slug: 'physique', nom: 'Physique-chimie' }, { slug: 'svt', nom: 'SVT' }, { slug: 'nsi', nom: 'NSI' },
];

export const avecSpecialites = (classe: string) => classe === 'premiere' || classe === 'terminale';

export function lire(): Profil | null {
  try {
    const p = JSON.parse(localStorage.getItem(CLE) || 'null');
    return p && p.classe ? p : null;
  } catch { return null; }
}

export function ecrire(p: Profil | null) {
  try {
    if (p) localStorage.setItem(CLE, JSON.stringify(p));
    else localStorage.removeItem(CLE);
  } catch { /* navigation privée */ }
}

/** Les matières que l'élève a à sa classe (pour la question sur les difficultés). */
export function matieresDeClasse(classe: string): string[] {
  if (classe === '6e') return ['maths', 'physique', 'svt'];
  if (['5e', '4e', '3e'].includes(classe)) return ['maths', 'physique', 'svt', 'technologie'];
  return ['maths', 'physique', 'svt', 'nsi'];
}

/** Les matières à montrer : au lycée (1re, Tle), ses spécialités et les matières où il a du mal. */
export function matieresUtiles(p: Profil): string[] {
  if (!avecSpecialites(p.classe)) return matieresDeClasse(p.classe);
  const m = [...new Set([...p.specialites, ...p.difficultes])];
  return m.length ? m : matieresDeClasse(p.classe);
}

/** Les niveaux du site qui correspondent à sa classe (options et enseignement scientifique compris). */
export function niveauxUtiles(p: Profil): string[] {
  if (p.classe === 'premiere') return ['premiere', 'premiere-tronc-commun', 'ens-scientifique-premiere'];
  if (p.classe === 'terminale') return ['terminale', 'maths-complementaires', 'maths-expertes', 'ens-scientifique-terminale'];
  return [p.classe];
}

/**
 * Masque ce qui ne concerne pas l'élève. Chaque groupe [data-profil-groupe] contient des éléments
 * [data-matiere] ou [data-niveau]. Si le filtre ne laisse rien dans un groupe, on ne filtre pas ce groupe.
 */
export function appliquer(racine: ParentNode = document) {
  const p = lire();
  const html = document.documentElement;
  html.classList.toggle('profil-tout', !p || !!p.tout);
  racine.querySelectorAll<HTMLElement>('[data-profil-groupe]').forEach((g) => {
    const items = [...g.querySelectorAll<HTMLElement>('[data-matiere], [data-niveau]')];
    items.forEach((e) => e.classList.remove('hors-profil'));
    const bouton = g.querySelector<HTMLButtonElement>('[data-profil-tout]');
    if (!p) { if (bouton) bouton.hidden = true; return; }
    const mats = matieresUtiles(p), nivs = niveauxUtiles(p);
    const utile = (e: HTMLElement) =>
      e.hasAttribute('aria-current') ||
      (e.dataset.matiere ? mats.includes(e.dataset.matiere) : true) &&
      (e.dataset.niveau ? nivs.includes(e.dataset.niveau) : true);
    const hors = items.filter((e) => !utile(e));
    if (hors.length === items.length || !hors.length) { if (bouton) bouton.hidden = true; return; }
    hors.forEach((e) => e.classList.add('hors-profil'));
    if (bouton) {
      bouton.hidden = false;
      bouton.textContent = p.tout ? 'Afficher seulement ce qui me concerne' : `Tout afficher (${hors.length} de plus)`;
    }
  });
}

/** Branche les boutons « Tout afficher » (un seul réglage pour tout le site). */
export function brancherBoutons(racine: ParentNode = document) {
  racine.querySelectorAll<HTMLButtonElement>('[data-profil-tout]').forEach((b) => {
    if (b.dataset.branche) return;
    b.dataset.branche = '1';
    b.addEventListener('click', () => {
      const p = lire();
      if (!p) return;
      ecrire({ ...p, tout: !p.tout });
      appliquer();
    });
  });
}
