import { IApiResponse } from "types";
import { IMetadataResponse, IMetadataBody } from "types/models/create-metadata";
import { call,put,takeEvery } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { updateMetadata,updateMetadataFailure, updateMetadataSuccess } from "./slice";
import { ON_FETCH_ERROR } from "utils/constants";
import { UpdateMetadata } from './../models/index';
import history from "app/history";
import { appMessage, closeBackdrop, setAppNotification } from "features/app/store/slice";

interface UpdatePayload{
  data:IMetadataBody
  id: string
}



  function* handleUpdateMetadata(action: PayloadAction<UpdatePayload>) {
    try {
      const response: IApiResponse<IMetadataResponse> = yield call(UpdateMetadata,action.payload.data,action.payload.id);
  
      if (response.success) {
        yield put(updateMetadataSuccess(response.data as IMetadataResponse));
        yield put(setAppNotification(appMessage("Cập nhật dữ liệu thành công", 'success')));
        yield call(history.back)
      } else {
        yield put(setAppNotification(appMessage(response.errors[0].msg, 'error')));
      }
    } catch (e) {
      yield put(updateMetadataFailure(ON_FETCH_ERROR));
    }
    finally{
      yield put(closeBackdrop());
    }
  }
  export default function* UpdateMetadataSaga(){
    yield takeEvery(updateMetadata.type, handleUpdateMetadata);
  }