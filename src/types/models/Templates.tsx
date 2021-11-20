import { IError, IPostRequest } from "types";
import { IFormGeneralInfoData } from "views/pages/V2/Operate/OperateForm/GeneralInfo";
import { IResponseState } from "./create-metadata";
export interface ITemplateOperateList {
  id: number;
  name: string;
  version: number;
  start_date: string;
  updated_by: string;
  updated_at: string;
  c_status: true;
  list_system_type_name: [];
}
export interface ITemplateOperate {
  items: ITemplateOperateList[];
  page: number;
  total_page: number;
  total_record: number;
  start_date: string;
  end_date: string;
}

export interface IInitPage {
  folder_id: number;
  limit: number;
  sort: number;
  page: number;
  name?: string;
  start_date?: string;
  end_date?: string;
}
export interface ITemplateOperateListState {
  list: ITemplateOperate;
  fetching: boolean;
  fetched: boolean;
  errors: IError[];
  filters: IFilter;
  detail:IDetaiTemplateOperateState;
  current_template_id?: number;
}

export interface IFilter {
  limit: number;
  name: string;
  current_page: number;
  sort: number;
  start_date: string;
  end_date: string;
}

export interface IDetailTemplateOperate {
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
export interface IDetaiTemplateOperateState{
  fetching: boolean;
  fetched: boolean;
  list: IDetailTemplateOperate | undefined;
  errors: IError[];
}
export interface ITemplateItems {
    id: number;
    name: string;
    version: number;
    start_date: string;
    updated_by: string;
    updated_at: string;
    c_status: boolean;
    list_system_type_name: string[];
  }
export interface ITemplates {
  items: ITemplateItems[];
  total_page: number;
  total_record: number;
  page: number;
  start_date: string;
  end_date: string;
}
export interface IUpdateTemplates{
    folder_id: number                   // Required
    c_status: number                    // Required
    code: number                        // Required
    name: string                        // Required
    identify_number: string             // Required
    block_id: number                    // Required
    department_id: number               // Required
    c_type: number                      // Required
    khcn_flag: number                   // Required
    khdn_flag: boolean,                 // Required
    dntn_flag: boolean,                 // Required
    scb_flag: boolean,                  // Required
    start_date:string,                  // Required
    end_date: string,                   // Required
    template_api: string,               // Required
    list_c_system_type: Array<string>,  // Required
}
export interface IUpdateTemplatesParams{
  template_id:string|number,
  body:IFormGeneralInfoData
}
export interface IUpdateTemplatesResponse{
    id: number|null,
    name: string|null,
    created_by: string|null
}
export interface IListState{
    loading:boolean,
    loaded:boolean,
    list:ITemplates|null
}
export interface IListResponseState{
  loading:boolean,
  loaded:boolean,
  response:IUpdateTemplatesResponse |undefined
}
export interface ITemplatesState{
    template:IListState;
    post: IPostRequest;
    updateResponse:IListResponseState;
    errors: IError[];
}

export interface ITemplateCreate {
  folder_id: number;
  c_status: number;
  code: string | null;
  name : string;
  identify_number : string;
  block_id : number;
  department_id : number;
  c_type : number;
  khcn_flag : boolean;
  khdn_flag : boolean;
  dntn_flag : boolean;
  scb_flag : boolean;
  start_date : string;
  end_date : string;
  template_api : string;
  list_c_system_type: number[];
  file: string;
  template_id?: number;
}

export interface ITemplateCreateResponse {
  id: number;
  name: string;
  created_by: string;
}

export interface ITemplateDetails {
  folder_id: number;
  c_status: number;
  code: string;
  name: string;
  identify_number: string;
  block_id: number;
  department_id: number;
  c_type: number;
  khcn_flag: boolean;
  khdn_flag: boolean;
  dntn_flag: boolean;
  scb_flag: boolean;
  start_date: string;
  end_date: string;
  template_api: string;
  list_c_system_type: number[];
  version: number;
  file_name: string;
  file_url: string;
}
export interface ITemplateDetailsState{
  fetching: boolean;
  fetched: boolean;
  data: ITemplateDetails | undefined;
  errors: IError[];
}