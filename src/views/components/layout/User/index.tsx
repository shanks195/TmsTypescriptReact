import React from 'react';
import clsx from 'clsx';
import userStyle from './style';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { getCurrentUser } from 'features/auth/store/slice';

const User: React.FC = () => {

  const classes = userStyle();
  const user = useSelector(getCurrentUser);

  return <div className={ classes.root }>
    <div className={ clsx(classes.branch, 'text-upper') }>
      { user?.branch.branch_name }
    </div>
    <div className="flex item-center justify-between">
      
      <Avatar alt={ user?.full_name } src={ user?.avatar }>
        { user?.full_name.substr(0, 1) }
      </Avatar>

      <div className={ classes.info }>
        <div>{ user?.full_name }</div>
        <div>{ user?.department.code }</div>
        <div>{ user?.department.name }</div>
      </div>

    </div>
  </div>

}

export default User;