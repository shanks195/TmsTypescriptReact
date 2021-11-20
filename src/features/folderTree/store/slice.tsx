
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IFolderTree, IFolderTreeState } from "types/models/FolderTree";

const initialState: IFolderTreeState = {
    list: [],
    loading:false,
    loaded:false,
    errors: []
  }

  const FolderTreeSlice = createSlice({
    name: 'folderTree',
    initialState,
    reducers: {
      fetchFolderTree(state,action:PayloadAction<string>){
        state.list = [];
        state.loaded = false;
        state.loading = true;
        state.errors = [];
      },
      fetchFolderTreeSuccess(state, action: PayloadAction<IFolderTree[]>){
        state.list = action.payload;
        state.errors = [];
        state.loading = false;
        state.loaded = true;
      },
      fetchFolderTreeFailure(state, action: PayloadAction<IError[]>){
        state.list = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchFolderTree = FolderTreeSlice.actions.fetchFolderTree;
export const fetchFolderTreeSuccess = FolderTreeSlice.actions.fetchFolderTreeSuccess;
export const fetchFolderTreeFailure = FolderTreeSlice.actions.fetchFolderTreeFailure;

// Selectors
export const getFolderTree = (state: RootState) => state.folderTree.list;
export const isLoadingFolderTree = (state: RootState) => state.folderTree.loading;
export const isLoadedFolderTree = (state: RootState) => state.folderTree.loaded;

// Reducer
const FolderTreeReducer = FolderTreeSlice.reducer;

export default FolderTreeReducer;