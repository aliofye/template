import { hc } from 'hono/client';
import type { AppType } from '@/api/app';

export const client = hc<AppType>(import.meta.env.PUBLIC_WEB_API_URL);
