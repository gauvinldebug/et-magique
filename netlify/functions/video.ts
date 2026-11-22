// GET /api/video?m=maths&n=terminale&c=limites-de-suites&t=Limites%20de%20suites
// Cherche dans le flux RSS de la chaîne la vidéo d'un chapitre (lien du chapitre dans la description, sinon titre).
// Sert aux pages construites avant la sortie de la vidéo : la vignette apparaît dès que la vidéo est en ligne,
// sans attendre une reconstruction du site. Réponse mise en cache 30 min par le CDN de Netlify.
import type { Config } from '@netlify/functions';

const CHAINES: Record<string, string> = { maths: 'UChNsi3Kbyr6fey6cAJy6I5A' };
const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

export default async (req: Request) => {
  const u = new URL(req.url);
  const m = u.searchParams.get('m') ?? 'maths';
  const n = (u.searchParams.get('n') ?? '').replace(/[^a-z0-9-]/g, '');
  const c = (u.searchParams.get('c') ?? '').replace(/[^a-z0-9-]/g, '');
  const t = norm(u.searchParams.get('t') ?? '');
  const chaine = process.env.YOUTUBE_CHANNEL_ID || CHAINES[m];
  let id: string | undefined;
  if (chaine && n && c) {
    try {
      const xml = await (await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${chaine}`)).text();
      const videos = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, e]) => ({
        id: e.match(/<yt:videoId>([^<]+)/)?.[1] ?? '',
        titre: decode(e.match(/<title>([^<]*)/)?.[1] ?? ''),
        description: decode(e.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] ?? ''),
      }));
      const lien = new RegExp(`/(?:r|qr|${m})/${n}/${c}(?![\\w-])`);
      id = (videos.find((v) => lien.test(v.description)) ?? (t ? videos.find((v) => norm(v.titre).includes(t)) : undefined))?.id;
    } catch { /* flux illisible : pas de vidéo */ }
  }
  return new Response(JSON.stringify({ id: id ?? null }), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
      'netlify-cdn-cache-control': 'public, durable, s-maxage=1800, stale-while-revalidate=600',
    },
  });
};

export const config: Config = { path: '/api/video' };
