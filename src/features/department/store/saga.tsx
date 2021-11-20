import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { IDepartment } from "types/models/Department";
import { fetchDepartment, fetchDepartmentFailure, fetchDepartmentSuccess } from "./slice";
import { getDepartment } from "./../models/index";

function* handleFetchDepartment(){
  try{
    const res: IApiResponse<IDepartment[]> = yield call(getDepartment);

    if (res.success){

      yield put(fetchDepartmentSuccess(res.data as IDepartment[]));
    }
    else{
      yield put(fetchDepartmentFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchDepartmentFailure(ON_FETCH_ERROR));
  }
}


export default function* DepartmentSaga(){
  yield takeEvery(fetchDepartment.type, handleFetchDepartment);
}