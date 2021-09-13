import axios, { AxiosRequestConfig } from "axios";
import { contentType } from "utils";
import { IHeaderRequest, IDataRequest, IResponse, IApiResponse } from "types";
import {
  API_BASE_URL,
  ON_FETCH_ERROR,
  ON_PARSE_ERROR,
  ON_RESPONSE_ERROR
} from "./constants";

export enum EMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  HEAD = "head",
  DELETE = "delete"
}

export enum EContentType {
  JSON = "application/json",
  BINARY = "multipart/form-data",
  TEXT = "plain/text",
  URLENCODED = "application/x-www-form-urlencoded"
}

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: { Accept: EContentType.JSON, ...contentType(EContentType.JSON) },
  withCredentials: true
});

function execApi<T>(
  method: EMethod,
  uri: string,
  data?: IDataRequest,
  headers?: IHeaderRequest,
  configs?: AxiosRequestConfig
): IResponse<T> {
  configs = configs ?? {};
  Object.assign(configs, { url: uri, method, headers, data: null });

  if (data) {
    if (configs.method === EMethod.GET) configs.method = EMethod.POST;

    if (data instanceof FormData) {
      headers = Object.assign(headers, contentType(EContentType.BINARY));
      configs.data = data;
    } else {
      configs.data = JSON.stringify(data);
    }
  }

  return API.request(configs)
    .then((response) => {
      const result: IApiResponse<T> = {
        data: null,
        success: false,
        errors: []
      };

      try {
        result.success = Math.floor(response.status / 200) === 1;

        if (result.success) {
          result.data = response.data.data;
          result.success = true;
          result.errors = [];
        } else {
          result.errors = response.data.errors ?? ON_RESPONSE_ERROR;
        }
      } catch (e) {
        result.errors = ON_PARSE_ERROR;
      }

      return result;
    })
    .catch((error) => {
      console.log("API :: error");
      if (error.response && error.response.data) {
        const response = error.response.data as IApiResponse<T>;
        response.success = false;
        return response;
      } else {
        return {
          success: false,
          data: null,
          errors: ON_FETCH_ERROR
        };
      }
    });
}

export function apiGet<T>(
  uri: string,
  headers?: IHeaderRequest,
  configs?: AxiosRequestConfig
): IResponse<T> {
  return execApi<T>(EMethod.GET, uri, undefined, headers, configs);
}

export function apiPost<T>(
  uri: string,
  data?: IDataRequest,
  headers?: IHeaderRequest,
  configs?: AxiosRequestConfig
): IResponse<T> {
  return execApi(EMethod.POST, uri, data, headers, configs);
}

export function apiPut<T>(
  uri: string,
  data?: IDataRequest,
  headers?: IHeaderRequest,
  configs?: AxiosRequestConfig
): IResponse<T> {
  return execApi(EMethod.PUT, uri, data, headers, configs);
}

export function apiPatch<T>(
  uri: string,
  data?: IDataRequest,
  headers?: IHeaderRequest,
  configs?: AxiosRequestConfig
): IResponse<T> {
  return execApi(EMethod.PATCH, uri, data, headers, configs);
}

export function apiDelete<T>(
  uri: string,
  data?: IDataRequest,
  headers?: IHeaderRequest,
  configs?: AxiosRequestConfig
): IResponse<T> {
  return execApi(EMethod.PATCH, uri, data, headers, configs);
}

export function apiHead<T>(
  uri: string,
  data?: IDataRequest,
  headers?: IHeaderRequest,
  configs?: AxiosRequestConfig
): IResponse<T> {
  return execApi(EMethod.HEAD, uri, data, headers, configs);
}

export function api<T>(
  method: EMethod,
  uri: string,
  data?: IDataRequest,
  headers?: IHeaderRequest,
  configs?: AxiosRequestConfig
): IResponse<T> {
  switch (method) {
    case EMethod.POST:
      return apiPost<T>(uri, data, headers, configs);

    case EMethod.PUT:
      return apiPut(uri, data, headers, configs);

    case EMethod.PATCH:
      return apiPatch(uri, data, headers, configs);

    case EMethod.HEAD:
      return apiHead(uri, data, headers, configs);

    case EMethod.DELETE:
      return apiDelete(uri, data, headers, configs);

    default:
      return apiGet<T>(uri, headers, configs);
  }
}