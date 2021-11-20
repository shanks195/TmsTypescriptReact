import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { IFolderTemplateList } from "types/models/FolderTemplateList";
import { fetchFolderTemplateList, fetchFolderTemplateListFailure, fetchFolderTemplateListSuccess } from "./slice";
import { getFolderTemplateList } from "./../models/index";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFetchFolderTemplateList(action:PayloadAction<string>){
  try{
    const res: IApiResponse<IFolderTemplateList[]> = yield call(getFolderTemplateList,action.payload);

    if (res.success){

      yield put(fetchFolderTemplateListSuccess(res.data as IFolderTemplateList[]));
    }
    else{
      yield put(fetchFolderTemplateListFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchFolderTemplateListFailure(ON_FETCH_ERROR));
  }
}


export default function* FolderTemplateListSaga(){
  yield takeEvery(fetchFolderTemplateList.type, handleFetchFolderTemplateList);
}