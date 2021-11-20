import { IDataSourceTemplate } from "types/models/DataSourceTemplate";
import { formatPath } from "utils";
import { apiGet } from "utils/api"
import DataSourceTemplatePath from './paths';

export const getDataSourceTemplate = (template_id: number) => {
  return apiGet<IDataSourceTemplate[]>(formatPath(DataSourceTemplatePath.get, template_id));
}
