import { IError } from "types";

export interface IIdName{
  id: number;
  name: string;

}

export interface ITemplateType{
  id: number;
  name: string;
 
}

export interface ITemplateTypeState{
  loading: boolean;
  loaded: boolean;
  list: ITemplateType[];
  errors: IError[];
}