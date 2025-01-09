import { describe, it } from 'bun:test';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('Renders the component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
  });
});
