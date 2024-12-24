import { describe, it, expect } from 'bun:test';
import classNames from './classNames';

describe('classNames', () => {
  it('should join multiple class names into a single string', () => {
    const result = classNames('red', 'italic');
    expect(result).toBe(`red italic`);
  });

  it('should handle a single class name', () => {
    const result = classNames('red');
    expect(result).toBe('red');
  });

  it('should handle no class names', () => {
    const result = classNames();
    expect(result).toBe('');
  });
});
