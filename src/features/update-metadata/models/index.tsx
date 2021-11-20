import { IMetadataResponse, IMetadataBody } from "types/models/create-metadata";
import MetadataPaths from "./paths";
import { apiPut } from "utils/api";
import { formatPath } from 'utils';


export const UpdateMetadata = (data: IMetadataBody,id:string) => {
  return apiPut<IMetadataResponse>(formatPath(MetadataPaths.createMetadata,id), data);
};