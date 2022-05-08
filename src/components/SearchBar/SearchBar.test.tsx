import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from '.';

const props = {
  onSubmit: jest.fn(),
}

it('renders SearchBar', () => {
  render(<SearchBar {...props} />);
  const inputElement = screen.getByPlaceholderText('Поиск');
  const buttonElement = screen.getByRole('button');
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
})

it('changes search value', () => {
  render(<SearchBar {...props} />);
  const inputElement: HTMLInputElement = screen.getByPlaceholderText('Поиск')
  expect(inputElement.value).toBe('');
  fireEvent.change(inputElement, {target: {value: 'Test'}});
  expect(inputElement.value).toBe('Test');
})

it('submits search value on button click', () => {
  render(<SearchBar {...props} />);
  const inputElement = screen.getByPlaceholderText('Поиск');
  fireEvent.change(inputElement, {target: {value: 'Test'}});
  const buttonElement = screen.getByRole('button');
  buttonElement.click();
  expect(props.onSubmit).toHaveBeenCalledTimes(1);
})
