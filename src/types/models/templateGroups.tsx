import { IError } from '../api';

export interface IListSideBar{
  id: string;
  name: string;
  items?: IListSideBar[]
}

export interface ITemplateGroupsState{
  sideBars: IListSideBar[];
  loadingSideBar: boolean;
  loadedSideBar: boolean;
  errors: IError[];
}

export interface IOperateParams{
  id: string;
  parent: string;
  docid: string;
  tab: string;
  step: string;
}