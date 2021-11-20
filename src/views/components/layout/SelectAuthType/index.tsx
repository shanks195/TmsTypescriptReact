import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { SelectOption, SelectRef } from 'views/components/base/Select';
import { IAuthType } from 'types/models/AuthType';
import { 
  fetchAuthType, 
  getfetchAuthType, 
  isFetched, 
  isFetching 
} from 'features/auth-type/store/slice';


export interface SelectAuthTypeRef{
  getValue(): IAuthType | undefined;
  setValue(value: string): void;
}

export interface SelectAuthTypeProps{
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: ReactNode;
  message?: string;
  onChange?(): void;
  placeholder?: string;
  required?: boolean;
  value?: string;
}

export interface SelectAuthTypeComponent extends
  ForwardRefRenderFunction<SelectAuthTypeRef, SelectAuthTypeProps>{}

const SelectAuthType: SelectAuthTypeComponent = (props, ref) => {

  const { className, fullWidth, label, message, onChange, placeholder, required, value, disabled } = props;

  const elementRef = useRef<SelectRef>(null);
  const AuthType = useSelector(getfetchAuthType);
  const fetching = useSelector(isFetching);
  const fetched = useSelector(isFetched);
  const dispatch = useDispatch();

  const [ CurrentValue, setCurrentValue ] = useState<string|undefined>(value);
  const Current = useRef<string|undefined>(value);

  useEffect(() => {
      Current.current = value;
      if (value !== CurrentValue){
          setCurrentValue(value);
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ value ]);

  useEffect(() => {
      !AuthType.length
      && !fetched
      && !fetching
      && dispatch(fetchAuthType());
  });

  useEffect(() => {
      if (CurrentValue !== Current.current){
          Current.current = CurrentValue;
          onChange && onChange();
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ CurrentValue ]);

  useImperativeHandle(ref, () => ({
      getValue: () => AuthType.find( m => m.id.toString() === CurrentValue),
      setValue: val => {
          val !== CurrentValue && setCurrentValue(val);
      }
  }))

  const handleChange = () => {
      const selected = elementRef.current?.getValue();
      setCurrentValue(selected?.toString())
  }

  const options: SelectOption[] = AuthType.map(c => ({ value: c.id, label: c.name }));

  return <Select
      ref={ elementRef }
      className={ className }
      fullWidth={ fullWidth }
      label={ label }
      message={ message }
      onChange={ handleChange }
      options={ options }
      placeholder={ placeholder }
      required={ required }
      value={ CurrentValue}
      disabled={ disabled }
  />

}

export default forwardRef(SelectAuthType);