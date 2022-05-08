import React from 'react';
import { render, screen } from '@testing-library/react';

import TodoItem from '.';

const props = {
  id: 1,
  taskName: 'Clean the room',
  description: 'Wash the floor',
  removeTask: jest.fn(),
  markForEditing: jest.fn(),
  isEditMode: false,
  highlightedText: ''
}

it('renders todoitem blocks with proper content correctly', () => {
  render(<TodoItem {...props} />)
  const taskNameSpan = screen.getByText(props.taskName);
  const descriptionSpan = screen.getByText(props.description);
  const editButton = screen.getByTestId('edit-button');
  const removeButton = screen.getByTestId('remove-button');
  expect(taskNameSpan).toBeInTheDocument();
  expect(descriptionSpan).toBeInTheDocument();
  expect(editButton).toBeInTheDocument();
  expect(removeButton).toBeInTheDocument();
})

it('should call function on edit button click', () => {
  render(<TodoItem {...props} />);
  const editButton = screen.getByTestId('edit-button');
  editButton.click();
  expect(props.markForEditing).toHaveBeenCalledTimes(1);
})

it('should call function on remove button click', () => {
  render(<TodoItem {...props} />);
  const removeButton = screen.getByTestId('remove-button');
  removeButton.click();
  expect(props.removeTask).toHaveBeenCalledTimes(1);
})

it('should have active class on edit button in edit mode', () => {
  const modifiedProps = {
    ...props,
    isEditMode: true
  };
  render(<TodoItem {...modifiedProps} />);
  const editButton = screen.getByTestId('edit-button');
  expect(editButton).toHaveClass('active');
})
