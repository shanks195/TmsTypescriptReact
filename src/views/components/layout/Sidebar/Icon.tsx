import { FC, Fragment } from 'react';
import { IRoute } from 'types';
import MuiIcon from '@mui/material/Icon';

export interface IconProps{
  item: IRoute;
}

const Icon: FC<IconProps> = props => {

  const { item } = props;

  if (item.icon){
    return <MuiIcon className="mscb-sidebar-icon text-18 flex flex-center">
      { item.icon }
    </MuiIcon>
  }

  return <Fragment>
    <div className="nav-bullet-text ml-5 text-11">
      { item.iconText }
    </div>
  </Fragment>

}

export default Icon;