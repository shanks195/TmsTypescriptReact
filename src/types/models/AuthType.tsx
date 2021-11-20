import { IError } from "types";

export interface IAuthType {
  id: number;
  name: string;
}

export interface IAuthTypeState{
  list: IAuthType[];
  fetching: boolean;
  fetched: boolean;
  errors: IError[];
}