// Toutes les heures : si une nouvelle vidéo est sortie sur la chaîne, on reconstruit le site
// (le build lit le flux de la chaîne et rattache la vidéo à son chapitre, voir src/lib/youtube.ts).
// Réglages Netlify : BUILD_HOOK_URL (Build hook du site), YOUTUBE_CHANNEL_ID (facultatif, sinon trouvé via @mathsetmagique).
import type { Config } from '@netlify/functions';
import { store } from '../lib/outils';

const HANDLE = 'https://www.youtube.com/@mathsetmagique';

export default async () => {
  const hook = process.env.BUILD_HOOK_URL;
  if (!hook) return new Response('BUILD_HOOK_URL manquant', { status: 200 });
  let id = process.env.YOUTUBE_CHANNEL_ID;
  if (!id) {
    const html = await (await fetch(HANDLE, { headers: { 'accept-language': 'fr' } })).text();
    id = html.match(/"(?:channelId|externalId)":"(UC[\w-]{22})"/)?.[1];
  }
  if (!id) return new Response('chaîne introuvable', { status: 200 });
  const xml = await (await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${id}`)).text();
  const ids = [...xml.matchAll(/<yt:videoId>([^<]+)/g)].map((m) => m[1]).sort().join(',');
  const s = store('limites');
  const avant = await s.get('youtube/videos', { type: 'text' });
  if (ids && ids !== avant) {
    await s.set('youtube/videos', ids);
    if (avant !== null) {
      await fetch(hook, { method: 'POST' });
      return new Response('nouvelle vidéo : site relancé');
    }
  }
  return new Response('rien de neuf');
};

export const config: Config = { schedule: '@hourly' };
