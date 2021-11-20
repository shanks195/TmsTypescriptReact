import { IError } from "types";

export interface IDataGroupList {
  id: number,
  code: string; // Required - Code of metadata
  name: string; // Required - Name of metadata
  slug: string; // Required - input_type_format_id of metadata
  active_flag: boolean; // Required - active_flag of metadata
  parent_id: number; // Required - metadata_group_id of metadata
  parent_name: string;
}

export interface ITemplatedata  {
  items: IDataGroupList[];
  page: number;
  total_page: number;
  total_record: number;
}

export interface IInitPageGroup {
  limit: number;
  order_by: string;
  active_flag?: string;
  page: number;
  parent_id?: string;
  name?: string;
  code?: string;
}

export interface ITemplatedataState {
  list: ITemplatedata ;
  fetching: boolean;
  fetched: boolean;
  errors: IError[];
  limit: number;
  current_page: number;
  total_page: number;
  order_by: string;
  detail:IDetailTemplateGroupState
}
export interface IDetailTemplateGroupState{
  fetching: boolean;
  fetched: boolean;
  list: IDetailTemplateGroup | undefined;
  errors: IError[];
}

export interface IDetailTemplateGroup {
  id: number;
  code: string;
  parent_id: number | null;
  name: string;
  slug: string;
  active_flag: boolean;
}