import { describe, expect, test, beforeAll } from 'bun:test';
import { Hono } from 'hono';
import { testClient } from 'hono/testing';

import example from '../example.routes';
import clearDatabase from '../../../lib/utils/reset';

describe('Example Endpoints', () => {
  const app = new Hono().route('/example', example);

  let messageId: string;

  beforeAll(async () => {
    await clearDatabase();
  });

  test('POST /example creates message', async () => {
    const res = await testClient(app).example.$post({
      form: { text: 'Hi Test!' },
    });
    expect(res.status).toBe(201);

    const json = await res.json();
    expect(json).toEqual({
      ok: true,
      message: 'Created!',
      id: expect.any(String),
    });

    messageId = json.id;
  });

  test('GET /example returns correct message', async () => {
    const res = await testClient(app).example.$get(messageId);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toContainValue('Hi Test!');
  });
});
