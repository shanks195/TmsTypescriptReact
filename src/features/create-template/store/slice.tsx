
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { ITemplateCreateBody, ITemplateCreatePayload, ITemplateCreateResponse, ITemplateCreateState, ITemplateUpdateResponse } from 'types/models/create-template';


const initialState: ITemplateCreateState = {
    response:{
        loaded:false,
        loading:false,
        data:null
    },
    errors: []
  }

  const TemplateCreateSlice = createSlice({
    name: 'create-TemplateCreate',
    initialState,
    reducers: {
      createTemplate(state, action: PayloadAction<ITemplateCreateBody>) {
        state.response.loading = true;
        state.response.loaded = false;
        state.response.data = null;
        state.errors = [];
      },
     
      createTemplateSuccess(state, action: PayloadAction<ITemplateCreateResponse>) {
        state.response.loading = false;
        state.response.loaded = true;
        state.response.data = action.payload;
        state.errors = [];
      },
      createTemplateFailure(state, action: PayloadAction<IError[]>) {

        state.response.loading = false;
        state.response.loaded = true;
        state.response.data = null;
        state.errors = action.payload;
      },
      UpdateTemplate(state, action: PayloadAction<ITemplateCreatePayload>) {
        state.response.loading = true;
        state.response.loaded = false;
        state.response.data = null;
        state.errors = [];
      },
      updateTemplateSuccess(state, action: PayloadAction<ITemplateUpdateResponse>) {
        state.response.loading = false;
        state.response.loaded = true;
        state.errors = [];
      },
      updateTemplateFailure(state, action: PayloadAction<IError[]>) {
        state.response.loading = false;
        state.response.loaded = true;
        state.response.data = null;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const createTemplate = TemplateCreateSlice.actions.createTemplate;

export const createTemplateSuccess = TemplateCreateSlice.actions.createTemplateSuccess;
export const createTemplateFailure = TemplateCreateSlice.actions.createTemplateFailure;
export const UpdateTemplate = TemplateCreateSlice.actions.UpdateTemplate;
export const updateTemplateSuccess = TemplateCreateSlice.actions.updateTemplateSuccess;
export const updateTemplateFailure = TemplateCreateSlice.actions.updateTemplateFailure;
// Selectors
export const createTemplateResponse = (state: RootState) => state.createTemplate.response.data;
export const isLoadingCreateTemplate = (state: RootState) => state.createTemplate.response.loading;
export const isLoadedCreateTemplate = (state: RootState) => state.createTemplate.response.loaded;

// Reducer
const TemplateCreateReducer = TemplateCreateSlice.reducer;

export default TemplateCreateReducer;