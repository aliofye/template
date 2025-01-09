/**
 * This file is where you setup your module routes
 * It is also the entry point to your API.
 * Read: https://hono.dev/docs/guides/best-practices#building-a-larger-application
 */

import { Hono } from 'hono';
import helloworld from './modules/helloworld';

const app = new Hono();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route('/helloworld', helloworld);

export default {
  port: process.env.PUBLIC_API_PORT || 3000,
  fetch: app.fetch,
};
export type AppType = typeof routes;
