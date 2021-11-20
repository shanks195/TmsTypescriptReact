
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IVersion, IVersionState } from "types/models/Version";

const initialState: IVersionState = {
    list: [],
    loading:false,
    loaded:false,
    errors: []
  }

  const VersionSlice = createSlice({
    name: 'Version',
    initialState,
    reducers: {
      fetchVersion(state){
        state.list = [];
        state.loaded = false;
        state.loading = true;
        state.errors = [];
      },
      fetchVersionSuccess(state, action: PayloadAction<IVersion[]>){
        state.list = action.payload;
        state.errors = [];
        state.loading = false;
        state.loaded = true;
      },
      fetchVersionFailure(state, action: PayloadAction<IError[]>){
        state.list = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchVersion = VersionSlice.actions.fetchVersion;
export const fetchVersionSuccess = VersionSlice.actions.fetchVersionSuccess;
export const fetchVersionFailure = VersionSlice.actions.fetchVersionFailure;

// Selectors
export const getVersion = (state: RootState) => state.version.list;
export const isLoadingVersion = (state: RootState) => state.version.loading;
export const isLoadedVersion = (state: RootState) => state.version.loaded;

// Reducer
const VersionReducer = VersionSlice.reducer;

export default VersionReducer;