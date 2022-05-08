import React from 'react';

interface Props {
  value: string
}

const Header = ({ value }: Props) =>
  <h1>{value}</h1>

export default Header;
