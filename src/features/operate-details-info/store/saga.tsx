import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IApiResponse } from "types";
import { ON_FETCH_ERROR } from "utils/constants";
import { getDetailTemplate } from "../models";
import { ITemplateDetails } from "types/models/Templates";
import { fetchTemplateDetails, fetchTemplateDetailsFailure, fetchTemplateDetailsSuccess } from "./slice";

// DETAIL TemplateDetail
function* handleFetchTemplateDetail(action: PayloadAction<string>) {
  try {
    const res: IApiResponse<ITemplateDetails> = yield call(getDetailTemplate, action.payload);

    if (res.success) {

      yield put(fetchTemplateDetailsSuccess(res.data as ITemplateDetails));
    }
    else {
      yield put(fetchTemplateDetailsFailure(res.errors));
    }
  }
  catch (e) {
    yield put(fetchTemplateDetailsFailure(ON_FETCH_ERROR));
  }
}

export default function* TemplateDetailsSaga() {
  yield takeEvery(fetchTemplateDetails.type, handleFetchTemplateDetail);

}