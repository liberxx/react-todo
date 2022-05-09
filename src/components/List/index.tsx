import React from 'react';

import { Task } from '../../App';
import TodoItem from '../TodoItem';

import './styles.scss';

interface Props {
  todoItems: Array<Task>;
  removeItem: (id: number) => void,
  editItem: (id: number) => void,
  searchValue: string,
  editTaskId: number | null
}

const List = ({
  todoItems, removeItem, editItem,
  editTaskId, searchValue
}: Props) =>
  <ol>
    {todoItems.map((item: Task) =>
      <li
        key={item.id}
      >
        <TodoItem
          {...item}
          removeTask={removeItem}
          markForEditing={editItem}
          isEditMode={editTaskId === item.id}
          highlightedText={searchValue}
        />
      </li>
    )}
  </ol>

export default List;
