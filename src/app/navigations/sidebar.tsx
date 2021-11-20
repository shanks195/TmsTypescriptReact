import PAGE_URL from 'app/PageURL';
import LeftSideBarPaths from 'features/templateGroups/models/paths';
import React from 'react';
import { FaChartBar, FaDatabase } from 'react-icons/fa';
import { IRoute } from 'types';
import { AiFillFile } from 'react-icons/ai';

const SidebarRoutes: IRoute[] = [
  {
    name: 'Pages.Dashboard.Sidebar',
    path: PAGE_URL.Dashboard,
    icon: <FaChartBar />,
    exact: true,
    component: React.lazy(() => import('views/pages/Dashboard'))
  },
  {
    name: 'CẤU TẠO HỆ THỐNG',
    icon: <FaDatabase />,
    children:[
      {
        name: 'Pages example',
        path: PAGE_URL.example,
        component: React.lazy(() => import('views/pages/V2/example')),
      },
      {
        name: 'Pages.Layout.Group',
        path: PAGE_URL.V2.InputType,
        component: React.lazy(() => import('views/pages/V2/FormManage'))
      },
      {
        name: 'Pages.Metadata.Sidebar',
        path: PAGE_URL.V2.Metadata.main,
        component: React.lazy(() => import('views/pages/V2/FormMetadata'))
      },
      {
        name: 'Pages.Group.Sidebar',
        path: PAGE_URL.V2.FormGroup.main,
        component: React.lazy(() => import('views/pages/V2/FormGroup'))
      },
      {
        name: 'Pages.Metadata.Treeview',
        path: PAGE_URL.V2.Treeview.main,
        component: React.lazy(() => import('views/pages/V2/FormManageTreeView'))
      },
    ]
  },
  {
    name: 'Quản lý biểu mẫu',
    path: PAGE_URL.V2.Operate.Detail.Route,
    component: React.lazy(() => import('views/pages/V2/Operate')),
    type: 'api',
    auth: [ 
      LeftSideBarPaths.leftSibars.getList,
      'template-groups/menu'
    ],
    icon:<AiFillFile/>,
  },

]

export default SidebarRoutes;