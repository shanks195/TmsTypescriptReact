import { apiDelete, apiGet, apiPut } from "utils/api"
import { IFolderList } from "types/models/TemplateGroupFolder";
import { formatPath } from "utils";
import TemplateGroupFolder from "./path";

export interface ITemplateFolder {
  template_group_id: string;
  folder_id: string;
}

export type IDeleteTemplateFolder = ITemplateFolder;

export interface IUpdateTemplateFolder extends ITemplateFolder {
  data: {
    name: string;
    slug: string;
  }
}

export const getListFolder = (template_group_id:string) => {
  return apiGet<IFolderList[]>(formatPath(TemplateGroupFolder.get,template_group_id));
}

export const deleteTemplateFolderItem = (item:IDeleteTemplateFolder) => {
  return apiDelete(formatPath(TemplateGroupFolder.delete, item.template_group_id, item.folder_id));
}

export const updateTemplateFolderItem = (item: IUpdateTemplateFolder) => {
  return apiPut(formatPath(TemplateGroupFolder.put, item.template_group_id, item.folder_id), item.data);
}