import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { IApiResponse } from "types";
import { IDataSourceList } from "types/models/DataSourceList";
import { ON_FETCH_ERROR } from "utils/constants";
import { getDataSourceList } from "../models";
import { fetchDataSouceList, fetchDataSourceListFailure, fetchDataSourceListSuccess } from "./slice";

function* handleFetchDataSourceList(action: PayloadAction<number>){
  try{
    const res: IApiResponse<IDataSourceList[]> = yield call(getDataSourceList, action.payload);

    if (res.success){
      yield put(fetchDataSourceListSuccess(res.data as IDataSourceList[]));
    }
    else{
      yield put(fetchDataSourceListFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchDataSourceListFailure(ON_FETCH_ERROR));
  }
}

export default function* DataSourceListSaga(){
  yield takeEvery(fetchDataSouceList.type, handleFetchDataSourceList);
}