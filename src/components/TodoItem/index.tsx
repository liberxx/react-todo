import React, { FunctionComponent } from 'react';

import './styles.scss';

interface Props {
  taskName: string,
  description?: string
}

const TodoItem: FunctionComponent<Props>  = ({ taskName, description }) =>
  <div className='todoitem'>
    <div className='todoitem__content'>
      <span>{taskName}</span>
      <span>{description}</span>
    </div>
    <div className='todoitem__buttons'>
      <span className='fa-solid fa-pen'></span>
      <span className='fa-solid fa-trash-can'></span>
    </div>
  </div>

export default TodoItem;
