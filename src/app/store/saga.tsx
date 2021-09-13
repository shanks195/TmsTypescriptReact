import { all } from "redux-saga/effects";

import authSaga from "features/auth/store/saga";

export default function* rootSaga() {
  yield all([
    authSaga()
  ]);
}
