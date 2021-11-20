import { ICodeName } from "../base";
import { IError } from "../api";

export interface IGlobal {
  countries: string;
}

export interface IBranch {
  branch_address: string;
  branch_code: string;
  branch_name: string;
  branch_parent_code: string;
  branch_phone: string;
  branch_region_code: string;
  branch_region_name: string;
  branch_status: string;
  branch_tax_code: string;
}

export interface IDepartment extends ICodeName{}

export interface IUser {
  avatar: string;
  branch: IBranch;
  department: IDepartment;
  user_id: string;
  user_name: string;
  full_name: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginForm extends ILogin {
  remember: boolean;
}

export interface ILoginResponse {
  user_id: string;
  name: string;
  token: string;
}

export interface IAccountState {
  isAuth: boolean;
  isInitial: boolean;
  isFetching: boolean;
  isFetched: boolean;
  user?: IUser;
  errors: IError[];
}
