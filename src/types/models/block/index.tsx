import { IError } from "types";

export interface IIdName{
  id: number;
  name: string;

}

export interface IBlock{
  id: number;
  name: string;
 
}

export interface IBlockState{
  loading: boolean;
  loaded: boolean;
  list: IBlock[];
  errors: IError[];
}