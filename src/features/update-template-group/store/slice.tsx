
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import {  ICreateTemplateGroupState, IResponse } from 'types/models/TemplateGroup';
import { IUpdatePayload } from '../models';

const initialState: ICreateTemplateGroupState = {
  loaded: false,
  loading: false,
  response: null,
  errors: [],
};

  const UpdateTemplateGroupSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
      fetchUpdateTemplateGroup(state, action: PayloadAction<IUpdatePayload>) {
        state.loading = true;
        state.loaded = false;
        state.response = null;
        state.errors = [];
      },
      updateTemplateGroupSuccess(state, action: PayloadAction<IResponse>) {
        state.loading = false;
        state.loaded = true;
        state.response = action.payload;
        state.errors = [];
      },
      updateTemplateGroupFailure(state, action: PayloadAction<IError[]>) {

        state.loading = false;
        state.loaded = true;
        state.response = null;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchUpdateTemplateGroup = UpdateTemplateGroupSlice.actions.fetchUpdateTemplateGroup;
export const updateTemplateGroupSuccess = UpdateTemplateGroupSlice.actions.updateTemplateGroupSuccess;
export const updateTemplateGroupFailure = UpdateTemplateGroupSlice.actions.updateTemplateGroupFailure;

// Selectors
export const updateTemplateGroupRespone = (state: RootState) => state.updateTemplateGroup.response;
export const isLoadingUpdateTemplateGroup = (state: RootState) => state.updateTemplateGroup.loading;
export const isLoadedCreateTemplateGroup = (state: RootState) => state.createTemplateGroup.loaded;

// Reducer
const UpdateTemplateGroupReducer = UpdateTemplateGroupSlice.reducer;

export default UpdateTemplateGroupReducer;