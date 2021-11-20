import { apiGet } from "utils/api"
import BlockPaths from "./path"
import {IBlock} from "types/models/block"



export const getBlock = () => {

  return apiGet<IBlock[]>(BlockPaths.getList);
}
