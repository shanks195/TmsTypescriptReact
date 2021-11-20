import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { IStatusTree } from "types/models/StatusTree";
import { fetchStatusTree, fetchStatusTreeFailure, fetchStatusTreeSuccess } from "./slice";
import { getStatusTree } from "./../models/index";

function* handleFetchStatusTree(){
  try{
    const res: IApiResponse<IStatusTree[]> = yield call(getStatusTree);

    if (res.success){

      yield put(fetchStatusTreeSuccess(res.data as IStatusTree[]));
    }
    else{
      yield put(fetchStatusTreeFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchStatusTreeFailure(ON_FETCH_ERROR));
  }
}


export default function* StatusTreeSaga(){
  yield takeEvery(fetchStatusTree.type, handleFetchStatusTree);
}