import { FC } from 'react';
import clsx from 'clsx';
import userStyle from './style';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { getCurrentUser } from 'features/auth/store/slice';

const User: FC = () => {

  const classes = userStyle();
  const user = useSelector(getCurrentUser);

  return <div className={ classes.root }>
    <div className={ clsx(classes.branch, 'text-upper mscb-sidebar-branch') }>
      { user?.branch.branch_name }
    </div>
    <div className="flex item-center">
      
      <Avatar alt={ user?.full_name } src={ user?.avatar } className="mscb-sidebar-avatar">
        { user?.full_name.substr(0, 1) }
      </Avatar>

      <div className={ clsx(classes.info, 'mscb-sidebar-user-info') }>
        <div className="sidebar-user-name">{ user?.full_name }</div>
        <div className="sidebar-user-code">{ user?.department.code }</div>
        <div className="sidebar-user-title">{ user?.department.name }</div>
      </div>

    </div>
  </div>

}

export default User;