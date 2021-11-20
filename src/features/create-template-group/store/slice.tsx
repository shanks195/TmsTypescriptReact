
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IBodyTemplate, ICreateTemplateGroupState, IResponse } from 'types/models/TemplateGroup';

const initialState: ICreateTemplateGroupState = {

    loaded:false,
    loading:false,
    response:null,
    errors: []
  }

  const CreateTemplateGroupSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
      createTemplateGroup(state, action: PayloadAction<IBodyTemplate>) {
        state.loading = true;
        state.loaded = false;
        state.response = null;
        state.errors = [];
      },
      createTemplateGroupSuccess(state, action: PayloadAction<IResponse>) {
        state.loading = false;
        state.loaded = true;
        state.response = action.payload;
        state.errors = [];
      },
      createTemplateGroupFailure(state, action: PayloadAction<IError[]>) {
        state.loading = false;
        state.loaded = true;
        state.response = null;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const createTemplateGroup = CreateTemplateGroupSlice.actions.createTemplateGroup;
export const createTemplateGroupSuccess = CreateTemplateGroupSlice.actions.createTemplateGroupSuccess;
export const createTemplateGroupFailure = CreateTemplateGroupSlice.actions.createTemplateGroupFailure;

// Selectors
export const createTemplateGroupRespone = (state: RootState) => state.createTemplateGroup.response;
export const isLoadingCreateTemplateGroup = (state: RootState) => state.createTemplateGroup.loading;
export const isLoadedCreateTemplateGroup = (state: RootState) => state.createTemplateGroup.loaded;
export const errCreateTemplateGroup = (state: RootState) => state.createTemplateGroup.errors;


// Reducer
const CreateTemplateGroupReducer = CreateTemplateGroupSlice.reducer;

export default CreateTemplateGroupReducer;