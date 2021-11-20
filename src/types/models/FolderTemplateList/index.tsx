import { IError } from "types";

export interface IIdName{
  id: number;
  name: string;
}
export interface IFolderTemplateListChild {
  id: number;
  name: string;
  template_folder_id: number;
}
export interface IFolderTemplateList{
  id: number;
  name: string;
  child: IFolderTemplateListChild[];
}

export interface IFolderTemplateListState{
  loading: boolean;
  loaded: boolean;
  list: IFolderTemplateList[];
  errors: IError[];
}