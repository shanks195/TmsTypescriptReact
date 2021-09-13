import history from "app/history";
import PAGE_URL from "app/PageURL";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { accessToken, login, loginFailure, loginSuccess } from "./slice";
import { encodeToken, removeLocalItem, setLocalItem } from "utils";
import { APP_TOKEN_NAME, ON_FETCH_ERROR } from "utils/constants";
import { IApiResponse } from "types";
import { ILoginForm, ILoginResponse, IUser } from "types/models/Account";
import { authLogin, authToken } from "../models";

function* handleAccessToken(action: PayloadAction<string | number>){
  try{
    const response: IApiResponse<IUser> = yield call(authToken, action.payload);

    if (response.success){
      yield put(loginSuccess(response.data as IUser));
    }
    else{
      removeLocalItem(APP_TOKEN_NAME);
      yield call(history.push, PAGE_URL.Login);
    }
  }
  catch(e){
    yield put(loginFailure(ON_FETCH_ERROR));
    yield call(history.push, PAGE_URL.Login);
  }
}

function* handleLogin(action: PayloadAction<ILoginForm>) {
  try {
    const response: IApiResponse<ILoginResponse> = yield call(
      authLogin,
      action.payload
    );

    if (response.success) {
      yield put(loginSuccess(response.data?.user_info as IUser));
      if (action.payload.remember) {
        setLocalItem(
          APP_TOKEN_NAME,
          encodeToken({
            token: response.data?.access_token as string,
            userid: response.data?.user_info?.user_id as string
          })
        );
      }

      yield call(history.push, PAGE_URL.Dashboard);
    } else {
      yield put(loginFailure(response.errors));
    }
  } catch (e) {
    yield put(loginFailure(ON_FETCH_ERROR));
  }
}

export default function* authSaga() {
  yield takeEvery(accessToken.type, handleAccessToken);
  yield takeEvery(login.type, handleLogin);
}
