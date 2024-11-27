import { describe, it, expect } from 'vitest';
import classNames from '../helpers/classNames';
import styles from '../components/ExampleComponent/ExampleComponent.module.css';

describe('classNames', () => {
  it('should join multiple class names into a single string', () => {
    const result = classNames(styles.red, styles.italic);
    expect(result).toBe(`${styles.red} ${styles.italic}`);
  });

  it('should handle a single class name', () => {
    const result = classNames(styles.red);
    expect(result).toBe(styles.red);
  });

  it('should handle no class names', () => {
    const result = classNames();
    expect(result).toBe('');
  });
});
