import { describe, it } from 'bun:test';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

describe('HelloWorld', () => {
  it('Renders the component', () => {
    render(<HelloWorld />);
    screen.debug();
  });
});
