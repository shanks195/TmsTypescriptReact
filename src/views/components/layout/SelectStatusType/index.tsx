
import { fetchStatusType, getStatusType, isLoadedStatusType, isLoadingStatusType } from 'features/status-type/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';
import { IStatusType } from 'types/models/statusType';

export interface SelectStatusTypeRef{
  getValue(): IStatusType | undefined;
}

export interface SelectStatusTypeProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string | number;
  required?: boolean;
}

const SelectStatusType: ForwardRefRenderFunction<SelectStatusTypeRef, SelectStatusTypeProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, value, required } = props;
  const StatusTypeElementRef = useRef<AutocompleteRef>(null);
  const StatusType = useSelector(getStatusType);
  const loading = useSelector(isLoadingStatusType);
  const loaded = useSelector(isLoadedStatusType);
  const dispatch = useDispatch();

  useEffect(() => {
    !StatusType.length && !loading && !loaded && dispatch(fetchStatusType());
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = StatusTypeElementRef.current?.getValue()?.value;
      return StatusType.find(c => c.name === selected);
    }
  }));

  const options = StatusType.map(item => ({ value:item.name, label: item.name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;

  return <Autocomplete
    ref={ StatusTypeElementRef }
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

export default forwardRef(SelectStatusType);