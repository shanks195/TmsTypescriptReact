import React from 'react';
import clsx from 'clsx';
import InputLabel from '@mui/material/InputLabel';
import MuiSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { SelectChangeEvent } from '@mui/material';

export interface SelectOption{
  value: string | number;
  label?: React.ReactNode;
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
  label?: React.ReactNode;
  message?: string;
  onChange?(): void;
  options: SelectOption[];
  placeholer?: string;
  required?: boolean;
  value?: string | number;
}

export interface SelectComponent extends React.ForwardRefRenderFunction<SelectRef, SelectProps>{}

const Select: SelectComponent = (props, ref) => {

  const { 
    className,
    label, 
    message,
    onChange,
    options, 
    placeholer,
    required,
    value = '',
  } = props;

  const [ SelectOptions, setSelectOptions ] = React.useState<SelectOption[]>(options);
  const [ SelectedValue, setSelectedValue ] = React.useState<string | number>(value);
  const [ SelectMessage, setSelectMessage ] = React.useState<string>(message ?? '');
  const Selected = React.useRef<string | number>(value);

  React.useEffect(() => {
    if (SelectedValue !== undefined && SelectedValue !== Selected.current){
      Selected.current = SelectedValue;
      onChange && onChange();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ SelectedValue ]);

  React.useImperativeHandle(ref, () => ({
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

  const handleChange = (e: SelectChangeEvent<string | number>) => {
    setSelectedValue(e.target.value);
  }

  return <div className={ selectClass }>
    {
      !!label &&
      <InputLabel required={ required }>{ label }</InputLabel>
    }
    <MuiSelect
      error={ error }
      value={ SelectedValue }
      placeholder={ placeholer }
      onChange={ handleChange }
      variant="standard"
      IconComponent={ KeyboardArrowDown }
      label={ SelectMessage }
    >
      {
        SelectOptions.map((option, index) => {
          if (option.isGroup){
            return <ListSubheader key={ index }>
              { option.label ?? option.value }
            </ListSubheader>
          }

          return <MenuItem
            key={ index }
            value={ option.value } 
            disabled={ option.disabled }
            selected={ option.value === SelectedValue }
          >
            { option.label ? option.label : option.value }
          </MenuItem>
        })
      }
    </MuiSelect>
  </div>

}

export default React.forwardRef(Select);