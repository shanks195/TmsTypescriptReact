import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { getListTemplate } from "../models";
import { IListTemplate } from "types/models/ListTemplate";
import { fetchListTemplate, fetchListTemplateFailure, fetchListTemplateSuccess } from "./slice";

function* handleFetchListTemplate(action: PayloadAction<string>){
  try{
    const res: IApiResponse<IListTemplate[]> = yield call(getListTemplate, action.payload);

    if (res.success){
      yield put(fetchListTemplateSuccess(res.data as IListTemplate[]));
    }
    else{
      yield put(fetchListTemplateFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchListTemplateFailure(ON_FETCH_ERROR));
  }
}

export default function* ListTemplateSaga(){
  yield takeEvery(fetchListTemplate.type, handleFetchListTemplate);
}