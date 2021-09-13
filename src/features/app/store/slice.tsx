import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "types";
import { IAppState } from "types/app";

const initialState: IAppState = {
  sidebar: {
    show: true
  }
}

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {

  }
});

// Actions

// Selectors
export const getShowSidebar = (state: RootState) => state.app.sidebar.show;

// Reducer
const AppReducer = AppSlice.reducer;
export default AppReducer;