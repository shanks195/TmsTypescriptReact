import axios, { AxiosRequestConfig } from "axios";
import { contentType, decodeToken, getAuthHeader } from "utils";
import { IHeaderRequest, IDataRequest, IResponse, IApiResponse, IApiPaging } from "types";
import {
  API_BASE_URL,
  APP_AUTH_ENABLE,
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
) {
  configs = configs ?? {};
  Object.assign(configs, { url: uri, method, headers, data: null });
  if (data) {
    if (configs.method === EMethod.GET) configs.method = EMethod.POST;

    if (data instanceof FormData) {
      // Object.assign("headers", contentType(EContentType.BINARY));
      configs.data = data;
    } else {
      configs.data = data;//JSON.stringify(data);
    }
  }
  Object.assign(configs, { headers: configs.headers || {} });

  APP_AUTH_ENABLE
    && !configs.headers.Authorization
    && Object.assign(configs.headers, getAuthHeader(decodeToken().token + '1'));
  return API.request(configs)
    .then((response) => {
      const result: IApiResponse<T> = {
        data: null,
        success: false,
        errors: [],
      };

      const result1: IApiPaging<T> = {
        ...result,
        current_page: 1,
        total_items: 0,
        total_page: 0
      };

      let hasPaging = false;

      try {
        result.success = Math.floor(response.status / 200) === 1;

        if (result.success) {
          result.data = response.data;
          result.success = true;
          result.errors = [];

          if ('total_page' in response.data) {
            hasPaging = true;
            result1.total_page = response.data.total_page ?? 0;
            result1.total_items = response.data.total_items ?? 0;
            result1.current_page = response.data.current_page ?? 1;
          }
        } else {
          result.errors = response.data.errors ?? ON_RESPONSE_ERROR;
        }
      } catch (e) {
        result.errors = ON_PARSE_ERROR;
      }

      return hasPaging ? { ...result1, ...result } as IApiPaging<T> : result;
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        const response = error.response.data;
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
  return execApi(EMethod.DELETE, uri, data, headers, configs);
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
