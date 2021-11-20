import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IMetadataGroups, IMetadataGroupsState } from 'types/models/MetadataList';

const initialState: IMetadataGroupsState = {
    list: [],
    loading:false,
    loaded:false,
    errors: []
  }

  const MetadataGroupsSlice = createSlice({
    name: 'metadataGroup',
    initialState,
    reducers: {
      fetchMetadataGroups(state){
        state.list = [];
        state.loaded = false;
        state.loading = true;
        state.errors = [];
      },
      fetchMetadataGroupsSuccess(state, action: PayloadAction<IMetadataGroups[]>){
        state.list = action.payload;
        state.errors = [];
        state.loading = false;
        state.loaded = true;
      },
      fetchMetadataGroupsFailure(state, action: PayloadAction<IError[]>){
        state.list = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchMetadataGroups = MetadataGroupsSlice.actions.fetchMetadataGroups;
export const fetchMetadataGroupsSuccess = MetadataGroupsSlice.actions.fetchMetadataGroupsSuccess;
export const fetchMetadataGroupsFailure = MetadataGroupsSlice.actions.fetchMetadataGroupsFailure;

// Selectors
export const getMetadataGroups = (state: RootState) => state.metadataGroups.list;
export const isLoadingMetadataGroups = (state: RootState) => state.metadataGroups.loading;
export const isLoadedMetadataGroups = (state: RootState) => state.metadataGroups.loaded;

// Reducer
const MetadataGroupsReducer = MetadataGroupsSlice.reducer;

export default MetadataGroupsReducer;