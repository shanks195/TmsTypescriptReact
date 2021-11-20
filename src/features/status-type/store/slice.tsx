import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IStatusTypeState,IStatusType } from "types/models/statusType";

const initialState: IStatusTypeState = {
    list: [],
    loading:false,
    loaded:false,
    errors: []
  }

  const StatusTypeSlice = createSlice({
    name: 'statusSlice',
    initialState,
    reducers: {
      fetchStatusType(state){
        state.list = [];
        state.loaded = false;
        state.loading = true;
        state.errors = [];
      },
      fetchStatusTypeSuccess(state, action: PayloadAction<IStatusType[]>){
        state.list = action.payload;
        state.errors = [];
        state.loading = false;
        state.loaded = true;
      },
      fetchStatusTypeFailure(state, action: PayloadAction<IError[]>){
        state.list = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchStatusType = StatusTypeSlice.actions.fetchStatusType;
export const fetchStatusTypeSuccess = StatusTypeSlice.actions.fetchStatusTypeSuccess;
export const fetchStatusTypeFailure = StatusTypeSlice.actions.fetchStatusTypeFailure;

// Selectors
export const getStatusType = (state: RootState) => state.statusType.list;
export const isLoadingStatusType = (state: RootState) => state.statusType.loading;
export const isLoadedStatusType = (state: RootState) => state.statusType.loaded;

// Reducer
const StatusTypesReducer = StatusTypeSlice.reducer;

export default StatusTypesReducer;