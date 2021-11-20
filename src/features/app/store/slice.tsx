import { AlertColor } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecordString, RootState } from "types";
import { IAppState, IBackdrop, INotification } from "types/app";

export const appMessage = 
  (message: string, variant?: AlertColor, params: RecordString = {}): INotification => 
  ({ message,variant, params });

const initialState: IAppState = {
  sidebar: {
    show: true
  },
  notification: {
    message: "",
    params: {},
    variant: undefined,
  },
  backdrop: {
    show: false,
    message: "",
    static: true,
  },
  topbar: {
    title: ''
  },
}

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppNotification(state, action: PayloadAction<INotification>){
      state.notification = action.payload;
    },
    openBackdrop(state, action: PayloadAction<Partial<IBackdrop> | undefined>){
      const { message = "", static: isStatic = true } = action.payload || {};
      state.backdrop.message = message;
      state.backdrop.static = isStatic;
      state.backdrop.show = true;
    },
    closeBackdrop(state){
      state.backdrop.message = "";
      state.backdrop.static = true;
      state.backdrop.show = false;
    }, 
    toggleSidebar(state){
      state.sidebar.show = !state.sidebar.show;
    },
    setTitlePage(state, action: PayloadAction<string>){
      state.topbar.title = action.payload;
    }
  }
});

// Actions
export const setAppNotification = AppSlice.actions.setAppNotification;
export const openBackdrop = AppSlice.actions.openBackdrop;
export const closeBackdrop = AppSlice.actions.closeBackdrop;
export const toggleSidebar = AppSlice.actions.toggleSidebar;
export const setTitlePage = AppSlice.actions.setTitlePage;

// Selectors
export const getShowSidebar = (state: RootState) => state.app.sidebar.show;
export const getAppNotification = (state: RootState) => state.app.notification;
export const getBackdropMessage = (state: RootState) => state.app.backdrop.message;
export const getBackdropShow = (state: RootState) => state.app.backdrop.show;
export const getBackdropStatic = (state: RootState) => state.app.backdrop.static;
export const getTitlePage = (state: RootState) => state.app.topbar.title;

// Reducer
const AppReducer = AppSlice.reducer;
export default AppReducer;