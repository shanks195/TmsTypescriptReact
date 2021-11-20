
import { IMethodType } from "types/models/MethodType";
import { apiGet } from "utils/api"
import MethodType from './paths';

export const getMethodType = () => {
  return apiGet<IMethodType[]>(MethodType.get);
}
