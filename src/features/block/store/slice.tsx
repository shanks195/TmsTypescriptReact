
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IBlock, IBlockState } from "types/models/block";

const initialState: IBlockState = {
    list: [],
    loading:false,
    loaded:false,
    errors: []
  }

  const BlockSlice = createSlice({
    name: 'Block',
    initialState,
    reducers: {
      fetchBlock(state){
        state.list = [];
        state.loaded = false;
        state.loading = true;
        state.errors = [];
      },
      fetchBlockSuccess(state, action: PayloadAction<IBlock[]>){
        state.list = action.payload;
        state.errors = [];
        state.loading = false;
        state.loaded = true;
      },
      fetchBlockFailure(state, action: PayloadAction<IError[]>){
        state.list = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchBlock = BlockSlice.actions.fetchBlock;
export const fetchBlockSuccess = BlockSlice.actions.fetchBlockSuccess;
export const fetchBlockFailure = BlockSlice.actions.fetchBlockFailure;

// Selectors
export const getBlock = (state: RootState) => state.block.list;
export const isLoadingBlock = (state: RootState) => state.block.loading;
export const isLoadedBlock = (state: RootState) => state.block.loaded;

// Reducer
const BlockReducer = BlockSlice.reducer;

export default BlockReducer;