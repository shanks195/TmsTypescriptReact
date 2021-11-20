
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IListTemplate, IListTemplateState } from 'types/models/ListTemplate';

const initialState: IListTemplateState = {
  list: [],
  loading:false,
  loaded:false,
  errors: []
}

const ListTemplateSlice = createSlice({
  name: 'ListTemplate',
  initialState,
  reducers: {
    fetchListTemplate(state,action: PayloadAction<string>){
      state.list = [];
      state.loading = true;
      state.loaded = false;
      state.errors = [];
    },
    fetchListTemplateSuccess(state, action: PayloadAction<IListTemplate[]>){
      state.list = action.payload;
      state.loading = false;
      state.loaded = true;
      state.errors = [];
    },
    fetchListTemplateFailure(state, action: PayloadAction<IError[]>){
      state.list = [];
      state.loading = false;
      state.loaded = true;
      state.errors = action.payload;
    },
  }
});

  // Actions
export const fetchListTemplate = ListTemplateSlice.actions.fetchListTemplate;
export const fetchListTemplateSuccess = ListTemplateSlice.actions.fetchListTemplateSuccess;
export const fetchListTemplateFailure = ListTemplateSlice.actions.fetchListTemplateFailure;

// Selectors
export const getListTemplate = (state: RootState) => state.listTemplate.list;
export const isLoadingListTemplate = (state: RootState) => state.listTemplate.loading;
export const isLoadedListTemplate = (state: RootState) => state.listTemplate.loaded;

// Reducer
const ListTemplateReducer = ListTemplateSlice.reducer;

export default ListTemplateReducer;