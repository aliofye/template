import { describe, expect, test, beforeAll } from 'bun:test';
import { Hono } from 'hono';
import { testClient } from 'hono/testing';

import message from '../message.routes';
import clear from '../../../db/clear';

describe('Message Endpoints', () => {
  const app = new Hono().route('/message', message);

  beforeAll(async () => {
    await clear();
  });

  test('POST /message creates message', async () => {
    const res = await testClient(app).message.$post({
      form: { text: 'Hi Test!' },
    });
    expect(res.status).toBe(201);

    const json = await res.json();
    expect(json).toEqual({ ok: true, message: 'Created!' });
  });

  test('GET /message returns correct message', async () => {
    const res = await testClient(app).message.$get();
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toContainValue('Hi Test!');
  });
});
