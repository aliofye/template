import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

import MessageService from './message.service';

const app = new Hono()
  .get('/', async (c) => {
    const message = await MessageService.getMessage();
    if (message) {
      return c.json(message);
    }

    throw new HTTPException(404, { message: 'Message not found' });
  })
  .post(
    '/',
    zValidator(
      'form',
      z.object({
        text: z.string().min(3),
      }),
    ),
    async (c) => {
      const formData = await c.req.formData();
      await MessageService.createMessage({
        text: formData.get('text') as string,
      });
      return c.json(
        {
          ok: true,
          message: 'Created!',
        },
        201,
      );
    },
  );

export default app;
