import { 
  fetchProvinces,
  getProvinces,
  isLoadedProvinces,
  isLoadingCountries,
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
import { IProvince } from 'types/models/Location';
import Autocomplete, { AutocompleteOption, AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectProvinecRef{
  getValue(): IProvince | undefined;
}

export interface SelectProvinceProps{
  className?: string;
  label?: string;
  message?: string;
  onChange?(): void;
  placeholder?: string;
  required?: boolean;
  country?: string;
  value?: string;
  disabled?: boolean;
}

const SelectProvince: ForwardRefRenderFunction<SelectProvinecRef, SelectProvinceProps> = (props, ref) => {

  const { className, country, label, message, onChange, placeholder, required, value, disabled } = props;
  const provinceElement = useRef<AutocompleteRef>(null);
  const provinces = useSelector(getProvinces);
  const loadingCountry = useSelector(isLoadingCountries);
  const loading = useSelector(isLoadingProvinces);
  const loaded = useSelector(isLoadedProvinces);
  const dispatch = useDispatch();

  useEffect(() => {
    country 
    && !provinces[country]?.length 
    && !loading 
    && !loaded[country]
    && !loadingCountry
    && dispatch(fetchProvinces(country));
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      if (!country || !provinces[country]?.length) return undefined;
      const selected = provinceElement.current?.getValue()?.value ?? '';
      return provinces[country].find(p => p.province_code === selected);
    }
  }));

  let options: AutocompleteOption[] = [];

  if (country && provinces[country]?.length){
    options = provinces[country].map(p => ({ value: p.province_code, label: p.province_name }));
  }

  const valueFilter = options.find(o => o.value === value);
  const defaultValue = valueFilter ? valueFilter.value : undefined;

  return <Autocomplete
    ref={ provinceElement }
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

export default forwardRef(SelectProvince);