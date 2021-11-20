import { apiGet } from "utils/api"
import TemplateTypePaths from "./path"
import {ITemplateType} from "types/models/templateType"



export const getTemplateType = () => {

  return apiGet<ITemplateType[]>(TemplateTypePaths.getList);
}
