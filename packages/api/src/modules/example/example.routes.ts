/**
 * This is an example route.
 * Routes are used to define the endpoints of your API.
 */

import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';
import { ExampleSelectSchema, ExampleInsertSchema } from '@/api/lib/db/schema';

import ExampleService from './example.service';

/**
 * Chaining your route method keeps your code typesafe on the client side with hono/client
 * Read: https://hono.dev/docs/guides/best-practices#building-a-larger-application
 * ---
 * We also use the describeRoute function to add OpenAPI documentation to our routes
 * Read: https://hono.dev/examples/hono-openapi
 */
const app = new Hono()
  .get(
    '/',
    describeRoute({
      description: 'Get example message',
      responses: {
        200: {
          description: 'Successful message response',
          content: {
            'text/plain': {
              schema: resolver(ExampleSelectSchema),
            },
          },
        },
      },
    }),
    async (c) => {
      const message = await ExampleService.getOne();
      if (message) {
        return c.json(message);
      }

      throw new HTTPException(404, { message: 'Message not found.' });
    },
  )
  .get(
    '/:id',
    describeRoute({
      description: 'Get example message by id',
      responses: {
        200: {
          description: 'Successful message response',
          content: {
            'text/plain': {
              schema: resolver(ExampleSelectSchema),
            },
          },
        },
      },
    }),
    async (c) => {
      const id = c.req.param('id');
      const message = await ExampleService.getOneById(id);
      if (message) {
        return c.json(message);
      }

      throw new HTTPException(404, { message: 'Message not found.' });
    },
  )
  .post(
    '/',
    describeRoute({
      description: 'Create example message',
      responses: {
        200: {
          description: 'Successful message response',
          content: {
            'text/plain': {
              schema: resolver(ExampleSelectSchema),
            },
          },
        },
      },
    }),
    zValidator('form', ExampleInsertSchema),
    async (c) => {
      const formData = await c.req.formData();
      const message = await ExampleService.create({
        text: formData.get('text') as string,
      });

      if (message) {
        return c.json(
          {
            ok: true,
            message: 'Created!',
            id: message.id,
          },
          201,
        );
      }
      throw new HTTPException(500, { message: 'Message not created.' });
    },
  );

export default app;
