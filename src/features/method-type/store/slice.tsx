import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IMethodType, IMethodsState } from "types/models/MethodType";

const initialState: IMethodsState = {
  list: [],
  fetching: false,
  fetched: false,
  errors: []
};

const MethodTypeSlide = createSlice({
  name: 'method-type',
  initialState,
  reducers: {
    fetchMethodType(state){
      state.list = [];
      state.errors = [];
      state.fetching = true;
      state.fetched = false;
    },
    fetchMethodTypeSuccess(state, action: PayloadAction<IMethodType[]>){
      state.list = action.payload;
      state.fetched = true;
      state.fetching = false;
    },
    fetchMethodTypeFailure(state, action: PayloadAction<IError[]>){
      state.errors = action.payload;
      state.fetching = false;
      state.fetched = true;
    }
  }
});

// Actions
export const fetchMethodType = MethodTypeSlide.actions.fetchMethodType;
export const fetchMethodTypeSuccess = MethodTypeSlide.actions.fetchMethodTypeSuccess;
export const fetchMethodTypeFailure = MethodTypeSlide.actions.fetchMethodTypeFailure;

// Selectors
export const getfetchMethodType = (state: RootState) => state.methodType.list;
export const isFetching = (state: RootState) => state.methodType.fetching;
export const isFetched = (state: RootState) => state.methodType.fetched;

// Reducer
const MethodTypeSlideReducer = MethodTypeSlide.reducer;
export default MethodTypeSlideReducer;