// Génère les PDF (cours, fiche, exercices corrigés) de chaque chapitre à partir du site construit.
// Usage : npm run build && npm run pdf && npm run build
// Les PDF sont écrits dans public/pdf/<matiere>/<niveau>/<chapitre>-{cours,fiche,exercices}.pdf
import { createServer } from 'node:http';
import { readFile, mkdir, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { chromium } from 'playwright';

const DIST = 'dist';
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.svg': 'image/svg+xml' };
const server = createServer(async (req, res) => {
  let p = join(DIST, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  try { if ((await stat(p)).isDirectory()) p = join(p, 'index.html'); } catch { /* 404 */ }
  try { res.writeHead(200, { 'content-type': types[extname(p)] ?? 'application/octet-stream' }); res.end(await readFile(p)); }
  catch { res.writeHead(404); res.end(); }
}).listen(4399);

const chapitres = [];
const content = 'src/content';
for (const m of await readdir(content)) for (const n of await readdir(join(content, m)).catch(() => [])) for (const c of await readdir(join(content, m, n)).catch(() => [])) chapitres.push([m, n, c]);

// Chromium installé par Playwright, ou celui indiqué par CHROMIUM_PATH.
const exe = process.env.CHROMIUM_PATH || (existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
const browser = await chromium.launch(exe ? { executablePath: exe } : {});
const page = await browser.newPage();
// FILTRE=terminale/limites-de-suites ne régénère que les chapitres dont le chemin contient ce texte.
const filtre = process.env.FILTRE;
for (const [m, n, c] of chapitres) {
  if (filtre && !`${m}/${n}/${c}`.includes(filtre)) continue;
  await mkdir(join('public/pdf', m, n), { recursive: true });
  for (const [quoi, chemin] of [['cours', 'cours/'], ['fiche', 'fiche/'], ['exercices', 'exercices/']]) {
    const url = `http://localhost:4399/${m}/${n}/${c}/${chemin}`;
    const r = await page.goto(url, { waitUntil: 'networkidle' });
    if (!r || r.status() !== 200) continue;
    await page.emulateMedia({ media: 'print' });
    const out = join('public/pdf', m, n, `${c}-${quoi}.pdf`);
    const options = {
      path: out, format: 'A4', printBackground: true,
      margin: { top: '10mm', bottom: '13mm', left: '12mm', right: '12mm' },
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: `<div style="width:100%;font:7px sans-serif;color:#8A8AA3;padding:0 12mm;display:flex;justify-content:space-between;gap:8mm">
        <span>© ${{ maths: 'Maths', physique: 'Physique-chimie', svt: 'SVT', histoire: 'Histoire', francais: 'Français' }[m] ?? 'Maths'} et Magique · etmagique.fr/${m}/${n}/${c}/ · Tous droits réservés : usage personnel uniquement, republication et usage commercial interdits</span>
        <span style="font-weight:700;color:#1A1A40"><span class="pageNumber"></span>/<span class="totalPages"></span></span></div>`,
    };
    // La fiche doit tenir sur une page : si elle déborde, on réduit un peu l'échelle.
    for (const scale of quoi === 'fiche' ? [1, 0.94, 0.88, 0.82, 0.76] : [1]) {
      const pdf = await page.pdf({ ...options, scale });
      const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
      if (pages <= 1 || scale === 0.76) { if (scale !== 1 || pages > 1) console.log(`  fiche à l'échelle ${scale}, ${pages} page(s)`); break; }
    }
    console.log('✓', out);
  }
}
await browser.close();
server.close();
