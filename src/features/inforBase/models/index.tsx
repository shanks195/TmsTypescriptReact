

import { apiGet } from "utils/api"

import { IBlock } from "types/models/InforBasic";
import InforBasicPaths from "./paths";

export const getBlocks = () => {
 
  return apiGet<IBlock[]>(InforBasicPaths.folders.getList);
  
}
