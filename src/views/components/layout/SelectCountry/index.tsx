import { fetchCountries, getCountries, isLoadedCountries, isLoadingCountries } from 'features/location/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICountry } from 'types/models/Location';
import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectCountryRef{
  getValue(): ICountry | undefined;
}

export interface SelectCountryProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string;
  required?: boolean;
}

const SelectCountry: ForwardRefRenderFunction<SelectCountryRef, SelectCountryProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, value, required } = props;
  const countryElement = useRef<AutocompleteRef>(null);
  const countries = useSelector(getCountries);
  const loading = useSelector(isLoadingCountries);
  const loaded = useSelector(isLoadedCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    !countries.length && !loading && !loaded && dispatch(fetchCountries());
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = countryElement.current?.getValue()?.value ?? '';
      return countries.find(c => c.country_code === selected);
    }
  }));

  const options = countries.map(c => ({ value: c.country_code, label: c.country_name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;

  return <Autocomplete
    ref={ countryElement }
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

export default forwardRef(SelectCountry);