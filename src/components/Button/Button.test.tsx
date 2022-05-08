import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

it('renders button with text', () => {
  render(<Button onClick={jest.fn()}>Save</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toHaveTextContent('Save');
});
