import { FC } from 'react';
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import TimeComponent from './TimeComponent';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import timeStyle from "./style";

interface TimeLayoutComponent extends FC { }

const TimeLayout: TimeLayoutComponent = () => {
    const { t } = useTranslation();
    const formatTitle= t('Common.Input.Format.Title');
    const hourLabel= t('Common.Input.Hour.Label');
    const classes = timeStyle();
    const timeClass = clsx(classes.root, 'mscb-input-type-time');

    return (
        <Box component='div' className={timeClass}>
            <Box component="div" className='mscb-time-format-title text-upper'>
                <Typography variant="h6" color="var(--mscb-black)">I. {formatTitle}</Typography>
            </Box>
            <Grid container>
                <Grid item xs={10}>
                    <Grid container spacing={6}>
                        <Grid item xs={6} className='mscb-time-12-item'>
                            <Box component="div" className='mscb-time-label'>
                                <Typography variant="subtitle2" color="primary">1. 12 {hourLabel}</Typography>
                            </Box>
                            <Box component="div" className='mscb-time-12-box'>
                                <TimeComponent type/>
                            </Box>
                        </Grid>
                        <Grid item xs={6} className='mscb-time-24-item'>
                            <Box component="div" className='mscb-time-label'>
                                <Typography variant="subtitle2" color="primary">2. 24 {hourLabel}</Typography>
                            </Box>
                            <Box component="div" className='mscb-time-24-box'>
                                <TimeComponent />
                            </Box>  
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );

}

export default TimeLayout;