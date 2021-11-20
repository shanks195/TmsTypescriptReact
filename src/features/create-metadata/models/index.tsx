import { IMetadataResponse, IMetadataBody } from "types/models/create-metadata";
import MetadataPaths from "./paths";
import { apiPost } from "utils/api";

export const handlecreateMetadata = (data: IMetadataBody) => {
  return apiPost<IMetadataResponse>(MetadataPaths.createMetadata, data);
};
