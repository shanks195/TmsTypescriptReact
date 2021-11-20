
import { FC } from 'react';
import clsx from 'clsx';
import dateTimeStyle from "./style";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DateComponent from 'views/components/base/Date';
import { FaCalendarCheck, FaClock } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import TimeLayout from './TimeComponent';

interface DateTimeLayoutComponent extends FC { }

const DateTimeLayout: DateTimeLayoutComponent = () => {
 
  const classes = dateTimeStyle();
  const { t } = useTranslation();
  const formatTitle= t('Common.Input.Format.Title');
  const hourLabel= t('Common.Input.Hour.Label');
  const dateLabel= t('Common.Input.Date.Label')
  const dateTimneClass = clsx(classes.root, 'mscb-input-type-date-time')

  return (
    <Box component="div" className={dateTimneClass}>
        <Box component="div" className='mscb-date-time-format-title text-upper'>
          <Typography variant="h6" color="var(--mscb-black)">I. {formatTitle}</Typography>
        </Box> 
        <Box component="div" className='mscb-data-time-label'>
              <Typography variant="subtitle2" color="primary">1. 12 {hourLabel}</Typography>
        </Box>
        <Grid container>
            <Grid item xs={8}>
                <Box component="div" className="mscb-date-time-box">
                    <Grid container>
                        <Grid item xs={6}>
                            <Box component="div" className="mscb-date-box-label flex-center" >
                                <Box component="div" className="date-box-label-icon" >
                                    <FaCalendarCheck color="var(--mscb-primary)" />
                                </Box>
                                <Box component="div" className="date-box-label-text" >
                                    <Typography variant="subtitle2" color="var(--mscb-black)">{dateLabel}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box component="div" className="mscb-hour-box-label flex-center" >
                                <Box component="div" className="hour-box-label-icon" >
                                    <FaClock color="var(--mscb-primary)" />
                                </Box>
                                <Box component="div" className="hour-box-label-text" >
                                    <Typography variant="subtitle2" color="var(--mscb-black)">{hourLabel}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={8}>
                <Grid container className="mscb-date-time-input-12">
                    <Grid item xs={6}>
                        <Box component="div" className="mscb-date-picker-box">
                            <DateComponent />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box component="div" className="mscb-time-input-box">
                            <TimeLayout type />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Box component="div" className='mscb-data-time-label'>
              <Typography variant="subtitle2" color="primary">2. 24 {hourLabel}</Typography>
        </Box>
        <Grid container>
            <Grid item xs={8}>
                <Grid container className="mscb-date-time-input-24">
                    <Grid item xs={6} >
                        <Box component="div" className="mscb-date-picker-box">
                            <DateComponent />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box component="div" className="mscb-time-input-box">
                            <TimeLayout />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );

}

export default DateTimeLayout;

  