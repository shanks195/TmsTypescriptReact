
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IMetadataBody,IMetadataResponse,IMetadataState } from 'types/models/create-metadata';

const initialState: IMetadataState = {
    response:{
        loaded:false,
        loading:false,
        data:null
    },
    errors: []
  }

  const MetadataSlice = createSlice({
    name: 'create-metadata',
    initialState,
    reducers: {
      createMetadata(state, action: PayloadAction<IMetadataBody>) {
        state.response.loading = true;
        state.response.loaded = false;
        state.response.data = null;
        state.errors = [];
      },
      createMetadataSuccess(state, action: PayloadAction<IMetadataResponse>) {
        state.response.loading = false;
        state.response.loaded = true;
        state.response.data = action.payload;
        state.errors = [];
      },
      createMetadataFailure(state, action: PayloadAction<IError[]>) {

        state.response.loading = false;
        state.response.loaded = true;
        state.response.data = null;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const createMetadata = MetadataSlice.actions.createMetadata;
export const createMetadataSuccess = MetadataSlice.actions.createMetadataSuccess;
export const createMetadataFailure = MetadataSlice.actions.createMetadataFailure;

// Selectors
export const createMetadataRespone = (state: RootState) => state.createMetadata.response.data;
export const isLoadingCreateMetadata = (state: RootState) => state.createMetadata.response.loading;
export const isLoadedCreateMetadata = (state: RootState) => state.createMetadata.response.loaded;

// Reducer
const MetadataReducer = MetadataSlice.reducer;

export default MetadataReducer;