import React, { useEffect, useState } from 'react';


import Layout from './components/Layout';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TaskEditor from './components/TaskEditor';
import List from './components/List';
export interface Task {
  taskName: string,
  description: string,
  id: number
}

function App() {
  const [list, setList] = useState<Task[]>([]);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let storageData = JSON.parse(localStorage.getItem('todolist') || '[]');
    if (storageData.length) setList(storageData);
  }, []);
  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(list));
  }, [list]);

  const filterList = (list: Task[]) =>
    list.filter(
      task =>
        task.taskName.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
    );
  const handleTask = (task: Task) => {
    if (task.id !== editTaskId) {
      setList([...list, { ...task, id: task.id }]);
    } else {
      const editedList = list.map(item => (item.id === task.id) ? task : item);
      setList(editedList);
      setEditTaskId(null);
    }
  };
  const removeTask = (id: number) : void => {
    setList(list.filter(item => item.id !== id));
    if (id === editTaskId) setEditTaskId(null);
  };
  const markForEditing = (id: number) : void => setEditTaskId(id);
  const handleSearch = (value: string) => setSearch(value);
  return (
    <Layout>
      <Header value='Список задач' />
      <SearchBar onSubmit={handleSearch} />
      <List
        todoItems={filterList(list)}
        removeItem={removeTask}
        editItem={markForEditing}
        editTaskId={editTaskId}
        searchValue={search}
      />
      <TaskEditor
        newTaskId={
          list[list.length - 1]
            ? list[list.length - 1].id + 1
            : 1
        }
        submitChanges={handleTask}
        editableTask={list.find(item => item.id === editTaskId) || null}
      />
    </Layout>
  );
}

export default App;
