import { IError } from "types";

export interface IMethodType {
  id: number;
  name: string;
}

export interface IMethodsState{
  list: IMethodType[];
  fetching: boolean;
  fetched: boolean;
  errors: IError[];
}