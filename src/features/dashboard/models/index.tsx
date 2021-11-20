import { ILoanDocument } from "types/models/Document"
import { apiGet } from "utils/api"
import DashboardPaths from "./paths"

export const getNormalLoans = () => {
  return apiGet<ILoanDocument[]>(DashboardPaths.Loans.Normal);
}