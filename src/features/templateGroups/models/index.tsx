
import { IListSideBar } from "types/models/templateGroups";
import { apiGet } from "utils/api"
import LeftSideBarPaths from "./paths"

export const getLeftSideBars = () => {
  return apiGet<IListSideBar[]>(LeftSideBarPaths.leftSibars.getList);
}