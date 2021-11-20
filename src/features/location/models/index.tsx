import { IFolder } from "types/models/InforBasic";
import { ICountry, IDistrict, IProvince, IWard } from "types/models/Location";
import { formatPath } from "utils";
import { apiGet } from "utils/api"
import LocationPaths from "./paths"

export const getCountries = () => {
  return apiGet<ICountry[]>(LocationPaths.countries.getList);
}
export const getFolders = () => {
  return apiGet<IFolder[]>(LocationPaths.countries.getList);
}
export const getProvinces = (country: string) => {
  return apiGet<IProvince[]>(
    formatPath(LocationPaths.provinces.getList, country)
  );
}

export const getDistricts = (province: string) => {
  return apiGet<IDistrict[]>(
    formatPath(LocationPaths.districts.getList, province)
  )
}

export const getWards = (district: string) => {
  return apiGet<IWard[]>(
    formatPath(LocationPaths.wards.getList, district)
  )
}