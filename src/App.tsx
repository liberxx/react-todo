import React, { useState } from 'react';
import Layout from './components/Layout';
import TodoItem from './components/TodoItem';
import TaskEditor from './components/TaskEditor';
import './App.scss';

interface Task {
  taskName: string,
  description: string
}

interface EditableTask extends Task {
  index: number
}

function App() {
  const [list, setList] = useState<Task[]>([]);
  const [editTaskIndex, setEditTaskIndex] = useState<number | null>(null);
  const handleTask = (task: any) => {
    if (task.index === null) {
      setList(list.concat(task));
    } else {
      let editedList = list.concat();
      editedList[task.index] = task;
      setList(editedList);
      setEditTaskIndex(null);
    }
  }
  const removeTask = (index: number) : void => {
    setList(list.filter((_, i) => index !== i));
    if (index === editTaskIndex) setEditTaskIndex(null);
  }
  const markForEditing = (index: number) : void => setEditTaskIndex(index);
  return (
    <Layout>
      <h1>Список задач</h1>
      <ol>
        {list.map((item, i) =>
          <li
            key={`${item.taskName}_${i}`}
          >
            <TodoItem
              {...item}
              index={i}
              removeTask={removeTask}
              markForEditing={markForEditing}
              isEditMode={editTaskIndex === i}
            />
          </li>
        )}
      </ol>
      <TaskEditor
        submitChanges={handleTask}
        editableTask={editTaskIndex !== null
          ? { ...list[editTaskIndex], index: editTaskIndex }
          : null
        }
      />
    </Layout>
  );
}

export default App;
