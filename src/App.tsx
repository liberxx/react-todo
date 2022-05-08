import React, { useEffect, useState } from 'react';


import Layout from './components/Layout';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TodoItem from './components/TodoItem';
import TaskEditor from './components/TaskEditor';
import './App.scss';

interface Task {
  taskName: string,
  description: string,
  id: number
}

function App() {
  const [list, setList] = useState<Task[]>([]);
  const [filteredList, setFilteredList] = useState<Task[]>([]);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let storageData = JSON.parse(localStorage.getItem('todolist') || '[]');
    if (storageData.length) setList(storageData);
  }, []);
  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(list))
  }, [list]);
  useEffect(() => {
    setFilteredList(
      list.filter(
        task =>
          task.taskName.toLowerCase().includes(search.toLowerCase()) ||
          task.description.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, list]);
  const handleTask = (task: any) => {
    if (task.id === null) {
      setList(list.concat(
        { ...task, id: list.length ? list[list.length - 1].id + 1 : 1 })
      );
    } else {
      let editedList = list.map(item => (item.id === task.id) ? task : item);
      setList(editedList);
      setEditTaskId(null);
    }
  }
  const removeTask = (id: number) : void => {
    setList(list.filter(item => item.id !== id));
    if (id === editTaskId) setEditTaskId(null);
  }
  const markForEditing = (id: number) : void => setEditTaskId(id);
  const handleSearch = (value: string) => setSearch(value);
  return (
    <Layout>
      <Header value='Список задач' />
      <SearchBar onSubmit={handleSearch} />
      <ol>
        {filteredList.map(item =>
          <li
            key={item.id}
          >
            <TodoItem
              {...item}
              removeTask={removeTask}
              markForEditing={markForEditing}
              isEditMode={editTaskId === item.id}
              highlightedText={search}
            />
          </li>
        )}
      </ol>
      <TaskEditor
        submitChanges={handleTask}
        editableTask={list.find(item => item.id === editTaskId) || null}
      />
    </Layout>
  );
}

export default App;
