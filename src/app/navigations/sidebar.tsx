import PAGE_URL from 'app/PageURL';
import React from 'react';
import { FaBookDead, FaChartBar, FaUserFriends } from 'react-icons/fa';
import { VscCircleOutline } from 'react-icons/vsc';
import { IRoute } from 'types';
import { formatPath } from 'utils';

const SidebarRoutes: IRoute[] = [

  {
    name: 'Pages.Dashboard.Sidebar',
    path: PAGE_URL.Dashboard,
    icon: <FaChartBar />,
    exact: true,
    component: React.lazy(() => import('views/pages/Dashboard'))
  },
  {
    name: "Example",
    icon: <VscCircleOutline />,
    children: [
      {
        name: 'Base',
        
       
      },
      
    ]
  },
  {
    name: 'Pages.Credit.Init',
    path: PAGE_URL.Credit.Normal.Primary,
    icon: <FaUserFriends />,
    component: React.lazy(() => import('views/pages/Credit/Normal')),
    children: [
      {
        name: 'Pages.Credit.Normal.Sidebar',
        path: formatPath('/credit/normal/init/:id/product', 'new')
      }
    ]
  },
  
  {
    name: 'Pages.Layout.Group',
    path: PAGE_URL.V2,
    icon: <FaBookDead />,
    component: React.lazy(() => import('views/pages/V2/FormManage'))
  }

]

export default SidebarRoutes;