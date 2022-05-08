import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '.';

test('renders Header', () => {
  render(<Header value='Список задач' />);
  const headerElement = screen.getByText(/Список задач/i);
  expect(headerElement).toBeInTheDocument();
});
