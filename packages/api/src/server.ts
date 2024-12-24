import { Hono } from 'hono';
const app = new Hono();

app.get('/', (c) => c.text('A-ok!'));
app.get('/message', (c) => c.json({ message: 'Hello, World!' }));

export default app;
