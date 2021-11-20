import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IDetailMetadata, IInitPage, IMetadata } from "types/models/MetadataList";

import { IMetadataListState } from "types/models/MetadataList";

const initialState: IMetadataListState = {

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
  order_by: "asc",
  detail:{
    fetching: false,
    fetched: false,
    list:  undefined,
    errors: [],
  },
  errors: []
}

const MetadataSlice = createSlice({
  name: 'metadatalist',
  initialState,
  reducers: {

    setMetadataCurrentPage(state, action: PayloadAction<number>) {
      state.current_page = action.payload;
    },

    fetchMetadata(state, action: PayloadAction<IInitPage>) {
      state.fetching = true;
      state.fetched = false
      state.list.items=[];
    },
    fetchMetadataSuccess(state, action: PayloadAction<IMetadata> ) {
      state.list = action.payload;
      state.list.total_page = action.payload.total_page;
      state.fetched = true
      state.fetching = false;
    },
    fetchMetadataFailure(state, action: PayloadAction<IError[]>) {
      state.errors = action.payload;
      state.fetching = false;
      state.fetched = true;
    },

    // DETAIL METADATA
    fetchMetadataDetail(state,action:PayloadAction<string>){
      state.detail.list = undefined;
      state.fetching = true;
      state.fetched = false;
      state.errors = [];
    },
    fetchMetadataDetailSuccess(state, action: PayloadAction<IDetailMetadata>){
      state.detail.list = action.payload;
      state.fetched = true;
      state.fetching = false;
      state.errors = [];
    },
    fetchMetadataDetailFailure(state, action: PayloadAction<IError[]>){
      state.detail.list = undefined;
      state.errors = action.payload;
      state.fetching = false;
      state.fetched = true;
    },
    clearDetail(state){
      state.detail.list = undefined;
      state.fetching = false;
      state.fetched = false;
      state.errors = []
    },
    deleteMetadata(state,action:PayloadAction<string |number>){
      const index = state.list.items.findIndex(i => i.id === action.payload)
      state.list.items.splice(index,1)
    }
  }
});

// Actions
export const setMetadataCurrentPage = MetadataSlice.actions.setMetadataCurrentPage;
export const fetchMetadata = MetadataSlice.actions.fetchMetadata;
export const fetchMetadataSuccess = MetadataSlice.actions.fetchMetadataSuccess;
export const fetchMetadataFailure = MetadataSlice.actions.fetchMetadataFailure;
export const deleteMetadataAction = MetadataSlice.actions.deleteMetadata;

// DETAIL METADATA ACTIONS
export const fetchMetadataDetail        = MetadataSlice.actions.fetchMetadataDetail;
export const fetchMetadataDetailSuccess = MetadataSlice.actions.fetchMetadataDetailSuccess;
export const fetchMetadataDetailFailure = MetadataSlice.actions.fetchMetadataDetailFailure;
export const clearDetail = MetadataSlice.actions.clearDetail;

// Selectors
export const getMetadataList = (state: RootState) => state.metadataList.list;
export const isLoadingMetadata = (state: RootState) => state.metadataList.fetching;
export const isLoadedMetadata = (state: RootState) => state.metadataList.fetched;
export const getMetadataTotalPage = (state: RootState) => state.metadataList.list.total_page;
export const getMetadataCurrentPage = (state: RootState) => state.metadataList.current_page;
export const getMetadataLimit = (state: RootState) => state.metadataList.limit;

// DETAIL METDATA SELECTORS
export const getDetailMetadata = (state: RootState) => state.metadataList.detail.list;
export const isFetchingDetailMetadata = (state: RootState) => state.metadataList.detail.fetching;
export const isFetchedDetailMetadata = (state: RootState) => state.metadataList.detail.fetched;

// Reducer
const MetadataListReducer = MetadataSlice.reducer;
export default MetadataListReducer;