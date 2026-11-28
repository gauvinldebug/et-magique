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
  // des chevrons de code : < / >
  nsi: { fond: 'var(--ink)', txt: '#fff', forme: '<svg viewBox="0 0 220 160" preserveAspectRatio="xMaxYMin meet"><g fill="none" stroke-width="14" stroke-linecap="square"><path class="f-a" d="M70 30 L20 80 L70 130" stroke="#F2E94E"/><path class="f-b" d="M150 30 L200 80 L150 130" stroke="#F2E94E"/><path d="M128 20 L92 140" stroke="#FF7AA8"/></g></svg>' },
  // une ampoule : l'idée qu'on fabrique
  technologie: { fond: 'var(--rose)', txt: 'var(--ink)', forme: '<svg viewBox="0 0 160 200" preserveAspectRatio="xMaxYMin meet"><circle class="f-a" cx="80" cy="72" r="58" fill="#F2E94E"/><rect x="56" y="128" width="48" height="16" fill="#1A1A40"/><rect x="60" y="150" width="40" height="14" fill="#1A1A40"/><rect x="68" y="170" width="24" height="12" fill="#1A1A40"/><path class="f-b" d="M60 96 Q 70 70 80 96 Q 90 70 100 96" fill="none" stroke="#1A1A40" stroke-width="6" stroke-linecap="round"/></svg>' },
  // un sablier : le temps qui passe
  histoire: { fond: 'var(--brique)', txt: '#fff', forme: '<svg viewBox="0 0 140 200" preserveAspectRatio="xMaxYMin meet"><rect x="10" y="8" width="120" height="14" fill="#fff"/><rect x="10" y="178" width="120" height="14" fill="#fff"/><polygon points="24,22 116,22 70,100" fill="#fff"/><polygon points="70,100 116,178 24,178" fill="#fff"/><polygon class="f-a" points="70,128 100,178 40,178" fill="#F2E94E"/></svg>' },
  // des guillemets : la parole, le texte
  francais: { fond: 'var(--violet)', txt: '#fff', forme: '<svg viewBox="0 0 200 160" preserveAspectRatio="xMaxYMin meet"><text class="f-a" x="0" y="150" font-family="Georgia,serif" font-size="220" fill="#FF7AA8">«</text></svg>' },
  // une bulle de dialogue
  anglais: { fond: '#E0263C', txt: '#fff', forme: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMaxYMin meet"><path class="f-a" d="M20 20 H180 V120 H80 L40 160 V120 H20 Z" fill="#fff"/><text class="f-b" x="100" y="94" text-anchor="middle" font-family="Archivo,Arial,sans-serif" font-weight="800" font-size="64" fill="#E0263C">EN</text></svg>' },
  // une bulle de dialogue
  espagnol: { fond: '#F2E94E', txt: 'var(--ink)', forme: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMaxYMin meet"><path class="f-a" d="M20 20 H180 V120 H80 L40 160 V120 H20 Z" fill="#1A1A40"/><text class="f-b" x="100" y="94" text-anchor="middle" font-family="Archivo,Arial,sans-serif" font-weight="800" font-size="64" fill="#F2E94E">ES</text></svg>' },
  // une bulle de dialogue
  allemand: { fond: '#00A6A6', txt: 'var(--ink)', forme: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMaxYMin meet"><path class="f-a" d="M20 20 H180 V120 H80 L40 160 V120 H20 Z" fill="#1A1A40"/><text class="f-b" x="100" y="94" text-anchor="middle" font-family="Archivo,Arial,sans-serif" font-weight="800" font-size="64" fill="#00A6A6">DE</text></svg>' },
  // une colonne antique
  latin: { fond: '#C9A227', txt: 'var(--ink)', forme: '<svg viewBox="0 0 160 200" preserveAspectRatio="xMaxYMin meet"><rect x="10" y="10" width="140" height="22" fill="#1A1A40"/><rect class="f-a" x="24" y="32" width="112" height="12" fill="#fff"/><g fill="#fff"><rect x="34" y="44" width="16" height="120"/><rect x="60" y="44" width="16" height="120"/><rect x="86" y="44" width="16" height="120"/><rect x="112" y="44" width="16" height="120"/></g><rect class="f-b" x="10" y="164" width="140" height="24" fill="#1A1A40"/></svg>' },
  // un point d'interrogation
  philosophie: { fond: '#5B6B7F', txt: '#fff', forme: '<svg viewBox="0 0 160 200" preserveAspectRatio="xMaxYMin meet"><path class="f-a" d="M40 62 A40 40 0 1 1 100 96 Q80 108 80 134" fill="none" stroke="#F2E94E" stroke-width="22" stroke-linecap="round"/><circle class="f-b" cx="80" cy="176" r="14" fill="#fff"/></svg>' },
  // des barres qui montent
  ses: { fond: '#8BC34A', txt: 'var(--ink)', forme: '<svg viewBox="0 0 200 180" preserveAspectRatio="xMaxYMin meet"><g fill="#1A1A40"><rect x="20" y="110" width="34" height="60"/><rect x="70" y="80" width="34" height="90"/><rect x="120" y="50" width="34" height="120"/></g><path class="f-a" d="M20 90 L80 50 L120 70 L185 15" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path class="f-b" d="M160 12 H188 V40" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
  // un globe
  hggsp: { fond: '#004E64', txt: '#fff', forme: '<svg viewBox="0 0 200 200" preserveAspectRatio="xMaxYMin meet"><circle class="f-a" cx="100" cy="100" r="82" fill="#F2E94E"/><g fill="none" stroke="#1A1A40" stroke-width="7"><ellipse cx="100" cy="100" rx="36" ry="82"/><path d="M18 100 H182 M30 60 H170 M30 140 H170"/></g><circle class="f-b" cx="100" cy="100" r="82" fill="none" stroke="#1A1A40" stroke-width="7"/></svg>' },
  // un livre ouvert
  hlp: { fond: '#E8D3B0', txt: 'var(--ink)', forme: '<svg viewBox="0 0 220 160" preserveAspectRatio="xMaxYMin meet"><path class="f-a" d="M110 30 Q70 10 20 20 V140 Q70 130 110 150 Z" fill="#1A1A40"/><path class="f-b" d="M110 30 Q150 10 200 20 V140 Q150 130 110 150 Z" fill="#7B3FB8"/><g stroke="#fff" stroke-width="5" stroke-linecap="round"><path d="M40 50 H90 M40 72 H90 M40 94 H80"/></g></svg>' },
  // un engrenage
  si: { fond: '#6D4C41', txt: '#fff', forme: '<svg viewBox="0 0 200 200" preserveAspectRatio="xMaxYMin meet"><g class="f-a"><g fill="#F2E94E" transform="translate(100 100)"><circle r="58"/><g><rect x="-14" y="-88" width="28" height="36"/><rect x="-14" y="52" width="28" height="36"/><rect x="-88" y="-14" width="36" height="28"/><rect x="52" y="-14" width="36" height="28"/></g><g transform="rotate(45)"><rect x="-14" y="-88" width="28" height="36"/><rect x="-14" y="52" width="28" height="36"/><rect x="-88" y="-14" width="36" height="28"/><rect x="52" y="-14" width="36" height="28"/></g></g></g><circle class="f-b" cx="100" cy="100" r="24" fill="#6D4C41"/></svg>' },
  // un pinceau et une tache
  arts: { fond: '#FF4FD8', txt: 'var(--ink)', forme: '<svg viewBox="0 0 200 200" preserveAspectRatio="xMaxYMin meet"><circle class="f-a" cx="80" cy="120" r="64" fill="#F2E94E"/><g class="f-b"><g transform="rotate(-40 130 80)"><rect x="122" y="-10" width="16" height="110" fill="#1A1A40"/><path d="M116 100 H144 L140 140 Q130 160 120 140 Z" fill="#2B2BD9"/></g></g></svg>' },
  // deux croches
  musique: { fond: '#3FA9F5', txt: 'var(--ink)', forme: '<svg viewBox="0 0 200 200" preserveAspectRatio="xMaxYMin meet"><g fill="#1A1A40"><ellipse class="f-a" cx="52" cy="160" rx="30" ry="22"/><ellipse class="f-b" cx="146" cy="140" rx="30" ry="22"/><rect x="70" y="30" width="12" height="132"/><rect x="164" y="10" width="12" height="132"/><path d="M70 30 L176 10 V40 L70 60 Z"/></g></svg>' },
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
