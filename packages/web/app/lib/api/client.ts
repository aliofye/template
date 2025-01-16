/**
 * @fileoverview Sets up the client for the API.
 *
 * This client ensures type safety between the API and the web application,
 * and can be reused across the application.
 *
 * @version 1.0.0
 * @date 2025-01-15
 * @author Ali Morshid
 *
 * @constant {AppType} client - The API client instance.
 * @param {string} import.meta.env.PUBLIC_WEB_API_URL - The base URL for the API.
 */

import { hc } from 'hono/client';
import type { AppType } from '@/api/app';

export const client = hc<AppType>(import.meta.env.PUBLIC_WEB_API_URL);
