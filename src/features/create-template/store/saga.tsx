import { IApiResponse } from "types";
import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { ON_FETCH_ERROR } from "utils/constants";
import history from "app/history";
import PAGE_URL from "app/PageURL";
import { appMessage, setAppNotification } from "features/app/store/slice";
import { ITemplateCreateBody, ITemplateCreateResponse, ITemplateUpdateResponse } from "types/models/create-template";
import { getCreateTemplate, getUpdateTemplate } from "../models";
import { createTemplate, createTemplateFailure, createTemplateSuccess, UpdateTemplate, updateTemplateFailure, updateTemplateSuccess } from "./slice";

interface UpdatePayload{
  data:ITemplateCreateBody;
  id: number;
}

function* handleCreateTemplate(action: PayloadAction<ITemplateCreateBody>) {
  try {
 
    const response: IApiResponse<ITemplateCreateResponse> = yield call(getCreateTemplate, action.payload);

    if (response.success) {
      yield put(createTemplateSuccess(response.data as ITemplateCreateResponse));
      yield put(setAppNotification(appMessage("Thêm mới thành công", 'success')));
      yield call(history.push,PAGE_URL.V2.Operate.Detail.API)
    } else {
      yield put(setAppNotification(appMessage(response.errors[0].msg, 'error')));
    }
  } catch (e) {
    yield put(createTemplateFailure(ON_FETCH_ERROR));

  }
}

  function* handleUpdateTemplate(action: PayloadAction<UpdatePayload>) {
    try {
      const response: IApiResponse<ITemplateUpdateResponse> = yield call(getUpdateTemplate,action.payload.data,action.payload.id);
      
      if (response.success) {
        yield put(updateTemplateSuccess(response.data as ITemplateUpdateResponse));
        yield put(setAppNotification(appMessage("Cập Nhật template thành công", 'success')));
        // yield call(history.push,PAGE_URL.V2.Operate.Detail.API)
        
      } else {
        yield put(setAppNotification(appMessage(response.errors[0].msg, 'error')));
      }
    } catch (e) {
      yield put(updateTemplateFailure(ON_FETCH_ERROR));

    }
  }

  export default function* TemplateCreateSaga(){
    yield takeEvery(createTemplate.type, handleCreateTemplate);
    yield takeEvery(UpdateTemplate.type, handleUpdateTemplate);
  }
