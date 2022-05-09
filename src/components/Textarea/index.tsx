import React from 'react';

import './styles.scss';

interface Props {
  placeholder?: string,
  name?: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea = (props: Props) =>
  <textarea {...props} />

export default Textarea;
