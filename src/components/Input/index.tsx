import React from 'react';

import './styles.scss';

interface Props {
  placeholder?: string,
  name?: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: Props) =>
  <input type='text' {...props} />

export default Input
