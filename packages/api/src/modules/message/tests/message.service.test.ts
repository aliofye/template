import { expect, test, describe } from 'bun:test';
import MessageService from '../message.service';

describe('MessageService', () => {
  test('getMessage should return hello world message', () => {
    const result = MessageService.getMessage();
    expect(result).toEqual({
      message: 'Hello, World!',
    });
  });

  test('getMessageById should return message with id', () => {
    const testId = '123';
    const result = MessageService.getMessageById(testId);
    expect(result).toEqual({
      message: 'You requested a message with id: 123',
    });
  });
});
