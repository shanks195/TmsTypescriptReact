import React from 'react';
import clsx from 'clsx';

import ToggleStyle  from "./style";
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Switch } from '@mui/material';
interface ToogleControlComponent extends React.FunctionComponent { }

const ToogleControl: ToogleControlComponent = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const classes = ToggleStyle();
  return (
  <div className={clsx(classes.root, 'wh-full toogle')}>
      <ol type="I">
        <li className="list-toogle">ĐỊNH DẠNG
          <ol className="ol-toogle">
            <li>Bật/Tắt thông báo
              <h6>Tắt</h6>
              <div className="toogle-button">
                <NotificationsOffIcon  className="icon-no"/>
                <span className="title">Tắt Thông Báo</span>
                <Switch  name="gilad" className="switch" />
              </div>

              <h6>Bật</h6>
              <div className="toogle-button toogle-on">
                <NotificationsNoneIcon className="icon-no"/>
                <span className="title">Bật Thông Báo</span>
                <Switch checked={state.gilad} onChange={handleChange} name="gilad" className="switch"/>
              </div>
            </li>

          
          </ol>

        </li>
      </ol>
  </div>
  );

}

export default ToogleControl;