/**
 * This file is where you setup your module routes
 * It is also the entry point to your API.
 * Read: https://hono.dev/docs/guides/best-practices#building-a-larger-application
 */

import { Hono } from 'hono';
import example from './modules/example';

const app = new Hono();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route('/example', example);

export default {
  port: process.env.PUBLIC_API_PORT || 3000,
  fetch: app.fetch,
};
export type AppType = typeof routes;
