import { z } from '@hono/zod-openapi';
import { Hono } from 'hono';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';

const HealthSchema = z.object({
  status: z.string().openapi({
    param: {
      name: 'status',
      in: 'path',
    },
  }),
});

const app = new Hono().get(
  '/',
  describeRoute({
    description: 'Get health status',
    responses: {
      200: {
        description: 'ok',
        content: {
          'application/json': {
            schema: resolver(HealthSchema),
            example: { status: 'ok' },
          },
        },
      },
    },
  }),
  async (c) => {
    return c.json({ status: 'ok' });
  },
);

export default app;
