import React from 'react';

import HighlightedText from '../HighlightedText';

import './styles.scss';

interface Props {
  id: number,
  taskName: string,
  description: string,
  removeTask: (id: number) => void,
  markForEditing: (id: number) => void,
  isEditMode: boolean,
  highlightedText: string
}

const TodoItem = ({ taskName, description, removeTask, id, markForEditing, isEditMode, highlightedText }: Props) =>
  <div className='todoitem'>
    <div className='todoitem__content'>
      <HighlightedText text={taskName} highlight={highlightedText} />
      <HighlightedText text={description} highlight={highlightedText} />
    </div>
    <div className='todoitem__buttons'>
      <span
        data-testid='edit-button'
        className={`fa-solid fa-pen ${isEditMode ? 'active' : ''}`}
        onClick={() => markForEditing(id)}
      />
      <span
        data-testid='remove-button'
        onClick={() => removeTask(id)}
        className='fa-solid fa-trash-can'
      />
    </div>
  </div>

export default TodoItem;
