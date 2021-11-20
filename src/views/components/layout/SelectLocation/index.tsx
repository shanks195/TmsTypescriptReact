import { 
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

import { Grid, GridSize } from '@mui/material';
import { ILocationValue } from 'types/models/Location';
import { APP_COUNTRY_DEFAULT } from 'utils/constants';

import SelectCountry, { SelectCountryRef } from '../SelectCountry';
import SelectDistrict, { SelectDistrictRef } from '../SelectDistrict';
import SelectProvince, { SelectProvinecRef } from '../SelectProvince';
import SelectWard, { SelectWardRef } from '../SelectWard';
import clsx from 'clsx';

export type RequiredType = boolean | undefined;
export type StringType = string | undefined;
export type SelectLocationRequired = RequiredType[];
export type SelectLocationMessage = StringType[];
export type SelectLocationLabel = StringType[];
export type SelectLocationPlaceholder = StringType[];

export interface SelectLocationValues{
  country: string;
  district: string;
  province: string;
  ward: string;
}

export interface SelectLocationRef{
  getValue(): Partial<ILocationValue>;
  setValue(val: ILocationValue): void;
}

export interface SelectLocationProps{
  children?: ReactNode;
  className?: string;
  col?: GridSize;
  enableCountry?: boolean;
  disabled?: boolean;
  label?: SelectLocationLabel;
  message?: SelectLocationMessage;
  onChange?(): void;
  placeholder?: SelectLocationPlaceholder;
  required?: SelectLocationRequired;
  spacing?: number;
  value?: Partial<SelectLocationValues>;
  componentAfter?: ReactNode;
  rowSpacing?: number;
  colSpacing?: number;
}

const SelectLocation: ForwardRefRenderFunction<SelectLocationRef, SelectLocationProps> = (props, ref) => {

  const {
    children,
    className,
    col = 4,
    enableCountry = false,
    label = [],
    message = [],
    onChange,
    placeholder = [],
    required = [],
    spacing = 3,
    value,
    disabled,
    componentAfter,
    rowSpacing,
    colSpacing = 3
  } = props;

  const pos = enableCountry ? 1 : 0;
  const colLocal = col === undefined ? enableCountry ? 3 : 4 : col;

  const countryElement = useRef<SelectCountryRef>(null);
  const provinceElement = useRef<SelectProvinecRef>(null);
  const districtElement = useRef<SelectDistrictRef>(null);
  const wardElement = useRef<SelectWardRef>(null);

  const getEnableCountry = () => enableCountry ? (value?.country ?? '') : APP_COUNTRY_DEFAULT;
  
  const [ CurrentCountry, setCurrentCountry ] = useState<string>(getEnableCountry());
  const [ CurrentProvince, setCurrentProvince ] = useState<string>(value?.province ?? '');
  const [ CurrentDistrict, setCurrentDistrict ] = useState<string>(value?.district ?? '');
  const [ CurrentWard, setCurrentWard ] = useState<string>(value?.ward ?? '');

  const SelectedCountry = useRef<string>(getEnableCountry());
  const SelectedProvince = useRef<string>(value?.province ?? '');
  const SelectedDistrict = useRef<string>(value?.district ?? '');
  const SelectedWard = useRef<string>(value?.ward ?? '');

  useEffect(() => {
    if (CurrentCountry !== undefined && SelectedCountry.current !== CurrentCountry){
      if (CurrentProvince === ''){
        onChange && onChange();
      }
      else{
        setCurrentProvince('');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ CurrentCountry ]);

  useEffect(() => {
    if (CurrentProvince !== undefined && SelectedProvince.current !== CurrentProvince){
      if (CurrentDistrict === ''){
        onChange && onChange();
      }
      else{
        setCurrentDistrict('');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ CurrentProvince ]);

  useEffect(() => {
    if (CurrentDistrict !== undefined && SelectedDistrict.current !== CurrentDistrict){
      if (CurrentWard === ''){
        onChange && onChange();
      }
      else{
        setCurrentWard('');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ CurrentDistrict ]);

  useEffect(() => {
    if (CurrentWard !== undefined && SelectedWard.current !== CurrentWard){
      onChange && onChange();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ CurrentWard ]);

  useImperativeHandle(ref, () => ({
    getValue: () => ({
      country: countryElement.current?.getValue(),
      province: provinceElement.current?.getValue(),
      district: districtElement.current?.getValue(),
      ward: wardElement.current?.getValue()
    }),
    setValue: (val) => {
    }
  }));

  const changeCountry = () => {
    setCurrentCountry(countryElement.current?.getValue()?.country_code ?? '');
  }

  const changeProvince = () => {
    setCurrentProvince(provinceElement.current?.getValue()?.province_code ?? '');
  }

  const changeDistrict =() => {
    setCurrentDistrict(districtElement.current?.getValue()?.district_code ?? '');
  }

  const changeWard = () => {
    setCurrentWard(wardElement.current?.getValue()?.ward_code ?? '');
  }

  return <Grid container spacing={ spacing } rowSpacing={rowSpacing} columnSpacing={colSpacing} className={ clsx(className, 'w-full mb-5') }>
    { children }
    {
      enableCountry &&
      <Grid item md={ colLocal }>
        <SelectCountry 
          ref={ countryElement } 
          label={ label[0] } 
          message={ message[0] }
          onChange={ changeCountry }
          placeholder={ placeholder[0] }
          required={ required[0] }
          value={ CurrentCountry }
        />
      </Grid>
    }
    <Grid item md={ colLocal }>
      <SelectProvince 
        ref={ provinceElement } 
        label={ label[pos] } 
        message={ message[pos] }
        country={ CurrentCountry }
        onChange={ changeProvince } 
        placeholder={ placeholder[pos] }
        required={ required[pos] }
        value={ CurrentProvince }
        disabled={disabled}
      />
    </Grid>
    <Grid item md={ col }>
      <SelectDistrict 
        ref={ districtElement } 
        label={ label[pos + 1] } 
        message={ message[pos + 1] }
        province={ CurrentProvince } 
        onChange={ changeDistrict }
        placeholder={ placeholder[pos + 1] }
        required={ required[pos + 1] }
        value={ CurrentDistrict }
        disabled={disabled}
      />
    </Grid>
    <Grid item md={ colLocal }>
      <SelectWard 
        ref={ wardElement } 
        label={ label[pos + 2] } 
        message={ message[pos + 2] }
        district={ CurrentDistrict } 
        onChange={ changeWard }
        placeholder={ placeholder[pos + 2] }
        required={ required[pos + 2] }
        value={ CurrentWard }
        disabled={disabled}
      />
    </Grid>
    { componentAfter }
  </Grid>

}

export default forwardRef(SelectLocation);