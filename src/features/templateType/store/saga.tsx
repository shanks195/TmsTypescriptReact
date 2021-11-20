import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { ITemplateType } from "types/models/templateType";
import { fetchTemplateType, fetchTemplateTypeFailure, fetchTemplateTypeSuccess } from "./slice";
import { getTemplateType } from "./../models/index";

function* handleFetchTemplateType(){
  try{
    const res: IApiResponse<ITemplateType[]> = yield call(getTemplateType);

    if (res.success){

      yield put(fetchTemplateTypeSuccess(res.data as ITemplateType[]));
    }
    else{
      yield put(fetchTemplateTypeFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchTemplateTypeFailure(ON_FETCH_ERROR));
  }
}


export default function* TemplateTypeSaga(){
  yield takeEvery(fetchTemplateType.type, handleFetchTemplateType);
}