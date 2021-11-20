import {  fetchSampleType, getSampleTypes, isLoadedSampleTypes, isLoadingSampleTypes } from 'features/inforBase/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISampleType } from 'types/models/InforBasic';
import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectSampleTypeRef{
  getValue(): ISampleType | undefined;
}

export interface SelectSampleTypeProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string;
  required?: boolean;
}

const SelectSampleType: ForwardRefRenderFunction<SelectSampleTypeRef, SelectSampleTypeProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, value, required } = props;
  const SampleTypeElement = useRef<AutocompleteRef>(null);
  const SampleTypes = useSelector(getSampleTypes);
  const loading = useSelector(isLoadingSampleTypes);
  const loaded = useSelector(isLoadedSampleTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    !SampleTypes.length && !loading && !loaded && dispatch(fetchSampleType());
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = SampleTypeElement.current?.getValue()?.value ?? '';
      return SampleTypes.find(c => c.sampletype_code === selected);
    }
  }));

  const options = SampleTypes.map(c => ({ value: c.sampletype_code, label: c.sampletype_name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;

  return <Autocomplete
    ref={ SampleTypeElement }
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

export default forwardRef(SelectSampleType);