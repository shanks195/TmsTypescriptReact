import {  fetchIdentifiers, getIdentifiers, isLoadedIdentifiers, isLoadingIdentifiers } from 'features/inforBase/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IIdentifier } from 'types/models/InforBasic';
import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectIdentifierRef{
  getValue(): IIdentifier | undefined;
}

export interface SelectIdentifierProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string;
  required?: boolean;
}

const SelectIdentifier: ForwardRefRenderFunction<SelectIdentifierRef, SelectIdentifierProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, value, required } = props;
  const IdentifierElement = useRef<AutocompleteRef>(null);
  const Identifiers = useSelector(getIdentifiers);
  const loading = useSelector(isLoadingIdentifiers);
  const loaded = useSelector(isLoadedIdentifiers);
  const dispatch = useDispatch();

  useEffect(() => {
    !Identifiers.length && !loading && !loaded && dispatch(fetchIdentifiers());
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = IdentifierElement.current?.getValue()?.value ?? '';
      return Identifiers.find(c => c.Identifier_code === selected);
    }
  }));

  const options = Identifiers.map(c => ({ value: c.Identifier_code, label: c.Identifier_name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;

  return <Autocomplete
    ref={ IdentifierElement }
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

export default forwardRef(SelectIdentifier);