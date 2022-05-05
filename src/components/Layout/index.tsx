import React, { FunctionComponent } from "react";

import "./styles.scss";

interface Props {
  children: React.ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) =>
  <div className='layout'>
    {children}
  </div>

export default Layout;
