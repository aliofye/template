import { describe, expect, test, beforeAll } from 'bun:test';
import { Hono } from 'hono';
import { testClient } from 'hono/testing';

import health from '../health.routes';
import clear from '../../../db/clear';

describe('Health Endpoint', () => {
  const app = new Hono().route('/health', health);

  beforeAll(async () => {
    await clear();
  });

  test('GET /health returns correct status', async () => {
    const res = await testClient(app).health.$get();
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toEqual({
      status: 'A-ok!',
    });
  });
});
