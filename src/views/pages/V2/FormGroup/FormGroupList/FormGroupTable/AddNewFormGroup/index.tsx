import { useRef, FunctionComponent, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Input, { InputRef } from 'views/components/base/Input';
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import addNewGroupStyle from './styles'
import SelectStatusType,{ SelectStatusTypeRef } from 'views/components/layout/SelectStatusType';
import { IBodyTemplate } from 'types/models/TemplateGroup';
import { useDispatch, useSelector } from 'react-redux';
import { createTemplateGroup } from 'features/create-template-group/store/slice';
import SelectParentGroup, { SelectParentGroupRef } from 'views/components/layout/SelectParentGroup';
import { isFetchingDetailTemplateGroup,isFetchedDetailTemplateGroup, getDetailTemplateGroup,fetchTemplateGroupDetail } from 'features/templatedata/store/slice';
import { getStatusType } from 'features/status-type/store/slice';
import { useParams } from 'react-router-dom';
import { fetchUpdateTemplateGroup } from 'features/update-template-group/store/slice';
import Loading from 'views/components/base/Loading';


interface AddNewFormGroupProps{
  is_create:boolean;
  onClose():void;
}
interface AddNewFormGroupComponent extends FunctionComponent<AddNewFormGroupProps>{}
interface AddParams{
  id:string
}
const AddNewFormGroup: AddNewFormGroupComponent = (props) => {
    const {onClose,is_create} = props;
    const classes = addNewGroupStyle()
    const dispatch = useDispatch()

    const codeInputRef = useRef<InputRef>(null);
    const parentSelectRef = useRef<SelectParentGroupRef>(null);
    const nameInputRef = useRef<InputRef>(null);
    const slugInputRef = useRef<InputRef>(null);
    const statusSelectRef = useRef<SelectStatusTypeRef>(null);

    // translation
    const { t } = useTranslation();
    const enterPlaceholder = t('Common.Enter');
    const codeLabel = t('Pages.Group.Code.Label');
    const parentGroupLabel = t('Pages.Group.Parent.Label');
    const groupNameLabel = t('Pages.Group.Name.Label');
    const slugLabel = t('Pages.Group.Slug.Label')
    const statusInputLabel = t('Pages.Group.Status.Label');
    const cancelCaption = t('Common.Button.Canceled.Caption');
    const saveCaption = t('Common.Button.Save.Caption');

    const addNewGroupClass = clsx(classes.root, "mscb-add-group")

    // selectors
    const detail = useSelector(getDetailTemplateGroup)
    const statusType = useSelector(getStatusType)
    const fetching = useSelector(isFetchingDetailTemplateGroup)
    const fetched = useSelector(isFetchedDetailTemplateGroup)

    const {id} = useParams() as AddParams
    const handleSave = () =>{
        const body = {
          code: codeInputRef.current?.getValue() ,
          name: nameInputRef.current?.getValue() ,
          slug: slugInputRef.current?.getValue() ,
          active_flag: statusSelectRef.current?.getValue()?.id ,
          parent_id: Number(parentSelectRef.current?.getValue()?.id) 
        } as IBodyTemplate;
        if(!is_create && id){
          dispatch(fetchUpdateTemplateGroup({
            data:body,
            id:id
          }))
          onClose()
        }
        else{
          dispatch(createTemplateGroup(body))
          onClose()
        }
    }

    useEffect(()=>{
      if(!is_create && id ){
        !detail && !fetching && !fetched && dispatch(fetchTemplateGroupDetail(id))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const selectedStatus = statusType.find(o => o.id === detail?.active_flag )
    return (<>
      {fetching?<Loading/>:        <Grid container  className={addNewGroupClass}>
      <Grid item xs={12} style={{ paddingBottom: "18px" }}>
          <Input
            label={`1.${codeLabel}`}
            ref={codeInputRef}
            placeholder={enterPlaceholder}
            value={detail?.code ?? undefined}
          />
      </Grid>
      <Grid item xs={12} style={{ paddingBottom: "18px" }}>
          <SelectParentGroup
            label={`2.${parentGroupLabel}`}
            ref={parentSelectRef}
            value={detail?.parent_id as number}
          />
      </Grid>
      <Grid item xs={12} style={{ paddingBottom: "18px" }}>
    
          <Input
            label={`3.${groupNameLabel}`}
            ref={nameInputRef}
            placeholder={enterPlaceholder}
            value={detail?.name}
          />
      </Grid>
      <Grid item xs={12} style={{ paddingBottom: "18px" }}>
          <Input
            label={`4.${slugLabel}`}
            ref={slugInputRef}
            placeholder={enterPlaceholder}
            value={detail?.slug}
          />
      </Grid>
      <Grid item xs={12} className="add-group-system_select">
      
          <SelectStatusType
            label={`4.${statusInputLabel}`}
            ref={statusSelectRef}
            value={selectedStatus?.name}
          />
      </Grid>
      <Grid item xs={12}>
        <Grid container className="form-add-group-action">
          <Grid item>
            <Box component="div" className="add-cancel-box">
              <Button onClick={onClose} variant="contained" className="cancel-btn">
                {cancelCaption}
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box component="div" className="add-save-box">
              <Button onClick={handleSave} variant="contained" className="save-btn">
                {saveCaption}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>}</>
    );
}

export default AddNewFormGroup;