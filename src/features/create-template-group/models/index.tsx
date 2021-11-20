

import { apiPost } from "utils/api";
import { IBodyTemplate, IResponse } from "types/models/TemplateGroup";
import TemplatePaths from './paths';

export const handlecreateTemplateGroup = (data: IBodyTemplate) => {
  return apiPost<IResponse>(TemplatePaths.create, data);
};
