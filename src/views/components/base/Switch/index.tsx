import { 
  forwardRef, 
  ReactNode, 
  ForwardRefRenderFunction, 
  useState,
  useImperativeHandle,
  useEffect,
  useRef,
  ChangeEvent
} from 'react';
import clsx from 'clsx';
import Switch from '@mui/material/Switch';
import { FormControl, FormControlLabel, InputLabel } from '@mui/material';
import SwitchStyle from './style';

export type Color = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' |'warning';

export type size = 'medium' | 'small';

export interface SwitchProps {
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: ReactNode;
  message?: string;
  onChange?(): void;
  required?: boolean;
  value?: boolean;
  color?: Color;
  size?: size;
}

export interface SwitchRef {
  getValue(): void;
  setValue(value: boolean): void;
}

export type SwitchComponent = ForwardRefRenderFunction<
  SwitchRef,
  SwitchProps
>;

const SwitchLabel: SwitchComponent = (props, ref) =>{

  const {
    className,
    label,
    onChange,
    required,
    value = false,
    color,
    disabled,
    size
  } = props;

  const classes = SwitchStyle();
  const [valueChecked, setValueChecked] = useState<boolean>(value);
  const checked = useRef<boolean>();


  useEffect(() => {
    if (valueChecked !== undefined && valueChecked !== checked.current) {
      checked.current = valueChecked;
      onChange && onChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueChecked]);

  useImperativeHandle(ref, () => ({
    getValue() {
      return {
        value: valueChecked,
      };
    },
    setValue(values) {
      setValueChecked(values);
    },
  }));

  const switchClasses = clsx("mscb-input", classes.root, className);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueChecked(e.target.checked);
  };

  return (
    <FormControl className={switchClasses}>
      {!!label && (
        <InputLabel shrink required={required}>
          {label}
        </InputLabel>
      )}

      <FormControlLabel
        control={
          <Switch
            onChange={handleChange}
            disabled={disabled}
            checked={valueChecked}
            value={valueChecked}
            color={color ?? "success"}
            size={size ?? "medium"}
          />
        }
        label={valueChecked ? "Bật" : "Tắt"}
      />
    </FormControl>
  )
}

export default forwardRef(SwitchLabel);