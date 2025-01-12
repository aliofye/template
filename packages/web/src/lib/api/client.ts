/**
 * This file sets up the client for the API.
 * It ensures type safety between api and web and can be reused across the application.
 */

import { hc } from 'hono/client';
import type { AppType } from '@/api/app';

export const client = hc<AppType>(import.meta.env.PUBLIC_WEB_API_URL);
