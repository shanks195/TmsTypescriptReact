import { IError, IListProp } from '../api';

export interface ICountry{
  country_code: string;
  country_name: string;
}

export interface IProvince{
  province_code: string;
  province_name: string;
}

export interface IDistrict{
  district_code: string;
  district_name: string;
}

export interface IWard{
  ward_code: string;
  ward_name: string;
}

export interface ILocationValue{
  country: ICountry;
  province: IProvince;
  district: IDistrict;
  ward: IWard;
}

export interface ILocationState{
  countries: ICountry[];
  provinces: IListProp<IProvince[]>;
  districts: IListProp<IDistrict[]>;
  wards: IListProp<IWard[]>;
  loadingCountry: boolean;
  loadedCountry: boolean;
  loadingProvince: boolean;
  loadedProvince: IListProp<boolean>;
  loadingDistrict: boolean;
  loadedDistrict: IListProp<boolean>;
  loadedWard: IListProp<boolean>;
  loadingWard: boolean;
  errors: IError[];
}