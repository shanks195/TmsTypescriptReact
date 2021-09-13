import { useEffect, useState, useRef, FC, useCallback } from 'react';
import { IRoute } from 'types';
import { useTranslation } from 'react-i18next';
import { matchPath, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import ButtonBase from '@mui/material/ButtonBase';
import MuiIcon from '@mui/material/Icon';
import Icon from './Icon';

export interface PanelProps{
  classPanel?: string;
  item: IRoute;
}

const Panel: FC<PanelProps> = props => {

  const { children, classPanel, item } = props;
  const { pathname } = useLocation();
  const { t } = useTranslation();
  
  const [ collapsed, setCollapsed ] = useState(true);
  const panelHeight = useRef(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const calculateHeight = useCallback((element: HTMLDivElement) => {
    for (let child of element.children){
      // console.log('Sidebar')
      // console.dir(child);
      // if (child.tagName === 'A'){
        panelHeight.current += child.scrollHeight;
      // }
      // else{
      //   calculateHeight(child);
      // }
    }
  }, []);

  useEffect(() => {
    if (!panelRef.current) return;
    for (let c of panelRef.current?.children){
      console.dir(c);
    }
  });

  useEffect(() => {
    if (!panelRef.current) return;
    calculateHeight(panelRef.current);

    for (let child of panelRef.current.children){
      let href = child.getAttribute('href');

      if (href && matchPath(href, pathname)){
        calculateHeight(panelRef.current);
        setCollapsed(false);
      }
    }
  }, [ pathname, calculateHeight ]);

  const handleClick = () => {
    panelHeight.current = 0;
    calculateHeight(panelRef.current as HTMLDivElement);
    setCollapsed(!collapsed);
  }

  return <div>
    <ButtonBase 
      className="mscb-sidebar-item flex justify-between w-full has-submenu overflow-hidden" 
      onClick={ handleClick }
    >

      <div className="flex items-center">
        <Icon item={ item } />
        <span className="align-middle text-upper">
          { item.name ? t(item.name) : '' }
        </span>
      </div>

      {Boolean(item.badge) && (
        <div className={`rounded px-1 py-1px bg-${ item.badge?.color }`}>
          { item.badge?.value }
        </div>
      )}

      <div className="item-arrow">
        <MuiIcon fontSize="small" className="align-middle">
          chevron_right
        </MuiIcon>
      </div>

    </ButtonBase>
    
    <div 
      ref={ panelRef }
      className={ clsx(classPanel, "submenu") } 
      style={{
        maxHeight: collapsed ? 0 : `${ panelHeight.current }px`
      }}
    >
      {children}
    </div>
  </div>

}

export default Panel;