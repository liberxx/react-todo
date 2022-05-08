import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todolist', () => {
  render(<App />);
  const linkElement = screen.getByText(/Список задач/i);
  expect(linkElement).toBeInTheDocument();
});
