import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IDetailTemplateGroup, IInitPageGroup, ITemplatedata } from "types/models/Templatedata";

import { ITemplatedataState } from "types/models/Templatedata";

const initialState: ITemplatedataState = {

  list: {
    items: [],
    page: 0,
    total_page: 0,
    total_record: 0,
  },
  fetching: false,
  fetched: false,
  limit: 15,
  current_page: 0,
  total_page: 0,
  order_by: "asc",
  detail:{
    fetching: false,
    fetched: false,
    list:  undefined,
    errors: []
  },
  errors: []
}

const TemplatedataSlice = createSlice({
  name: 'Template',
  initialState,
  reducers: {

    setTemplatedataCurrentPage(state, action: PayloadAction<number>) {
      state.current_page = action.payload;
    },

    fetchTemplatedata(state, action: PayloadAction<IInitPageGroup>) {
      state.fetching = true;
      state.fetched = false
      state.list.items = [];
    },
    fetchTemplatedataSuccess(state, action: PayloadAction<ITemplatedata> ) {
      state.list = action.payload;
      state.total_page = action.payload.total_page;
      state.fetched = true
      state.fetching = false;
    },
    fetchTemplatedataFailure(state, action: PayloadAction<IError[]>) {
      state.errors = action.payload;
      state.fetching = false;
      state.fetched = true;
    },
    fetchTemplateGroupDetail(state,action:PayloadAction<string | number>){
      state.detail.list = undefined;
      state.detail.fetching = true;
      state.detail.fetched = false;
      state.detail.errors = [];
    },
    fetchTemplateGroupDetailSuccess(state, action: PayloadAction<IDetailTemplateGroup>){
      state.detail.list = action.payload;
      state.detail.fetched = true;
      state.detail.fetching = false;
      state.detail.errors = [];
    },
    fetchTemplateGroupDetailFailure(state, action: PayloadAction<IError[]>){
      state.detail.list = undefined;
      state.detail.errors = action.payload;
      state.detail.fetching = false;
      state.detail.fetched = true;
    },
    clearDetail(state){
      state.detail.list = undefined;
      state.detail.fetching = false;
      state.detail.fetched = false;
      state.detail.errors = []
    },
    deleteTemplatedata(state,action:PayloadAction<string | number>){
      const index = state.list.items.findIndex(i => i.id === action.payload)
      state.list.items.splice(index,1)
    },
  }
});

// Actions
export const setTemplatedataCurrentPage = TemplatedataSlice.actions.setTemplatedataCurrentPage;
export const fetchTemplatedata = TemplatedataSlice.actions.fetchTemplatedata;
export const fetchTemplatedataSuccess = TemplatedataSlice.actions.fetchTemplatedataSuccess;
export const fetchTemplatedataFailure = TemplatedataSlice.actions.fetchTemplatedataFailure;


// Detail
export const fetchTemplateGroupDetail        = TemplatedataSlice.actions.fetchTemplateGroupDetail;
export const fetchTemplateGroupDetailSuccess = TemplatedataSlice.actions.fetchTemplateGroupDetailSuccess;
export const fetchTemplateGroupDetailFailure = TemplatedataSlice.actions.fetchTemplateGroupDetailFailure;
export const clearDetail = TemplatedataSlice.actions.clearDetail;

export const deleteTemplatedataAction = TemplatedataSlice.actions.deleteTemplatedata;
// Selectors
export const getTemplatedata = (state: RootState) => state.templatedata.list;
export const isLoadingTemplatedata = (state: RootState) => state.templatedata.fetching;
export const isLoaddedTemplatedata = (state: RootState) => state.templatedata.fetched;
export const getTemplatedataTotalPage = (state: RootState) => state.templatedata.total_page;
export const getTemplatedataCurrentPage = (state: RootState) => state.templatedata.current_page;
export const getTemplatedataLimit = (state: RootState) => state.templatedata.limit;

export const getDetailTemplateGroup = (state: RootState) => state.templatedata.detail.list;
export const isFetchingDetailTemplateGroup = (state: RootState) => state.templatedata.detail.fetching;
export const isFetchedDetailTemplateGroup = (state: RootState) => state.templatedata.detail.fetched;
// Reducer
const TemplatedataReducer = TemplatedataSlice.reducer;
export default TemplatedataReducer;