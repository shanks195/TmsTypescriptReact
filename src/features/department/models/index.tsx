import { apiGet } from "utils/api"
import DepartmentPaths from "./path"
import {IDepartment} from "types/models/Department"



export const getDepartment = () => {

  return apiGet<IDepartment[]>(DepartmentPaths.getList);
}
