import { serve } from 'bun';

const PORT = Bun.env.PUBLIC_API_PORT || '3000';

const server = serve({
  port: PORT,
  fetch(req) {
    if (req.url.endsWith('/message')) {
      return new Response(JSON.stringify({ message: 'Hello, world!' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response('Not Found', { status: 404 });
  },
  error(err) {
    console.error('Server error:', err);
    return new Response('Internal Server Error', { status: 500 });
  },
});

if (Bun.env.PROD) {
  console.log(`Example app listening on port ${PORT}`);
}

export default server;
