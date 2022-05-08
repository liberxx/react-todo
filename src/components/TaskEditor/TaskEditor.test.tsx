import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import TaskEditor from '.';

const props = {
  submitChanges: jest.fn(),
  editableTask: {
    taskName: 'Wash car',
    description: 'Drive somewhere and wash it',
    id: 1
  }
};

it('should render input, textarea and button', () => {
  render(<TaskEditor {...props} />);
  const inputElement = screen.getByTestId('taskeditor-input');
  const textareaElement = screen.getByText(props.editableTask.description);
  const button = screen.getByRole('button');
  expect(inputElement).toBeInTheDocument();
  expect(textareaElement).toBeInTheDocument();
  expect(button).toBeInTheDocument();
})

it('should call function on button click if taskName exists', () => {
  render(<TaskEditor {...props} />);
  const button = screen.getByRole('button');
  act(() => {
    button.click();
  });
  expect(props.submitChanges).toBeCalledTimes(1);
})

it('should not call function on button click if taskName does not exist', () => {
  const modifiedProps = {
    ...props,
    editableTask: {
      ...props.editableTask,
      taskName: ''
    }
  }
  render(<TaskEditor {...modifiedProps} />);
  const button = screen.getByRole('button');
  act(() => {
    button.click();
  });
  expect(props.submitChanges).toBeCalledTimes(0);
})

it('should have proper button text if creating new task', () => {
  const modifiedProps = {
    ...props,
    editableTask: null
  };
  render(<TaskEditor {...modifiedProps} />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Создать задачу');
})

it('should have proper button text if editing task', () => {
  render(<TaskEditor {...props} />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Сохранить изменения');
})
