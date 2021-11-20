import { IInputType, IInputTypeState } from "types/models/InputTypes";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";

const initialState: IInputTypeState = {
    types: [],
    loading:false,
    loaded:false,
    errors: []
  }

  const InputTypesSlice = createSlice({
    name: 'inputTypes',
    initialState,
    reducers: {
      fetchTypes(state){
        state.types = [];
        state.loaded = false;
        state.loading = true;
        state.errors = [];
      },
      fetchTypesSuccess(state, action: PayloadAction<IInputType[]>){
        state.types = action.payload;
        state.errors = [];
        state.loading = false;
        state.loaded = true;
      },
      fetchTypesFailure(state, action: PayloadAction<IError[]>){
        state.types = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchTypes = InputTypesSlice.actions.fetchTypes;
export const fetchTypesSuccess = InputTypesSlice.actions.fetchTypesSuccess;
export const fetchTypesFailure = InputTypesSlice.actions.fetchTypesFailure;

// Selectors
export const getTypes = (state: RootState) => state.inputTypes.types;
export const isLoadingTypes = (state: RootState) => state.inputTypes.loading;
export const isLoadedTypes = (state: RootState) => state.inputTypes.loaded;

// Reducer
const InputTypesReducer = InputTypesSlice.reducer;

export default InputTypesReducer;