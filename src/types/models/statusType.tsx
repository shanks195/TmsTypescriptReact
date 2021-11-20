import { IError } from "types";

export interface IStatusType{
    id:boolean,
    name:string,
}

export interface IStatusTypeState{
    loading:boolean,
    loaded:boolean,
    list:IStatusType[]
    errors: IError[];
}