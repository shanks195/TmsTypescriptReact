import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import clsx from 'clsx';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormControl, TextField } from '@mui/material';

export interface SelectOption{
  value: string | number;
  label?: ReactNode;
  disabled?: boolean;
  isGroup?: boolean;
}

export interface SelectRef{
  getValue(): string | number;
  setValue(value: string | number): void;
  setOptions(options: SelectOption[]): void;
  setMessage(msg: string): void;
}

export interface SelectProps{
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: ReactNode;
  message?: string;
  onChange?(): void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  value?: string | number;
}

export interface SelectComponent extends ForwardRefRenderFunction<SelectRef, SelectProps>{}

const Select: SelectComponent = (props, ref) => {

  const { 
    className,
    disabled,
    fullWidth = true,
    label, 
    message,
    onChange,
    options, 
    placeholder,
    required,
    value = "",
  } = props;

  const [ SelectOptions, setSelectOptions ] = useState<SelectOption[]>(options);
  const [ SelectedValue, setSelectedValue ] = useState<string | number>(value);
  const [ SelectMessage, setSelectMessage ] = useState<string>(message ?? "");
  const Selected = useRef<string | number>(value);

  useEffect(() => {
    value !== undefined && value !== SelectedValue && setSelectedValue(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ value ]);

  useEffect(() => {
    setSelectOptions(options);
  }, [ options ]);

  useEffect(() => {
    if (SelectedValue !== undefined && SelectedValue !== Selected.current){
      Selected.current = SelectedValue;
      onChange && onChange();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ SelectedValue ]);

  useEffect(() => {
    setSelectMessage(message ?? "");
  }, [ message ]);

  useImperativeHandle(ref, () => ({
    getValue(){
      return SelectedValue;
    },
    setValue(val){
      setSelectedValue(val);
    },
    setOptions(opts){
      setSelectOptions(opts);
    },
    setMessage(msg){
      setSelectMessage(msg);
    }
  }));

  const error = Boolean(SelectMessage);
  const selectClass = clsx('mscb-input', className);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  }

  return (
    <FormControl className={selectClass} fullWidth={ fullWidth }>
      {!!label && (
        <InputLabel shrink required={required}>
          {label}
        </InputLabel>
      )}

      <TextField
        error={ error }
        select
        value={ SelectedValue }
        onChange={ handleChange }
        helperText={ SelectMessage }
        className={clsx({ error })}
        variant="standard"
        disabled={ disabled }
        SelectProps={{
          IconComponent: KeyboardArrowDownIcon,
        }}
      >
        {
          !!placeholder &&
          <MenuItem disabled value="" key="-1">
            <em>{ placeholder }</em>
          </MenuItem>
        }
        {SelectOptions.map((option) => {
          if (option.isGroup){
            return <ListSubheader key={ option.value }>
              { option.label ?? option.value }
            </ListSubheader>
          }

          return <MenuItem key={option.value} value={option.value} selected={ option.value === SelectedValue }>
            {option.label}
          </MenuItem>
        })}
      </TextField>

    </FormControl>
  );

}

export default forwardRef(Select);