import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getMetadataGroups } from './../models/index';
import { fetchMetadataGroupsSuccess , fetchMetadataGroupsFailure, fetchMetadataGroups } from "./slice";
import { IMetadataGroups } from "types/models/MetadataList";


function* handleFetchMetadataGroups(){
  try{
    const res: IApiResponse<IMetadataGroups[]> = yield call(getMetadataGroups);

    if (res.success){

      yield put(fetchMetadataGroupsSuccess(res.data as IMetadataGroups[]));
    }
    else{
      yield put(fetchMetadataGroupsFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchMetadataGroupsFailure(ON_FETCH_ERROR));
  }
}


export default function* MetadataGroupsSaga(){
  yield takeEvery(fetchMetadataGroups.type, handleFetchMetadataGroups);
}