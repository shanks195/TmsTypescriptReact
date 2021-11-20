import { call, takeEvery } from "redux-saga/effects";
import { logout } from "features/auth/store/slice";
import { removeStorage } from "utils";
import { APP_TOKEN_NAME } from "utils/constants";
import history from "app/history";
import PAGE_URL from "app/PageURL";
import { put } from '@redux-saga/core/effects';
import { closeBackdrop } from 'features/app/store/slice';

export function* handleCloseBackdrop(){
  yield put(closeBackdrop())
}
function* handleLogout(){
  try{
    yield call(removeStorage, APP_TOKEN_NAME);
    yield call(history.push, PAGE_URL.Login);
  }
  catch(e){}
}

export default function* appSaga(){
  yield takeEvery(logout.type, handleLogout);
}