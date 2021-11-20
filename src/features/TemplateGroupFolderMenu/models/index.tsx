import { apiGet } from "utils/api"
import { formatPath } from "utils";
import TemplateGroupFolderMenu from "./path";
import { IFolderList } from "types/models/TemplateGroupFolder";

export interface IDeleteTemplateFolder{
  template_group_id:string;
  folder_id:string
}

export const getListFolderMenu = (template_group_id:string) => {
  return apiGet<IFolderList[]>(formatPath(TemplateGroupFolderMenu.get, template_group_id));
}