import { IApiResponse } from "types";
import { IMetadataResponse, IMetadataBody } from "types/models/create-metadata";
import { call,put,takeEvery } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { createMetadata,createMetadataFailure, createMetadataSuccess } from "./slice";
import { ON_FETCH_ERROR } from "utils/constants";
import { handlecreateMetadata } from "../models";
import history from "app/history";
import { appMessage, setAppNotification } from "features/app/store/slice";


function* handleCreateMetadata(action: PayloadAction<IMetadataBody>) {
    try {
      const response: IApiResponse<IMetadataResponse> = yield call(handlecreateMetadata,action.payload);
      console.log(response);
      
      if (response.success) {
        yield put(createMetadataSuccess(response.data as IMetadataResponse));
        yield put(setAppNotification(appMessage("Thêm mới Metadata thành công", 'success')));
        yield call(history.back)
        
      } else {
        yield put(setAppNotification(appMessage(response.errors[0].msg, 'error')));
      }
    } catch (e) {
      yield put(createMetadataFailure(ON_FETCH_ERROR));

    }
  }

  export default function* MetadataSaga(){
    yield takeEvery(createMetadata.type, handleCreateMetadata);
  }