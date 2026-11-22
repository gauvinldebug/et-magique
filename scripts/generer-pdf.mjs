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
for (const [m, n, c] of chapitres) {
  await mkdir(join('public/pdf', m, n), { recursive: true });
  for (const [quoi, chemin] of [['cours', 'cours/'], ['fiche', 'fiche/'], ['exercices', 'exercices/']]) {
    const url = `http://localhost:4399/${m}/${n}/${c}/${chemin}`;
    const r = await page.goto(url, { waitUntil: 'networkidle' });
    if (!r || r.status() !== 200) continue;
    await page.emulateMedia({ media: 'print' });
    const out = join('public/pdf', m, n, `${c}-${quoi}.pdf`);
    await page.pdf({ path: out, format: 'A4', printBackground: true, margin: { top: '12mm', bottom: '12mm', left: '10mm', right: '10mm' } });
    console.log('✓', out);
  }
}
await browser.close();
server.close();
