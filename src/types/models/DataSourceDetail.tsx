import { IError } from "../api";

export interface IDataSourceDetailState{
  fetching: boolean,
  fetched: boolean,
  data: IDataSourceDetail
  errors: IError[];
}

export interface IDataSourceDetail {
  id: number;
  name: string;
  c_method_type: number;
  url: string;
  c_auth_type: number;
  auth_json: IAuthJson;
  header_list: IHeaderList[];
  body_json: IBodyJson
}

export interface IAuthJson{
  token: string;
}

export interface IHeaderList{
  key: string;
  value: string;
  description: string;
}

export interface IBodyJson{
  customer_id: number
}

export interface IDataSourceDetailAssignState{
  loading: boolean;
  loaded: boolean;
  response: IDataSourceDetailAssignReponse | null
  errors: IError[];
}

export interface IDataSourceDetailAssign{
  template_id: number;
  data_source_api_id: number;
}
export interface IDataSourceDetailAssignReponse{
  id: number;
  name: string;
  template_id: string;
  created_by: string;
  updated_by: string;
}