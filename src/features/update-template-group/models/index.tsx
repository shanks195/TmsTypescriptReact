
import { apiPut } from "utils/api";
import { formatPath } from 'utils';
import { IBodyTemplate, IResponse } from "types/models/TemplateGroup";
import UpdateTemplateGroupPaths from "./paths";

export interface IUpdatePayload{
  data:IBodyTemplate
  id: string
}

export const UpdateTemplateGroup= (data: IBodyTemplate,id:string) => {
  return apiPut<IResponse>(formatPath(UpdateTemplateGroupPaths.update,id), data);
};