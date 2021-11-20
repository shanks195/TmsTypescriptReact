import { IError } from "../api";


export interface IDataSourceList {
  id: number;
  name: string;
}

export interface IDataSourceListState{
  fetching: boolean,
  fetched: boolean,
  list: IDataSourceList[]
  errors: IError[];
}