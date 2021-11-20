import { IError } from "types";

export interface ITemplateFieldLogs {
  id: number;
  content: string;
  created_by: string;
  created_at: string;
  updated_by: string;
  updated_at: string;
}

export interface ITemplateFields {
  id: number;
  key: string;
  label: string;
  default_data: string;
  input_type_format_id: number | null;
  require_flag: boolean;
  output_flag: boolean;
  template_data_source_api_id: number | null;
  output_result_key: string | null;
  template_field_logs: ITemplateFieldLogs[];
}

export interface ITemplateGroups {
  id: number | null;
  name: string;
  items: ITemplateFields[];
  template_field_group_logs: ITemplateFieldLogs[];
}

export interface ITemplateField{
  review_file_url: string;
  template_fields: ITemplateFields[];
  groups: ITemplateGroups[];
}

export interface ITemplateFieldsState{
  loading: boolean;
  loaded: boolean;
  data: ITemplateField;
  errors: IError[];
  current_template_id: number;
}