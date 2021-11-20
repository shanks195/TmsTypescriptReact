
import { apiGet } from "utils/api"
import VersionPaths from "./path"
import {IVersion} from "types/models/Version"



export const getVersion = () => {

  return apiGet<IVersion[]>(VersionPaths.getList);
}
