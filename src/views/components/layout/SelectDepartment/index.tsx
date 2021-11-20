import { getDepartment } from 'features/department/store/slice';
import { fetchDepartment, isLoadedDepartment, isLoadingDepartment } from 'features/department/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IDepartment } from 'types/models/Department';

import Autocomplete, {  AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectDepartmentRef{
  getValue(): IDepartment | undefined;
}

export interface SelectDepartmentProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: number;
  required?: boolean;
}

const SelectDepartment: ForwardRefRenderFunction<SelectDepartmentRef, SelectDepartmentProps> = (props, ref) => {
  const ElementRef = useRef<AutocompleteRef>(null);
  const { className, label, placeholder, message, onChange, value, required } = props;
  const Department = useSelector(getDepartment);
  const LoadingDepartment = useSelector(isLoadingDepartment);
  const LoadedDepartment = useSelector(isLoadedDepartment);
  const dispatch = useDispatch();



  useEffect(() => {
    !Department.length && !LoadingDepartment && !LoadedDepartment && dispatch(fetchDepartment());
  });
  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = ElementRef.current?.getValue()?.value;
      return Department.find(c => c.id === selected);
    }
  }));

  const options = Department.map(c => ({ value: c.id, label: c.name }));
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

export default forwardRef(SelectDepartment);