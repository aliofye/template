import { describe, expect, test } from 'bun:test';
import { Hono } from 'hono';
import message from '../message.routes';

describe('Message Endpoints', () => {
  const app = new Hono().route('/message', message);

  test('GET /message returns correct message', async () => {
    const res = await app.request('/message');
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toEqual({
      message: 'Hello, World!',
    });
  });

  test('GET /message/:id returns message with id', async () => {
    const testId = '123';
    const res = await app.request(`/message/${testId}`);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toEqual({
      message: 'You requested a message with id: 123',
    });
  });
});
