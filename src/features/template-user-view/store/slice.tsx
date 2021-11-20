import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IApplyResponse, IDataGroup, IFilterTemplateUserView, IMetadataInfo, ITemplateUserView, ITemplateUserViewState } from "types/models/TemplateUserView";

const initialState: ITemplateUserViewState = {
  data: undefined,
  fetching: false,
  fetched: false,
  errors: [],
  current: {
    preview_file: '',
    active: '',
    isGroup: false,
    label: '',
    data: {} as IMetadataInfo
  },
}
const TemplateUserViewSlice = createSlice({
  name: 'template-user-view',
  initialState,
  reducers: {
    applyTemplateUserView(state, action: PayloadAction<{template_id: string, data: IMetadataInfo}>) {
      
    },
    applyTemplateUserViewSuccess(state, action: PayloadAction<IApplyResponse>) {
      state.current.preview_file = action.payload.file_url;
    },
    fetchTemplateUserView(state, action: PayloadAction<IFilterTemplateUserView>) {
      state.data = undefined;
      state.fetching = true;
      state.fetched = false;
      state.errors = [];
    },
    fetchTemplateUserViewSuccess(state, action: PayloadAction<ITemplateUserView>) {
      state.data = action.payload;
      state.fetching = false;
      state.fetched = true;
      state.errors = [];
      state.current.preview_file = action.payload.preview_file_url;
      // eslint-disable-next-line array-callback-return
      action.payload.template_fields.map(field => {
        state.current.data[field.key] = field.default_data
      })
      // eslint-disable-next-line array-callback-return
      action.payload.groups.map(group => {
        state.current.data[group.items[0].key] = [] as IDataGroup[];
      })
    },
    fetchTemplateUserViewFailure(state, action: PayloadAction<IError[]>) {
      state.data = undefined;
      state.fetching = true;
      state.fetched = false;
      state.errors = action.payload;
    },
    setCurrentTemplateUserView(state, action: PayloadAction<{key: string, value: string, label: string, isGroup: boolean}>) {
      state.current.active = action.payload.key;
      state.current.label = action.payload.label;
      state.current.isGroup = action.payload.isGroup;
      if (!state.current.data[action.payload.key]) {
        state.current.data[action.payload.key] = action.payload.value;
      }
    },
    setCurrentValue(state, action: PayloadAction<string>) {
      const current = state.current.active;
      state.current.data[current] = action.payload;
    }
  }
})

//Actions
export const fetchTemplateUserView = TemplateUserViewSlice.actions.fetchTemplateUserView;
export const fetchTemplateUserViewSuccess = TemplateUserViewSlice.actions.fetchTemplateUserViewSuccess;
export const fetchTemplateUserViewFailure = TemplateUserViewSlice.actions.fetchTemplateUserViewFailure;
export const setCurrentTemplateUserView = TemplateUserViewSlice.actions.setCurrentTemplateUserView;
export const setCurrentValue = TemplateUserViewSlice.actions.setCurrentValue;
export const applyTemplateUserView = TemplateUserViewSlice.actions.applyTemplateUserView;
export const applyTemplateUserViewSuccess = TemplateUserViewSlice.actions.applyTemplateUserViewSuccess;

// Selectors
export const isFetching = (state: RootState) => state.templateUserView.fetching;
export const isFetched = (state: RootState) => state.templateUserView.fetched;
export const getTemplateUserView = (state: RootState) => state.templateUserView.data;
export const getCurrentTemplateUserView = (state: RootState) => state.templateUserView.current;

//reducer
const TemplateUserViewReducer = TemplateUserViewSlice.reducer;
export default TemplateUserViewReducer;