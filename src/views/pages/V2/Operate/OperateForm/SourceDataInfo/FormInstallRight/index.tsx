
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import Grid from "@mui/material/Grid";
import clsx from 'clsx';

import FormInstallRightStyle from "./style";
import GroupMetaDataDetail from './GroupMetaDataDetail';
import MetaDataDetail from './MetaDataDetail';
import FormMetadataList, { Group, Item } from './MetadataList';
import Empty from 'views/components/layout/Empty';
import {
  getTemplateFields,
  isLoadingTemplateFields,
  isLoadedTemplateFields,
  fetchTemplateFields,
  getCurrentTemplate,
  addNewGroupMetaDataDetail
} from 'features/get-template-fieds/store/slice';
import { ITemplateGroups } from 'types/models/TemplateFields';

interface FormInstallRightLayoutComponent extends FunctionComponent {}

export const FormInstallRightLayout: FormInstallRightLayoutComponent = () => {
  const classes = FormInstallRightStyle();
  const { t } = useTranslation();

  const params = useParams();

  const dispatch = useDispatch();
  const templateFields = useSelector(getTemplateFields);
  const isLoading = useSelector(isLoadingTemplateFields);
  const isLoaded = useSelector(isLoadedTemplateFields);
  const currentTemplate = useSelector(getCurrentTemplate);

  const [isFormAddNew, setIsFormAddNew] = useState<boolean>(false);
  const [isFormDetailMetadata, setIsFormDetailMetadata] = useState<boolean>(false);
  const [isFormDetailGroupMetaData, setIsFormDetailGroupMetaData] = useState<boolean>(false);
  
  useEffect(() => {
    !isLoading && !isLoaded && dispatch(fetchTemplateFields(Number(params.id)));
  });

  const onHandleAddMetaDataGroup = () => {
    // console.log("<<<<<<<<<   onHandleAddMetaDataGroup   >>>>>>>>>>>>>>>")
    showFormAddNewMetaDataGroup();

    let groupNew: ITemplateGroups = {
      id: null,
      name: "",
      items: [],
      template_field_group_logs:[]
    }

    dispatch(addNewGroupMetaDataDetail(groupNew));
  }

  // console.log("<<<<<<<<<<<<<<<<<<< templateFields groups >>>>>>>>>>>>>>>>>>>>>>>>>>", templateFields.groups)


  useEffect(()=>{
    // let FormDetailMetadata = currentTemplate.group ? true : false;
    if(currentTemplate && currentTemplate.group !== undefined && !isFormDetailGroupMetaData){
      showFormDetailMetaDataGroup();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentTemplate])

  useEffect(()=>{
    // let FormDetailMetadata = currentTemplate.group ? true : false;
    if(currentTemplate && currentTemplate.field !== undefined && !isFormDetailMetadata){
      showFormDetailMetaData()
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentTemplate])

  const showFormAddNewMetaDataGroup = () =>{
    setIsFormAddNew(true);
    setIsFormDetailMetadata(false);
    setIsFormDetailGroupMetaData(false);
  }

  const showFormDetailMetaData = () => {
    setIsFormAddNew(false);
    setIsFormDetailMetadata(true);
    setIsFormDetailGroupMetaData(false);
  }

  const showFormDetailMetaDataGroup = () =>{
    setIsFormAddNew(false);
    setIsFormDetailMetadata(false);
    setIsFormDetailGroupMetaData(true);
  }


  return <Grid className={clsx('wh-full', classes.root)} container>
    <Grid item xs={3}>
      <h5 className="title">{t('Pages.Layout.Reivew.MetadataList')}</h5>
      <FormMetadataList 
        className='form-metadata-list'
        onAdd={onHandleAddMetaDataGroup}
      >
        {(!templateFields || (!templateFields.template_fields && !templateFields.groups))
          ? <Empty><p>{t('Pages.Init.Table.Emty')}</p></Empty>
          : <>
            {templateFields.template_fields?.map((f, f_index) => 
              <Item key={f_index} template_fields={f}/>
            )}
            {templateFields.groups?.map((g, g_index) =>
              <Group key={g_index} group={g}>
                {g.items.map((f, f_index) =>
                  <Item key={f_index} template_fields={f}/>
                )}
              </Group>
            )}
          </>
        }
      </FormMetadataList>
    </Grid>

    <Grid item xs={9} className="meta-data-setting">
      {(()=>{
        if(isFormAddNew){
          return <GroupMetaDataDetail group={{} as ITemplateGroups}/>
        }else if (isFormDetailMetadata){
          return <MetaDataDetail field={currentTemplate && currentTemplate.field}/>
        }else if (isFormDetailGroupMetaData){
          return <GroupMetaDataDetail group={currentTemplate && currentTemplate.group}/>
        }else{
          return <Empty>Vui lòng chọn metadata</Empty>
        }
      })()}
    </Grid>
    
  </Grid>;
};  