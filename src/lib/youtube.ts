// Les vidéos de la chaîne, lues dans son flux RSS public au moment de construire le site.
// Une vidéo est rattachée à un chapitre si sa description contient le lien du chapitre
// (etmagique.fr/r/terminale/suites-et-recurrence, /qr/… ou /maths/…), sinon si son titre contient le titre du chapitre.
// Une fonction planifiée (netlify/functions/verifier-youtube.ts) relance la construction quand une vidéo sort.
import { MATIERES } from '../data/site';

export type VideoYT = { id: string; titre: string; description: string; date: string };

const cache = new Map<string, Promise<VideoYT[]>>();

async function idChaine(handleUrl: string): Promise<string | undefined> {
  const env = import.meta.env.YOUTUBE_CHANNEL_ID || process.env.YOUTUBE_CHANNEL_ID;
  if (env) return env;
  const r = await fetch(handleUrl, { headers: { 'accept-language': 'fr' } });
  const html = await r.text();
  return html.match(/"(?:channelId|externalId)":"(UC[\w-]{22})"/)?.[1];
}

const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

export function videosChaine(matiere = 'maths'): Promise<VideoYT[]> {
  if (!cache.has(matiere)) {
    cache.set(matiere, (async () => {
      const m = MATIERES.find((x) => x.slug === matiere);
      if (!m?.youtube) return [];
      try {
        const id = await idChaine(m.youtube);
        if (!id) return [];
        const xml = await (await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${id}`)).text();
        return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, e]) => ({
          id: e.match(/<yt:videoId>([^<]+)/)?.[1] ?? '',
          titre: decode(e.match(/<title>([^<]*)/)?.[1] ?? ''),
          description: decode(e.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] ?? ''),
          date: e.match(/<published>([^<]+)/)?.[1] ?? '',
        })).filter((v) => v.id);
      } catch {
        console.warn('[youtube] flux de la chaîne illisible, on garde les identifiants écrits à la main');
        return [];
      }
    })());
  }
  return cache.get(matiere)!;
}

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** L'identifiant YouTube d'un chapitre : celui écrit à la main, sinon celui trouvé dans le flux de la chaîne. */
export async function videoDuChapitre(matiere: string, niveau: string, slug: string, court: string, manuel?: string): Promise<{ id?: string; date?: string }> {
  const videos = await videosChaine(matiere);
  if (manuel) return { id: manuel, date: videos.find((v) => v.id === manuel)?.date };
  const lien = new RegExp(`/(?:r|qr|${matiere})/${niveau}/${slug}(?![\\w-])`);
  const t = norm(court);
  const v = videos.find((x) => lien.test(x.description)) ?? videos.find((x) => norm(x.titre).includes(t));
  return { id: v?.id, date: v?.date };
}
