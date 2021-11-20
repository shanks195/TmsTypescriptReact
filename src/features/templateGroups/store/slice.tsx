import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { IListSideBar, ITemplateGroupsState } from "types/models/templateGroups";


const initialState: ITemplateGroupsState = {
  sideBars: [],
  loadingSideBar: false,
  loadedSideBar: false,
  errors: []
}

const TemplateGroupsSlice = createSlice({
  name: 'template_groups',
  initialState,
  reducers: {
    fetchSideBars(state){
      state.sideBars = [];
      state.loadedSideBar = false;
      state.loadingSideBar = true;
      state.errors = [];
    },
    fetchSideBarsSuccess(state, action: PayloadAction<IListSideBar[]>){
      state.sideBars = action.payload;
      state.loadedSideBar = true;
      state.loadingSideBar = false;
      state.errors = [];
    },
    fetchSideBarsFailure(state, action: PayloadAction<IError[]>){
      state.loadedSideBar = true;
      state.loadingSideBar = false;
      state.errors = action.payload;
    },
  }
});

// Actions
export const fetchLeftSideBars = TemplateGroupsSlice.actions.fetchSideBars;
export const fetchLeftSideBarsSuccess = TemplateGroupsSlice.actions.fetchSideBarsSuccess;
export const fetchLeftSideBarsFailure = TemplateGroupsSlice.actions.fetchSideBarsFailure;


export const getLeftSideBars = (state: RootState) => state.templateGroups.sideBars;
export const isLoadingLeftSideBars = (state: RootState) => state.templateGroups.loadingSideBar;
export const isLoadedLeftSideBars = (state: RootState) => state.templateGroups.loadedSideBar;

// Reducer
const TemplateGroupsReducer = TemplateGroupsSlice.reducer;
export default TemplateGroupsReducer;