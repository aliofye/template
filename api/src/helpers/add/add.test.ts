import { describe, it, expect } from 'bun:test';
import add from './add';

describe('add', () => {
  it('should add two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should add a positive and negative number correctly', () => {
    expect(add(5, -3)).toBe(2);
  });

  it('should add two negative numbers correctly', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('should add zero correctly', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  it('should handle decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
