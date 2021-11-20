import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { IBlock } from "types/models/block";
import { fetchBlock, fetchBlockFailure, fetchBlockSuccess } from "./slice";
import { getBlock } from "./../models/index";

function* handleFetchBlock(){
  try{
    const res: IApiResponse<IBlock[]> = yield call(getBlock);

    if (res.success){

      yield put(fetchBlockSuccess(res.data as IBlock[]));
    }
    else{
      yield put(fetchBlockFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchBlockFailure(ON_FETCH_ERROR));
  }
}


export default function* BlockSaga(){
  yield takeEvery(fetchBlock.type, handleFetchBlock);
}