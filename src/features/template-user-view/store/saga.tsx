import { PayloadAction } from "@reduxjs/toolkit";
import { appMessage, setAppNotification } from "features/app/store/slice";
import { call, put, takeEvery } from "redux-saga/effects";
import { IApiResponse } from "types";
import { IApplyResponse, IFilterTemplateUserView, IMetadataInfo, ITemplateUserView } from "types/models/TemplateUserView";
import { ON_FETCH_ERROR } from "utils/constants";
import { fillDataIntoTemplate, getTemplateUserView } from "../models";
import { applyTemplateUserView, applyTemplateUserViewSuccess, fetchTemplateUserView, fetchTemplateUserViewFailure, fetchTemplateUserViewSuccess } from "./slice";

function* handleFetchTemplateUserView(action: PayloadAction<IFilterTemplateUserView>){
  try {
    const res: IApiResponse<ITemplateUserView> = yield call(getTemplateUserView, action.payload);

    if (res.success) {

      yield put(fetchTemplateUserViewSuccess(res.data as ITemplateUserView));
    }
    else {
      yield put(fetchTemplateUserViewFailure(res.errors));
    }
  }
  catch (e) {
    yield put(fetchTemplateUserViewFailure(ON_FETCH_ERROR));
  }
}

function* handleFillData(action: PayloadAction<{template_id: string, data: IMetadataInfo}>){
  try {
    const response: IApiResponse<IApplyResponse> = yield call(fillDataIntoTemplate, action.payload.template_id, action.payload.data);

    if (response.success) {
      yield put(applyTemplateUserViewSuccess(response.data as IApplyResponse));
      yield put(setAppNotification(appMessage("Áp dụng thành công", 'success')));
    } else {
      yield put(setAppNotification(appMessage(response.errors[0].msg, 'error')));
    }
  }
  catch (e) {
    yield put(fetchTemplateUserViewFailure(ON_FETCH_ERROR));
  }
}

export default function* TemplateUserViewSaga(){
  yield takeEvery(applyTemplateUserView.type, handleFillData);
  yield takeEvery(fetchTemplateUserView.type, handleFetchTemplateUserView);
}