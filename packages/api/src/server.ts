import { Hono } from 'hono';
import health from './modules/health';
import message from './modules/message';

const app = new Hono();

app.route('/', health);
app.route('/health', health);
app.route('/message', message);

export default {
  port: Bun.env.PUBLIC_API_PORT || 3000,
  fetch: app.fetch,
};
