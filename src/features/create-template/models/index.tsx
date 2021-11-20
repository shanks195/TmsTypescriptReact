import TemplatePaths from "features/create-template/models/paths";
import { ITemplateCreateBody, ITemplateCreateResponse, ITemplateUpdateResponse } from "types/models/create-template";
import { formatPath } from "utils";
import { apiPost, apiPut } from "utils/api";

export const getCreateTemplate = (data: ITemplateCreateBody) => {

  const form = new FormData();
  form.append("file",data.file );
  form.append("folder_id ", data.folder_id.toString())
  form.append("c_status", data.c_status.toString())
  form.append("code", data.code)
  form.append("name", data.name)
  form.append("identify_number", data.identify_number)
  form.append("block_id", data.block_id.toString())
  form.append("department_id", data.department_id.toString())
  form.append("c_type", data.c_type.toString())
  form.append("khcn_flag ", data.khcn_flag === true ? '1' : '0')
  form.append("khdn_flag ", data.khdn_flag === true ? '1' : '0')
  form.append("dntn_flag ", data.dntn_flag === true ? '1' : '0')
  form.append("scb_flag ", data.scb_flag === true ? '1' : '0')
  form.append("start_date ", data.start_date)
  form.append("end_date  ", data.end_date)
  form.append("template_api ", data.template_api)
  form.append("code", data.code)
  form.append("list_c_system_type", `${data.list_c_system_type}`);

  return apiPost<ITemplateCreateResponse>(TemplatePaths.createTemplate, form);
};
export const getUpdateTemplate = (data: ITemplateCreateBody, id: number) => {
  const form = new FormData();
  form.append("folder_id ", data.folder_id.toString())
  form.append("c_status", data.c_status.toString())
  form.append("code", data.code)
  form.append("name", data.name)
  form.append("identify_number", data.identify_number)
  form.append("block_id", data.block_id.toString())
  form.append("department_id", data.department_id.toString())
  form.append("c_type", data.c_type.toString())
  form.append("khcn_flag ", data.khcn_flag === true ? '1' : '0')
  form.append("khdn_flag ", data.khdn_flag === true ? '1' : '0')
  form.append("dntn_flag ", data.dntn_flag === true ? '1' : '0')
  form.append("scb_flag ", data.scb_flag === true ? '1' : '0')
  form.append("start_date ", data.start_date)
  form.append("end_date  ", data.end_date)
  form.append("template_api ", data.template_api)
  form.append("code", data.code)
  form.append("list_c_system_type", `${data.list_c_system_type}`);

  return apiPut<ITemplateUpdateResponse>(formatPath(TemplatePaths.update_template, id), form);
};