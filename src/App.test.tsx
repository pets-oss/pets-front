import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders some app content', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pets information system/i);
  expect(linkElement).toBeInTheDocument();
});
