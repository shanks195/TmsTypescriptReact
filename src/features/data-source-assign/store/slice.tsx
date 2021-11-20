import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { 
  IDataSourceDetailAssign, 
  IDataSourceDetailAssignState, 
  IDataSourceDetailAssignReponse 
} from "types/models/DataSourceDetail";


const initialState: IDataSourceDetailAssignState = {
  loaded:false,
  loading: false,
  response:null,
  errors: []
}

const DataSourceDetailAssignSlice = createSlice({
  name: 'data-source-assign',
  initialState,
  reducers: {
    dataSourceDetailAssign(state, action: PayloadAction<IDataSourceDetailAssign>) {
      state.loading = true;
      state.loaded = false;
      state.response = null;
      state.errors = [];
    },
    dataSourceDetailAssignSuccess(state, action: PayloadAction<IDataSourceDetailAssignReponse>) {
      state.loading = false;
      state.loaded = true;
      state.response = action.payload;
      state.errors = [];
    },
    dataSourceDetailAssignFailure(state, action: PayloadAction<IError[]>) {
      state.loading = false;
      state.loaded = true;
      state.response = null;
      state.errors = action.payload;
    },
  }
});

// Actions
export const dataSourceDetailAssign = DataSourceDetailAssignSlice.actions.dataSourceDetailAssign;
export const dataSourceDetailAssignSuccess = DataSourceDetailAssignSlice.actions.dataSourceDetailAssignSuccess;
export const dataSourceDetailAssignFailure = DataSourceDetailAssignSlice.actions.dataSourceDetailAssignFailure;

// Selector;
export const dataSourceDetailAssignReponse = (state: RootState) => state.dataSourceDetailAssign.response;
export const isLoading = (state: RootState) => state.dataSourceDetailAssign.loading;
export const isLoaded = (state: RootState) => state.dataSourceDetailAssign.loaded;
export const dataSourceDetailAssignError = (state: RootState) => state.dataSourceDetailAssign.errors;

const DataSourceDetailAssignReducer = DataSourceDetailAssignSlice.reducer;
export default DataSourceDetailAssignReducer;