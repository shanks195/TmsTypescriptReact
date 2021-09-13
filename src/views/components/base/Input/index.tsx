import React from "react";
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
  [x: string]: any;
  getValue(): string;
  setValue(value: string): void;
}

export interface InputProps {
  className?: string;
  disabled?: boolean;
  label?: React.ReactNode;
  message?: string;
  onChange?(): void;
  placeholder?: string;
  prefix?: React.ReactNode;
  required?: boolean;
  suffix?: React.ReactNode;
  type?: InputType;
  value?: string;
}

export type InputComponent = React.ForwardRefRenderFunction<
  InputRef,
  InputProps
>;

const Input: InputComponent = (props, ref) => {
  // const classes = inputStyle()

  const {
    className,
    value,
    disabled,
    label,
    message,
    onChange,
    placeholder,
    prefix,
    required,
    suffix,
    type = "text"
  } = props;

  // const classes = inputStyle();
  const [defaultValue, setDefaultValue] = React.useState<string>(value ?? "");

  const inputRef = React.useRef<HTMLInputElement>(null);
  const currentValue = React.useRef(value);

  React.useEffect(() => {
    if (defaultValue !== currentValue.current) {
      currentValue.current = defaultValue;
      onChange && onChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  React.useImperativeHandle(ref, () => ({
    getValue: () => defaultValue,
    setValue: (val) => val === defaultValue || setDefaultValue(val)
  }));

  const inputClass = clsx("mscb-input", className);
  const error = Boolean(message);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultValue(e.target.value);
  };

  const inputProps = {};
  prefix && Object.assign(inputProps, { startAdornment: prefix });
  suffix && Object.assign(inputProps, { endAdornment: suffix });

  return (
    <FormControl className={inputClass} fullWidth>
      {!!label && (
        <InputLabel shrink required={required}>
          {label}
        </InputLabel>
      )}

      <TextField
        error={error}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        variant="standard"
        helperText={message}
        ref={inputRef}
        onChange={changeInput}
        type={type}
        InputProps={inputProps}
      />
    </FormControl>
  );
};

export default React.forwardRef(Input);