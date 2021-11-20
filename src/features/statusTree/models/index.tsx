
import { apiGet } from "utils/api"
import StatusTreePaths from "./path"
import {IStatusTree} from "types/models/StatusTree"



export const getStatusTree = () => {

  return apiGet<IStatusTree[]>(StatusTreePaths.getList);
}
