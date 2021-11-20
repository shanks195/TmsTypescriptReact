import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { IVersion } from "types/models/Version";
import { fetchVersion, fetchVersionFailure, fetchVersionSuccess } from "./slice";
import { getVersion } from "./../models/index";

function* handleFetchVersion(){
  try{
    const res: IApiResponse<IVersion[]> = yield call(getVersion);

    if (res.success){

      yield put(fetchVersionSuccess(res.data as IVersion[]));
    }
    else{
      yield put(fetchVersionFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchVersionFailure(ON_FETCH_ERROR));
  }
}


export default function* VersionSaga(){
  yield takeEvery(fetchVersion.type, handleFetchVersion);
}