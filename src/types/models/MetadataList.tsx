import { IError } from "types";

export interface IMetadataList {
  id: number,
  code: string; // Required - Code of metadata
  name: string; // Required - Name of metadata
  input_type_name: string; // Required - input_type_format_id of metadata
  list_c_system_type:[];
  list_system_type_name: []; // Required - system_type of metadata. In range [1:3] with 1:CRM, 2:LOS, 3:HRM
  number_template:number;
  metadata_group_id: number; // Required - metadata_group_id of metadata
  metadata_group_name: string;
  active_flag: boolean; // Required - active_flag of metadata
  
}

export interface IMetadata  {
  items: IMetadataList [];
  page: number;
  total_page: number;
  total_record: number;
}

export interface IInitPage {
  limit: number;
  order_by: string;
  page: number;
  active_flag?: string;
  list_c_system_type?:string;
  input_type_id?: string;
  name?: string;
}

export interface IMetadataListState {
  list: IMetadata ;
  fetching: boolean;
  fetched: boolean;
  errors: IError[];
  limit: number;
  current_page: number;
  order_by: string;
  detail:IDetailMetadataState;
}
export interface IDetailMetadata {
  id: number ;
  name: string;
  code: string;
  note: string;
  active_flag: boolean;
  output_edit_flag: boolean;
  input_type_format_id: number;
  input_condition_json: {};
  metadata_group_id: number;
}
export interface IDetailMetadataState{
    fetching: boolean;
    fetched: boolean;
    list: IDetailMetadata | undefined;
    errors: IError[];
}

export interface IMetadataGroups{
  id:number,
  name:string,
}

export interface IMetadataGroupsState{
  loading:boolean,
  loaded:boolean,
  list:IMetadataGroups[]
  errors: IError[];
}