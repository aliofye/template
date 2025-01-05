import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import MessageService from './message.service';

const app = new Hono()
  .get('/', async (c) => {
    const message = await MessageService.getMessage();
    if (message) {
      return c.json(message);
    }

    throw new HTTPException(404, { message: 'Message not found' });
  })
  .post('/', async (c) => {
    const body = await c.req.json();
    const message = await MessageService.createMessage(body);
    if (message) {
      return c.json(message);
    }

    throw new HTTPException(500, { message: 'Message not found' });
  });

export default app;
