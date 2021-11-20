import { PayloadAction } from "@reduxjs/toolkit";
import { call, takeEvery } from "redux-saga/effects";
import { IFileBlob } from "types/models/Upload";
import { uploadSingle } from "../models";
import { uploadFile } from "./slice";

function* handleUploadFile(action: PayloadAction<IFileBlob>) {
  try {
    yield call(uploadSingle, action.payload);
  } catch (e) {
    yield call(console.log, e);
  }
}

export default function* uploadSaga() {
  yield takeEvery(uploadFile.type, handleUploadFile);
}
