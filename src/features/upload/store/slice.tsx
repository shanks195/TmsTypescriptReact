import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFileBlob, IUploadState } from "types/models/Upload";

const initialState: IUploadState = {
  uploading: false,
  uploaded: false
};

const UploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    uploadFile(state, action: PayloadAction<IFileBlob>) {}
  }
});

// Actions
export const uploadFile = UploadSlice.actions.uploadFile;

// Selectors

// Reducer
const UploadReducer = UploadSlice.reducer;
export default UploadReducer;
