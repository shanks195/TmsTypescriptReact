import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IRoute } from 'types';
import SidebarRoutes from 'app/navigations/sidebar';
import ExtLink from './ExtLink';
import Label from './Label';
import Nav from './Nav';
import Panel from './Panel';
import API from './API';

export interface NavbarProps{
  className: string;
  classPanel?: string;
}

const Navbar: FC<NavbarProps> = props => {

  const { className, classPanel } = props;
  const { t } = useTranslation();

  const renderLevels = (data: IRoute[], prefix = '') => {
    return data.map((item, index) => {
      if (item.isRoute) return null;
      
      if (item.type === 'label'){
        return <Label key={ index } label={ item.label ? t(item.label) : '' } />
      }

      if (item.children?.length){
        return <Panel key={ index } item={ item } classPanel={ classPanel } prefix={ prefix }>
          { renderLevels(item.children,  (prefix + '/' + (item.path ?? '')).replace(/\/\/+/g, '/')) }
        </Panel>
      }
      if (item.type === 'api'){
        return <API key={ index } item={ item } childrenRender={ renderLevels } classPanel={ classPanel } />
      }
      if (item.type === 'extLink'){
        return <ExtLink key={ index } item={ item } />
      }

      return <Nav key={ index } item={ item } prefix={ prefix } />

    });
  }

  return <div className={ className }>
    { renderLevels(SidebarRoutes) }
  </div>

}

export default Navbar;