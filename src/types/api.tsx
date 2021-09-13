export interface IError {
  loc: string;
  msg: string;
  detail: string;
}

export interface IApiResponse<T> {
  success: boolean;
  data: T | null;
  errors: IError[];
}

export type IHeaderRequest = HeadersInit | Record<string, any>;

export type IDataRequest = Record<string, any> | FormData;

export type IResponse<T> = Promise<IApiResponse<T>>;
