import { FC } from 'react';
import clsx from 'clsx';
import sidebarStyle from './style';
import ScrollBar from 'react-perfect-scrollbar';

import Brand from '../Brand';
import User from '../User';
import Navbar from './Navbar';
import Copyright from './Copyright';

const Sidebar: FC = () => {

  const classes = sidebarStyle();
  const sidebarClass = clsx(classes.root, "mscb-sidebar fixed left top bottom");

  return <div className={ sidebarClass }>
    <div className="flex-column relative h-full">
      <Brand />
      <User />
      <div className={ classes.sidebar }>
        <ScrollBar
          options={{ suppressScrollX: true }}
          className={ clsx('relative', classes.scrollable) }
        >
          <Navbar className={ classes.navigation } classPanel={ classes.panel } />
        </ScrollBar>
      </div>
      <Copyright className={ classes.copyright } />
    </div>
  </div>

}

export default Sidebar;