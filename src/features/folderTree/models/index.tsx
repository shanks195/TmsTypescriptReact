
import { apiGet } from "utils/api"
import FolderTreePaths from "./path"
import {IFolderTree} from "types/models/FolderTree"
import { formatPath } from "utils";



export const getFolderTree = (template_group_id:string) => {

  return apiGet<IFolderTree[]>(formatPath(FolderTreePaths.getList,template_group_id));
}
