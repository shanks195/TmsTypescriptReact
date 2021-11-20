import { AnyAction, ReducersMapObject } from "@reduxjs/toolkit";
import { RootState } from "types";

import AuthReducer from "features/auth/store/slice";
import AppReducer from "features/app/store/slice";
import DashboardReducer from "features/dashboard/store/slice";
import LocationReducer from "features/location/store/slice";
import InputTypesReducer from "features/inputType/store/slice";
import InforBasicReducer from "features/inforBase/store/slice";
import TemplatesReducer from "features/templates/store/slice";
import TemplateGroupsReducer from "features/templateGroups/store/slice";
import CreateMetadataReducer from 'features/create-metadata/store/slice';
import FolderTreeReducer from "features/folderTree/store/slice";
import StatusTreeReducer from "features/statusTree/store/slice";
import StatusTypesReducer from "features/status-type/store/slice";
import MetadataListReducer from "features/metadata/store/slice";
import MetadataGroupsReducer from 'features/metadata-group/store/slice';
import VersionReducer from "features/version/store/slice";
import BlockReducer from "features/block/store/slice";
import DepartmentReducer from "features/department/store/slice";
import TemplateTypeReducer from "features/templateType/store/slice";
import TemplatedataReducer from "features/templatedata/store/slice";
import UpdateMetadataReducer from "features/update-metadata/store/slice";
import CreateTemplateGroupReducer from "features/create-template-group/store/slice";
import UpdateTemplateGroupReducer from 'features/update-template-group/store/slice';
import TemplateFolderReducer from "features/TemplateGroupFolderList/store/slice";
import TemplateFolderMenuReducer from "features/TemplateGroupFolderMenu/store/slice";
import ListTemplateReducer from "features/listTemplate/store/slice";
import TemplateDetailsReducer from "features/operate-details-info/store/slice";
import MethodTypeReducer from "features/method-type/store/slice";
import AuthTypeReducer from "features/auth-type/store/slice";
import CreateTemplateFolderReducer from "features/create-template-folder/store/slice";
import TemplateUserViewReducer from "features/template-user-view/store/slice";
// import { ConsoleReducer } from 'features/console/store/slice';
import DataSourceReducer from "features/data-source-list/store/slice";
import DataSourceTeamplateReducer from "features/data-source-template/store/slice";
import DataSourceDetailReducer from "features/data-source-detail/store/slice";
import TemplateFieldsReducer from "features/get-template-fieds/store/slice";
import FolderTemplateListReducer from "features/folderTemplateList/store/slice";
// import { ConsoleReducer } from 'features/console/store/slice';
import TemplateCreateReducer from "features/create-template/store/slice";
import UploadReducer from "features/upload/store/slice";
import DataSourceDetailAssignReducer from "features/data-source-assign/store/slice";

const reducer: ReducersMapObject<RootState, AnyAction> = {
  app: AppReducer,
  auth: AuthReducer,
  authType: AuthTypeReducer,
  inforBasic: InforBasicReducer,
  dashboard: DashboardReducer,
  dataSourceList: DataSourceReducer,
  dataSourceTeamplate: DataSourceTeamplateReducer,
  dataSourceDetail: DataSourceDetailReducer,
  dataSourceDetailAssign: DataSourceDetailAssignReducer,
  location: LocationReducer,
  inputTypes: InputTypesReducer,
  templateOperate:TemplatesReducer,
  templateGroups: TemplateGroupsReducer,
  createTemplateGroup: CreateTemplateGroupReducer,
  createMetadata: CreateMetadataReducer,
  templatedata: TemplatedataReducer,
  FolderTemplateList:FolderTemplateListReducer,
  updateMetadata: UpdateMetadataReducer,
  statusType: StatusTypesReducer,
  metadataGroups: MetadataGroupsReducer,
  metadataList: MetadataListReducer,
  folderTree: FolderTreeReducer,
  statusTree: StatusTreeReducer,
  version: VersionReducer,
  block: BlockReducer,
  TemplateFields: TemplateFieldsReducer,
  department: DepartmentReducer,
  templateType:TemplateTypeReducer,
  updateTemplateGroup:UpdateTemplateGroupReducer,
  templateGroupFolderList: TemplateFolderReducer,
  templateGroupFolderListMenu: TemplateFolderMenuReducer,
  listTemplate: ListTemplateReducer,
  templateDetails: TemplateDetailsReducer,
  methodType: MethodTypeReducer,
  createTemplateGroupFolder: CreateTemplateFolderReducer,
  templateUserView: TemplateUserViewReducer,
  // console: ConsoleReducer,
  createTemplate: TemplateCreateReducer,
  upload: UploadReducer,
};

export default reducer;
