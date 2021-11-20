import { IError } from 'types';
import { IResponse } from './TemplateGroup';

export interface IFolderListMenu{
  id: number;
  name: string;
  child: IFolderListMenu[];
}

export interface IFolderListMenuState{
  list: IFolderListMenu[];
  loading: boolean;
  loaded: boolean;
  response:IResponse | undefined
  errors: IError[];
}