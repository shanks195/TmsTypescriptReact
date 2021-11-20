import { all } from "redux-saga/effects";

import authSaga from "features/auth/store/saga";
import locationSaga from "features/location/store/saga";
import dashboardSaga from "features/dashboard/store/saga";
import typesSaga from "features/inputType/store/saga";
import templateGroupsSaga from "features/templateGroups/store/saga";

import MetadataSaga from "features/create-metadata/store/saga";
import FolderTreeSaga from "features/folderTree/store/saga";
import VersionSaga from "features/version/store/saga";
import StatusTreeSaga from "features/statusTree/store/saga";
import StatusTypeSaga from "features/status-type/store/saga";
import MetadataGroupsSaga from "features/metadata-group/store/saga";
import metadataListSaga from "features/metadata/store/saga";
import TemplatedataSaga from "features/templatedata/store/saga";
import BlockSaga from "features/block/store/saga";
import DepartmentSaga from "features/department/store/saga";
import TemplateTypeSaga from "features/templateType/store/saga";
import UpdateMetadataSaga from "features/update-metadata/store/saga";
import CreateTemplateGroupSaga from "features/create-template-group/store/saga";
import UpdateTemplateGroupSaga from "features/update-template-group/store/saga";
import TemplateFolderSaga from "features/TemplateGroupFolderList/store/saga";
import TemplateOperateSaga from "features/templates/store/saga";
import TemplateFolderMenuSaga from "features/TemplateGroupFolderMenu/store/saga";
import ListTemplateSaga from "features/listTemplate/store/saga";
import TemplateDetailsSaga from "features/operate-details-info/store/saga";
import MethodTypeSaga from 'features/method-type/store/saga';
import AuthTypeSaga from "features/auth-type/store/saga";
import CreateTemplateFolderSaga from "features/create-template-folder/store/saga";
import TemplateUserViewSaga from "features/template-user-view/store/saga";
import DataSourceListSaga from "features/data-source-list/store/saga";
import DataSourceTemplateSaga from "features/data-source-template/store/saga";
import DataSourceDetailSaga from "features/data-source-detail/store/saga";
import appSaga from 'features/app/store/saga';
import TemplateCreateSaga from "features/create-template/store/saga";
import uploadSaga from "features/upload/store/saga";
import TemplateFieldsSaga from "features/get-template-fieds/store/saga";
import FolderTemplateListSaga from "features/folderTemplateList/store/saga";
import DataSourceDetailAssignSaga from "features/data-source-assign/store/saga";

export default function* rootSaga() {
  yield all([
    appSaga(),
    authSaga(),
    FolderTemplateListSaga(),
    TemplateOperateSaga(),
    TemplateFieldsSaga(),
    authSaga(),
    AuthTypeSaga(),
    dashboardSaga(),
    DataSourceListSaga(),
    DataSourceTemplateSaga(),
    DataSourceDetailSaga(),
    DataSourceDetailAssignSaga(),
    locationSaga(),
    typesSaga(),
    templateGroupsSaga(),
    MetadataSaga(),
    StatusTypeSaga(),
    FolderTreeSaga(),
    MetadataGroupsSaga(),
    metadataListSaga(),
    StatusTreeSaga(),
    VersionSaga(),
    BlockSaga(),
    DepartmentSaga(),
    TemplateTypeSaga(),
    TemplatedataSaga(),
    UpdateMetadataSaga(),
    CreateTemplateGroupSaga(),
    UpdateTemplateGroupSaga(),
    TemplateFolderSaga(),
    TemplateFolderMenuSaga(),
    ListTemplateSaga(),
    TemplateDetailsSaga(),
    MethodTypeSaga(),
    CreateTemplateFolderSaga(),
    TemplateUserViewSaga(),
    TemplateCreateSaga(),
    uploadSaga(),
  ]);
}
