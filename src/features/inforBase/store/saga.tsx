import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "@redux-saga/core/effects";

import { 

  fetchBlocks,
  fetchBlocksFailure,
  fetchBlocksSuccess,
  fetchFolders,
  fetchFoldersFailure,
  fetchFoldersSuccess,
  fetchStatuses,
  fetchStatusesFailure,
  fetchStatusesSuccess,
  getStatuses,
 
 
} from "./slice";
import {  IBlock} from "types/models/InforBasic";
import { getBlocks } from "../models";




function* handleFetchBlocks(){
  try{
    const res: IApiResponse<IBlock[]> = yield call(getBlocks);
    console.log(res)
    if (res.success){
      yield put(fetchBlocksSuccess(res.data as IBlock[]));
    }
    else{
      yield put(fetchBlocksFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchStatusesFailure(ON_FETCH_ERROR));
  }
}

export default function* locationSaga(){

  yield takeEvery(fetchBlocks.type, handleFetchBlocks);
 
}