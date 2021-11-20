
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IFolderTemplateList, IFolderTemplateListState } from "types/models/FolderTemplateList";

const initialState: IFolderTemplateListState = {
    list: [],
    loading:false,
    loaded:false,
    errors: []
  }

  const FolderTemplateListSlice = createSlice({
    name: 'FolderTemplateList',
    initialState,
    reducers: {
      fetchFolderTemplateList(state,action:PayloadAction<string>){
        state.list = [];
        state.loaded = false;
        state.loading = true;
        state.errors = [];
      },
      fetchFolderTemplateListSuccess(state, action: PayloadAction<IFolderTemplateList[]>){
        state.list = action.payload;
        state.errors = [];
        state.loading = false;
        state.loaded = true;
      },
      fetchFolderTemplateListFailure(state, action: PayloadAction<IError[]>){
        state.list = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchFolderTemplateList = FolderTemplateListSlice.actions.fetchFolderTemplateList;
export const fetchFolderTemplateListSuccess = FolderTemplateListSlice.actions.fetchFolderTemplateListSuccess;
export const fetchFolderTemplateListFailure = FolderTemplateListSlice.actions.fetchFolderTemplateListFailure;

// Selectors
export const getFolderTemplateList = (state: RootState) => state.FolderTemplateList.list;
export const isLoadingFolderTemplateList = (state: RootState) => state.FolderTemplateList.loading;
export const isLoadedFolderTemplateList = (state: RootState) => state.FolderTemplateList.loaded;

// Reducer
const FolderTemplateListReducer = FolderTemplateListSlice.reducer;

export default FolderTemplateListReducer;