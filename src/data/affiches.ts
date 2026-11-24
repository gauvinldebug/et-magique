// Les couleurs et les formes de la charte « Affiche », partagées par l'accueil, la barre des matières,
// le pied de page et les bandeaux des pages niveau et chapitre.
// Chaque matière a son affiche : un aplat, une forme qui dit la matière, le texte en dessous (jamais sur la forme).
export const AFFICHES: Record<string, { fond: string; txt: string; forme: string }> = {
  // une parabole devant un disque
  maths: { fond: 'var(--bleu)', txt: '#fff', forme: '<svg viewBox="0 0 320 220" preserveAspectRatio="xMaxYMin meet"><circle class="f-a" cx="190" cy="110" r="95" fill="#F2E94E"/><path class="f-b" d="M70 210 Q 190 -90 310 210" fill="none" stroke="#1A1A40" stroke-width="12" stroke-linecap="round"/></svg>' },
  // une onde
  physique: { fond: 'var(--orange)', txt: 'var(--ink)', forme: '<svg viewBox="-8 0 256 120" preserveAspectRatio="xMidYMid meet"><path class="f-b" d="M0 60 Q 30 0 60 60 T 120 60 T 180 60 T 240 60" fill="none" stroke="#1A1A40" stroke-width="8" stroke-linecap="round"/></svg>' },
  // une double hélice : l'ADN
  svt: { fond: 'var(--vert)', txt: '#fff', forme: '<svg viewBox="0 0 200 200" preserveAspectRatio="xMaxYMin meet"><g stroke-width="10" stroke-linecap="round"><path d="M70 30 H130 M70 80 H130 M70 120 H130 M70 170 H130" stroke="#fff" opacity=".55"/><path class="f-a" d="M50 10 C 50 60, 150 60, 150 100 S 50 140, 50 190" fill="none" stroke="#F2E94E"/><path class="f-b" d="M150 10 C 150 60, 50 60, 50 100 S 150 140, 150 190" fill="none" stroke="#fff"/></g></svg>' },
  // un sablier : le temps qui passe
  histoire: { fond: 'var(--brique)', txt: '#fff', forme: '<svg viewBox="0 0 140 200" preserveAspectRatio="xMaxYMin meet"><rect x="10" y="8" width="120" height="14" fill="#fff"/><rect x="10" y="178" width="120" height="14" fill="#fff"/><polygon points="24,22 116,22 70,100" fill="#fff"/><polygon points="70,100 116,178 24,178" fill="#fff"/><polygon class="f-a" points="70,128 100,178 40,178" fill="#F2E94E"/></svg>' },
  // des guillemets : la parole, le texte
  francais: { fond: 'var(--violet)', txt: '#fff', forme: '<svg viewBox="0 0 200 160" preserveAspectRatio="xMaxYMin meet"><text class="f-a" x="0" y="150" font-family="Georgia,serif" font-size="220" fill="#FF7AA8">«</text></svg>' },
};

// Une couleur d'affiche par niveau (la même que sur les tuiles du sommaire), avec les quatre formes
// du bandeau choisies pour bien se détacher du fond : disque, triangle, carré, courbe.
type Teinte = { fond: string; txt: string; f1: string; f2: string; f3: string; f4: string };
export const TEINTES = {
  bleu:   { fond: '#2B2BD9', txt: '#fff',    f1: '#F2E94E', f2: '#FF7AA8', f3: '#1A1A40', f4: '#fff' },
  jaune:  { fond: '#F2E94E', txt: '#1A1A40', f1: '#2B2BD9', f2: '#FF7AA8', f3: '#1A1A40', f4: '#1A1A40' },
  rose:   { fond: '#FF7AA8', txt: '#1A1A40', f1: '#2B2BD9', f2: '#F2E94E', f3: '#1A1A40', f4: '#fff' },
  orange: { fond: '#FF8A3D', txt: '#1A1A40', f1: '#2B2BD9', f2: '#F2E94E', f3: '#1A1A40', f4: '#1A1A40' },
  vert:   { fond: '#127C59', txt: '#fff',    f1: '#F2E94E', f2: '#FF7AA8', f3: '#1A1A40', f4: '#fff' },
  violet: { fond: '#7B3FB8', txt: '#fff',    f1: '#FF7AA8', f2: '#F2E94E', f3: '#1A1A40', f4: '#fff' },
  encre:  { fond: '#1A1A40', txt: '#fff',    f1: '#F2E94E', f2: '#FF7AA8', f3: '#2B2BD9', f4: '#fff' },
  brique: { fond: '#B8442A', txt: '#fff',    f1: '#F2E94E', f2: '#FF7AA8', f3: '#1A1A40', f4: '#fff' },
} satisfies Record<string, Teinte>;
const T = TEINTES;
const PAR_NIVEAU: Record<string, Teinte> = {
  '6e': T.bleu, '5e': T.jaune, '4e': T.rose, '3e': T.orange, seconde: T.vert, premiere: T.violet, terminale: T.encre,
};
export const teinteNiveau = (slug: string): Teinte => PAR_NIVEAU[slug] ?? T.brique;
export const styleTeinte = (t: Teinte) => `--fond:${t.fond};--txt:${t.txt};--f1:${t.f1};--f2:${t.f2};--f3:${t.f3};--f4:${t.f4}`;
