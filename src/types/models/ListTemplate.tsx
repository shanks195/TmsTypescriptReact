import { IError } from '../api';

export interface IListChildTemplate{
  id: number;
  name: string;
  template_folder_id: number;
}

export interface IListChild{
  id: number;
  name: string;
  child_template: IListChildTemplate[];
}

export interface IListTemplate{
  id: number;
  name: string;
  child: IListChild[];
  child_template: IListChildTemplate[];
}

export interface IListTemplateState{
  list: IListTemplate[];
  loading: boolean;
  loaded: boolean;
  errors: IError[];
}