import { FC } from 'react';
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
// import { useTranslation } from "react-i18next";
import timeSquareStyle from "./styles";

export interface TimeComponentProps{
    rule: string | number,
    onClickUpTime?(): void;
    onClickDownTime?(): void;
} 

export interface TimeComponent extends FC<TimeComponentProps> { }

const TimeSquareComponent: TimeComponent = (props) => {

    const {rule, onClickUpTime,onClickDownTime} = props
    // const { t } = useTranslation();
    // const formatTitle= t('Common.Input.Format.Title');
    // const hourLabel= t('Common.Input.Hour.Label')
    const classes = timeSquareStyle();
    const timeClass = clsx(classes.root, 'mscb-time-square-component');
  
    return (
        <Box component='div' className={timeClass}>
            <Grid container>
                <Grid item xs={12}>
                    <Box component="div" className='up-button-box'>
                        <Button variant='text' className='up-btn' onClick={onClickUpTime}>
                            <FaCaretUp size='28px' color='var(--mscb-black)' />
                        </Button>
                    </Box>
                    <Box component="div" className='time-square-box flex-center'>
                        <input type="text" name="" className="time-square-input flex-center" value={rule.toLocaleString(undefined, {minimumIntegerDigits: 2})} />
                        {/* <Box component="div" className='time-square-input flex-center'>
                            <Typography variant="h5" color="var(--mscb-black)">{rule}</Typography>
                        </Box> */}
                    </Box>
                    <Box component="div" className='down-button-box'>
                    <Button variant='text' className='down-btn' onClick={onClickDownTime}>
                        <FaCaretDown size='28px' color='var(--mscb-black)' />
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );

}

export default TimeSquareComponent;