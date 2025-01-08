import { expect, test, describe } from 'bun:test';
import HelloWorldService from '../helloworld.service';

describe('HelloWorldService', () => {
  test('getOne should return message', async () => {
    const result = await HelloWorldService.getOne();
    expect(result?.text).toEqual('Hi Test!');
  });
});
