
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError, RootState } from "types";
import { IDepartment, IDepartmentState } from "types/models/Department";

const initialState: IDepartmentState = {
    list: [],
    loading:false,
    loaded:false,
    errors: []
  }

  const DepartmentSlice = createSlice({
    name: 'Department',
    initialState,
    reducers: {
      fetchDepartment(state){
        state.list = [];
        state.loaded = false;
        state.loading = true;
        state.errors = [];
      },
      fetchDepartmentSuccess(state, action: PayloadAction<IDepartment[]>){
        state.list = action.payload;
        state.errors = [];
        state.loading = false;
        state.loaded = true;
      },
      fetchDepartmentFailure(state, action: PayloadAction<IError[]>){
        state.list = [];
        state.loading = false;
        state.loaded = true;
        state.errors = action.payload;
      },
    }
  });

  // Actions
export const fetchDepartment = DepartmentSlice.actions.fetchDepartment;
export const fetchDepartmentSuccess = DepartmentSlice.actions.fetchDepartmentSuccess;
export const fetchDepartmentFailure = DepartmentSlice.actions.fetchDepartmentFailure;

// Selectors
export const getDepartment = (state: RootState) => state.department.list;
export const isLoadingDepartment = (state: RootState) => state.department.loading;
export const isLoadedDepartment = (state: RootState) => state.department.loaded;

// Reducer
const DepartmentReducer = DepartmentSlice.reducer;

export default DepartmentReducer;