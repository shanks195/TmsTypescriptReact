import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { ITemplateDetails, ITemplateDetailsState } from "types/models/Templates";


const initialState: ITemplateDetailsState = {
  fetching: false,
  fetched: false,
  data: undefined,
  errors: []
}

const TemplateDetailsSlice = createSlice({
  name: 'template-details',
  initialState,
  reducers: {

    fetchTemplateDetails(state, action: PayloadAction<string>) {
      state.data = undefined;
      state.fetching = true;
      state.fetched = false;
      state.errors = [];
    },
    fetchTemplateDetailsSuccess(state, action: PayloadAction<ITemplateDetails>) {
      state.data = action.payload;
      state.fetching = false;
      state.fetched = true;
      state.errors = [];
    },
    fetchTemplateDetailsFailure(state, action: PayloadAction<IError[]>) {
      state.data = undefined;
      state.fetching = true;
      state.fetched = false;
      state.errors = [];
    },
    clearDetail(state){
      state.data=undefined
    }
  }
});

// Actions
export const fetchTemplateDetails = TemplateDetailsSlice.actions.fetchTemplateDetails;
export const fetchTemplateDetailsSuccess = TemplateDetailsSlice.actions.fetchTemplateDetailsSuccess;
export const fetchTemplateDetailsFailure = TemplateDetailsSlice.actions.fetchTemplateDetailsFailure;
export const clearDetail = TemplateDetailsSlice.actions.clearDetail;


// Selectors
export const isFetchingTemplateDetails = (state: RootState) => state.templateDetails.fetching;
export const isFetchedTemplateDetails = (state: RootState) => state.templateDetails.fetched;
export const getTemplateDetails = (state: RootState) => state.templateDetails.data;

// DETAIL

// Reducer
const TemplateDetailsReducer = TemplateDetailsSlice.reducer;
export default TemplateDetailsReducer;