import {  fetchDeclarationForms, getDeclarationForms, isLoadedDeclarationForms, isLoadingDeclarationForms } from 'features/inforBase/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IDeclarationForm } from 'types/models/InforBasic';
import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectDeclarationFormRef{
  getValue(): IDeclarationForm | undefined;
}

export interface SelectDeclarationFormProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string;
  required?: boolean;
}

const SelectDeclarationForm: ForwardRefRenderFunction<SelectDeclarationFormRef, SelectDeclarationFormProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, value, required } = props;
  const DeclarationFormElement = useRef<AutocompleteRef>(null);
  const DeclarationForms = useSelector(getDeclarationForms);
  const loading = useSelector(isLoadingDeclarationForms);
  const loaded = useSelector(isLoadedDeclarationForms);
  const dispatch = useDispatch();

  useEffect(() => {
    !DeclarationForms.length && !loading && !loaded && dispatch(fetchDeclarationForms());
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = DeclarationFormElement.current?.getValue()?.value ?? '';
      return DeclarationForms.find(c => c.IDeclarationForm_code === selected);
    }
  }));

  const options = DeclarationForms.map(c => ({ value: c.IDeclarationForm_code, label: c.IDeclarationForm_name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;

  return <Autocomplete
    ref={ DeclarationFormElement }
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

export default forwardRef(SelectDeclarationForm);