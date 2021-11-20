import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import Input, {InputRef} from "views/components/base/Input";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { useTranslation } from "react-i18next";
import Tabs from '@mui/material/Tabs';

import timeComponentStyle from "./styles";
import TimeSquareComponent from './TimeSquareItem';
import { FaClock } from 'react-icons/fa';
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';
import { Tab } from '@mui/material';
export interface TimeLayoutProps{
    className?: string;
    placeholder?: string;
    label?: string;
    isRequired?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
    hourClock?: number  ;
    secondClock?: number ;
    minuteClock?: number;
    property?: string;
    number?: number;
    min?: number;
    max?: number;
    type?: boolean;
  
   
  }
  
const TimeLayout: React.FC <TimeLayoutProps> = props => {
  // const { t } = useTranslation();
  // const formatTitle= t('Common.Input.Format.Title');
  // const hourLabel= t('Common.Input.Hour.Label')
  const {  type = false /*false mặc định type là 12h*/ } = props;
  const classes = timeComponentStyle();
  const timeInputRef = useRef<InputRef>(null);
  const timeClass = clsx(classes.root, 'mscb-time-layout-component');
  const [hourClock, setHourClock] = React.useState<number>(0);
  const [secondClock, setSecondClock] = React.useState<number>(0);
  const [minuteClock, setMinuteClock] = React.useState<number>(0);
  const [hourClock24, setHourClock24] = React.useState<number>(0);
  const [secondClock24, setSecondClock24] = React.useState<number>(0);
  const [minuteClock24, setMinuteClock24] = React.useState<number>(0);
  const [changeFlag, setChangeFlag] = React.useState<boolean>(false);
  const [timeString, setTimeString] = React.useState<string>("0:0:0");
  const [timeString24, setTimeString24] = React.useState<string>("0:0:0");
  const UpHour12 = () => {
      if (hourClock === 12) {
          setHourClock(1);
          console.log(hourClock);
          }
          else {
            setHourClock(hourClock + 1);
          }
          setChangeFlag(!changeFlag)
  
  }

  const UpMinute12 = () => {
      if (minuteClock === 59) {
          setMinuteClock(0);
          if (hourClock === 12) {
            setHourClock(1);
          } else {
            setHourClock(hourClock + 1)
          }
        } else {
          setMinuteClock(minuteClock + 1);
        } 
        setChangeFlag(!changeFlag)
  
  }

  const UpSecond12 = () => {
      if (secondClock === 59) {
          setSecondClock(0);
          if (minuteClock === 59) {
            setMinuteClock(0);
            if (hourClock === 12) {
              setHourClock(1);
            } else {
              setHourClock(hourClock + 1)
            }
          } else {
            setMinuteClock(minuteClock + 1);
          }
        } else {
          setSecondClock(secondClock + 1);
        } 
        setChangeFlag(!changeFlag)
  
  }

  const DownHour12 = () => {
      if (hourClock === 0) {
          setHourClock(11);
          console.log(hourClock);
          }
          else {
            setHourClock(hourClock - 1);
          }
          setChangeFlag(!changeFlag)
        
  }

  const DownMinute12 = () => {
      if (minuteClock === 0) { // nếu phút mà bằng 0 thì khi click giảm nó sẽ xuống phút cao nhất
          setMinuteClock(59);
          if (hourClock === 0) { // sau khi phút xuống cao nhất thì phải đi check tiếp là hour, nếu giơ thì phải cho giảm xuống
            setHourClock(11);
          } else {
            setHourClock(hourClock - 1)
          }
        } else {
          setMinuteClock(minuteClock - 1);
          }
          setChangeFlag(!changeFlag)
  
  }
  const DownSecond12 = () => {
      if (secondClock === 0) {
          setSecondClock(59);
        if (minuteClock === 0) {
            setMinuteClock(59);
          if (hourClock === 0) {
            setHourClock(11);
          } else {
            setHourClock(hourClock - 1)
          }
        } else {
          setMinuteClock(minuteClock - 1);
        }
        } else {
          setSecondClock(secondClock - 1);
        }
        setChangeFlag(!changeFlag)

  }

  const UpHour24 = () => {
      if (hourClock24 === 23) {
          setHourClock24(0);
          console.log(hourClock);
          }
          else {
            setHourClock24(hourClock24 + 1);
          }
          setChangeFlag(!changeFlag)
  
  }

  const UpMinute24 = () => {
      if (minuteClock24 === 59) {
          setMinuteClock24(0);
          if (hourClock24 === 23) {
            setHourClock24(0);
          } else {
            setHourClock24(hourClock24 + 1)
          }
        } else {
          setMinuteClock24(minuteClock24 + 1);
        } 
        setChangeFlag(!changeFlag)
  
  }

  const UpSecond24 = () => {
      if (secondClock24 === 59) {
          setSecondClock24(0);
          if (minuteClock24 === 59) {
            setMinuteClock24(0);
            if (hourClock24 === 23) {
              setHourClock24(0);
            } else {
              setHourClock24(hourClock24 + 1)
            }
          } else {
            setMinuteClock24(minuteClock24 + 1);
          }
        } else {
          setSecondClock24(secondClock24 + 1);
        } 
        setChangeFlag(!changeFlag)
  
  }

  const DownHour24 = () => {
      if (hourClock24 === 0) {
          setHourClock24(23);
          console.log(hourClock24);
          }
          else {
            setHourClock24(hourClock24 - 1);
          }
          setChangeFlag(!changeFlag)
  
  }

  const DownMinute24 = () => {
      if (minuteClock24 === 0) { // nếu phút mà bằng 0 thì khi click giảm nó sẽ xuống phút cao nhất
          setMinuteClock24(59);
          if (hourClock24 === 0) { // sau khi phút xuống cao nhất thì phải đi check tiếp là hour, nếu giơ thì phải cho giảm xuống
            setHourClock24(23);
          } else {
            setHourClock24(hourClock24 - 1)
          }
        } else {
          setMinuteClock24(minuteClock24 - 1);
          }
          setChangeFlag(!changeFlag)

  }

  const DownSecond24 = () => {
      if (secondClock24 === 0) {
          setSecondClock24(59);
          if (minuteClock24 === 0) {
              setMinuteClock24(59);
              if (hourClock24 === 0) {
                  setHourClock24(23);
              } else {
                  setHourClock24(hourClock24 - 1)
              }
          } else {
              setMinuteClock24(minuteClock24 - 1);
          }
      } else {
          setSecondClock24(secondClock24 - 1);
      }
      setChangeFlag(!changeFlag)

  };

  const clockStringFormat24 = () => {
      const hour24 = `0${hourClock24}`.slice(-2);
      const min24 = `0${minuteClock24}`.slice(-2);
      const second24 = `0${secondClock24}`.slice(-2);
      return `${hour24}:${min24}:${second24}`
  };

  const clockStringFormat = () => {
      const hour = `0${hourClock}`.slice(-2);
      const min = `0${minuteClock}`.slice(-2);
      const second = `0${secondClock}`.slice(-2);
      return `${hour}:${min}:${second}`
  };
      
  useEffect(() => {
    setTimeString24(clockStringFormat24)
    setTimeString(clockStringFormat)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeFlag])
  interface LinkTabProps {
    label?: string;
    href?: string;
  }
  
  function LinkTab(props: LinkTabProps) {
    return (
      <Tab
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const hour_12 = () => {
      return (
          <Grid container>
              <Grid item xs={12}>
                  <Box component="div" className="mscb-time-layout-input">
                      <Input
                          className="time-input" 
                          ref={timeInputRef} 
                          placeholder="hh:mm:ss"
                          value={timeString}
                          suffix={
                              <InputAdornment position="end">
                                  <FaClock size="14px" color='var(--mscb-primary)'/>
                              </InputAdornment>
                          }
                          disabled
                      />
                  </Box>
                  <Box component="div" className="mscb-time-layout-control flex-center" date-time="00:00:00">
                      <Box component="div" className='mscb-time-hours'>
                          <TimeSquareComponent rule={hourClock} onClickUpTime={UpHour12} onClickDownTime={DownHour12 }/>
                      </Box>
                      <Box component="div" className='mscb-time-dots'>
                          <Typography variant="h4" color="#1E93EC">:</Typography>
                      </Box>
                      <Box component="div" className='mscb-time-minutes'>
                          <TimeSquareComponent rule={minuteClock} onClickUpTime={UpMinute12} onClickDownTime={DownMinute12 }/>
                      </Box>
                      <Box component="div" className='mscb-time-dots'>
                          <Typography variant="h4" color="#1E93EC">:</Typography>
                      </Box>
                      <Box component="div" className='mscb-time-seconds'>
                          <TimeSquareComponent rule={secondClock} onClickUpTime={UpSecond12} onClickDownTime={DownSecond12 } />
                      </Box>
                  </Box>
                  <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                          <LinkTab label="AM" href="/drafts" />
                          <LinkTab label="PM" href="/trash" />
                        </Tabs>
              </Grid>
          </Grid>
      )
  }

  const hour_24 = () => {
      return (
          <Grid container>
              <Grid item xs={12}>
                  <Box component="div" className="mscb-time-layout-input">
                      <Input
                          className="time-input" 
                          ref={timeInputRef} 
                          placeholder="hh:mm:ss"
                          value={timeString24}
                          suffix={
                              <InputAdornment position="end">
                                  <FaClock size="14px" color='var(--mscb-primary)'/>
                              </InputAdornment>
                          }
                          disabled
                      />
                  </Box>
                  <Box component="div" className="mscb-time-layout-control flex-center" date-time="00:00:00">
                      <Box component="div" className='mscb-time-hours'>
                          <TimeSquareComponent rule={hourClock24} onClickUpTime={UpHour24} onClickDownTime={DownHour24 }/>
                      </Box>
                      <Box component="div" className='mscb-time-dots'>
                          <Typography variant="h4" color="#1E93EC">:</Typography>
                      </Box>
                      <Box component="div" className='mscb-time-minutes'>
                          <TimeSquareComponent rule={minuteClock24} onClickUpTime={UpMinute24} onClickDownTime={DownMinute24 }/>
                      </Box>
                      <Box component="div" className='mscb-time-dots'>
                          <Typography variant="h4" color="#1E93EC">:</Typography>
                      </Box>
                      <Box component="div" className='mscb-time-seconds'>
                          <TimeSquareComponent rule={secondClock24} onClickUpTime={UpSecond24} onClickDownTime={DownSecond24 } />
                      </Box>
                  </Box>
                  {/* <Box component="div" className="mscb-time-type-control flex-center">
                      <Box component="div" className='mscb-time-am flex-center'>
                          <Typography variant="h6" color="#fff">AM</Typography>
                      </Box>
                      <Box component="div" className='mscb-time-pm flex-center'>
                          <Typography variant="h6" color="#fff">PM</Typography>
                      </Box>
                      
                  </Box> */}
              </Grid>
          </Grid>
      )
  }

  return (
      <Box component='div' className={timeClass}>
          {type ? hour_12() : hour_24()}
      </Box>
  );
}

export default TimeLayout;