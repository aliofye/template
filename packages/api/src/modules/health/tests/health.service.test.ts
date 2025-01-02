import { expect, test, describe } from 'bun:test';
import HealthService from '../health.service';

describe('HealthService', () => {
  test('getHealth should return correct status', () => {
    const result = HealthService.getHealth();

    expect(result).toEqual({
      status: 'A-ok!',
    });
  });
});
