import { IError } from "types";
export interface ITemplateCreatePayload{
  data:ITemplateCreateBody
  id: number
}
export interface ITemplateCreateBody extends IFileBlob {
  folder_id: number,
  c_status: number,
  code: string,
  name: string,
  identify_number: string,
  block_id: number,
  department_id: number,
  c_type: number,
  khcn_flag : boolean,
  khdn_flag: boolean,
  dntn_flag: boolean,
  scb_flag: boolean,
  start_date: string,
  end_date: string,
  template_api: string,
  list_c_system_type: [],
  file: File,
  template_id?: number
}

export interface IFileBlob {
  blob: string;
  type: string;
  name: string;
}
export interface ITemplateCreateResponse{
  id: number;
  name: string;
  created_by: string;
}

export interface ITemplateUpdateResponse{
  id: number;
  name: string;
  update_by: string;
}
export interface IResponseCreateState {
  loading:boolean,
  loaded:boolean,
  data:ITemplateCreateResponse | null
}

export interface ITemplateCreateState {
  response: IResponseCreateState;
  errors: IError[];
}
