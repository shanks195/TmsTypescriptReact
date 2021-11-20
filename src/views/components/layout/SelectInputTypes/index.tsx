import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef, useEffect } from 'react';
import {  useSelector } from 'react-redux';
import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';
import { fetchTypes, getTypes, isLoadedTypes, isLoadingTypes } from 'features/inputType/store/slice';
import { useDispatch } from 'react-redux';
import { IMetadataGroups } from 'types/models/MetadataList';

export interface SelectInputTypesRef{
  getValue(): IMetadataGroups | undefined;
}

export interface SelectInputTypesProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string | number;
  required?: boolean;
}

const SelectInputType: ForwardRefRenderFunction<SelectInputTypesRef, SelectInputTypesProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, value, required } = props;
  const ElementRef = useRef<AutocompleteRef>(null);
  const TypesList = useSelector(getTypes);
  const loading = useSelector(isLoadingTypes);
  const loaded = useSelector(isLoadedTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    !TypesList.length && !loading && !loaded && dispatch(fetchTypes());
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = ElementRef.current?.getValue()?.value;
      return TypesList.find(c => c.id === selected);
    }
  }));

  const options = TypesList.map(c => ({ value: c.id, label: c.name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;

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

export default forwardRef(SelectInputType);