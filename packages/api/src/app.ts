/**
 * This file is where you setup your module routes
 * It is also the entry point to your API.
 * Read: https://hono.dev/docs/guides/best-practices#building-a-larger-application
 */

import { apiReference } from '@scalar/hono-api-reference';
import { Hono } from 'hono';
import { bodyLimit } from 'hono/body-limit';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { openAPISpecs } from 'hono-openapi';

import example from './modules/example';

const app = new Hono()
  .use(bodyLimit({ maxSize: 1024 * 1024 * 2 }))
  .use(prettyJSON())
  .use(logger());

const routes = app.route('/example', example);

/**
 * Setup automatic OpenAPI documentation for your API
 */
if (process.env.NODE_ENV === 'development') {
  app.get(
    '/openapi',
    openAPISpecs(routes, {
      documentation: {
        info: {
          title: 'Documentation',
          version: '1.0.0',
          description: 'For your API',
        },
        servers: [
          {
            url: `http://localhost:${process.env.PUBLIC_API_PORT || 3000}`,
            description: 'Local server',
          },
        ],
      },
    }),
  );
  app.get(
    '/docs',
    apiReference({
      theme: 'saturn',
      spec: {
        url: '/openapi',
      },
    }),
  );
}

export default {
  port: process.env.PUBLIC_API_PORT || 3000,
  fetch: app.fetch,
};
export type AppType = typeof routes;
