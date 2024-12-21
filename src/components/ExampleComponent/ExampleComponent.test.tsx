import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

describe('ExampleComponent', () => {
  it('Renders the component', () => {
    render(<ExampleComponent />);
    screen.debug();
  });
});
