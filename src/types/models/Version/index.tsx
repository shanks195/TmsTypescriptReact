import { IError } from "types";

export interface IIdName{
  id: number;
  name: string;
  code: string;
  version: number;
  start_date: string;
  end_date: string;
  updated_by: string;

}

export interface IVersion{
  id: number;
  name: string;
  code: string;
  version: number;
  start_date: string;
  end_date: string;
  updated_by: string;
  child:IVersion[]
}

export interface IVersionState{
  loading: boolean;
  loaded: boolean;
  list: IVersion[];
  errors: IError[];
}