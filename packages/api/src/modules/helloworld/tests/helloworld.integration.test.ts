import { describe, expect, test, beforeAll } from 'bun:test';
import { Hono } from 'hono';
import { testClient } from 'hono/testing';

import helloworld from '../helloworld.routes';
import clearDatabase from '../../../db/reset';

describe('HelloWorld Endpoints', () => {
  const app = new Hono().route('/helloworld', helloworld);

  let messageId: string;

  beforeAll(async () => {
    await clearDatabase();
  });

  test('POST /helloworld creates message', async () => {
    const res = await testClient(app).helloworld.$post({
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

  test('GET /helloworld returns correct message', async () => {
    const res = await testClient(app).helloworld.$get(messageId);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toContainValue('Hi Test!');
  });
});
