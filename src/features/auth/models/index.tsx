import { ILogin, IUser } from "types/models/Account";
import { apiGet, apiPost } from "utils/api";
import { ILoginResponse } from "types/models/Account";
import { formatPath, stringToBase64 } from "utils";
import AccountPaths from "./paths";
import {IHeaderRequest} from 'types/api'
import { APP_AUTH_ENABLE, API_KEY } from "utils/constants";

export const authLogin = (data: ILogin) => {
  const { username, password } = data;
  const headers: IHeaderRequest = {
    //'MNV-LANGUAGE': 'vn'
  };

  if (APP_AUTH_ENABLE){
    const token = stringToBase64(username + ':' + password);
    headers.Authorization = 'Basic ' + token;
    headers.apikey = API_KEY;
    headers['MNV-encode'] = 0;
    headers['Content-Type'] = 'application/json; charset=utf-8';
  }
  return apiPost<ILoginResponse>(AccountPaths.Login, { username, password }, headers);
};

export const authToken = (id: string | number) => {
  return apiGet<IUser>(
    formatPath(AccountPaths.AccessToken, id)
  );
}