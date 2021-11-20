import { formatPath, getQueryString } from "utils";
import { apiGet, apiPost } from "utils/api";
import TemplateUserViewPaths from "./paths";
import { IFilterTemplateUserView, IMetadataInfo, ITemplateUserView } from "types/models/TemplateUserView";

export const getTemplateUserView = (query: IFilterTemplateUserView) => {
  let path = formatPath(TemplateUserViewPaths.get, query.template_id);
  if (query.search_label_text) {
    const queryObj = {
      search_label_text: query.search_label_text
    };
    const queryParams = getQueryString(queryObj as unknown as Record<string, string | number | null | undefined>);
    path = formatPath(TemplateUserViewPaths.get, query.template_id, queryParams);
  }
  return apiGet<ITemplateUserView>(path);
}

export const fillDataIntoTemplate = (template_id: string, data: IMetadataInfo) => {
  return apiPost<IMetadataInfo>(formatPath(TemplateUserViewPaths.apply, template_id), data);
}