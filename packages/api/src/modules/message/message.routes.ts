import { Hono } from 'hono';
import MessageService from './message.service';

const app = new Hono()
  .get('/', (c) => c.json(MessageService.getMessage()))
  .get('/:id', (c) => c.json(MessageService.getMessageById(c.req.param('id'))));

export default app;
