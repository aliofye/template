import { describe, expect, test } from 'bun:test';
import { Hono } from 'hono';
import message from '../message.routes';

describe('Message Endpoints', () => {
  const app = new Hono().route('/message', message);

  test('GET /message returns correct message', async () => {
    const res = await app.request('/message');
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toContainValue('Hello, World!');
  });
});
