import { FC } from 'react';
import clsx from 'clsx';
import DateStyle from "./style";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DateComponent from 'views/components/base/Date';
import { useTranslation } from "react-i18next";


interface DateLayoutComponent extends FC { }

const DateLayout: DateLayoutComponent = () => {
  const { t } = useTranslation();
  const formatTitle= t('Common.Input.Format.Title');
  const dateLabel= t('Common.Input.Date.Label')
  const classes = DateStyle();
  const dateClass = clsx(classes.root, 'mscb-input-type-date')

  return (
    <Box component='div' className={dateClass}>
        <Box component="div" className='mscb-date-format-title text-upper'>
          <Typography variant="h6" color="var(--mscb-black)">I. {formatTitle}</Typography>
        </Box> 
        <Grid container>
          <Grid item xs={12}>
            <Box component="div" className='mscb-date-label'>
              <Typography variant="subtitle2" color="primary">1. {dateLabel}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box component="div" className='mscb-date-picker-box'>
              <DateComponent />
            </Box>
          </Grid>
          
        </Grid>
    </Box>
  );

}

export default DateLayout;