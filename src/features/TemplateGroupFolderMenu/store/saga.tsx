import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IFolderListMenu } from "types/models/TemplateGroupFolderMenu";
import { getListFolderMenu } from "../models";
import { fetchTemplateFolderListMenu, fetchTemplateFolderListMenuFailure, fetchTemplateFolderListMenuSuccess } from "./slice";

function* handleFetchTemplateGroupFolderListMenu(action: PayloadAction<string>){
  try{
    const res: IApiResponse<IFolderListMenu[]> = yield call(getListFolderMenu, action.payload);

    if (res.success){
      yield put(fetchTemplateFolderListMenuSuccess(res.data as IFolderListMenu[]));
    }
    else{
      yield put(fetchTemplateFolderListMenuFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchTemplateFolderListMenuFailure(ON_FETCH_ERROR));
  }
}

export default function* TemplateFolderMenuSaga(){
  yield takeEvery(fetchTemplateFolderListMenu.type, handleFetchTemplateGroupFolderListMenu);
}