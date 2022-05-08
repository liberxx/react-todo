import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '.';

const props = {
  name: 'name',
  placeholder: 'Enter name',
  onChange: jest.fn(),
  value: ''
};

it('renders input', () => {
  render(<Input {...props} />);
  const inputElement = screen.getByPlaceholderText('Enter name');
  expect(inputElement).toBeInTheDocument();
});
