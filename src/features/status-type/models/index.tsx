
import { IStatusType } from "types/models/statusType";
import { apiGet } from "utils/api"
import StatusType from './paths';

export const getStatusType = () => {
  return apiGet<IStatusType[]>(StatusType.get);
}
