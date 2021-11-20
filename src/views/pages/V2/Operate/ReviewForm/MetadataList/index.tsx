import { getTemplateUserView, setCurrentTemplateUserView } from 'features/template-user-view/store/slice';
import { forwardRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
import CardOutside from 'views/components/layout/CardOutside';
import Empty from 'views/components/layout/Empty';
import GroupList, { IGroupList } from 'views/components/layout/GroupList';
import MetaDataListStyle from './style';

export interface IMetaDataProps {
  uuid?: string;
}

export interface IMetaDataRef {

}

// interface IParams {
//   id: string;
// }

interface IMetaDataList extends React.ForwardRefRenderFunction<IMetaDataRef, IMetaDataProps> {

}
const MetadataList: IMetaDataList = (props, ref) => {
  const { t } = useTranslation();
  const classes = MetaDataListStyle();
  // const { id } = useParams()
  const dispatch = useDispatch();
  const templateUserView = useSelector(getTemplateUserView);

  const [metaData, setMetaData] = useState<IGroupList[]>([]);

  useEffect(() => {
    let options = [] as IGroupList[];
    if (templateUserView && Object.keys(templateUserView).length) {
      templateUserView && templateUserView.template_fields.forEach(field => {
        const obj = {
          key: field.key,
          value: field.id,
          label: field.label,
          isGroup: false,
        }
        options.push(obj);
      })

      templateUserView && templateUserView.groups.forEach(group => {
        const obj = {
          key: group.id,
          value: group.id,
          label: group.group_name,
          isGroup: true,
        }
        options.push(obj);
      })
      setMetaData(options);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [templateUserView])

  const handleChange = (value: IGroupList) => {
    if (value.isGroup) {
      const templateField = templateUserView?.groups.find(group => group.id === value.key);
      const label = templateField?.group_name ?? '';
      value && dispatch(setCurrentTemplateUserView({key: value.key.toString(), value: '', label: label, isGroup: value.isGroup ?? false}));
    } else {
      const templateField = templateUserView?.template_fields.find(field => field.key === value.key.toString());
      const defaultValue = templateField?.default_data ?? '';
      const label = templateField?.label ?? '';
      value && dispatch(setCurrentTemplateUserView({key: value.key.toString(), value: defaultValue, label: label, isGroup: value.isGroup ?? false}));
    }
  }

  return <CardOutside label={t("Pages.Metadata.List.Label")} className={classes.root} >
    {/* <ScrollBar options={{ suppressScrollX: true }} className="scroll-container"> */}
      {metaData.length > 0 ?
        <GroupList options={metaData} typeTMS={true} type={"normal"} onChange={handleChange} defaultActive={metaData[0].key}/>
        :
        <Empty>{t("Pages.Init.Table.Emty")}</Empty>
      }
    {/* </ScrollBar> */}
  </CardOutside>
}

export default forwardRef(MetadataList);