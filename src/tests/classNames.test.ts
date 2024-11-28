import { describe, it, expect } from 'vitest';
import classNames from '../helpers/classNames';
import classes from '../components/ExampleComponent/ExampleComponent.module.css';

describe('classNames', () => {
  it('should join multiple class names into a single string', () => {
    const result = classNames(classes.red, classes.italic);
    expect(result).toBe(`${classes.red} ${classes.italic}`);
  });

  it('should handle a single class name', () => {
    const result = classNames(classes.red);
    expect(result).toBe(classes.red);
  });

  it('should handle no class names', () => {
    const result = classNames();
    expect(result).toBe('');
  });
});
