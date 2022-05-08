import React from 'react';
import { render, screen } from '@testing-library/react';
import Textarea from '.';

const props = {
  name: 'description',
  placeholder: 'Enter description',
  onChange: jest.fn(),
  value: ''
}

it('renders textarea', () => {
  render(<Textarea {...props} />);
  const textareaElement = screen.getByPlaceholderText('Enter description');
  expect(textareaElement).toBeInTheDocument();
});
