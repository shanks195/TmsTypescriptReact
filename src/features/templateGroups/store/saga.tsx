import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { IListSideBar } from "types/models/templateGroups";
import { getLeftSideBars } from "../models";
import { fetchLeftSideBars, fetchLeftSideBarsFailure, fetchLeftSideBarsSuccess } from './slice'

function* handleFetchSideBars(){
  try{
    const res: IApiResponse<IListSideBar[]> = yield call(getLeftSideBars);

    if (res.success){
      yield put(fetchLeftSideBarsSuccess(res.data as IListSideBar[]));
    }
    else{
      yield put(fetchLeftSideBarsFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchLeftSideBarsFailure(ON_FETCH_ERROR));
  }
}

export default function* templateGroupsSaga(){
  yield takeEvery(fetchLeftSideBars.type, handleFetchSideBars);
}
