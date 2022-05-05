import React, { FunctionComponent } from 'react';

import './styles.scss';

interface Props {
  children: React.ReactNode,
  onClick: (value : any) => void
}

const Button: FunctionComponent<Props> = ({children, ...props}) =>
  <button {...props}>
    {children}
  </button>

export default Button;
