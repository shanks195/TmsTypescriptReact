import { IDataSourceList } from "types/models/DataSourceList";
import { formatPath } from "utils";
import { apiGet } from "utils/api"
import DataSourceList from './paths';

export const getDataSourceList = (template_id: number) => {
  return apiGet<IDataSourceList[]>(formatPath(DataSourceList.get, template_id));
}
