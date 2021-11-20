import React from 'react';
import clsx from 'clsx';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimeComponentStyle from './style';


  
export interface TimeComponentProps{
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

const TimeComponent: React.FC <TimeComponentProps> = props => {
    const {  type = false /*false mặc định type là 12h*/ } = props;
    const [hourClock, setHourClock] = React.useState<number>(0);
    const [secondClock, setSecondClock] = React.useState<number>(0);
    const [minuteClock, setMinuteClock] = React.useState<number>(0);
    const [hourClock24, setHourClock24] = React.useState<number>(0);
    const [secondClock24, setSecondClock24] = React.useState<number>(0);
    const [minuteClock24, setMinuteClock24] = React.useState<number>(0);
    const [changeFlag, setChangeFlag] = React.useState<boolean>(false);
    // const [timeString, setTimeString] = React.useState<string>("00:00:00");
    // const [timeString24, setTimeString24] = React.useState<string>("00:00:00");
    const handleUp12Hour = () => {
        if (hourClock === 12) {
        setHourClock(0);
        console.log(hourClock);
        }
        else {
          setHourClock(hourClock + 1);
        }
        setChangeFlag(!changeFlag)
      }
      const handleDown12Hour = () => {
        if (hourClock === 0) {
        setHourClock(12);
        console.log(hourClock);
        }
        else {
          setHourClock(hourClock - 1);
        }
        setChangeFlag(!changeFlag)
      }
    
      const handleUp12Minute = () => {
        if (minuteClock === 60) {
        setMinuteClock(0);
        if (hourClock === 12) {
          setHourClock(0);
        } else {
          setHourClock(hourClock + 1)
        }
      } else {
        setMinuteClock(minuteClock + 1);
      } 
      setChangeFlag(!changeFlag)
    }
      const handleDown12Minute = () => {
        if (minuteClock === 0) { // nếu phút mà bằng 0 thì khi click giảm nó sẽ xuống phút cao nhất
        setMinuteClock(60);
        if (hourClock === 0) { // sau khi phút xuống cao nhất thì phải đi check tiếp là hour, nếu giơ thì phải cho giảm xuống
          setHourClock(12);
        } else {
          setHourClock(hourClock - 1)
        }
      } else {
        setMinuteClock(minuteClock - 1);
        }
        setChangeFlag(!changeFlag)
      }
      const handleUp12Second = () => {if (secondClock === 60) {
        setSecondClock(0);
        if (minuteClock === 60) {
          setMinuteClock(0);
          if (hourClock === 12) {
            setHourClock(0);
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
      const handleDown12Second = () => {
        if (secondClock === 0) {
          setSecondClock(60);
        if (minuteClock === 0) {
            setMinuteClock(60);
          if (hourClock === 0) {
            setHourClock(12);
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
      
      const handleUp24Hour = () => {
        if (hourClock24 === 24) {
        setHourClock24(0);
        console.log(hourClock);
        }
        else {
          setHourClock24(hourClock24 + 1);
        }
        setChangeFlag(!changeFlag)
      }
      const handleDown24Hour = () => {
        if (hourClock24 === 0) {
        setHourClock24(24);
        console.log(hourClock24);
        }
        else {
          setHourClock24(hourClock24 - 1);
        }
        setChangeFlag(!changeFlag)
      }
    
      const handleUp24Minute = () => {
        if (minuteClock24 === 60) {
        setMinuteClock24(0);
        if (hourClock24 === 24) {
          setHourClock24(0);
        } else {
          setHourClock24(hourClock24 + 1)
        }
      } else {
        setMinuteClock24(minuteClock24 + 1);
      } 
      setChangeFlag(!changeFlag)
    }
      const handleDown24Minute = () => {
        if (minuteClock24 === 0) { // nếu phút mà bằng 0 thì khi click giảm nó sẽ xuống phút cao nhất
        setMinuteClock24(60);
        if (hourClock24 === 0) { // sau khi phút xuống cao nhất thì phải đi check tiếp là hour, nếu giơ thì phải cho giảm xuống
          setHourClock24(24);
        } else {
          setHourClock24(hourClock24 - 1)
        }
      } else {
        setMinuteClock24(minuteClock24 - 1);
        }
        setChangeFlag(!changeFlag)
      }
      const handleUp24Second = () => {
          if (secondClock24 === 60) {
        setSecondClock24(0);
        if (minuteClock24 === 60) {
          setMinuteClock24(0);
          if (hourClock24 === 24) {
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
      const handleDown24Second = () => {
        if (secondClock24 === 0) {
          setSecondClock24(60);
        if (minuteClock24 === 0) {
            setMinuteClock24(60);
          if (hourClock24 === 0) {
            setHourClock24(12);
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
      }
      // const clockStringFormat24 = () => {
      //   const hour24 = `0${hourClock24}`.slice(-2);
      //   const min24 = `0${minuteClock24}`.slice(-2);
      //   const second24 =  `0${secondClock24}`.slice(-2);
      //   return `${hour24}:${min24}:${second24}` 
      //   }
      // const clockStringFormat = () => {
      //   const hour = `0${hourClock}`.slice(-2);
      //   const min = `0${minuteClock}`.slice(-2);
      //   const second =  `0${secondClock}`.slice(-2);
      //   return `${hour}:${min}:${second}` 
      //   }
        
      // useEffect(() => {
      //   const ClockStringFormat24=clockStringFormat24();
      //   const ClockStringFormat= clockStringFormat();
      //   setTimeString24(clockStringFormat24)
      //   setTimeString(clockStringFormat)
      // }, [changeFlag,clockStringFormat24,clockStringFormat])
  const classes = TimeComponentStyle();
  const hour_12 = () => {
    return (
      <div>
         <div className="input-time-clock-v2 w227 h-36 bg-white-line">
           {/* <span>{timeString}</span> */}
           <AccessTimeIcon className="icon-clock"/>
         </div>
          <div className="time-picker" date-time="00:00:00">
          <>
            <div className="hour">
              <div className="hr-up increase" onClick={ handleUp12Hour}/>
              <input type="number" name="hour" value={hourClock} readOnly className="hr" />
              <div className="hr-down decrease" onClick={ handleDown12Hour}/>
            </div>
            <div className="separator">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="minute">
              <div className="mns-up increase" onClick={ handleUp12Minute}/>
              <input type="number" name="minute" value={minuteClock} readOnly className="mns" />
              <div className="mns-down decrease" onClick={ handleDown12Minute}/>
            </div>
            <div className="separator">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="second">
              <div className="snd-up increase" onClick={handleUp12Second} />
              <input type="number" name="second" value={secondClock} readOnly className="snd" />
              <div className="snd-down decrease" onClick={handleDown12Second} />
            </div>
          </>
         
          

        </div>
          <div className="HH">
            <div className="inputCH inputAM">AM</div>
            <div className="inputCH">PM</div>
          </div>
      </div>
     
    )
  }

  const hour_24 = () => {
    return (
      <div>
         <div className="input-time-clock-v2 w227 h-36 bg-white-line">
           {/* <span>{timeString24}</span> */}
           <AccessTimeIcon className="icon-clock"/>
         </div>
          <div className="time-picker" date-time="00:00:00">
              <>
              <div className="hour">
                <div className="hr-up increase" onClick={handleUp24Hour}/>
                <input type="number" name="hour" value={hourClock24} readOnly className="hr" />
                <div className="hr-down decrease" onClick={handleDown24Hour}/>
              </div>
              <div className="separator">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <div className="minute">
                <div className="mns-up increase" onClick={handleUp24Minute}/>
                <input type="number" name="minute" value={minuteClock24} readOnly className="mns" />
                <div className="mns-down decrease" onClick={handleDown24Minute}/>
              </div>
              <div className="separator">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <div className="second">
                <div className="snd-up increase" onClick={handleUp24Second} />
                <input type="number" name="second" value={secondClock24} readOnly className="snd" />
                <div className="snd-down decrease" onClick={handleDown24Second} />
              </div>
            </>
        </div>
        <div className="HH">
            <div className="inputCH inputAM">AM</div>
            <div className="inputCH">PM</div>
          </div>
      </div>
      
      
    )
  }


  return <div className={clsx(classes.root, 'dateI')}>
            <div className="text-left time-12">
        <form >
        {
            type ? hour_12() : hour_24()
          }
        
        </form>
      </div>

</div>

}

export default TimeComponent;