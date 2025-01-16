import { render } from '@testing-library/react';
import { describe, it } from 'bun:test';
import { MemoryRouter } from 'react-router';
import ExampleNavbar from '@/web/components/ExampleNavbar';

describe('ExampleNavbar', () => {
  it('Renders the component', () => {
    render(
      <MemoryRouter>
        <ExampleNavbar />
      </MemoryRouter>,
    );
  });
});
