import { getStatusTree } from 'features/statusTree/store/slice';
import { fetchStatusTree, isLoadedStatusTree, isLoadingStatusTree } from 'features/statusTree/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useRef, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStatusTree } from 'types/models/StatusTree';
import Autocomplete, { AutocompleteOption, AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectStatusTreeRef {
  getValue(): IStatusTree | undefined;
}

export interface SelectStatusTreeProps {
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string | number;
  required?: boolean;
}

const SelectStatusTree: ForwardRefRenderFunction<SelectStatusTreeRef, SelectStatusTreeProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, required,value } = props;
  const StatusTree = useSelector(getStatusTree);
  const LoadingStatusTree = useSelector(isLoadingStatusTree);
  const LoadedStatusTree = useSelector(isLoadedStatusTree);
  const dispatch = useDispatch();
  const ElementRef = useRef<AutocompleteRef>(null);

  useEffect(() => {
    !StatusTree.length && !LoadingStatusTree && !LoadedStatusTree && dispatch(fetchStatusTree());
  });
  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = ElementRef.current?.getValue()?.value ?? '';
      return StatusTree.find(c => c.id === selected);
    }
  }));
  const generateOptions = (data: IStatusTree[], dept = 0): AutocompleteOption[] => {
    let rs: AutocompleteOption[] = [];

    data.map(item => {
      rs.push({
        label: item.name,
        value: item.id,
        className: dept ? `statustree-chidren-${dept}` : undefined
      });

      if (item.child?.length) {
        rs = rs.concat(generateOptions(item.child, dept + 1));
      }

      return null;
    });

    return rs;
  }
  const options = StatusTree.map(c => ({ value: c.id, label: c.name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;
  return <Autocomplete
    ref={ElementRef}
    className={className}
    label={label}
    placeholder={placeholder}
    options={generateOptions(StatusTree)}
    message={message}
    value={defaultValue}
    onChange={onChange}
    required={required}
  />

}

export default forwardRef(SelectStatusTree);