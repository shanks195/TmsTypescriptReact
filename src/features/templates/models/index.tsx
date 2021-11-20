
import { apiDelete, apiGet, apiPost } from "utils/api"
import { ITemplates,  IUpdateTemplatesResponse, ITemplateCreateResponse, ITemplateCreate } from "types/models/Templates";
import TemplatePaths from "./paths";
import {  IInitPage } from "types/models/Templates";
import { formatPath, getQueryString } from 'utils';


export const getTemplatesList = (query: IInitPage) => {
  const queryParams = getQueryString(query as unknown as Record<string, string | number | null | undefined>);
  return apiGet<ITemplates[]>(formatPath(TemplatePaths.getTemplatesList, queryParams));
}

export const createTemplate = (data: ITemplateCreate) => {
  return apiPost<ITemplateCreateResponse>(TemplatePaths.createTemplate, data);
}

export const updateTemplate=(data:ITemplateCreate,id:number)=>{
  return apiPost<IUpdateTemplatesResponse>(formatPath(TemplatePaths.updateTemplate));
}

export const deleteTemplate = (template_id:string) => {
  return apiDelete(formatPath(TemplatePaths.deleteTemplate,template_id));
}