
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';
import { IListSideBar } from 'types/models/templateGroups';
import { fetchLeftSideBars, getLeftSideBars, isLoadedLeftSideBars, isLoadingLeftSideBars } from 'features/templateGroups/store/slice';


export interface SelectParentGroupRef{
  getValue(): IListSideBar | undefined;
}

export interface SelectParentGroupProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string | number;
  required?: boolean;
}

const SelectParentGroup: ForwardRefRenderFunction<SelectParentGroupRef, SelectParentGroupProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, value, required } = props;
  const ParentGroupElementRef = useRef<AutocompleteRef>(null);
  const ParentGroup = useSelector(getLeftSideBars);
  const loading = useSelector(isLoadingLeftSideBars);
  const loaded = useSelector(isLoadedLeftSideBars);
  const dispatch = useDispatch();

  useEffect(() => {
    !ParentGroup.length && !loading && !loaded && dispatch(fetchLeftSideBars());
  });
  
  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = ParentGroupElementRef.current?.getValue()?.value;
      return ParentGroup.find(c => c.id === selected);
    }
  }));

  const options = ParentGroup.map(item => ({ value:item.id, label: item.name }));
  
  return <Autocomplete
    ref={ ParentGroupElementRef }
    className={ className }
    label={ label }
    placeholder={ placeholder }
    options={ options }
    message={ message }
    value={ value }
    onChange={ onChange }
    required={ required }
  />

}

export default forwardRef(SelectParentGroup);