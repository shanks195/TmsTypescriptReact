
import { IError } from 'types';
import { IResponse } from './TemplateGroup';

export interface IFolderList{
    id:number; 
    slug: string;
    name: string;
    updated_by: string;
    updated_at: string;
    child:IFolderList[]
}
export interface IFolderListState{
    list:IFolderList[]
    loading: boolean;
    loaded: boolean;
    response:IResponse | undefined;
    template_group_id?:string
    errors: IError[];
}

export interface ICreateTemplateFolderState{
    loading: boolean;
    loaded: boolean;
    response:IResponse | null
    errors: IError[];
}
export interface IBodyCreateTemplateFolder {
  name: string;
  slug: string;
  parent_id:number | null;
}
export interface IPayloadCreateFolder{
    data:IBodyCreateTemplateFolder;
    id:string
}