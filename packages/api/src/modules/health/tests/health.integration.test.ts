import { describe, expect, test } from 'bun:test';
import { Hono } from 'hono';
import health from '../health.routes';

describe('Health Endpoint', () => {
  const app = new Hono().route('/health', health);

  test('GET /health returns correct status', async () => {
    const res = await app.request('/health');
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toEqual({
      status: 'A-ok!',
    });
  });
});
