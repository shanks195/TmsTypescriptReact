
import { IDetailMetadata, IInitPage } from "types/models/MetadataList";
import { IMetadataList } from "types/models/MetadataList";
import { formatPath, getQueryString } from "utils";
import { apiDelete, apiGet } from "utils/api"
import MetadataPaths from "./paths"

export const getMetadata= (query: IInitPage) => {
  const queryParams = getQueryString(query as unknown as Record<string, string | number | null | undefined>);
  return apiGet<IMetadataList[]>(formatPath(MetadataPaths.Metadata.get, queryParams));
}
export const getDetailMetadata = (metadata_id:string) => {
  return apiGet<IDetailMetadata>(formatPath(MetadataPaths.Metadata.detail,metadata_id));
}
export const deleteMetadata = (metadata_id:string) => {
  return apiDelete(formatPath(MetadataPaths.Metadata.delete,metadata_id));
}