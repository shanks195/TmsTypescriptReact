
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { ITemplateType, ITemplateTypeState } from "types/models/templateType";

const initialState: ITemplateTypeState = {
    list: [],
    loading:false,
    loaded:false,
    errors: []
  }

  const TemplateTypeSlice = createSlice({
    name: 'TemplateType',
    initialState,
    reducers: {
      fetchTemplateType(state){
        state.list = [];
        state.loaded = false;
        state.loading = true;
        state.errors = [];
      },
      fetchTemplateTypeSuccess(state, action: PayloadAction<ITemplateType[]>){
        state.list = action.payload;
        state.errors = [];
        state.loading = false;
        state.loaded = true;
      },
      fetchTemplateTypeFailure(state, action: PayloadAction<IError[]>){
        state.list = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchTemplateType = TemplateTypeSlice.actions.fetchTemplateType;
export const fetchTemplateTypeSuccess = TemplateTypeSlice.actions.fetchTemplateTypeSuccess;
export const fetchTemplateTypeFailure = TemplateTypeSlice.actions.fetchTemplateTypeFailure;

// Selectors
export const getTemplateType = (state: RootState) => state.templateType.list;
export const isLoadingTemplateType = (state: RootState) => state.templateType.loading;
export const isLoadedTemplateType = (state: RootState) => state.templateType.loaded;

// Reducer
const TemplateTypeReducer = TemplateTypeSlice.reducer;

export default TemplateTypeReducer;