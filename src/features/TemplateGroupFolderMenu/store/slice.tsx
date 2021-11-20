
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IFolderListMenu, IFolderListMenuState } from 'types/models/TemplateGroupFolderMenu';

const initialState: IFolderListMenuState = {
  list: [],
  loading:false,
  loaded:false,
  response:undefined,
  errors: []
}

const TemplateFolderMenuSlice = createSlice({
  name: 'TemplateGroupFolderMenu',
  initialState,
  reducers: {
    fetchTemplateFolderListMenu(state,action: PayloadAction<string>){
      state.list = [];
      state.loading = true;
      state.loaded = false;
      state.errors = [];
    },
    fetchTemplateFolderListMenuSuccess(state, action: PayloadAction<IFolderListMenu[]>){
      state.list = action.payload;
      state.loading = false;
      state.loaded = true;
      state.errors = [];
    },
    fetchTemplateFolderListMenuFailure(state, action: PayloadAction<IError[]>){
      state.list = [];
      state.loading = false;
      state.loaded = true;
      state.errors = action.payload;
    },
  }
});

  // Actions
export const fetchTemplateFolderListMenu = TemplateFolderMenuSlice.actions.fetchTemplateFolderListMenu;
export const fetchTemplateFolderListMenuSuccess = TemplateFolderMenuSlice.actions.fetchTemplateFolderListMenuSuccess;
export const fetchTemplateFolderListMenuFailure = TemplateFolderMenuSlice.actions.fetchTemplateFolderListMenuFailure;

// Selectors
export const getTemplateFolderListMenu = (state: RootState) => state.templateGroupFolderListMenu.list;
export const isLoadingTemplateFolderListmenu = (state: RootState) => state.templateGroupFolderListMenu.loading;
export const isLoadedTemplateFolderListMenu = (state: RootState) => state.templateGroupFolderListMenu.loaded;

// Reducer
const TemplateFolderMenuReducer = TemplateFolderMenuSlice.reducer;

export default TemplateFolderMenuReducer;