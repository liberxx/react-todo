import React, { useState } from 'react';

import Input from '../Input';
import Button from '../Button';

import './styles.scss';

interface Props {
  onSubmit: (value: string) => void
}

function SearchBar ({ onSubmit }: Props) {
  const [value, setValue] = useState('');
  const handleChange = (e: any) => setValue(e.target.value);
  const filterTodoList = () => onSubmit(value);
  return (
    <div className='search-bar'>
      <Input onChange={handleChange} value={value} placeholder='Поиск' />
      <Button onClick={filterTodoList}>Найти</Button>
    </div>
  )
}

export default SearchBar
