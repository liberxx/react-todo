import React from 'react';

import './styles.scss';

interface Props {
  taskName: string,
  description: string,
  index: number,
  removeTask: (index: number) => void,
  markForEditing: (index: number) => void,
  isEditMode: boolean
}

const TodoItem = ({ taskName, description, removeTask, index, markForEditing, isEditMode }: Props) =>
  <div className='todoitem'>
    <div className='todoitem__content'>
      <span>{taskName}</span>
      <span>{description}</span>
    </div>
    <div className='todoitem__buttons'>
      <span
        className={`fa-solid fa-pen ${isEditMode ? 'active' : ''}`}
        onClick={() => markForEditing(index)}
      />
      <span onClick={() => removeTask(index)} className='fa-solid fa-trash-can'/>
    </div>
  </div>

export default TodoItem;
