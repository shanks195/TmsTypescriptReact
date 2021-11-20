import history from "app/history";
import PAGE_URL from "app/PageURL";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { accessToken, login, loginFailure, loginSuccess } from "./slice";
import { decodeToken, encodeToken, removeLocalItem, removeSessionItem, setLocalItem, setSessionItem } from "utils";
import { APP_TOKEN_NAME, ON_FETCH_ERROR } from "utils/constants";
import { IApiResponse } from "types";
import { ILoginForm, ILoginResponse, IUser } from "types/models/Account";
import { authLogin, authToken } from "../models";

function* handleAccessToken(){
  try{
    const response: IApiResponse<IUser> = yield call(authToken, decodeToken().userid);
    if (response.success){
      yield put(loginSuccess(response.data?.user_id as string));
    }
    else{
      yield call(removeLocalItem, APP_TOKEN_NAME);
      yield call(removeSessionItem, APP_TOKEN_NAME);

      yield call(history.push, PAGE_URL.Login);
    }
  }
  catch(e){console.log(e)
    yield call(removeLocalItem, APP_TOKEN_NAME);
    yield call(removeSessionItem, APP_TOKEN_NAME);
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
      yield put(loginSuccess(response.data?.user_id as string));
      if (action.payload.remember) {
        setLocalItem(
          APP_TOKEN_NAME,
          encodeToken({
            token: response.data?.token as string,
            userid: response.data?.user_id as string
          })
        );
      }
      else{
        setSessionItem(
          APP_TOKEN_NAME,
          encodeToken({
            token: response.data?.token as string,
            userid: response.data?.user_id as string
          })
        )
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
