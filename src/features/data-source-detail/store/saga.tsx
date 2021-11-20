import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { IApiResponse } from "types";
import { IDataSourceDetail } from "types/models/DataSourceDetail";
import { ON_FETCH_ERROR } from "utils/constants";
import { getDataSourceDetail } from "../models";
import { fetchDataSourceDetail, fetchDataSourceDetailFailure, fetchDataSourceDetailSuccess } from "./slice";

function* handleFetcDataSourceDetail(action: PayloadAction<number>){
  try{
    const res: IApiResponse<IDataSourceDetail> = yield call(getDataSourceDetail, action.payload);

    if (res.success){
      yield put(fetchDataSourceDetailSuccess(res.data as IDataSourceDetail));
    }
    else{
      yield put(fetchDataSourceDetailFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchDataSourceDetailFailure(ON_FETCH_ERROR));
  }
}

export default function* DataSourceDetailSaga(){
  yield takeEvery(fetchDataSourceDetail.type, handleFetcDataSourceDetail);
}