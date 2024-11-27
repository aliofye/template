import { describe, it, expect } from 'vitest';
import classNames from '../helpers/classNames';
import styles from '../App.module.css';

describe('classNames', () => {
  it('should join multiple class names into a single string', () => {
    const result = classNames(styles.logo, styles.card);
    expect(result).toBe(`${styles.logo} ${styles.card}`);
  });

  it('should handle a single class name', () => {
    const result = classNames(styles.logo);
    expect(result).toBe(styles.logo);
  });

  it('should handle no class names', () => {
    const result = classNames();
    expect(result).toBe('');
  });
});
