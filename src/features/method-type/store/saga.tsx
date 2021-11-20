import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getMethodType } from './../models/index';
import { 
  fetchMethodType,
  fetchMethodTypeFailure, 
  fetchMethodTypeSuccess 
} from "./slice";
import { IMethodType } from "types/models/MethodType";


function* handleFetchMethodType(){
  try{
    const res: IApiResponse<IMethodType[]> = yield call(getMethodType);

    if (res.success){

      yield put(fetchMethodTypeSuccess(res.data as IMethodType[]));
    }
    else{
      yield put(fetchMethodTypeFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchMethodTypeFailure(ON_FETCH_ERROR));
  }
}


export default function* MethodTypeSaga(){
  yield takeEvery(fetchMethodType.type, handleFetchMethodType);
}