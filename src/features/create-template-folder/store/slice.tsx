
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IResponse } from 'types/models/TemplateGroup';
import { ICreateTemplateFolderState, IPayloadCreateFolder } from 'types/models/TemplateGroupFolder';

const initialState: ICreateTemplateFolderState = {

    loaded:false,
    loading:false,
    response:null,
    errors: []
  }

  const CreateTemplateFolderSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
      creatTemplateFolder(state, action: PayloadAction<IPayloadCreateFolder>) {
        state.loading = true;
        state.loaded = false;
        state.response = null;
        state.errors = [];
      },
      createTemplateFolderSuccess(state, action: PayloadAction<IResponse>) {
        state.loading = false;
        state.loaded = true;
        state.response = action.payload;
        state.errors = [];
      },
      createTemplateFolderFailure(state, action: PayloadAction<IError[]>) {
        state.loading = false;
        state.loaded = true;
        state.response = null;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const createTemplateFolder = CreateTemplateFolderSlice.actions.creatTemplateFolder;
export const createTemplateFolderSuccess = CreateTemplateFolderSlice.actions.createTemplateFolderSuccess;
export const createTemplateFolderFailure = CreateTemplateFolderSlice.actions.createTemplateFolderFailure;

// Selectors
export const createTemplateFolderRespone = (state: RootState) => state.createTemplateGroupFolder.response;
export const isLoadingCreateTemplateFolder = (state: RootState) => state.createTemplateGroupFolder.loading;
export const isLoadedCreateTemplateFolder = (state: RootState) => state.createTemplateGroupFolder.loaded;
export const errCreateTemplateFolder = (state: RootState) => state.createTemplateGroupFolder.errors;


// Reducer
const CreateTemplateFolderReducer = CreateTemplateFolderSlice.reducer;

export default CreateTemplateFolderReducer;