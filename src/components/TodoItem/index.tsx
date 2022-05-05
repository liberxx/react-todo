import React from 'react';

import './styles.scss';

interface Props {
  id: number,
  taskName: string,
  description: string,
  removeTask: (index: number) => void,
  markForEditing: (index: number) => void,
  isEditMode: boolean
}

const TodoItem = ({ taskName, description, removeTask, id, markForEditing, isEditMode }: Props) =>
  <div className='todoitem'>
    <div className='todoitem__content'>
      <span>{taskName}</span>
      <span>{description}</span>
    </div>
    <div className='todoitem__buttons'>
      <span
        className={`fa-solid fa-pen ${isEditMode ? 'active' : ''}`}
        onClick={() => markForEditing(id)}
      />
      <span onClick={() => removeTask(id)} className='fa-solid fa-trash-can'/>
    </div>
  </div>

export default TodoItem;
