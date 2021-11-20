

import { apiPost } from "utils/api";
import { IResponse } from "types/models/TemplateGroup";
import TemplateFolderPaths from './paths';
import { IPayloadCreateFolder } from "types/models/TemplateGroupFolder";
import { formatPath } from "utils";

export const handlecreateTemplateFolder = (data: IPayloadCreateFolder) => {
  return apiPost<IResponse>(formatPath(TemplateFolderPaths.create,data.id), data.data);
};