import { IError } from "types";

export interface IIdName{
  id: number;
  name: string;
}

export interface IStatusTree{
  id: number;
  name: string;
  child:IStatusTree[]
}

export interface IStatusTreeState{
  loading: boolean;
  loaded: boolean;
  list: IStatusTree[];
  errors: IError[];
}