import React from 'react';
import clsx from 'clsx';
import ScrollBar from 'react-perfect-scrollbar';
import SidebarRoutes from 'app/navigations/sidebar';
import wrapperStyle from './style';
import { Route } from 'react-router-dom';

const ContentWrapper: React.FC = () => {

  const classes = wrapperStyle();

  return <div className={ clsx(classes.root, 'wh-full') }>
    <div className={ clsx(classes.wrapper, 'relative wh-full') }>
      <ScrollBar options={{ suppressScrollX: true }}>
        {SidebarRoutes.map((route, index) => {
          const { path, exact, component } = route;
          return <Route path={ path } exact={ exact } key={ index } component={ component } />
        })}
      </ScrollBar>
    </div>
  </div>

}

export default ContentWrapper;