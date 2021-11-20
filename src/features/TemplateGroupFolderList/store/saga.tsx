import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import {
  fetchTemplateFolderList,
  fetchTemplateFolderListFailure,
  fetchTemplateFolderListSuccess,
  deleteTemplateFolderList,
  updateTemplateFolderList,
} from "./slice";
import { IFolderList } from "types/models/TemplateGroupFolder";
import {
  deleteTemplateFolderItem,
  getListFolder,
  IDeleteTemplateFolder,
  IUpdateTemplateFolder,
  updateTemplateFolderItem
} from "../models";
import { setAppNotification, appMessage } from 'features/app/store/slice';

function* handleFetchTemplateGroupFolderList(action: PayloadAction<string>){
  try{
    const res: IApiResponse<IFolderList[]> = yield call(getListFolder, action.payload);

    if (res.success){

      yield put(fetchTemplateFolderListSuccess(res.data as IFolderList[]));
    }
    else{
      yield put(fetchTemplateFolderListFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchTemplateFolderListFailure(ON_FETCH_ERROR));
  }
}

function* handleDeleteTemplateFolder(action: PayloadAction<IDeleteTemplateFolder>){
  try{
    const res: IApiResponse<string> = yield call(deleteTemplateFolderItem, action.payload);
    if (res.success){
      yield put(setAppNotification(appMessage("Xóa dữ liệu thành công", 'success')));
      yield call(handleFetchTemplateGroupFolderList, {payload: action.payload.template_group_id, type:""});
    }
    else{
      yield put(setAppNotification(appMessage(res.errors[0].msg, 'error')));
    }
  }
  catch(e){
    yield put(setAppNotification(appMessage(ON_FETCH_ERROR[0].msg, 'error')));
  }
}

function* handleUpdateTemplateFolder(action: PayloadAction<IUpdateTemplateFolder>) {
  try {
    const res: IApiResponse<string> = yield call(updateTemplateFolderItem, action.payload);
    if(res.success) {
      yield put(setAppNotification(appMessage("Cập nhật dữ liệu thành công", 'success')));
      yield call(handleFetchTemplateGroupFolderList, {payload: action.payload.template_group_id, type:""})
    }
    else {
      yield put(setAppNotification(appMessage(res.errors[0].msg, 'error')));
    }
  }
  catch(e) {
    yield put(setAppNotification(appMessage(ON_FETCH_ERROR[0].msg, 'error')));
  }
}

export default function* TemplateFolderSaga(){
  yield takeEvery(fetchTemplateFolderList.type, handleFetchTemplateGroupFolderList);
  yield takeEvery(deleteTemplateFolderList.type, handleDeleteTemplateFolder);
  yield takeEvery(updateTemplateFolderList.type, handleUpdateTemplateFolder);
}