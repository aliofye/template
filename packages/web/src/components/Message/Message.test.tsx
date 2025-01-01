import { describe, it } from 'bun:test';
import { render, screen } from '@testing-library/react';
import Message from './Message';

describe('Message', () => {
  it('Renders the component', () => {
    render(<Message />);
    screen.debug();
  });
});
