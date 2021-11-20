import { call, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IApiPaging } from "types";
import { ILoanDocument } from "types/models/Document";
import { ON_FETCH_ERROR } from "utils/constants";
import { getNormalLoans } from "../models";
import { fetchDashboardLoans, fetchDashboardLoansFailure, fetchDashboardLoansSuccess } from "./slice";

function* handleFetchDashboardLoans(action: PayloadAction<number>){
  try{
    const res: IApiPaging<ILoanDocument[]> = yield call(getNormalLoans);

    if (res.success){
      yield put(fetchDashboardLoansSuccess({
        data: res.data as ILoanDocument[],
        current_page: action.payload,
        total_items: res.total_items,
        total_page: res.total_page
      }));
    }
    else{
      yield put(fetchDashboardLoansFailure(res.errors));
    }
  }
  catch(e){
    yield put(fetchDashboardLoansFailure(ON_FETCH_ERROR));
  }
}

export default function* dashboardSaga(){
  yield takeEvery(fetchDashboardLoans.type, handleFetchDashboardLoans);
}