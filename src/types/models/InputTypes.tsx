import { IError } from "types";

export interface IInputType{
    id:number,
    name:string,
    total_used:number
}

export interface IInputTypeState{
    loading:boolean,
    loaded:boolean,
    types:IInputType[]
    errors: IError[];
}