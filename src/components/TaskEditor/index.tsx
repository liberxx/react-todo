import React, { useState } from 'react';

import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';
import './styles.scss';

interface Props {
  submitChanges: (task: Task) => void
}

interface Task {
  taskName: string,
  description?: string
}

function TaskEditor ({ submitChanges } : Props) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const handleTaskNameChange = (e: any) => setTaskName(e.target.value);
  const handleDescriptionChange = (e: any) => setDescription(e.target.value);
  const addTask = () => {
    if (!taskName) return
    submitChanges({ taskName, description });
    setTaskName('');
    setDescription('');
  }
  return (
    <div className='task-editor'>
      <div className='task-editor__fields'>
        <Input placeholder='Название задачи' value={taskName} onChange={handleTaskNameChange} />
        <Textarea placeholder='Описание задачи' value={description} onChange={handleDescriptionChange} />
      </div>
      <div className='task-editor__buttons'>
        <Button onClick={addTask}>Создать задачу</Button>
      </div>
    </div>
  )
}

export default TaskEditor
