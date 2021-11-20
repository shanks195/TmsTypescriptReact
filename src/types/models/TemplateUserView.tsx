
import { IError } from "types/api";

export interface ILog {
  id: number;
  content: string;
  user_id: string;
  user_avatar_url: string;
  user_fullname: string;
  created_at: string;
  updated_at: string;
}

export interface IDateLog {
  date: string;
  logs: ILog[];
}

export interface ITemplateField {
  id: number;
  label: string;
  key: string;
  output_flag: boolean;
  output_edit_flag: boolean;
  input_type_format_id: number;
  default_data: string;
  date_logs: IDateLog[];
}


export interface IDateGroupLog {
  date: string;
  logs: ILog[];
}


export interface Item {
  id: number;
  label: string;
  key: string;
  output_flag: boolean;
  output_edit_flag: boolean;
  input_type_format_id: number;
  default_data: string;
  date_logs: IDateLog[];
}

export interface IGroup {
  id: number;
  group_name: string;
  date_group_logs: IDateGroupLog[];
  items: Item[];
}

export interface ITemplateUserView {
  data_source_input_params: string[];
  preview_file_url: string;
  template_fields: ITemplateField[];
  groups: IGroup[];
}

export interface ITemplateUserViewState {
  fetching: boolean;
  fetched: boolean;
  data: ITemplateUserView | undefined;
  errors: IError[];
  current: ICurrentValue;
}

export interface ICurrentValue {
  preview_file: string;
  active: string;
  isGroup: boolean;
  label: string;
  data: IMetadataInfo;
}

export interface IMetadataInfo {
  [key: string]: any | string | IDataGroup[];
}

export interface IDataGroup {
  [key: string]: any | string;
}

export interface IApplyResponse {
  file_url: string;
  created_at: string;
  preview_file_html: string;
}

export interface IFilterTemplateUserView {
  template_id: string;
  search_label_text?: string;
}
