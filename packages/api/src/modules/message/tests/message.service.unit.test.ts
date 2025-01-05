import { expect, test, describe } from 'bun:test';
import MessageService from '../message.service';

describe('MessageService', () => {
  test('getMessage should return hello world message', async () => {
    const result = await MessageService.getMessage();
    expect(result?.text).toEqual('Hello, World!');
  });
});
