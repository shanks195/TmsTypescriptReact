import { useRef,FunctionComponent } from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import clsx from "clsx";
import CardOutside from "views/components/layout/CardOutside";
import CardInline from "views/components/layout/CardInline";
import Checkbox, { CheckboxRef} from "views/components/base/Checkbox";
import { useTranslation } from "react-i18next";
import Button from '@mui/material/Button';
import { IMetadataBody } from 'types/models/create-metadata';
import { useDispatch, useSelector } from 'react-redux';
import { createMetadata } from 'features/create-metadata/store/slice';
import SelectStatusType, {SelectStatusTypeRef} from 'views/components/layout/SelectStatusType';
import SelectMetadataGroups, {SelectMetadataGroupsRef} from 'views/components/layout/SelectMetadataGroups';
import SelectInputTypes, {SelectInputTypesRef} from 'views/components/layout/SelectInputTypes';
import TextAreaDebounce,{TextAreaDebouceRef} from 'views/components/base/TextAreaDebounce';
import { getStatusType } from 'features/status-type/store/slice';
import { updateMetadata } from 'features/update-metadata/store/slice';
import { useParams } from 'react-router-dom';
import { IMetadataParams } from './../index';
import history from 'app/history';
import PAGE_URL from 'app/PageURL';

import metadataAddNewStyle from './styles'
import { fetchMetadata, getDetailMetadata } from 'features/metadata/store/slice';
import Input,{ InputRef } from 'views/components/base/Input';

interface AddMetadataProps{
    isUpdate:boolean
}

interface AddMetadataComponent extends FunctionComponent<AddMetadataProps> {}

const AddMetadataForm: AddMetadataComponent = (props) => {
    const  {isUpdate} = props
    const classes = metadataAddNewStyle()

    const MetadataAddNewClass = clsx(classes.root, "mscb-metadata-add-new");
    const {id} = useParams() as IMetadataParams

    const dispatch=useDispatch()

    const { t } = useTranslation();
    const metadataSettingTitle = t('Pages.Metadata.Setting.Title');
    const basicInfoTitle = t('Pages.Metadata.Basic.Title');
    const cancelCaption = t('Common.Button.Canceled.Caption');
    const saveCaption = t('Common.Button.Save.Caption');
    const codeLabel = t('Pages.Metadata.Code.Label');
    const metadataNameLabel = t('Pages.Metadata.Name.Label');
    const statusLabel = t('Common.Status.Label');
    const groupLabel = t('Pages.Metadata.Group.Label');
    const typeLabel = t('Pages.Layout.Group');
    const allowLabel = t('Pages.Metadata.Allow.Label');
    const noteLabel = t('Pages.Metadata.Note.Label');

    const codeInputRef = useRef<InputRef>(null);
    const nameInputRef = useRef<InputRef>(null);
    const statusSelectRef = useRef<SelectStatusTypeRef>(null);
    const groupSelectRef = useRef<SelectMetadataGroupsRef>(null);
    const typeSelectRef = useRef<SelectInputTypesRef>(null);
    const allowCheckboxRef = useRef<CheckboxRef>(null);
    const noteInputRef = useRef<TextAreaDebouceRef>(null);
    const detail = useSelector(getDetailMetadata)
    const statusType = useSelector(getStatusType)
    const handleCreateUpdateMetadata=()=>{
        const bodyData={
            "code": codeInputRef.current?.getValue() ,                            // Required - Code of metadata
            "name": nameInputRef.current?.getValue(),                             // Required - Name of metadata
            // list_c_system_type: ["CRM"],                                        // Required - system_type of metadata. In range [1:3] with 1:CRM, 2:LOS, 3:HRM
            "active_flag": statusSelectRef.current?.getValue()?.id,    // Required - active_flag of metadata
            "note": noteInputRef.current?.getValue(),                             // Required - note of metadata (Nullable)
            "output_edit_flag": allowCheckboxRef.current?.getChecked()[0],        // Required - output_edit_flag of metadata
            "metadata_group_id": groupSelectRef.current?.getValue()?.id,              // Required - metadata_group_id of metadata
            "input_type_format_id": typeSelectRef.current?.getValue()?.id             // Required - input_type_format_id of metadata
          } as IMetadataBody 
          console.log('isUpdate',isUpdate);
          
        if(isUpdate){
            console.log('isUpdate',isUpdate);
            dispatch(updateMetadata({data:bodyData,id:id}))
        }
        else{
            dispatch(createMetadata(bodyData))
        }
        dispatch(fetchMetadata({
            page: 1, limit: 15, order_by: "asc" }))
    }
    // noteInputRef.current?.setValue(detail?.note ?? '')
    const selectedStatus = statusType.find(o => o.id === detail?.active_flag )
    return (
        <Box component="div" className={MetadataAddNewClass}>
            <CardOutside label={metadataSettingTitle}>
                <CardInline 
                    title={`I. ${basicInfoTitle}`}
                    className="basic-info-card-inline"
                >
                    <Grid container spacing={3} style={{paddingBottom: "20px"}}>
                        <Grid item xs={4}>
                                <Input
                                    className="in-code" 
                                    placeholder={codeLabel}
                                    ref={codeInputRef}
                                    label={`1.${codeLabel}`}
                                    value={detail?.code ??''}
                                    disabled={isUpdate}
                                    type="text"
                                    required
                                />
                        </Grid>
                        <Grid item xs={4}>
                                <Input 
                                    className="in-name" 
                                    placeholder={metadataNameLabel}
                                    ref={nameInputRef} 
                                    label={`2.${metadataNameLabel}`}
                                    value={detail?.name}
                                    type="text"
                                    required
                                />

                        </Grid>
                        <Grid item xs={4}>
                                <SelectStatusType 
                                    label={`3.${statusLabel}`} 
                                    ref={statusSelectRef} 
                                    value={selectedStatus?.name}
                                    required
                                />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{paddingBottom: "20px"}}>
                        <Grid item xs={4}>
                                <SelectMetadataGroups 
                                label={`4.${groupLabel}`} 
                                ref={groupSelectRef} 
                                value={detail?.metadata_group_id} 
                                required/>

                        </Grid>
                        <Grid item xs={4}>
                                <SelectInputTypes 
                                    label={`5.${typeLabel}`}
                                    ref={typeSelectRef} 
                                    value={detail?.input_type_format_id}
                                    required
                                />
                        </Grid>
                        <Grid item xs={4}>            
                                <Checkbox className="check-access_modify"
                                    label={`6.${allowLabel}`}
                                    ref={allowCheckboxRef}
                                    options={[{value: 1, label: "Có"}]}
                                    checked={detail?.output_edit_flag}
                                    value={1}
                                />
                        </Grid>
                        <Grid item xs={12}>
                                <TextAreaDebounce 
                                    label={`7.${noteLabel}`}
                                    ref={noteInputRef}
                                    placeholder={noteLabel} 
                                    value={detail?.note}
                                />
                        </Grid>
                    </Grid>
                </CardInline>
                <Grid item xs={12}>
                    <Grid container className="add-metadata-form-action">
                        <Grid item>
                            <Box component="div" className="add-cancel-box">
                                <Button variant="contained" className="cancel-btn" onClick={()=>{
                                    history.push(PAGE_URL.V2.Metadata.main)
                                }}>
                                    {cancelCaption}
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box component="div" className="add-save-box">
                                <Button variant="contained" className="save-btn" onClick={handleCreateUpdateMetadata}>{saveCaption}</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </CardOutside>    
        </Box>
    )
}

export default AddMetadataForm;
