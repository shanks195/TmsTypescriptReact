import { fetchWards, getWards, isLoadedWards, isLoadingDistricts, isLoadingWards } from 'features/location/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IWard } from 'types/models/Location';
import Autocomplete, { AutocompleteOption, AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectWardRef{
  getValue(): IWard | undefined;
}

export interface SelectWardProps{
  className?: string;
  label?: string;
  message?: string;
  onChange?(): void;
  placeholder?: string;
  required?: boolean;
  district?: string;
  value?: string;
  disabled?: boolean;
}

const SelectWard: ForwardRefRenderFunction<SelectWardRef, SelectWardProps> = (props, ref) => {

  const { 
    className,
    district, 
    label, 
    message, 
    onChange, 
    placeholder, 
    required,
    value, 
    disabled 
  } = props;

  const wardElement = useRef<AutocompleteRef>(null);
  const wards = useSelector(getWards);
  const loadingDistrict = useSelector(isLoadingDistricts);
  const loading = useSelector(isLoadingWards);
  const loaded = useSelector(isLoadedWards);
  const dispatch = useDispatch();

  useEffect(() => {
    district 
    && !wards[district]?.length 
    && !loading 
    && !loaded[district]
    && !loadingDistrict
    && dispatch(fetchWards(district));
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      if (!district || !wards[district]?.length) return undefined;
      const selected = wardElement.current?.getValue()?.value ?? '';
      return wards[district].find(w => w.ward_code === selected);
    }
  }));

  let options: AutocompleteOption[] = [];

  if (district && wards[district]?.length){
    options = wards[district].map(w => ({ value: w.ward_code, label: w.ward_name }));
  }

  const valueFilter = options.find(o => o.value === value);
  const defaultValue = valueFilter ? valueFilter.value : undefined;

  return <Autocomplete
    ref={ wardElement }
    className={ className }
    label={ label }
    placeholder={ placeholder }
    options={ options }
    message={ message }
    value={ defaultValue }
    onChange={ onChange }
    required={ required }
    disabled={ disabled }
  />

}

export default forwardRef(SelectWard);