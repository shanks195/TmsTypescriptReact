
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError, RootState } from "types";
import { IFolderList, IFolderListState } from 'types/models/TemplateGroupFolder';
import { IDeleteTemplateFolder, IUpdateTemplateFolder } from '../models';

const initialState: IFolderListState = {
    list: [],
    loading: false,
    loaded: false,
    response: undefined,
    template_group_id:undefined,
    errors: []
  }

  const TemplateFolderSlice = createSlice({
    name: 'TemplateGroupFolder',
    initialState,
    reducers: {
      fetchTemplateFolderList(state,action: PayloadAction<string>){
        state.list = [];
        state.loading = true;
        state.loaded = false;
        state.errors = [];
        state.template_group_id = action.payload
      },

      fetchTemplateFolderListSuccess(state, action: PayloadAction<IFolderList[]>){
        state.list = action.payload;
        state.loading = false;
        state.loaded = true;
        state.errors = [];
      },

      fetchTemplateFolderListFailure(state, action: PayloadAction<IError[]>){
        state.list = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },

      deleteTemplateFolderList(state, action: PayloadAction<IDeleteTemplateFolder>){
      },

      updateTemplateFolderList(state, action: PayloadAction<IUpdateTemplateFolder>) {
      }
    }
  });

// Actions
export const fetchTemplateFolderList = TemplateFolderSlice.actions.fetchTemplateFolderList;
export const fetchTemplateFolderListSuccess = TemplateFolderSlice.actions.fetchTemplateFolderListSuccess;
export const fetchTemplateFolderListFailure = TemplateFolderSlice.actions.fetchTemplateFolderListFailure;
export const deleteTemplateFolderList = TemplateFolderSlice.actions.deleteTemplateFolderList;
export const updateTemplateFolderList = TemplateFolderSlice.actions.updateTemplateFolderList;

// Selectors
export const getTemplateFolderList = (state: RootState) => state.templateGroupFolderList.list;
export const isLoadingTemplateFolderList = (state: RootState) => state.templateGroupFolderList.loading;
export const isLoadedTemplateFolderList = (state: RootState) => state.templateGroupFolderList.loaded;
export const getTemplateGroupId = (state:RootState) => state.templateGroupFolderList.template_group_id;

// Reducer
const TemplateFolderReducer = TemplateFolderSlice.reducer;

export default TemplateFolderReducer;