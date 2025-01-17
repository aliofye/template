import { render } from '@testing-library/react';
import { describe, it } from 'bun:test';
import Example from '../Example';

describe('Example', () => {
  it('Renders the component', () => {
    render(<Example message={'This is a message!'} />);
  });
});
