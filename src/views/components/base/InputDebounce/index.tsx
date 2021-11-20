import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef } from 'react';
import Input, { InputProps, InputRef } from '../Input';

export interface InputDebounceRef extends InputRef{}

export interface InputDebounceProps extends InputProps{
  onDebounce?(): void;
  timeout?: number;
}

export interface InputDebounceComponent 
  extends ForwardRefRenderFunction<InputDebounceRef, InputDebounceProps>{}

const InputDebounce: InputDebounceComponent = (props, ref) => {

  const { children, onDebounce, onChange, timeout = 200, ...remain } = props;
  const inputRef = useRef<InputRef>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useImperativeHandle(ref, () => ({
    getValue: () => inputRef.current?.getValue() ?? '',
    setValue: val => inputRef.current?.setValue(val),
    focus: () => inputRef.current?.focus(),
    setSelectionRange: pos => inputRef.current?.setSelectionRange(pos)
  }));

  const changeInput = () => {
    if (!onDebounce || timeout <= 0){
      onChange && onChange();
    }
    else{
      timer.current && clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        onDebounce && onDebounce();
      }, timeout);
    }
  }

  return <Input
    { ...remain }
    ref={ inputRef }
    onChange={ changeInput }
  />

}

export default forwardRef(InputDebounce);