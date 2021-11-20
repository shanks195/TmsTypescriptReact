import { 
  forwardRef, 
  ForwardRefRenderFunction, 
  ReactNode, 
  SyntheticEvent, 
  useEffect, 
  useImperativeHandle, 
  useRef, 
  useState
} from 'react';
import { Autocomplete as MuiAutocomplete } from '@mui/material';
import { FormControl, InputLabel, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import clsx from "clsx";

import AutocompleteStyles from "./style";

export interface AutocompleteOption{
  label: string;
  value: string | number;
  className?: string;
}

export interface AutocompleteRef{
  getValue(): AutocompleteOption |  null;
  setValue(val: string | number): void;
}

export interface AutocompleteProps{
  className?: string;
  disabled?: boolean;
  label?: ReactNode;
  message?: string;
  onChange?(): void;
  options?: AutocompleteOption[];
  placeholder?: string;
  required?: boolean;
  value?: string | number;
}

const Autocomplate: ForwardRefRenderFunction<AutocompleteRef, AutocompleteProps> = (props, ref) => {

  const classes = AutocompleteStyles();

  const { 
    className, 
    disabled, 
    label, 
    message, 
    onChange, 
    options = [], 
    placeholder, 
    required, 
    value
  } = props;

  const OriginValue = options.find(o => o.value === value) ?? null;

  const [ CurrentValue, setCurrentValue ] = useState<AutocompleteOption | null>(OriginValue);
  const SelectedValue = useRef<AutocompleteOption | null>(OriginValue);

  useEffect(() => {
    const newValue = options.find(o => o.value === value) ?? null;
    newValue?.value === CurrentValue?.value || setCurrentValue(newValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ value ]);

  useEffect(() => {
    if (!onChange || CurrentValue === undefined) return;
    if (!CurrentValue){
      if (SelectedValue.current){
        SelectedValue.current = CurrentValue;
        onChange();
      }
      return;
    }

    if (!SelectedValue.current || CurrentValue.value !== SelectedValue.current.value){
      SelectedValue.current = CurrentValue;
      onChange();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ CurrentValue ]);

  useImperativeHandle(ref, () => ({
    getValue: () => CurrentValue ?? null,
    setValue: val => {
      const newValue = options.find(opt => opt.value === val) ?? null;
      SelectedValue.current = newValue;
      setCurrentValue(newValue);
    }
  }))

  const handleChange = (e: SyntheticEvent, selected: AutocompleteOption | null) => {
    setCurrentValue(selected);
  }

  return <MuiAutocomplete 
    className={clsx(classes.root, className)}
    disabled={ disabled }
    options={ options }
    getOptionLabel={(option: AutocompleteOption) => option.label}
    onChange={ handleChange }
    value={CurrentValue }
    isOptionEqualToValue={ (opt, val) => opt?.value === val?.value }
    popupIcon={ <KeyboardArrowDownIcon fontSize="small" /> }
    renderInput={param => (
      <FormControl fullWidth className="mscb-input">
        <InputLabel shrink required={ required }>{ label }</InputLabel>
        <TextField
          { ...param }
          variant="outlined"
          placeholder={ placeholder }
          error={ Boolean(message).valueOf() }
          helperText={ message }
          
        />
      </FormControl>
      
    )}
  />

}

export default forwardRef(Autocomplate);