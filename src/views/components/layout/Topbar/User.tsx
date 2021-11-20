import { FC, memo } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/material/Avatar';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import DropdownMenu from '../DropdownMenu';

const User: FC = () => {

  return <DropdownMenu
    isIcon
    icon={ <ArrowDropDownIcon /> }
    minWidthMenu="25ch"
    menu={[
      {
        value: 'userAvatar',
        icon: <Avatar />,
        label: <>
          <div>User fullname</div>
          <small className="text-secondary">user@gmail.com</small>
        </>,
        disable: true
      },
      {
        value: 'divider0',
        devider: true
      },
      {
        icon: <Settings fontSize="small" />,
        value: 'profile',
        label: 'Profile'
      },
      {
        icon: <Logout fontSize="small" />,
        value: 'logout',
        label: 'Logout'
      }
    ]}
  />

}

export default memo(User);