import { IPaginationResponse, IError } from "../api";
import { ILoanDocument } from "./Document";

export interface IDashboardLoans extends IPaginationResponse{
  list: ILoanDocument[];
  fetching: boolean;
  limit: number;
}

export interface IDashboardState{
  loans: IDashboardLoans;
  errors: IError[];
}