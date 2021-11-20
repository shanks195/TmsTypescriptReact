import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IDataSourceTemplate, IDataSourceTemplateState } from "types/models/DataSourceTemplate";

const initialState: IDataSourceTemplateState = {
  errors: [],
  list: [],
  fetched: false,
  fetching: false
}

const DataSourceTeamplateSlice = createSlice({
  name: 'data-source-template',
  initialState,
  reducers:{
    fetchDataSourceTemplate(state, action: PayloadAction<number>){
      state.list = [];
      state.errors = [];
      state.fetching = true;
      state.fetched = false;
    },
    fetchDataSourceTemplateSuccess(state, action: PayloadAction<IDataSourceTemplate[]>){
      state.list = action.payload;
      state.fetched = true;
      state.fetching = false;
    },
    fetchDataSourceTemplateFailure(state, action: PayloadAction<IError[]>){
      state.errors = action.payload;
      state.fetching = false;
      state.fetched = true;
    }
  }
});

// Actions
export const fetchDataSourceTemplate = DataSourceTeamplateSlice.actions.fetchDataSourceTemplate;
export const fetchDataSourceTemplateSuccess = DataSourceTeamplateSlice.actions.fetchDataSourceTemplateSuccess;
export const fetchDataSourceTemplateFailure = DataSourceTeamplateSlice.actions.fetchDataSourceTemplateFailure;

// Selectors
export const getDataSourceTemplate = (state: RootState) => state.dataSourceTeamplate.list;
export const isFetchingDataSourceTemplate = (state: RootState) => state.dataSourceTeamplate.fetching;
export const isFetchedDataSourceTemplate = (state: RootState) => state.dataSourceTeamplate.fetched;

const DataSourceTeamplateReducer = DataSourceTeamplateSlice.reducer;
export default DataSourceTeamplateReducer;