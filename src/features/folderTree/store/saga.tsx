import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { IFolderTree } from "types/models/FolderTree";
import { fetchFolderTree, fetchFolderTreeFailure, fetchFolderTreeSuccess } from "./slice";
import { getFolderTree } from "./../models/index";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFetchFolderTree(action:PayloadAction<string>){
  try{
    const res: IApiResponse<IFolderTree[]> = yield call(getFolderTree,action.payload);

    if (res.success){

      yield put(fetchFolderTreeSuccess(res.data as IFolderTree[]));
    }
    else{
      yield put(fetchFolderTreeFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchFolderTreeFailure(ON_FETCH_ERROR));
  }
}


export default function* FolderTreeSaga(){
  yield takeEvery(fetchFolderTree.type, handleFetchFolderTree);
}