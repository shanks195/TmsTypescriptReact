import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IApiPaging, IApiResponse } from "types";
import { IDetailMetadata, IInitPage, IMetadata } from "types/models/MetadataList";
import { ON_FETCH_ERROR } from "utils/constants";
import {
  deleteMetadataAction,
  fetchMetadata,
  fetchMetadataDetail,
  fetchMetadataDetailFailure,
  fetchMetadataDetailSuccess,
  fetchMetadataFailure,
  fetchMetadataSuccess
} from "./slice";
import { getMetadata, getDetailMetadata } from "../models";
import { deleteMetadata } from './../models/index';
import { appMessage, setAppNotification } from "features/app/store/slice";

function* handleFetchMetadata(action: PayloadAction<IInitPage>) {
  try {
    const res: IApiPaging<IMetadata> = yield call(getMetadata, action.payload);

    if (res.success) {
      yield put(fetchMetadataSuccess(res.data as IMetadata));
    }
    else {
      yield put(fetchMetadataFailure(res.errors));
    }
  }
  catch (e) {
    yield put(fetchMetadataFailure(ON_FETCH_ERROR));
  }
}
// DETAIL METADATA
function* handleFetchDetailMetadata(action: PayloadAction<string>) {
  try {
    const res: IApiResponse<IDetailMetadata> = yield call(getDetailMetadata, action.payload);

    if (res.success) {

      yield put(fetchMetadataDetailSuccess(res.data as IDetailMetadata));
    }
    else {
      yield put(fetchMetadataDetailFailure(res.errors));
    }
  }
  catch (e) {
    yield put(fetchMetadataDetailFailure(ON_FETCH_ERROR));
  }
}
function* handleDeleteMetadata(action: PayloadAction<string>) {
  try {
    const res: IApiResponse<IDetailMetadata> = yield call(deleteMetadata, action.payload);

    if (res.success) {
      yield put(setAppNotification(appMessage("Xóa dữ liệu thành công", 'success')));
      yield call(handleFetchMetadata, { 
        payload:{
         page: 1, limit: 15, order_by: "asc"
        },
      type:"" });
    }
    else {
      yield put(setAppNotification(appMessage(res.errors[0].msg, 'error')));
    }
  }
  catch (e) {
    yield put(setAppNotification(appMessage(ON_FETCH_ERROR[0].msg, 'error')));
  }
}
export default function* metadataListSaga() {
  yield takeEvery(fetchMetadata.type, handleFetchMetadata);
  yield takeEvery(fetchMetadataDetail.type, handleFetchDetailMetadata);
  yield takeEvery(deleteMetadataAction.type, handleDeleteMetadata);

}