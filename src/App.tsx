import React, { useState } from 'react';
import Layout from './components/Layout';
import TodoItem from './components/TodoItem';
import TaskEditor from './components/TaskEditor';
import './App.scss';

interface Task {
  taskName: string,
  description?: string
}

function App() {
  const [list, setList] = useState<Task[]>([]);
  const addTask = (task: Task) => setList(list.concat(task));
  return (
    <Layout>
      <h1>Список задач</h1>
      <ol>
        {list.map((item) => <li><TodoItem {...item} /></li>)}
      </ol>
      <TaskEditor submitChanges={addTask}/>
    </Layout>
  );
}

export default App;
