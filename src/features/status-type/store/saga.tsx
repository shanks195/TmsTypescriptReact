import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { IStatusType } from "types/models/statusType";
import { getStatusType } from './../models/index';
import { fetchStatusTypeSuccess , fetchStatusTypeFailure, fetchStatusType } from "./slice";


function* handleFetchStatusType(){
  try{
    const res: IApiResponse<IStatusType[]> = yield call(getStatusType);

    if (res.success){

      yield put(fetchStatusTypeSuccess(res.data as IStatusType[]));
    }
    else{
      yield put(fetchStatusTypeFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchStatusTypeFailure(ON_FETCH_ERROR));
  }
}


export default function* StatusTypeSaga(){
  yield takeEvery(fetchStatusType.type, handleFetchStatusType);
}