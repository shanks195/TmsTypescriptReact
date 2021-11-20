import { IError, ILanguage } from "types";

export const API_BASE_URL = "/api/v2";

export const API_KEY = '';

export const APP_AUTH_ENABLE = true;

export const APP_COUNTRY_DEFAULT = 'VN';

export const APP_DATE_FORMAT = 'DD/MM/YYYY';

export const APP_LANG_DEFAULT: ILanguage = {
  name: "Tiếng Việt",
  code: "vi",
  country_code: "VN"
};

export const APP_LANGUAGES: ILanguage[] = [
  APP_LANG_DEFAULT,
  {
    name: 'English',
    code: 'en',
    country_code: 'US'
  }
];

export const APP_TOKEN_NAME = "accessToken";

export const ON_FETCH_ERROR = [
  {
    detail: "Cannot send request.",
    msg: "ERR_CANNOT_SEND_REQUEST",
    loc: "FETCH"
  }
] as IError[];

export const ON_PARSE_ERROR = [
  {
    loc: "PARSE",
    msg: "Parse_Response_failure",
    detail: "Parse response failure"
  }
] as IError[];

export const ON_RESPONSE_ERROR = [
  {
    loc: "RESPONSE",
    msg: "Result_Response_failure",
    detail: "Result response failure"
  }
] as IError[];