import { ITemplateField, ITemplateFieldLogs, ITemplateFields, ITemplateGroups } from "types/models/TemplateFields";


export const JsonTemplateFieldLogs: ITemplateFieldLogs = {
  id: 0,
  content: "",
  created_by: "",
  created_at: "",
  updated_by: "",
  updated_at: "",
}

export const JsonTemplateFields: ITemplateFields = {
  id: 0,
  key: "",
  label: "",
  default_data: "",
  input_type_format_id: null,
  require_flag: false,
  output_flag: false,
  template_data_source_api_id: null,
  output_result_key: null,
  template_field_logs: [],
}

export const JsonTemplateGroups: ITemplateGroups = {
  id: null,
  name: "",
  items: [],
  template_field_group_logs: []
}

export const JsonTemplateField: ITemplateField = {
  review_file_url: "",
  template_fields: [],
  groups: []
}