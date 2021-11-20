import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IAccountState, ILoginForm } from "types/models/Account";

const initialState: IAccountState = {
  isAuth: false,
  isInitial: false,
  isFetching: false,
  isFetched: false,
  user: undefined,
  errors: []
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initial(state, action: PayloadAction<Partial<IAccountState>>) {
      state.isAuth = Boolean(action.payload.isAuth);
      state.isInitial = true;
      state.isFetching = false;
      state.user = undefined;
      state.errors = [];
    },
    accessToken(state) {
      state.isInitial = false;
      state.isAuth = false;
      state.user = undefined;
      state.isFetching = true;
      state.errors = [];
    },
    login(state, action: PayloadAction<ILoginForm>) {
      state.isAuth = false;
      state.isInitial = true;
      state.isFetching = true;
      state.isFetched = false;
      state.user = undefined;
      state.errors = [];
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.isAuth = true;
      state.isInitial = true;
      state.isFetching = false;
      // state.user = action.payload;
      state.errors = [];
    },
    loginFailure(state, action: PayloadAction<IError[]>) {
      state.isAuth = false;
      state.isInitial = true;
      state.isFetching = false;
      state.isFetched = true;
      state.user = undefined;
      state.errors = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.isInitial = true;
      state.isFetching = false;
      state.user = undefined;
      state.errors = [];
    }
  }
});

// Actions
export const initial = AuthSlice.actions.initial;
export const accessToken = AuthSlice.actions.accessToken;
export const login = AuthSlice.actions.login;
export const loginSuccess = AuthSlice.actions.loginSuccess;
export const loginFailure = AuthSlice.actions.loginFailure;
export const logout = AuthSlice.actions.logout;

// Selectors
export const getIsAuth = (state: RootState) => state.auth.isAuth;
export const getIsInitial = (state: RootState) => state.auth.isInitial;
export const getIsFetching = (state: RootState) => state.auth.isFetching;
export const getIsFetched = (state: RootState) => state.auth.isFetched;
export const getCurrentUser = (state: RootState) => state.auth.user;
export const getAuthErrors = (state: RootState) => state.auth.errors;

// Reducer
const AuthReducer = AuthSlice.reducer;
export default AuthReducer;