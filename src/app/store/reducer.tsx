import { AnyAction, ReducersMapObject } from "@reduxjs/toolkit";
import { RootState } from "types";

import AuthReducer from "features/auth/store/slice";
import AppReducer from "features/app/store/slice";

const reducer: ReducersMapObject<RootState, AnyAction> = {
  app: AppReducer,
  auth: AuthReducer
};

export default reducer;
