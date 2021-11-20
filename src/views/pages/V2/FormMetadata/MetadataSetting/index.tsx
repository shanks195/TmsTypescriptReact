import { FC, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import clsx from "clsx";
import CardOutside from "views/components/layout/CardOutside";
import { useTranslation } from "react-i18next";
import metadataSettingStyle from './styles';

import AddMetadataForm from './AddMetadataForm';
import DiscussComponent from './Discuss';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMetadataDetail, getDetailMetadata, isFetchedDetailMetadata, isFetchingDetailMetadata } from 'features/metadata/store/slice';
import { useNavigate } from 'react-router-dom';

export interface IMetadataParams{
    id: string;
}

interface MetaDataSettingComponent extends FC {}

const MetaDataSetting: MetaDataSettingComponent = () => {

    const classes = metadataSettingStyle();
    const { t } = useTranslation();
    const dispatch= useDispatch()
    const discussCardCaption= t('Common.Discuss.Label');
    const MetadataSettingClass = clsx(classes.root, "mscb-metadata-setting");
    const { id } = useParams() as IMetadataParams;
    const detail = useSelector(getDetailMetadata)
    const fetching = useSelector(isFetchingDetailMetadata)
    const fetched  =  useSelector(isFetchedDetailMetadata)
    const navigate = useNavigate()
    

    useEffect(() => {
        console.log("id",id);
     
        if (id !== 'new'){
            if (id.match(/^\d+$/)){
                // TODO: fetch API
                !detail && !fetching && !fetched && dispatch(fetchMetadataDetail(id))
            }
            else{
                // TODO: wrong URL handle
                navigate('')
            }
        }
        else{
            console.log('Case form add new')
        }
        
    })

    return (
        <Box component="div" className={MetadataSettingClass}>
            <Grid container spacing={3}>
                <Grid item xs={9} className="mscb-add-metadata-container">
                    <AddMetadataForm isUpdate={id!=='new'}/>
                </Grid>
                <Grid item xs={3} className="mscb-discuss-metadata-card">
                    <CardOutside
                        label={discussCardCaption}
                        className="card-metadata-discuss"
                    >
                        <DiscussComponent />
                    </CardOutside>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MetaDataSetting;
