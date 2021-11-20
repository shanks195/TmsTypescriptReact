import { getTemplateType } from 'features/templateType/store/slice';
import { fetchTemplateType, isLoadedTemplateType, isLoadingTemplateType } from 'features/templateType/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITemplateType } from 'types/models/templateType';

import Autocomplete, {  AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectTemplateTypeRef{
  getValue(): ITemplateType | undefined;
}

export interface SelectTemplateTypeProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string | number;
  required?: boolean;
}

const SelectTemplateType: ForwardRefRenderFunction<SelectTemplateTypeRef, SelectTemplateTypeProps> = (props, ref) => {
  const ElementRef = useRef<AutocompleteRef>(null);
  const { className, label, placeholder, message, onChange, value, required } = props;
  const TemplateType = useSelector(getTemplateType);
  const LoadingTemplateType = useSelector(isLoadingTemplateType);
  const LoadedTemplateType = useSelector(isLoadedTemplateType);
  const dispatch = useDispatch();



  useEffect(() => {
    !TemplateType.length && !LoadingTemplateType && !LoadedTemplateType && dispatch(fetchTemplateType());
  });
  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = ElementRef.current?.getValue()?.value;
      return TemplateType.find(c => c.id === selected);
    }
  }));

  const options = TemplateType.map(c => ({ value: c.id, label: c.name }));
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

export default forwardRef(SelectTemplateType);