import { ForwardRefRenderFunction, forwardRef, useState, useRef, useImperativeHandle } from 'react';
import TextField from '@mui/material/TextField';
// import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import { FaCalendarCheck } from 'react-icons/fa';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import clsx from "clsx";
import { FormControl, InputLabel } from '@mui/material';
import { useEffect } from 'react';
import DateComponentStyle from './style';

export interface DateComponentProps{
    className?: string;
}

export interface InputDateRef {
  getValue(): Date | null;
  setValue(value: Date): void;
}

export interface InputDateProps {
  disabled?: boolean,
  label?: string,
  className?: string,
  fullWidth?: boolean,
  required?: boolean,
  value?: Date,
  onChange?(newValue: Date): void
}
export interface InputDateComponent 
  extends ForwardRefRenderFunction<InputDateRef, InputDateProps>{}

const InputDate: InputDateComponent = (props, ref) => {

  const { label, disabled, className, fullWidth, required, value, onChange } = props;

  const classes = DateComponentStyle();
  const inputClass = clsx("mscb-input", className, classes.root);
  const InputDateRef = useRef<HTMLInputElement>(null);
  const [defaultValue, setDefaultValue] = useState<Date | null>(null);

  useEffect(() => {
    value && setDefaultValue(value);
  }, [value])

  useImperativeHandle(ref, () => ({
    getValue: () => defaultValue,
    setValue: (val) => val === defaultValue || setDefaultValue(val)
  }));

  const handleChange = (newValue: Date | null) => {
    if (newValue) {
      setDefaultValue(newValue);
      onChange && onChange(newValue);
    }
  }

  return (
    <FormControl className={inputClass} fullWidth={ fullWidth }>
      {!!label && (
        <InputLabel shrink required={required}>
          {label}
        </InputLabel>
      )}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          inputFormat="dd/MM/yyyy"
          disabled={disabled}
          value={defaultValue}
          ref={InputDateRef}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} helperText={null} />
          )}
          components={{
            OpenPickerIcon: FaCalendarCheck 
            }}
        />
      </LocalizationProvider>
    </FormControl>
  );
}

export default forwardRef(InputDate);