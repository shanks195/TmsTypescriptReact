import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getAuthType } from './../models/index';
import { 
  fetchAuthType,
  fetchAuthTypeFailure, 
  fetchAuthTypeSuccess 
} from "./slice";
import { IAuthType } from "types/models/AuthType";


function* handleFetchAuthType(){
  try{
    const res: IApiResponse<IAuthType[]> = yield call(getAuthType);

    if (res.success){
      yield put(fetchAuthTypeSuccess(res.data as IAuthType[]));
    }
    else{
      yield put(fetchAuthTypeFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchAuthTypeFailure(ON_FETCH_ERROR));
  }
}


export default function* AuthTypeSaga(){
  yield takeEvery(fetchAuthType.type, handleFetchAuthType);
}