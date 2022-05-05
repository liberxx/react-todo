import React, { useState, useEffect } from 'react';

import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';
import './styles.scss';

interface Props {
  submitChanges: (task: Task | EditableTask) => void,
  editableTask: EditableTask | null
}

interface Task {
  taskName: string,
  description: string,
}

interface EditableTask extends Task {
  index: number | null
}

function TaskEditor ({ submitChanges, editableTask } : Props) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editableTask) {
      setTaskName(editableTask.taskName);
      setDescription(editableTask.description);
    } else {
      setTaskName('');
      setDescription('');
    }
  }, [editableTask])
  const handleTaskNameChange = (e: any) => setTaskName(e.target.value);
  const handleDescriptionChange = (e: any) => setDescription(e.target.value);
  const addTask = () => {
    if (!taskName) return
    submitChanges({ taskName, description, index: editableTask ? editableTask.index : null });
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
        <Button onClick={addTask}>
          {editableTask ? 'Сохранить изменения' : 'Создать задачу'}
        </Button>
      </div>
    </div>
  )
}

export default TaskEditor
