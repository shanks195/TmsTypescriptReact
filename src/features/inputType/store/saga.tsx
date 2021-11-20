import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { 
  fetchTypes, fetchTypesFailure, fetchTypesSuccess,
} from "./slice";
import { IInputType } from "types/models/InputTypes";
import { getTypes } from './../models/index';

function* handleFetchTypes(){
  try{
    const res: IApiResponse<IInputType[]> = yield call(getTypes);

    if (res.success){

      yield put(fetchTypesSuccess(res.data as IInputType[]));
    }
    else{
      yield put(fetchTypesFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchTypesFailure(ON_FETCH_ERROR));
  }
}


export default function* InputTypesSaga(){
  yield takeEvery(fetchTypes.type, handleFetchTypes);
}