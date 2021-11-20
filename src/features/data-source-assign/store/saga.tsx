import { IApiResponse } from "types";
import { call,put,takeEvery } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { ON_FETCH_ERROR } from "utils/constants";
import { dataSourceAssign } from "../models";
import { IDataSourceTemplate } from "types/models/DataSourceTemplate";
import { 
  appMessage, 
  setAppNotification 
} from "features/app/store/slice";
import { 
  IDataSourceDetailAssign,
  IDataSourceDetailAssignReponse 
} from "types/models/DataSourceDetail";
import {
  dataSourceDetailAssign,
  dataSourceDetailAssignSuccess,
  dataSourceDetailAssignFailure
} from './slice';
import { 
  fetchDataSourceTemplateSuccess,
  fetchDataSourceTemplateFailure 
} from "features/data-source-template/store/slice";
import { getDataSourceTemplate } from "features/data-source-template/models";



function* handleDataSourceDetailAssign(action: PayloadAction<IDataSourceDetailAssign>){
  try {
    const response: IApiResponse<IDataSourceDetailAssignReponse> = yield call(dataSourceAssign, action.payload);

    console.log("<<<<<<<<<< handleDataSourceDetailAssign >>>>>>", response)

    if (response.success) {
      yield put(dataSourceDetailAssignSuccess(response.data as IDataSourceDetailAssignReponse));
      yield put(setAppNotification(appMessage("Thêm mới thành công", 'success')));
      yield call(handleFetcDataSourceTemplate,({
        payload:action.payload.template_id,
        type:''
      })) 
    } else {
      yield put(setAppNotification(appMessage(response.errors[0].msg, 'error')));
    }
  } catch (e) {
    yield put(dataSourceDetailAssignFailure(ON_FETCH_ERROR));
    yield put(setAppNotification(appMessage(ON_FETCH_ERROR[0].msg, 'error')));
  }
}

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


export default function* DataSourceDetailAssignSaga(){
  yield takeEvery(dataSourceDetailAssign.type, handleDataSourceDetailAssign);
  yield takeEvery(dataSourceDetailAssign.type, handleFetcDataSourceTemplate);
}