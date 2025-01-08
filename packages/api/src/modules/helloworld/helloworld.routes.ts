/**
 * This is an example route.
 * Routes are used to define the endpoints of your API.
 */

import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { zValidator } from '@hono/zod-validator';
import { HelloWorldInsertSchema } from '../../db/schema';

import HelloWorldService from './helloworld.service';

/**
 * Chaining your route method keeps your code typesafe
 * Read: https://hono.dev/docs/guides/best-practices#building-a-larger-application
 */
const app = new Hono()
  .get('/', async (c) => {
    const message = await HelloWorldService.getOne();
    if (message) {
      return c.json(message);
    }

    throw new HTTPException(404, { message: 'Message not found' });
  })
  .post('/', zValidator('form', HelloWorldInsertSchema), async (c) => {
    const formData = await c.req.formData();
    await HelloWorldService.create({
      text: formData.get('text') as string,
    });
    return c.json(
      {
        ok: true,
        message: 'Created!',
      },
      201,
    );
  });

export default app;
