
import { IInitPageGroup, ITemplatedata,IDetailTemplateGroup } from "types/models/Templatedata";
import { apiDelete, apiGet } from "utils/api"
import { formatPath, getQueryString } from "utils";
import TemplatedataPaths from "./paths";

export const getTemplatedata = (query: IInitPageGroup) => {
  const queryParams = getQueryString(query as unknown as Record<string, string | number | null | undefined>);
  return apiGet<ITemplatedata[]>(formatPath(TemplatedataPaths.Templatedata.get, queryParams));
}
export const getDetailTemplateGroup = (id:string) => {
  return apiGet<IDetailTemplateGroup>(formatPath(TemplatedataPaths.Templatedata.detail,id));
}

export const deleteTemplatedata = (template_group_id:string) => {
  return apiDelete(formatPath(TemplatedataPaths.Templatedata.delete,template_group_id));
}
