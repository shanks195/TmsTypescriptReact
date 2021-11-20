import { 
  FunctionComponent, 
  useRef, 
  useState, 
  useEffect 
} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { Grid } from "@mui/material";
import InputDebounce, {InputDebounceRef} from "views/components/base/InputDebounce";
import SelectAuthType, {SelectAuthTypeRef} from 'views/components/layout/SelectAuthType';
import SelectMethod, {SelectMethodTypeRef} from 'views/components/layout/SelectMethodType';
import TextAreaDebounce, {TextAreaDebouceRef} from "views/components/base/TextAreaDebounce";
import ModalDatasourceCopy, { ModalDatasourceCopyRef } from "./ApiList/ModalDatasourceCopy";
import ObjectList, {
  ObjectListOption, 
  ObjectListRef
} from "views/components/layout/ObjectList";
import { 
  isFetchingDataSourceTemplate, 
  isFetchedDataSourceTemplate, 
  getDataSourceTemplate,
  fetchDataSourceTemplate 
} from "features/data-source-template/store/slice";
import HeaderTable from "./HeaderTable";
import { CgCopy } from "react-icons/cg";
import { fetchDataSourceDetail, getDataSourceDetail } from "features/data-source-detail/store/slice";
import { IBodyJson, IDataSourceDetailAssign } from "types/models/DataSourceDetail";
import { IDataSourceList } from "types/models/DataSourceList";
import { useParams } from "react-router";
import { IOperateParams } from "types/models/templateGroups";
import { dataSourceDetailAssign } from "features/data-source-assign/store/slice";
import { clearDataSourceList } from "features/data-source-list/store/slice";
import CardInside from "views/components/layout/CardInside";
import { GrDatabase } from "react-icons/gr";
import mainSourceStyle from "./style";


interface FormDataSourceProps { }

interface FormDataSourceComponent
  extends FunctionComponent<FormDataSourceProps> { }

const FormDataSource: FormDataSourceComponent = () => {

  const dispatch = useDispatch();
  const classes = mainSourceStyle();
  const cardInsideClass = clsx(classes.cardInside, 'w-full');
  const params = useParams() as IOperateParams;
  const { t } = useTranslation();

  const fetchingDataSourceTemplate = useSelector(isFetchingDataSourceTemplate);
  const fetchedDataSourceTemplate = useSelector(isFetchedDataSourceTemplate);
  const DataSourceTemplate = useSelector(getDataSourceTemplate);
  const DataSourceDetail = useSelector(getDataSourceDetail);

  const labelNameSource = t("Pages.Layout.EForm.TSource.ModalNameSource");
  const labelAuthType = t("Pages.Layout.EForm.AutType");
  const labelAdress = t("Pages.Layout.EForm.Address");
  const labelMethodType = t("Pages.Layout.EForm.MethodType");
  const labelToken = t("Pages.Layout.EForm.Token");
  const labelContent = t("Pages.Layout.EForm.Content");
  
  const nameSourceElement = useRef<InputDebounceRef>(null);
  const authTypeElement = useRef<SelectAuthTypeRef>(null);
  const adressElement = useRef<InputDebounceRef>(null);
  const methodTypeElement = useRef<SelectMethodTypeRef>(null);
  const tokenElement = useRef<InputDebounceRef>(null); 
  const contentElement = useRef<TextAreaDebouceRef>(null);
  const objectListElement = useRef<ObjectListRef>(null);
  const modalDataSourceCoppyElement = useRef<ModalDatasourceCopyRef>(null);

  const [isOpenAddUserModal, setIsOpenAddUserModal] = useState<boolean>(false);
  const [dataSourceId, setDataSourceId] = useState<number>();

  const onCloseAddUserModal = () => {
    setIsOpenAddUserModal(false);
    dispatch(clearDataSourceList());
  };

  const onOpenAddUserModal = () => {
    setIsOpenAddUserModal(true);
  };

  useEffect(() => {
    !DataSourceTemplate.length &&
    !fetchingDataSourceTemplate &&
    !fetchedDataSourceTemplate &&
    dispatch(fetchDataSourceTemplate(Number(params.id)));
  })

  useEffect(()=>{
    if (DataSourceTemplate.length > 0 && dataSourceId === undefined){
      let dataSource = DataSourceTemplate.find((ds, index)=> index === 0);
      if (dataSource !== undefined){
        setDataSourceId(dataSource.data_source_api_id);
        dispatch(fetchDataSourceDetail(dataSource.data_source_api_id));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DataSourceTemplate])

  const templateList: ObjectListOption[] = DataSourceTemplate.map(dst=>({
    enableUser: true,
    label: dst.data_source_api_name,
    circle: <GrDatabase />
  }))

  const onChangeTemplate = () =>{
    let objectElement = objectListElement.current?.getValue();
    let dataSource = DataSourceTemplate.find((dst, index) => index === objectElement);

    if (dataSource !== undefined && dataSourceId !== dataSource.data_source_api_id){
      setDataSourceId(dataSource.data_source_api_id);
      dispatch(fetchDataSourceDetail(dataSource.data_source_api_id));
    }
  }

  const onHandleSaveDataSourceCoppy = (data: IDataSourceList) => {
    
    let assigne: IDataSourceDetailAssign = {
      data_source_api_id: data.id,
      template_id: Number(params.id)
    }
    dispatch(dataSourceDetailAssign(assigne));

    onCloseAddUserModal();
  }

  return (
    <Grid container className={clsx(classes.rootSource, 'wh-full')}>
      <Grid item xs={12} className="flex">
        <ObjectList
          className={classes.objectList}
          enableAdd={false}
          enableMenu={false}
          labelLength={t("Common.Quantity")}
          options={templateList}
          // current={activeLocal}
          onChange={onChangeTemplate}
          ref={objectListElement}
        />

        <span 
          className="coppy-form"
          onClick={onOpenAddUserModal} 
        >
          <span> <CgCopy className="mr-1"/> </span>
          <span> {t("Common.Coppy.Data")} </span>
        </span>
      </Grid>

      <Grid container className="form-datasource">
        <Grid container className="mb-2" spacing={2}>
          <Grid item xs={3}>
            <InputDebounce
             label={`1. ${labelNameSource}`}
             ref={nameSourceElement}
             value={DataSourceDetail?.name ?? ""}
             disabled
            />
          </Grid>

          <Grid item xs={3}>
            <SelectAuthType
              label={`2. ${labelAuthType}`}
              ref={authTypeElement}
              value={DataSourceDetail?.c_auth_type?.toString() ?? ""}
              disabled
            />
          </Grid>

          <Grid item xs={6}>
            <InputDebounce
              label={`3. ${labelAdress}`}
              ref={adressElement}
              value={DataSourceDetail?.url ?? ""}
              disabled
            />
          </Grid>
        </Grid>

        <CardInside 
          title='I. Authorization' 
          className={cardInsideClass}
        >
          <Grid container spacing={2} className="mscb-form-row">
            <Grid item xs={4}>
              <SelectMethod 
                ref={methodTypeElement}
                label={`1 ${labelMethodType}`}
                value={DataSourceDetail?.c_method_type?.toString() ?? ""}
                disabled
              />
            </Grid>

            <Grid item xs={4}>
              <InputDebounce
                label={`2. ${labelToken}`}
                ref={tokenElement}
                value={DataSourceDetail?.auth_json?.token ?? ""}
                disabled
              />
            </Grid>
          </Grid> 

        </CardInside>
        
        <CardInside 
          title='II. Body JSON' 
          className={cardInsideClass}
        >
          <Grid container>
            <Grid item xs={12}>
              <TextAreaDebounce 
                label={labelContent}
                ref={contentElement}
                value={DataSourceDetail.body_json === {} as IBodyJson ? JSON.stringify(DataSourceDetail.body_json) : ""}
                disabled
              />
            </Grid>
          </Grid>
        </CardInside>

        <CardInside 
          title='III. Header' 
          className={cardInsideClass}
        >
          <HeaderTable 
            data = {DataSourceDetail?.header_list ?? []}
          />
        </CardInside>
      </Grid>

      <ModalDatasourceCopy
        open={isOpenAddUserModal}
        onClose={onCloseAddUserModal}
        key="modalcopy"
        ref={modalDataSourceCoppyElement}
        onSave={onHandleSaveDataSourceCoppy}
      />
    </Grid>
  );
};

export default FormDataSource;
