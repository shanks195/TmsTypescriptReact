import { IError } from "types";

export interface IIdName{
  id: number;
  name: string;
}

export interface IFolderTree{
  id: number;
  name: string;
  child:IFolderTree[]
}

export interface IFolderTreeState{
  loading: boolean;
  loaded: boolean;
  list: IFolderTree[];
  errors: IError[];
}