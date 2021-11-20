import { FC, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { IRoute } from 'types';
// import { useTranslation } from 'react-i18next';
// import ButtonBase from '@mui/material/ButtonBase';
// import Icon from './Icon';
// import { apiGet } from 'utils/api';
import Panel from './Panel';
import { IListSideBar } from 'types/models/templateGroups';
import { formatPath } from 'utils';
import PAGE_URL from 'app/PageURL';
import { useDispatch, useSelector } from 'react-redux';
// import { getIsAuth } from 'features/auth/store/slice';
import { fetchLeftSideBars, getLeftSideBars, isLoadedLeftSideBars } from 'features/templateGroups/store/slice';
import { isLoadingLeftSideBars } from 'features/templateGroups/store/slice';

export interface NavProps{
  item: IRoute;
  childrenRender(routers: IRoute[], prefix?: string): (JSX.Element | null)[];
  classPanel?: string;
}

const API: FC<NavProps> = props => {

  const { item, childrenRender,classPanel } = props;
  // const { t } = useTranslation();
  // const mounted = useRef(false);
  // const loadingAPI = useRef(false);
  // const [ APISidebar, setAPISidebar ] = useState<unknown[]>([]);
  // const isAuth = useSelector(getIsAuth)
  const sidebar= useSelector(getLeftSideBars)
  const isLoading = useSelector(isLoadingLeftSideBars)
  const isLoaded = useSelector(isLoadedLeftSideBars)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   mounted.current = true;

  //   if(isAuth){
  //     fetchApi()
  //   }

  //   return () => {
  //     mounted.current = false;
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[isAuth]);
  useEffect(()=>{
    !sidebar.length && !isLoading && !isLoaded && dispatch(fetchLeftSideBars())
  })
  // const fetchApi = () => {
  //   if (loadingAPI.current) return;
  //   apiGet<unknown>(item.auth ? item.auth[0] : '')
  //   .then((response) => {
  //     if (response.success){
  //       mounted.current && setAPISidebar(response.data as unknown[]);
  //     }
  //   })
  //   .catch(() => {})
  //   .finally(() => {
  //     loadingAPI.current = false;
  //   });
  // }

  const convertRoute = (routers: unknown[], child = false): IRoute[] => {
    const rs: IRoute[] = [];
    const type = item.auth ? item.auth[1] : '';

    switch(type){
      case 'template-groups/menu':
        const _routers = routers as IListSideBar[];
        
        return _routers.map(r => {
          const itemLength = r.items?.length;
          return {
            name: r.name,
            path: itemLength ? '' : formatPath(PAGE_URL.V2.Operate.Detail.API, r.id),
            children: itemLength ? convertRoute(r.items as IListSideBar[]) : []
          } as IRoute;
        })
      //   return convertRoute(APISidebar);
    }
    return rs;
  }

  return <Panel classPanel={classPanel} item={ item }>
    {childrenRender(convertRoute(sidebar), 'operate')}
  </Panel>



  // return <NavLink 
  //   exact={ true }
  //   to={ item.path ?? '' }
  //   className="mscb-sidebar-item flex justify-between overflow-hidden"
  // >
  //   <ButtonBase key={ item.name ? t(item.name) as string : '' } name="child" className="w-full">
      
  //     <Icon item={ item } />

  //     <span className="align-middle text-left text-upper">
  //       { item.name ? t(item.name) : '' }
  //     </span>

  //     <div className="mx-auto"></div>

  //     {Boolean(item.badge) && (
  //       <div className={`rounded px-1 py-1px bg-${ item.badge?.color }`}>
  //         { item.badge?.value }
  //       </div>
  //     )}

  //   </ButtonBase>
  // </NavLink>

}

export default API;