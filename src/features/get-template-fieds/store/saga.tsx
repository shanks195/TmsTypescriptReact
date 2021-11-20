import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { fetchTemplateFields, fetchTemplateFieldsFailure, fetchTemplateFieldsSuccess, } from "./slice";
import { ITemplateField } from "types/models/TemplateFields";
import { PayloadAction } from "@reduxjs/toolkit";
import { getITemplateFields } from "../models";

function* handleFetchTemplateFields(action:PayloadAction<number>){
  try{
    const res: IApiResponse<ITemplateField> = yield call(getITemplateFields, action.payload);
    if (res.success){
      yield put(fetchTemplateFieldsSuccess(res.data as ITemplateField));
    }
    else{
      yield put(fetchTemplateFieldsFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchTemplateFieldsFailure(ON_FETCH_ERROR));
  }
}

export default function* TemplateFieldsSaga(){
  yield takeEvery(fetchTemplateFields.type, handleFetchTemplateFields);
}