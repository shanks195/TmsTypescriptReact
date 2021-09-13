import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiCheckbox from '@mui/material/Checkbox';
import clsx from "clsx";

export type CheckboxVariant = 'primary' | 'secondary';
export type CheckboxPosition = 'top' | 'start' | 'bottom' | 'end';

export interface CheckboxValue{
  value: string | number;
  checked: boolean;
}

export interface CheckboxOption {
  checked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  position?: CheckboxPosition;
  value: string | number;
  variant?: CheckboxVariant;
}

export interface CheckboxProps extends Partial<CheckboxOption>{
  children?: React.ReactNode;
  className?: string;
  name?: string;
  onChange?(): void;
  options?: CheckboxOption[];
}

export interface CheckboxRef {
  getValue(): CheckboxValue[];
  setValue(value: (string | number | null)[]): void;
  getChecked(): boolean[];
  setCheckbox(options: CheckboxOption[]): void;
}

export interface CheckboxComponent
  extends React.ForwardRefRenderFunction<CheckboxRef, CheckboxProps> {}

const Checkbox: CheckboxComponent = (props, ref) => {

  const {
    checked,
    children,
    className,
    disabled,
    label,
    name,
    onChange,
    options = [],
    position = 'end',
    value = '',
    variant = 'primary'
  } = props;

  if (!options.length){
    options.push({
      checked,
      disabled,
      label: label ?? children,
      position,
      value,
      variant
    });
  }

  const getChecked = (opts: CheckboxOption[]) => opts.map(o => !!o.checked);

  const [ CheckboxOptions, setCheckboxOptions ] = React.useState<CheckboxOption[]>(options);
  const [ CurrentChecked, setCurrentChecked ] = React.useState<boolean[]>([]);
  const Checked = React.useRef<boolean[]>(getChecked(CheckboxOptions));

  React.useEffect(() => {
    CheckboxOptions === undefined || setCurrentChecked(getChecked(CheckboxOptions));
  }, [ CheckboxOptions ]);

  React.useEffect(() => {
    if (CurrentChecked !== undefined && CurrentChecked.length){
      const changed = CurrentChecked.map((current, index) => {
        return Checked.current[index] === current;
      })

      if (changed.indexOf(false) > -1){
        Checked.current = [ ...CurrentChecked ];
        onChange && onChange();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ CurrentChecked ]);

  React.useImperativeHandle(ref, () => ({
    getValue(){
      return CheckboxOptions.map((option, index) => {
        return {
          value: option.value,
          checked: !!CurrentChecked[index]
        }
      })
    },
    setValue(values){
      let changed = false;

      const newOptions = CheckboxOptions.map((option, index) => {
        if (!values[index] || values[index] === null) return option;
        changed = true;
        return { ...option, value: values[index] } as CheckboxOption;
      });

      changed && setCheckboxOptions(newOptions);
    },
    getChecked(){
      return CurrentChecked;
    },
    setCheckbox(opts){
      setCheckboxOptions(opts);
    }
  }));

  const checkboxClass = clsx(className);

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentChecked(
      CurrentChecked.map(
        (current, pos) => pos === index ? e.target.checked : current
      )
    );
  }

  return <FormGroup row className={ checkboxClass }>
    {
      CheckboxOptions.map((option, index) => {
        if (!option.label){
          return <MuiCheckbox
            key={ index }
            checked={ option.checked }
            onChange={ handleChange(index) }
            color={ option.variant }
            disabled={ option.disabled }
            value={ option.value }
            name={ name }
          />
        }

        return <FormControlLabel
          key={ index }
          label={ option.label }
          labelPlacement={ option.position ?? 'end' }
          control={
            <MuiCheckbox
              checked={ option.checked }
              onChange={ handleChange(index) }
              color={ option.variant ?? 'primary' }
              disabled={ option.disabled }
              value={ option.value }
              name={ name }
            />
          }
        />
      })
    }
  </FormGroup>
};

export default React.forwardRef(Checkbox);
