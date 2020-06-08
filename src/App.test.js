import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should render properly and display title', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('title')).toHaveTextContent('Poke Guide');
});
