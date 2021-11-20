import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { 
  IInitPage,
        ITemplateOperate
      } from "types/models/Templates";
import { 
  deleteTemplate,
        getTemplatesList,

      } from '../models';
import {
  deleteTemplateListAction,
        fetchTemplateList, 
        fetchTemplateListFailure, 
        fetchTemplateListSuccess,
   
      } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { appMessage, setAppNotification } from "features/app/store/slice";
function* handleDeleteTemplateList(action: PayloadAction<string>){
  try{
    const res: IApiResponse<ITemplateOperate> = yield call(deleteTemplate,action.payload);
    if (res.success){
      yield put(setAppNotification(appMessage("Xóa dữ liệu thành công", 'success')));
    }
    else{
      yield put(setAppNotification(appMessage(res.errors[0].msg, 'error')));
    }
  }
  catch(e){
    yield put(setAppNotification(appMessage(ON_FETCH_ERROR[0].msg, 'error')));
  }
}

function* handleFetchTemplatesList(action: PayloadAction<IInitPage>) {
  try {
    const res: IApiResponse<ITemplateOperate> = yield call(getTemplatesList, action.payload);

    if (res.success) {

      yield put(fetchTemplateListSuccess(res.data as ITemplateOperate));
    }
    else {
      yield put(fetchTemplateListFailure(res.errors));
    }
  }
  catch (e) {
    yield put(fetchTemplateListFailure(ON_FETCH_ERROR));
  }
}

  export default function* TemplateOperateSaga() {
    yield takeEvery(fetchTemplateList.type, handleFetchTemplatesList);
    yield takeEvery(deleteTemplateListAction.type, handleDeleteTemplateList);
  
  }
 