import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders initial text', () => {
  const { getByText } = render(<App />);
  const pElement = getByText(/Inicio/i);
  expect(pElement).toBeInTheDocument();
});
