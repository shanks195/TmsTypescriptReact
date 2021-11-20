import { IAuthType } from "types/models/AuthType";
import { apiGet } from "utils/api"
import AuthType from './paths';

export const getAuthType = () => {
  return apiGet<IAuthType[]>(AuthType.get);
}
