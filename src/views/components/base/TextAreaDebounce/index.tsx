import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef } from 'react';
import TextArea, { TextAreaProps, TextAreaRef } from '../TextArea';

export interface TextAreaDebouceRef extends TextAreaRef{};

export interface TextAreaDebouceProps extends TextAreaProps{
  onDebounce?(): void;
  timeout?: number;
}

export interface TextAreaDebouceComponent extends ForwardRefRenderFunction<
  TextAreaDebouceRef,
  TextAreaDebouceProps
>{}

const TextAreaDebouce: TextAreaDebouceComponent = (props, ref) =>{

  const { children, onDebounce, onChange, timeout = 200, ...remain } = props;
  const textAreaRef = useRef<TextAreaRef>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useImperativeHandle(ref, () => ({
    getValue: () => textAreaRef.current?.getValue() ?? '',
    setValue: val => textAreaRef.current?.setValue(val)
  }));

  const changeTextArea = () =>{
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

  return(
    <TextArea
      { ...remain }
      ref={ textAreaRef }
      onChange={ changeTextArea }
    />

  )
}

export default forwardRef(TextAreaDebouce);