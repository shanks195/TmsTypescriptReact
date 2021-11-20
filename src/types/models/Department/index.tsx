import { IError } from "types";

export interface IIdName{
  id: number;
  name: string;

}

export interface IDepartment{
  id: number;
  name: string;
 
}

export interface IDepartmentState{
  loading: boolean;
  loaded: boolean;
  list: IDepartment[];
  errors: IError[];
}