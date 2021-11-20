import { IError } from "../api";

export interface IDataSourceTemplate{
  id: number;
  data_source_api_id: number;
  data_source_api_name: string;
}

export interface IDataSourceTemplateState{
  fetching: boolean,
  fetched: boolean,
  list: IDataSourceTemplate[]
  errors: IError[];
}