import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IApiPaging, IApiResponse } from "types";
import {  IDetailTemplateGroup, IInitPageGroup, ITemplatedata } from "types/models/Templatedata";
import { ON_FETCH_ERROR } from "utils/constants";
import {
  fetchTemplatedata,
  fetchTemplatedataFailure,
  fetchTemplatedataSuccess,
  fetchTemplateGroupDetail,
  fetchTemplateGroupDetailFailure,
  fetchTemplateGroupDetailSuccess,
} from "./slice";
import { getTemplatedata,getDetailTemplateGroup, deleteTemplatedata } from "../models";
import { appMessage, setAppNotification } from "features/app/store/slice";
import { deleteTemplatedataAction } from "features/templatedata/store/slice";

function* handleFetchTemplatedata(action: PayloadAction<IInitPageGroup>){
  try{
    const res: IApiPaging<ITemplatedata> = yield call(getTemplatedata, action.payload);

    if (res.success){
      yield put(fetchTemplatedataSuccess(res.data as ITemplatedata));
    }
    else{
      yield put(fetchTemplatedataFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchTemplatedataFailure(ON_FETCH_ERROR));
  }
}

function* handleDeleteGroupData(action: PayloadAction<string>){
  try{
    const res: IApiResponse<ITemplatedata> = yield call(deleteTemplatedata,action.payload);
    if (res.success){
      yield call(handleFetchTemplatedata,{payload:{
        page: 1, limit: 15, order_by: "asc"
       },
     type:""})
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
// DETAIL METADATA
function* handleFetchDetailTemplateGroup(action: PayloadAction<string>){
  try{
    const res: IApiResponse<IDetailTemplateGroup> = yield call(getDetailTemplateGroup,action.payload);

    if (res.success){

      yield put(fetchTemplateGroupDetailSuccess(res.data as IDetailTemplateGroup));
    }
    else{
      yield put(fetchTemplateGroupDetailFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchTemplateGroupDetailFailure(ON_FETCH_ERROR));
  }
}
export default function* TemplatedataListSaga(){
  yield takeEvery(fetchTemplatedata.type, handleFetchTemplatedata);
  yield takeEvery(fetchTemplateGroupDetail.type, handleFetchDetailTemplateGroup);
  yield takeEvery(deleteTemplatedataAction.type, handleDeleteGroupData);
}