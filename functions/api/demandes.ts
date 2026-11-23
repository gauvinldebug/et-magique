import h from '../../netlify/functions/demandes';
import { adapter } from '../../cloudflare/adaptateur';

export const onRequest = adapter(h);
