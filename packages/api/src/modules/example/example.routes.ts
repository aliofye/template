/**
 * This is an example route.
 * Routes are used to define the endpoints of your API.
 */

import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { ExampleInsertSchema } from '@/api/lib/db/schema';

import ExampleService from './example.service';

/**
 * Chaining your route method keeps your code typesafe on the client side with hono/client
 * Read: https://hono.dev/docs/guides/best-practices#building-a-larger-application
 */
const app = new Hono()
  .get('/', async (c) => {
    const message = await ExampleService.getOne();
    if (message) {
      return c.json(message);
    }

    throw new HTTPException(404, { message: 'Message not found.' });
  })
  .get('/:id', async (c) => {
    const id = c.req.param('id');
    const message = await ExampleService.getOneById(id);
    if (message) {
      return c.json(message);
    }

    throw new HTTPException(404, { message: 'Message not found.' });
  })
  .post('/', zValidator('form', ExampleInsertSchema), async (c) => {
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
  });

export default app;
