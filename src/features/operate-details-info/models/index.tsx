
import { ITemplateDetails } from "types/models/Templates";
import { formatPath } from "utils";
import { apiGet } from "utils/api"
import OperateDetailsPath from "./paths"


export const getDetailTemplate = (template_id:string) => {
  return apiGet<ITemplateDetails>(formatPath(OperateDetailsPath.details,template_id));
}
