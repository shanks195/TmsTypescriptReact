import React from 'react';
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToggleCompoStyle  from "./style";
// import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import { Switch } from '@mui/material';
interface ToogleControlComponent extends React.FunctionComponent { }

const ToogleControlCpn: ToogleControlComponent = () => {
  const [state, setState] = React.useState<boolean>(true);
  const [state1, setState1] = React.useState<boolean>(false);


  const handleChange = () => {
   setState(!state)
  };
  const handleChange1 = () => {
    setState1(!state1)
   };
  const classes = ToggleCompoStyle();
  return (
    <div className={clsx(classes.root, 'mscb-toogle-component')}>
      <Grid container>
        <Grid item xs={12}>
          <Box component="div" className="mscb-toogle-off-box">
            {state1?<h6>Bật</h6>:<h6>Tắt</h6>}
            <div className={`toogle-button ${state1?'toogle-on':''}`}>
              {state1?<NotificationsNoneOutlinedIcon className="icon-no"/>:<NotificationsOffOutlinedIcon  className="icon-no"/>}
              {state1?<span className="title">Bật Thông Báo</span>:<span className="title">Tắt Thông Báo</span>}
              <Switch checked={state1} onChange={handleChange1} name="gilad" className="switch"/>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box component="div" className="mscb-toogle-on-box">
            {state?<h6>Bật</h6>:<h6>Tắt</h6>}
            <div className={`toogle-button ${state?'toogle-on':''}`}>
              {state?<NotificationsNoneOutlinedIcon className="icon-no"/>:<NotificationsOffOutlinedIcon  className="icon-no"/>}
              {state?<span className="title">Bật Thông Báo</span>:<span className="title">Tắt Thông Báo</span>}
              <Switch checked={state} onChange={handleChange} name="gilad" className="switch"/>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );

}

export default ToogleControlCpn;