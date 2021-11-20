import { FC } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { IRoute } from 'types';
import clsx from 'clsx';
import Scrollbar from '../Scrollbar';
import SidebarRoutes from 'app/navigations/sidebar';
import wrapperStyle from './style';
import Topbar from '../Topbar';

const ContentWrapper: FC = () => {

  const classes = wrapperStyle();

  const listenRoutes = (routes: IRoute[]) => {
    return routes?.map(({ path = '', component: Comp, children, name }, i) => {
      if ((!path || !Comp) && !children?.length) return null;
      let routePath = path;

      if (path && children?.length){
        routePath = path.replace(/\/?(\?.*)*$/g, '/*$1').replace(/\/\*\/\*?/, '/*');
      }

      if (!path && children?.length){
        return <Route key={ i } path="*" element={ Comp ? <Comp /> : <Outlet /> }>
          { listenRoutes(children) }
        </Route>
      }

      routePath = path.replace(/\/?(\?.*)*$/g, '/*$1').replace(/\/\*\/\*?/, '/*');

      return <Route 
        path={ routePath } 
        element={ Comp ? <Comp /> : <Outlet />  } 
        key={ i }
      />
    });
  }

  return <div className={ clsx(classes.root, 'h-full mscb-content-wrapper') }>
    <div className="relative wh-full">
      <Scrollbar>
        <Topbar />
        <div className={ `${classes.wrapper} h-full` }>
          <Routes>
            { listenRoutes(SidebarRoutes) }
          </Routes>
        </div>
      </Scrollbar>
    </div>
  </div>

}

export default ContentWrapper;