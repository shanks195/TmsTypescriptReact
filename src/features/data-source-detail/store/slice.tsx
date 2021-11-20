import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IDataSourceDetail, IDataSourceDetailState } from "types/models/DataSourceDetail";

const initialState: IDataSourceDetailState = {
  errors: [],
  data: {} as IDataSourceDetail,
  fetched: false,
  fetching: false
}

const DataSourceDetailSlice = createSlice({
  name: 'data-source-detail',
  initialState,
  reducers:{
    fetchDataSourceDetail(state, action: PayloadAction<number>){
      state.data = {} as IDataSourceDetail;
      state.errors = [];
      state.fetching = true;
      state.fetched = false;
    },
    fetchDataSourceDetailSuccess(state, action: PayloadAction<IDataSourceDetail>){
      state.data = action.payload;
      state.fetched = true;
      state.fetching = false;
    },
    fetchDataSourceDetailFailure(state, action: PayloadAction<IError[]>){
      state.errors = action.payload;
      state.fetching = false;
      state.fetched = true;
    }
  }
});

// Actions
export const fetchDataSourceDetail = DataSourceDetailSlice.actions.fetchDataSourceDetail;
export const fetchDataSourceDetailSuccess = DataSourceDetailSlice.actions.fetchDataSourceDetailSuccess;
export const fetchDataSourceDetailFailure = DataSourceDetailSlice.actions.fetchDataSourceDetailFailure;

// Selectors
export const getDataSourceDetail = (state: RootState) => state.dataSourceDetail.data;
export const isFetching = (state: RootState) => state.dataSourceDetail.fetching;
export const isFetched = (state: RootState) => state.dataSourceDetail.fetched;

const DataSourceDetailReducer = DataSourceDetailSlice.reducer;
export default DataSourceDetailReducer;