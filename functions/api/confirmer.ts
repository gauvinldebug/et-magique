import h from '../../netlify/functions/confirmer';
import { adapter } from '../../cloudflare/adaptateur';

export const onRequest = adapter(h);
