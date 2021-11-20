import {FunctionComponent} from 'react';
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleStyle  from "./style";
import { useTranslation } from "react-i18next";
import ToogleControlCpn from 'views/components/base/ToogleControlCpn';

interface ToogleControlComponent extends FunctionComponent { }

const ToogleControl: ToogleControlComponent = () => {
  const { t } = useTranslation();
  const classes = ToggleStyle();
  return (
  <div className={clsx(classes.root, 'wh-full toogle')}>
    <Box component="div" className='mscb-on-off-format-title text-upper'>
      <Typography variant="h6" color="var(--mscb-black)">I. {t('Common.Input.Format.Title')}</Typography>
    </Box>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Box component="div" className='mscb-on-off-label'>
          <Typography variant="subtitle2" color="primary">1. {t('Common.OnOff.Label')}</Typography>
        </Box>
        <ToogleControlCpn/>
      </Grid>
    </Grid>
  </div>
  );

}

export default ToogleControl;