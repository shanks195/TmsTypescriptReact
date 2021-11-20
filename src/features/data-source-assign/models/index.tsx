import { IDataSourceDetailAssignReponse, IDataSourceDetailAssign } from "types/models/DataSourceDetail";
import { formatPath } from "utils";
import { apiPost } from "utils/api"
import DataSourceAssignPath from './paths';

export const dataSourceAssign = (data: IDataSourceDetailAssign) =>{
  const {data_source_api_id, template_id} = data;

  return apiPost<IDataSourceDetailAssignReponse>(formatPath(DataSourceAssignPath.post, data_source_api_id), {template_id})
}
