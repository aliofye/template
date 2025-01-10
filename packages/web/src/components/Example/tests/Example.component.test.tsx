import { describe, it } from 'bun:test';
import { render } from '@testing-library/react';
import Example from '../Example';

describe('Example', () => {
  it('Renders the component', () => {
    render(<Example />);
  });
});
