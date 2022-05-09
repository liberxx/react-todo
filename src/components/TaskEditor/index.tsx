import React, { useState, useEffect } from 'react';

import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';

import { Task } from '../../App'
import './styles.scss';

interface Props {
  submitChanges: (task: Task) => void,
  editableTask: Task | null,
  newTaskId: number
}

function TaskEditor ({ submitChanges, editableTask, newTaskId } : Props) {
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
  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setTaskName(e.target.value);
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);
  const saveTask = () => {
    if (!taskName) return
    submitChanges({ taskName, description, id: editableTask?.id || newTaskId });
    setTaskName('');
    setDescription('');
  }
  return (
    <div className='task-editor'>
      <div className='task-editor__fields'>
        <Input data-testid='taskeditor-input' placeholder='Название задачи' value={taskName} onChange={handleTaskNameChange} />
        <Textarea placeholder='Описание задачи' value={description} onChange={handleDescriptionChange} />
      </div>
      <div className='task-editor__buttons'>
        <Button onClick={saveTask}>
          {editableTask ? 'Сохранить изменения' : 'Создать задачу'}
        </Button>
      </div>
    </div>
  )
}

export default TaskEditor
