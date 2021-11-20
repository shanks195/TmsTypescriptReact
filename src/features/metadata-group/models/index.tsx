
import { IMetadataGroups } from "types/models/MetadataList";
import { apiGet } from "utils/api"
import StatusType from './paths';

export const getMetadataGroups = () => {
  return apiGet<IMetadataGroups[]>(StatusType.get);
}
