import {  fetchStatuses, getStatuses, isLoadedStatuses, isLoadingStatuses } from 'features/inforBase/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStatus } from 'types/models/InforBasic';
import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectStatusRef{
  getValue(): IStatus | undefined;
}

export interface SelectStatusProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string;
  required?: boolean;
}

const SelectStatus: ForwardRefRenderFunction<SelectStatusRef, SelectStatusProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, value, required } = props;
  const statusElement = useRef<AutocompleteRef>(null);
  const statuses = useSelector(getStatuses);
  const loading = useSelector(isLoadingStatuses);
  const loaded = useSelector(isLoadedStatuses);
  const dispatch = useDispatch();

  useEffect(() => {
    !statuses.length && !loading && !loaded && dispatch(fetchStatuses());
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = statusElement.current?.getValue()?.value ?? '';
      return statuses.find(c => c.status_code === selected);
    }
  }));

  const options = statuses.map(c => ({ value: c.status_code, label: c.status_name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;

  return <Autocomplete
    ref={ statusElement }
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

export default forwardRef(SelectStatus);