import { IDataSourceDetail } from "types/models/DataSourceDetail";
import { formatPath } from "utils";
import { apiGet } from "utils/api"
import DataSourceDetailPath from './paths';

export const getDataSourceDetail = (data_source_api_id: number) => {
  return apiGet<IDataSourceDetail>(formatPath(DataSourceDetailPath.get, data_source_api_id));
}
