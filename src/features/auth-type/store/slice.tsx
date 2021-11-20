import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IAuthType, IAuthTypeState } from "types/models/AuthType";

const initialState: IAuthTypeState = {
  list: [],
  fetching: false,
  fetched: false,
  errors: []
};

const AuthTypeSlide = createSlice({
  name: 'auth-type',
  initialState,
  reducers: {
    fetchAuthType(state){
      state.list = [];
      state.errors = [];
      state.fetching = true;
      state.fetched = false;
    },
    fetchAuthTypeSuccess(state, action: PayloadAction<IAuthType[]>){
      state.list = action.payload;
      state.fetched = true;
      state.fetching = false;
    },
    fetchAuthTypeFailure(state, action: PayloadAction<IError[]>){
      state.errors = action.payload;
      state.fetching = false;
      state.fetched = true;
    }
  }
});

// Actions
export const fetchAuthType = AuthTypeSlide.actions.fetchAuthType;
export const fetchAuthTypeSuccess = AuthTypeSlide.actions.fetchAuthTypeSuccess;
export const fetchAuthTypeFailure = AuthTypeSlide.actions.fetchAuthTypeFailure;

// Selectors
export const getfetchAuthType = (state: RootState) => state.authType.list;
export const isFetching = (state: RootState) => state.authType.fetching;
export const isFetched = (state: RootState) => state.authType.fetched;

// Reducer
const AuthTypeSlideReducer = AuthTypeSlide.reducer;
export default AuthTypeSlideReducer;