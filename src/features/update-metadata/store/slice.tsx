
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IMetadataPayload,IMetadataResponse, IMetadataState } from 'types/models/create-metadata';

const initialState: IMetadataState = {
    response:{
        loaded:false,
        loading:false,
        data:null
    },
    errors: []
  }

  const UpdateMetadataSlice = createSlice({
    name: 'update-metadata',
    initialState,
    reducers: {
      updateMetadata(state, action: PayloadAction<IMetadataPayload>) {
        state.response.loading = true;
        state.response.loaded = false;
        state.response.data = null;
        state.errors = [];
      },
      updateMetadataSuccess(state, action: PayloadAction<IMetadataResponse>) {
        state.response.loading = false;
        state.response.loaded = true;
        state.response.data = action.payload;
        state.errors = [];
      },
      updateMetadataFailure(state, action: PayloadAction<IError[]>) {

        state.response.loading = false;
        state.response.loaded = true;
        state.response.data = null;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const updateMetadata = UpdateMetadataSlice.actions.updateMetadata;
export const updateMetadataSuccess = UpdateMetadataSlice.actions.updateMetadataSuccess;
export const updateMetadataFailure = UpdateMetadataSlice.actions.updateMetadataFailure;

// Selectors
export const updateMetadataRespone = (state: RootState) => state.updateMetadata.response.data;
export const isLoadingUpdateMetadata = (state: RootState) => state.updateMetadata.response.loading;
export const isLoadedCreateMetadata = (state: RootState) => state.createMetadata.response.loaded;

// Reducer
const UpdateMetadataReducer = UpdateMetadataSlice.reducer;

export default UpdateMetadataReducer;