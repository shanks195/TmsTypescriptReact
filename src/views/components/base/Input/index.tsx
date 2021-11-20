import { 
  ChangeEvent,
  FocusEvent,
  forwardRef,
  ForwardRefRenderFunction, 
  KeyboardEvent, 
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import clsx from "clsx";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
// import inputStyle from 'assets/css/input';

export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "date"
  | "time"
  | "datetime";


export interface InputRef {
  [x:string]:any;
  getValue(): string | undefined;
  setValue(value: string): void;
  focus(): void;
  setSelectionRange(pos: number): void;
}

export interface InputProps {
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: ReactNode;
  message?: string;
  onChange?(): void;
  onKeyup?(e: KeyboardEvent<HTMLInputElement>): void;
  onKeypress?(e: KeyboardEvent<HTMLInputElement>): void;
  onFocus?(e: FocusEvent<HTMLInputElement>): void;
  onBlur?(e: FocusEvent<HTMLInputElement>): void;
  placeholder?: string;
  prefix?: ReactNode;
  required?: boolean;
  suffix?: ReactNode;
  type?: InputType;
  value?: string;
  classInput?: string;
  onDebounce?(): void;
  timeout?: number;
  format?: boolean,
  separator?: string;
  maxLength?: number;
}

export type InputComponent = ForwardRefRenderFunction<
  InputRef,
  InputProps
>;

const formatNumber = (value: string | undefined, separator: string) => {
  const arr = value?.split(',') ?? [''];
  let first = arr[0];
  
  const hasMinus = first.startsWith('-');
  first = first.replace('-', '');
  
  let format = '';

  for(let i = first.length - 1; i >= 0; --i){
    format = first[i] + format;
    format.split(separator)[0].length === 3  && (format = separator + format);
  }
  
  arr[0] = (hasMinus ? '-' : '') + format.replace(new RegExp('^' + separator.replace(/([^\w])/g, '\\$1'), 'g'), '');
  return arr.join(',');
}

const Input: InputComponent = (props, ref) => {

  const {
    className,
    fullWidth = true,
    value,
    disabled,
    label,
    message,
    onChange,
    placeholder,
    prefix,
    required,
    suffix,
    type = "text",
    classInput,
    onKeyup,
    onKeypress,
    onFocus,
    onBlur,
    timeout = 300,
    onDebounce,
    format,
    maxLength,
    separator = '.'
  } = props;

  const isNumber = type === 'number';
  const fsr = separator === ',' ? '.' : separator;
  const propValue = isNumber && format ? formatNumber(value, fsr) : value;

  const [defaultValue, setDefaultValue] = useState<string | undefined>(propValue);
  const [inputMessage, setMessage] = useState(message);

  const inputRef = useRef<HTMLInputElement>(null);
  const currentValue = useRef(propValue);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const focused = useRef(false);
  const beforeFocus = useRef<string | undefined>(defaultValue);

  useEffect(() => {
    if (defaultValue !== currentValue.current) {
      currentValue.current = defaultValue;

      if (focused.current || defaultValue === beforeFocus.current) return;
      beforeFocus.current = defaultValue;

      if (timeout <= 0 || !onDebounce){
        onChange && onChange();
      }
      else{
        timer.current && clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          onDebounce && onDebounce();
        }, timeout);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  useEffect(() => {
    value !== defaultValue && setDefaultValue(isNumber && format ? formatNumber(value, fsr) : value); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    message === inputMessage || setMessage(message);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ message ]);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      if (!isNumber || !defaultValue) return defaultValue;
      const regex = new RegExp(fsr.replace(/([^\w])/g, '\\$1'), 'g');
      return defaultValue.replace(regex, '').replace(',', '.');
    },
    setValue: (val) => val === defaultValue || setDefaultValue(val),
    focus: () => inputRef.current?.focus(),
    setSelectionRange: pos => {
      if (inputRef.current){
        inputRef.current.selectionStart = pos;
      }
    }
  }));

  const inputClass = clsx("mscb-input", className);
  const error = Boolean(inputMessage);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDefaultValue(e.target.value);
  };

  const keypressInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isNumber){
      onKeypress && onKeypress(e);
      return;
    }
  
    const code = e.code;

    if (!code.match(/^Digit\d$/) && !code.match(/^Numpad\d$/)){
      if (['NumpadSubtract', 'Minus'].indexOf(code) > -1){
        defaultValue?.length && e.preventDefault();
      }
      else if (['Comma'].indexOf(code) > -1){
        defaultValue?.match(/^-?\d+$/) || e.preventDefault();
      }
      else{
        e.preventDefault();
      }
    }
  }

  const focusInput = (e: FocusEvent<HTMLInputElement>) => {
    if (!isNumber || !format){
      onFocus && onFocus(e);
      return;
    }

    focused.current = true;

    const regex = new RegExp(fsr.replace(/([^\w])/g, '\\$1'), 'g');
    const newValue = defaultValue?.replace(regex, '');
    
    defaultValue === newValue 
      ? (focused.current = false) 
      : setDefaultValue(newValue);
  }

  const blurInput = (e: FocusEvent<HTMLInputElement>) => {
    if (!isNumber || !format){
      onBlur && onBlur(e);
      return;
    }

    focused.current = false;
    const newValue = formatNumber(defaultValue, fsr);
    
    newValue === defaultValue || setDefaultValue(newValue);
  }

  const inputProps = { 
    className: classInput,
  };
  prefix && Object.assign(inputProps, { startAdornment: prefix });
  suffix && Object.assign(inputProps, { endAdornment: suffix });

  return (
    <FormControl className={inputClass} fullWidth={ fullWidth }>
      {!!label && (
        <InputLabel shrink required={required}>
          {label}
        </InputLabel>
      )}

      <TextField
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        className={ clsx({ error }) }
        variant="standard"
        helperText={message}
        ref={inputRef}
        onChange={changeInput}
        type={ isNumber ? 'text' : type }
        InputProps={inputProps}
        value={defaultValue ?? ''}
        onKeyUp={ onKeyup }
        onKeyPress={ keypressInput }
        onFocus={ focusInput }
        onBlur={ blurInput }
        inputProps={
          {
            maxLength: maxLength,
          }
        }
      />
    </FormControl>
  );
};

export default forwardRef(Input);