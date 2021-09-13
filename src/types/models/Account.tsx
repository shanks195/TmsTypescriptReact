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

export interface IDepartment {
  code: string;
  id: string;
  name: string;
}

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
  user_info: IUser;
  access_token: string;
  global_config: IGlobal;
}

export interface IAccountState {
  isAuth: boolean;
  isInitial: boolean;
  isFetching: boolean;
  user?: IUser;
  errors: IError[];
}
