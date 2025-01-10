import type { AppType } from '@api';
import { hc } from 'hono/client';

export const client = hc<AppType>(import.meta.env.PUBLIC_WEB_API_URL);
