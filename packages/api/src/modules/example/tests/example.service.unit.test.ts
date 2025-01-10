import { expect, test, describe } from 'bun:test';
import ExampleService from '../example.service';

describe('ExampleService', () => {
  test('getOne should return message', async () => {
    const result = await ExampleService.getOne();
    expect(result?.text).toEqual('Hi Test!');
  });
});
