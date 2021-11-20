
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IStatusTree, IStatusTreeState } from "types/models/StatusTree";

const initialState: IStatusTreeState = {
    list: [],
    loading:false,
    loaded:false,
    errors: []
  }

  const StatusTreeSlice = createSlice({
    name: 'statusTree',
    initialState,
    reducers: {
      fetchStatusTree(state){
        state.list = [];
        state.loaded = false;
        state.loading = true;
        state.errors = [];
      },
      fetchStatusTreeSuccess(state, action: PayloadAction<IStatusTree[]>){
        state.list = action.payload;
        state.errors = [];
        state.loading = false;
        state.loaded = true;
      },
      fetchStatusTreeFailure(state, action: PayloadAction<IError[]>){
        state.list = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchStatusTree = StatusTreeSlice.actions.fetchStatusTree;
export const fetchStatusTreeSuccess = StatusTreeSlice.actions.fetchStatusTreeSuccess;
export const fetchStatusTreeFailure = StatusTreeSlice.actions.fetchStatusTreeFailure;

// Selectors
export const getStatusTree = (state: RootState) => state.statusTree.list;
export const isLoadingStatusTree = (state: RootState) => state.statusTree.loading;
export const isLoadedStatusTree = (state: RootState) => state.statusTree.loaded;

// Reducer
const StatusTreeReducer = StatusTreeSlice.reducer;

export default StatusTreeReducer;