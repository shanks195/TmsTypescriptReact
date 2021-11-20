import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IRoute } from 'types';
import { useTranslation } from 'react-i18next';
import ButtonBase from '@mui/material/ButtonBase';
import Icon from './Icon';

export interface NavProps{
  item: IRoute;
  prefix?: string;
}

const Nav: FC<NavProps> = props => {

  const { item, prefix = '' } = props;
  const { t } = useTranslation();

  return <div>
    <NavLink 
      to={ (prefix + '/' + item.path).replace(/\/\/+/g, '/') }
      className="mscb-sidebar-item flex justify-start overflow-hidden"
    >
      <ButtonBase key={ item.name ? t(item.name) as string : '' } name="child" className="w-full">
        
        <Icon item={ item } />

        <span className="align-middle text-left text-upper mscb-sidebar-navbar-name">
          { item.name ? t(item.name) : '' }
        </span>

        <div className="mx-auto"></div>

        {Boolean(item.badge) && (
          <div className={`rounded px-1 py-1px bg-${ item.badge?.color }`}>
            { item.badge?.value }
          </div>
        )}

      </ButtonBase>
    </NavLink>
  </div>

}

export default Nav;