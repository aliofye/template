import { describe, it } from 'bun:test';
import { render, screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

describe('ExampleComponent', () => {
  it('Renders the component', () => {
    render(<ExampleComponent />);
    screen.debug();
  });
});
