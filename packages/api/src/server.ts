/* eslint-disable @typescript-eslint/no-unused-vars */
import { Hono } from 'hono';
import health from './modules/health';
import message from './modules/message';

const app = new Hono();

const routes = app
  .route('/', health)
  .route('/health', health)
  .route('/message', message);

export default {
  port: Bun.env.PUBLIC_API_PORT || 3000,
  fetch: app.fetch,
};
export type AppType = typeof routes;
