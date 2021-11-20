import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { IApiResponse } from "types";
import { IDataSourceTemplate } from "types/models/DataSourceTemplate";
import { ON_FETCH_ERROR } from "utils/constants";
import { getDataSourceTemplate } from "../models";
import { fetchDataSourceTemplate, fetchDataSourceTemplateFailure, fetchDataSourceTemplateSuccess } from "./slice";

function* handleFetcDataSourceTemplate(action: PayloadAction<number>){
  try{
    const res: IApiResponse<IDataSourceTemplate[]> = yield call(getDataSourceTemplate, action.payload);

    if (res.success){
      yield put(fetchDataSourceTemplateSuccess(res.data as IDataSourceTemplate[]));
    }
    else{
      yield put(fetchDataSourceTemplateFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchDataSourceTemplateFailure(ON_FETCH_ERROR));
  }
}

export default function* DataSourceTemplateSaga(){
  yield takeEvery(fetchDataSourceTemplate.type, handleFetcDataSourceTemplate);
}
