
import { apiGet } from "utils/api"
import FolderTemplateListPaths from "./path"
import {IFolderTemplateList} from "types/models/FolderTemplateList"
import { formatPath } from "utils";



export const getFolderTemplateList = (template_group_id:string) => {

  return apiGet<IFolderTemplateList[]>(formatPath(FolderTemplateListPaths.getList,template_group_id));
}
