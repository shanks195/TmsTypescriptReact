import { apiGet } from "utils/api"
import { formatPath } from "utils";
import ListTemplatePaths from "./paths";
import { IListTemplate } from "types/models/ListTemplate";

export const getListTemplate = (template_group_id:string) => {
  return apiGet<IListTemplate[]>(formatPath(ListTemplatePaths.getList, template_group_id));
}