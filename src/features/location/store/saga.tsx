import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { ICountry, IDistrict, IProvince, IWard } from "types/models/Location";
import { getCountries, getDistricts, getProvinces, getWards } from "../models";
import { 
  fetchCountries,
  fetchCountriesFailure,
  fetchCountriesSuccess,
  fetchDistricts,
  fetchDistrictsFailure,
  fetchDistrictsSuccess,
  fetchProvinces,
  fetchProvincesFailure,
  fetchProvincesSuccess,
  fetchWards,
  fetchWardsFailure,
  fetchWardsSuccess
} from "./slice";
function* handleFetchCountries(){
  try{
    const res: IApiResponse<ICountry[]> = yield call(getCountries);

    if (res.success){
      yield put(fetchCountriesSuccess(res.data as ICountry[]));
    }
    else{
      yield put(fetchCountriesFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchCountriesFailure(ON_FETCH_ERROR));
  }
}

function* handleFetchProvinces(action: PayloadAction<string>){
  try{
    const res: IApiResponse<IProvince[]> = yield call(getProvinces, action.payload);

    if (res.success){
      yield put(fetchProvincesSuccess({
        data: res.data as IProvince[],
        code: action.payload
      }));
    }
    else{
      yield put(fetchProvincesFailure({
        data: res.errors,
        code: action.payload
      }));
    }
  }
  catch(e){
    yield put(fetchProvincesFailure({
      data: ON_FETCH_ERROR,
      code: action.payload
    }));
  }
}

function* handleFetchDistricts(action: PayloadAction<string>){
  try{
    const res: IApiResponse<IDistrict[]> = yield call(getDistricts, action.payload);

    if (res.success){
      yield put(fetchDistrictsSuccess({
        data: res.data as IDistrict[],
        code: action.payload
      }));
    }
    else{
      yield put(fetchDistrictsFailure({
        data: res.errors,
        code: action.payload
      }));
    }
  }
  catch(e){
    yield put(fetchDistrictsFailure({
      data: ON_FETCH_ERROR,
      code: action.payload
    }));
  }
}

function* handleFetchWards(action: PayloadAction<string>){
  try{
    const res: IApiResponse<IWard[]> = yield call(getWards, action.payload);

    if (res.success){
      yield put(fetchWardsSuccess({
        data: res.data as IWard[],
        code: action.payload
      }));
    }
    else{
      yield put(fetchWardsFailure({
        data: res.errors,
        code: action.payload
      }));
    }
  }
  catch(e){
    yield put(fetchWardsFailure({
      data: ON_FETCH_ERROR,
      code: action.payload
    }));
  }
}

export default function* locationSaga(){
 
  yield takeEvery(fetchCountries.type, handleFetchCountries);
  yield takeEvery(fetchProvinces.type, handleFetchProvinces);
  yield takeEvery(fetchDistricts.type, handleFetchDistricts);
  yield takeEvery(fetchWards.type, handleFetchWards);
}