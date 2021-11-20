import { 
  fetchDistricts,
  getDistricts,
  isLoadedDistricts,
  isLoadingDistricts,
  isLoadingProvinces
} from 'features/location/store/slice';

import { 
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { IDistrict } from 'types/models/Location';
import Autocomplete, { AutocompleteOption, AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectDistrictRef{
  getValue(): IDistrict | undefined;
}

export interface SelectDistrictProps{
  className?: string;
  label?: string;
  message?: string;
  onChange?(): void;
  placeholder?: string;
  province?: string;
  required?: boolean;
  value?: string;
  disabled?: boolean;
}

const SelectDistrict: ForwardRefRenderFunction<SelectDistrictRef, SelectDistrictProps> = (props, ref) => {

  const { className, label, message, onChange, placeholder, province, required, value, disabled } = props;
  const districtElement = useRef<AutocompleteRef>(null);
  const districts = useSelector(getDistricts);
  const loading = useSelector(isLoadingDistricts);
  const loaded = useSelector(isLoadedDistricts);
  const loadingProvince = useSelector(isLoadingProvinces);
  const dispatch = useDispatch();

  useEffect(() => {
    province
    && !districts[province]?.length
    && !loading
    && !loaded[province]
    && !loadingProvince
    && dispatch(fetchDistricts(province))
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      if (!province || !districts[province]?.length) return undefined;
      const selected = districtElement.current?.getValue()?.value ?? '';
      return districts[province].find(d => d.district_code === selected);
    }
  }));

  let options: AutocompleteOption[] = [];

  if (province && districts[province]?.length){
    options = districts[province].map(d => ({ value: d.district_code, label: d.district_name }));
  }

  const valueFilter = options.find(o => o.value === value);
  const defaultValue = valueFilter ? valueFilter.value.toString() : undefined;

  return <Autocomplete
    ref={ districtElement }
    className={ className }
    label={ label }
    placeholder={ placeholder }
    options={ options }
    message={ message }
    value={ defaultValue }
    onChange={ onChange }
    required={ required }
    disabled={disabled}
  />

}

export default forwardRef(SelectDistrict);