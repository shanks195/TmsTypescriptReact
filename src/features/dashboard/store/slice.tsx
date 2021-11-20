import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, IListData, IPaginationResponse, RootState } from "types";
import { IDashboardState } from "types/models/Dashboard";
import { ILoanDocument } from "types/models/Document";

const initialState: IDashboardState = {
  loans: {
    list: [],
    fetching: false,
    limit: 10,
    current_page: 0,
    total_items: 0,
    total_page: 0
  },
  errors: []
}

const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardLoansCurrentPage(state, action: PayloadAction<number>){
      state.loans.current_page = action.payload;
    },
    fetchDashboardLoans(state, action: PayloadAction<number>){
      state.loans.fetching = true;
      state.loans.list = [];
    },
    fetchDashboardLoansSuccess(state, action: PayloadAction<IListData<ILoanDocument> & IPaginationResponse>){
      state.loans.list = action.payload.data;
      state.loans.total_page = action.payload.total_page;
      state.loans.total_items = action.payload.total_items;
      state.loans.fetching = false;
    },
    fetchDashboardLoansFailure(state, action: PayloadAction<IError[]>){
      state.errors = action.payload;
      state.loans.fetching = false;
    }
  }
});

// Actions
export const setDashboardLoansCurrentPage = DashboardSlice.actions.setDashboardLoansCurrentPage;
export const fetchDashboardLoans = DashboardSlice.actions.fetchDashboardLoans;
export const fetchDashboardLoansSuccess = DashboardSlice.actions.fetchDashboardLoansSuccess;
export const fetchDashboardLoansFailure = DashboardSlice.actions.fetchDashboardLoansFailure;

// Selectors
export const getDashboardLoans = (state: RootState) => state.dashboard.loans.list;
export const getDashboardLoansCurrentPage = (state: RootState) => state.dashboard.loans.current_page;
export const getDashboardLoansTotalPage = (state: RootState) => state.dashboard.loans.total_page;
export const getDashboardLoansLimit = (state: RootState) => state.dashboard.loans.limit;
export const isLoadingDashboardLoans = (state: RootState) => state.dashboard.loans.fetching;

// Reducer
const DashboardReducer = DashboardSlice.reducer;
export default DashboardReducer;