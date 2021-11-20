
import { IInputType } from "types/models/InputTypes";
import { apiGet } from "utils/api"
import InputTypePaths from "./paths";

export const getTypes = () => {

  return apiGet<IInputType[]>(InputTypePaths.inputTypeList.getList);
}
