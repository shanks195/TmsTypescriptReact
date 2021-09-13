import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IRoute } from 'types';
import { useTranslation } from 'react-i18next';
import ButtonBase from '@mui/material/ButtonBase';
import Icon from './Icon';

export interface NavProps{
  item: IRoute;
}

const Nav: FC<NavProps> = props => {

  const { item } = props;
  const { t } = useTranslation();

  return <NavLink 
    exact={ true }
    to={ item.path ?? '' }
    className="mscb-sidebar-item flex justify-between overflow-hidden"
  >
    <ButtonBase key={ item.name ? t(item.name) as string : '' } name="child" className="w-full">
      
      <Icon item={ item } />

      <span className="align-middle text-left text-upper">
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

}

export default Nav;