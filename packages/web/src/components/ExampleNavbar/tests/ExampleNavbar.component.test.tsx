import { render } from '@testing-library/react';
import { describe, it } from 'bun:test';
import { MemoryRouter } from 'react-router-dom';
import ExampleNavbar from '../ExampleNavbar';

describe('ExampleNavbar', () => {
  it('Renders the component', () => {
    render(
      <MemoryRouter>
        <ExampleNavbar />
      </MemoryRouter>,
    );
  });
});
