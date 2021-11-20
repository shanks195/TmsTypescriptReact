import { IApiResponse } from "types";
import { call,put,takeEvery } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { ON_FETCH_ERROR } from "utils/constants";
import { appMessage, setAppNotification } from "features/app/store/slice";
import { IResponse } from 'types/models/TemplateGroup';
import { handlecreateTemplateFolder } from "../models";
import { IFolderList, IPayloadCreateFolder } from "types/models/TemplateGroupFolder";
import { createTemplateFolder,createTemplateFolderSuccess, createTemplateFolderFailure } from './slice';
import { getListFolder } from "features/TemplateGroupFolderList/models";
import { fetchTemplateFolderListFailure, fetchTemplateFolderListSuccess } from "features/TemplateGroupFolderList/store/slice";


function* handleCreateNewTemplateFolder(action: PayloadAction<IPayloadCreateFolder>) {
    try {
      const response: IApiResponse<IResponse> = yield call(handlecreateTemplateFolder,action.payload);
      if (response.success) {
        yield put(createTemplateFolderSuccess(response.data as IResponse));
        yield put(setAppNotification(appMessage("Thêm mới thư mục thành công", 'success')));
        yield call(handleFetchTemplateGroupFolderList,({
          payload:action.payload.id,
          type:''
        })) 
      } else {
        yield put(setAppNotification(appMessage(response.errors[0].msg, 'error')));
      }
    } catch (e) {
      yield put(createTemplateFolderFailure(ON_FETCH_ERROR));
      yield put(setAppNotification(appMessage(ON_FETCH_ERROR[0].msg, 'error')));
    }
  }
  function* handleFetchTemplateGroupFolderList(action: PayloadAction<string>){
    try{
      const res: IApiResponse<IFolderList[]> = yield call(getListFolder,action.payload);
  
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
  export default function* CreateTemplateFolderSaga(){
    yield takeEvery(createTemplateFolder.type, handleCreateNewTemplateFolder);
    yield takeEvery(createTemplateFolder.type, handleFetchTemplateGroupFolderList);

  }