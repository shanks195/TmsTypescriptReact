import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IDataSourceListState, IDataSourceList } from "types/models/DataSourceList";

const initialState: IDataSourceListState = {
  errors:[],
  list: [],
  fetched: false,
  fetching: false
}

const DataSourceSlice = createSlice({
  name: 'data-source-list',
  initialState,
  reducers:{
    fetchDataSourceList(state, action: PayloadAction<number>){
      state.list = [];
      state.errors = [];
      state.fetching = true;
      state.fetched = false;
    },
    fetchDataSourceListSuccess(state, action: PayloadAction<IDataSourceList[]>){
      state.list = action.payload;
      state.fetched = true;
      state.fetching = false;
    },
    fetchDataSourceListFailure(state, action: PayloadAction<IError[]>){
      state.errors = action.payload;
      state.fetching = false;
      state.fetched = true;
    },
    clearDataSourceList(state){
      state.list = [];
      state.errors = [];
      state.fetched = false;
      state.fetching = false;
    }
  }
});

// Actions
export const fetchDataSouceList = DataSourceSlice.actions.fetchDataSourceList;
export const fetchDataSourceListSuccess = DataSourceSlice.actions.fetchDataSourceListSuccess;
export const fetchDataSourceListFailure = DataSourceSlice.actions.fetchDataSourceListFailure;
export const clearDataSourceList = DataSourceSlice.actions.clearDataSourceList;

// Selector 
export const getDataSourceList = (state: RootState) => state.dataSourceList.list;
export const isFetching = (state: RootState) => state.dataSourceList.fetching;
export const isFetched = (state: RootState) => state.dataSourceList.fetched;

const DataSourceReducer = DataSourceSlice.reducer;
export default DataSourceReducer;