// Image du score à partager (1080 × 1350, le format portrait d'Instagram), aux couleurs de l'affiche.
// Tout est dessiné sur l'appareil : aucune donnée ne part nulle part.

const FONDS: Record<string, string> = { maths: '#2B2BD9', physique: '#0E7C7C', svt: '#127C59', nsi: '#1A1A40', technologie: '#C2185B' };
const JAUNE = '#F2E94E', ROSE = '#FF7AA8', ENCRE = '#1A1A40';

interface Donnees { score: number; total: number; titre: string; sousTitre: string; matiere: string }

/** Coupe un texte en lignes qui tiennent dans `largeur`. */
function lignes(ctx: CanvasRenderingContext2D, texte: string, largeur: number): string[] {
  const mots = texte.split(/\s+/);
  const out: string[] = [];
  let l = '';
  for (const m of mots) {
    const essai = l ? `${l} ${m}` : m;
    if (ctx.measureText(essai).width > largeur && l) { out.push(l); l = m; } else l = essai;
  }
  if (l) out.push(l);
  return out;
}

export async function imageScore(d: Donnees): Promise<Blob> {
  const W = 1080, H = 1350;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const ctx = c.getContext('2d')!;
  const famille = getComputedStyle(document.documentElement).getPropertyValue('--f-titre').trim() || 'sans-serif';
  try { await document.fonts.load(`800 100px ${famille}`); } catch { /* police système */ }
  const police = (poids: number, taille: number) => {
    ctx.font = `${poids} ${taille}px ${famille}`;
    (ctx as any).fontStretch = 'condensed';
  };

  // Le fond et les formes de l'affiche
  ctx.fillStyle = FONDS[d.matiere] ?? FONDS.maths;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = JAUNE;
  ctx.beginPath(); ctx.arc(990, 1140, 300, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = ROSE;
  ctx.beginPath(); ctx.moveTo(560, H); ctx.lineTo(760, 900); ctx.lineTo(960, H); ctx.closePath(); ctx.fill();
  ctx.fillStyle = ENCRE;
  ctx.fillRect(930, 90, 70, 70);
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 12; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(1010, 700); ctx.quadraticCurveTo(900, 820, 990, 960); ctx.stroke();

  const x = 90;
  ctx.fillStyle = '#fff';
  ctx.textBaseline = 'alphabetic';

  // Le bandeau du haut
  police(700, 38);
  ctx.globalAlpha = .85;
  ctx.fillText(d.sousTitre.toUpperCase(), x, 150);
  ctx.globalAlpha = 1;

  // Le titre du QCM
  police(800, 78);
  const t = lignes(ctx, d.titre, W - 2 * x - 60).slice(0, 3);
  t.forEach((l, i) => ctx.fillText(l, x, 260 + i * 82));

  // Le score, en très grand
  const yScore = 260 + t.length * 82 + 330;
  police(800, 360);
  const s = String(d.score);
  ctx.fillText(s, x - 10, yScore);
  const ls = ctx.measureText(s).width;
  police(800, 150);
  ctx.fillStyle = JAUNE;
  ctx.fillText(`/${d.total}`, x + ls + 6, yScore);

  // Le message et l'adresse
  ctx.fillStyle = '#fff';
  police(700, 56);
  const r = d.score / d.total;
  ctx.fillText(r === 1 ? 'Sans faute.' : r >= .7 ? 'Pas mal du tout.' : 'Je vais faire mieux.', x, yScore + 100);
  police(800, 64);
  ctx.fillText('Et toi ?', x, yScore + 180);

  ctx.fillStyle = ENCRE;
  ctx.fillRect(0, H - 120, W, 120);
  ctx.fillStyle = '#fff';
  police(700, 40);
  ctx.fillText(location.host, x, H - 48);

  return new Promise((ok, ko) => c.toBlob((b) => (b ? ok(b) : ko(new Error('image'))), 'image/png'));
}
