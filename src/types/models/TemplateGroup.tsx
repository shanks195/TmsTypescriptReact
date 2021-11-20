
import { IError } from 'types';

export interface IBodyTemplate {
  code: string;
  name: string;
  slug: string;
  active_flag: boolean;
  parent_id: number;
}
export interface IResponse{
    id: number;
    name: string;
    created_by: string;
}

export interface ICreateTemplateGroupState{
    loading:boolean,
    loaded:boolean,
    response:IResponse | null
    errors: IError[];
}