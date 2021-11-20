import { getVersion } from 'features/version/store/slice';
import { fetchVersion, isLoadedVersion, isLoadingVersion } from 'features/version/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IVersion } from 'types/models/Version';

import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectTextNumberRef{
  getValue(): IVersion | undefined;
}

export interface SelectTextNumberProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string;
  required?: boolean;
}

const SelectTextNumber: ForwardRefRenderFunction<SelectTextNumberRef, SelectTextNumberProps> = (props, ref) => {
  const ElementRef = useRef<AutocompleteRef>(null);
  const { className, label, placeholder, message, onChange, value, required } = props;
  const Version = useSelector(getVersion);
  const LoadingVersion = useSelector(isLoadingVersion);
  const LoadedVersion = useSelector(isLoadedVersion);
  const dispatch = useDispatch();
  
 

  useEffect(() => {
    !Version.length && !LoadingVersion && !LoadedVersion && dispatch(fetchVersion());
  });
  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = ElementRef.current?.getValue()?.value;
      return Version.find(c => c.id === selected);
    }
  }));
  
  const options = Version.map(c => ({ value: c.id, label: c.code}));
  const defaultValue = options.find(o => o.label === value) ? value : undefined;


  return <Autocomplete
  ref={ ElementRef }
  className={ className }
  label={ label }
  placeholder={ placeholder }
  options={ options }
  message={ message }
  value={ defaultValue }
  onChange={ onChange }
  required={ required }
/>

}

export default forwardRef(SelectTextNumber);