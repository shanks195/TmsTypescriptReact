import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, PAListCode, RootState } from "types";


import { 
  ICountry,
  ILocationState, 
  IProvince, 
  IDistrict,
  IWard
} from "types/models/Location";


const initialState: ILocationState = {
  countries: [],
  provinces: {},
  districts: {},
  wards: {},
  loadedCountry: false,
  loadedProvince: {},
  loadedDistrict: {},
  loadedWard: {},
  loadingCountry: false,
  loadingProvince: false,
  loadingDistrict: false,
  loadingWard: false,
  errors: []
}

const LocationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    fetchCountries(state){
      state.countries = [];
      state.loadedCountry = false;
      state.loadingCountry = true;
      state.errors = [];
    },
    fetchCountriesSuccess(state, action: PayloadAction<ICountry[]>){
      state.countries = action.payload;
      state.errors = [];
      state.loadingCountry = false;
      state.loadedCountry = true;
    },
    fetchCountriesFailure(state, action: PayloadAction<IError[]>){
      state.loadingCountry = false;
      state.loadedCountry = true;
      state.errors = action.payload;
    },
    fetchProvinces(state, action: PayloadAction<string>){
      state.provinces[ action.payload ] = [];
      state.loadingProvince = true;
      state.loadedProvince[ action.payload ] = false;
      state.errors = [];
    },
    fetchProvincesSuccess(state, action: PAListCode<IProvince>){
      state.provinces[action.payload.code] = action.payload.data;
      state.loadedProvince[action.payload.code] = true;
      state.loadingProvince = false;
    },
    fetchProvincesFailure(state, action: PAListCode<IError>){
      state.errors = action.payload.data;
      state.loadedProvince[action.payload.code] = true;
      state.loadingProvince = false;
    },
    fetchDistricts(state, action: PayloadAction<string>){
      state.districts[ action.payload ] = [];
      state.loadingDistrict = true;
      state.loadedDistrict[ action.payload ] = false;
      state.errors = [];
    },
    fetchDistrictsSuccess(state, action: PAListCode<IDistrict>){
      state.districts[ action.payload.code ] = action.payload.data;
      state.loadedDistrict[ action.payload.code ] = true;
      state.loadingDistrict = false;
    },
    fetchDistrictsFailure(state, action: PAListCode<IError>){
      state.errors = action.payload.data;
      state.loadedDistrict[ action.payload.code ] = true;
      state.loadingDistrict = false;
    },
    fetchWards(state, action: PayloadAction<string>){
      state.wards[ action.payload ] = [];
      state.loadingWard = true;
      state.loadedWard[ action.payload ] = false;
      state.errors = [];
    },
    fetchWardsSuccess(state, action: PAListCode<IWard>){
      state.wards[ action.payload.code ] = action.payload.data;
      state.loadedWard[ action.payload.code ] = true;
      state.loadingWard = false;
    },
    fetchWardsFailure(state, action: PAListCode<IError>){
      state.errors = action.payload.data;
      state.loadedWard[ action.payload.code ] = true;
      state.loadingWard = false;
    },
  }
});


// Actions



export const fetchCountries = LocationSlice.actions.fetchCountries;
export const fetchCountriesSuccess = LocationSlice.actions.fetchCountriesSuccess;
export const fetchCountriesFailure = LocationSlice.actions.fetchCountriesFailure;
export const fetchProvinces = LocationSlice.actions.fetchProvinces;
export const fetchProvincesSuccess = LocationSlice.actions.fetchProvincesSuccess;
export const fetchProvincesFailure = LocationSlice.actions.fetchProvincesFailure;
export const fetchDistricts = LocationSlice.actions.fetchDistricts;
export const fetchDistrictsSuccess = LocationSlice.actions.fetchDistrictsSuccess;
export const fetchDistrictsFailure = LocationSlice.actions.fetchDistrictsFailure;
export const fetchWards = LocationSlice.actions.fetchWards;
export const fetchWardsSuccess = LocationSlice.actions.fetchWardsSuccess;
export const fetchWardsFailure = LocationSlice.actions.fetchWardsFailure;




export const getCountries = (state: RootState) => state.location.countries;
export const isLoadingCountries = (state: RootState) => state.location.loadingCountry;
export const isLoadedCountries = (state: RootState) => state.location.loadedCountry;
export const getProvinces = (state: RootState) => state.location.provinces;
export const isLoadingProvinces = (state: RootState) => state.location.loadingProvince;
export const isLoadedProvinces = (state: RootState) => state.location.loadedProvince;
export const getDistricts = (state: RootState) => state.location.districts;
export const isLoadingDistricts = (state: RootState) => state.location.loadingDistrict;
export const isLoadedDistricts = (state: RootState) => state.location.loadedDistrict;
export const getWards = (state: RootState) => state.location.wards;
export const isLoadingWards = (state: RootState) => state.location.loadingWard;
export const isLoadedWards = (state: RootState) => state.location.loadedWard;

// Reducer
const LocationReducer = LocationSlice.reducer;
export default LocationReducer;