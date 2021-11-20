
import { apiGet } from "utils/api"
import TemplateFieldsPaths from "./path"
import { ITemplateField } from "types/models/TemplateFields";
import { formatPath } from "utils";

export const getITemplateFields = (template_id: number) => {
  return apiGet<ITemplateField[]>(formatPath(TemplateFieldsPaths.getList, template_id));
}