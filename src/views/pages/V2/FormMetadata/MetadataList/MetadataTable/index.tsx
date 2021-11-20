import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import DataTable from "./DataTable";
import Typography from "@mui/material/Typography";
import { FaSquareFull } from 'react-icons/fa';
import CardOutside from "views/components/layout/CardOutside";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Button from '@mui/material/Button';
import clsx from "clsx";
import metadataTableStyle from './styles';
import { deleteMetadataAction } from 'features/metadata/store/slice';
import { useDispatch } from 'react-redux';
import ModalConfirm from 'views/components/layout/ModalConfirm';
import { useState } from 'react';


export interface MetadataTableRef {

}
export interface MetadataTableProps {

}

export interface MetadataTableComponent extends ForwardRefRenderFunction<MetadataTableRef, MetadataTableProps> { }

const MetadataTable: MetadataTableComponent = (props, ref) => {

    const dispatch = useDispatch();
    const classes = metadataTableStyle()
    //Translation
    const { t } = useTranslation();
    const addNewCaption = t('Common.Button.AddNew.Caption');
    const listTabTitle = t('Pages.Metadata.List.Label');
    const listLabel = t('Common.Input.List.Label');
    const statusLabel = t('Common.Status.Label');
    const activateLabel = t('Pages.Metadata.Activate.Label');
    const stopLabel = t('Pages.Metadata.Stop.Label');
    const MetadataTableClass = clsx(classes.root, "mscb-metadata-table")
    
    const [isModalConfirm, setIsModalConfirm] = useState<boolean>(false);
    const [idMetadata,setIdMetadata] = useState<string>('')

    const onHandleSuccessConfirm = () =>{
        dispatch(deleteMetadataAction(idMetadata))
        onHandleCancelConfirm()
    }
    const onHandleCancelConfirm = () => {
        setIsModalConfirm(!isModalConfirm);
    }
    const handleDelete = () => {
        setIsModalConfirm(!isModalConfirm);
    }
    return (
        <Box component="div" className={MetadataTableClass}>
            <Link to="new">
                <Button
                    className="add-new-button"
                >
                    {addNewCaption}
                </Button>
            </Link>
            <CardOutside
                label={listTabTitle}
                className="card-metadata-list"
            >
                <Grid container>
                    <Grid item xs={12}>
                        <Box component="div" >
                            <Typography className="mscb-metadata-list-title text-upper" color="var(--mscb-black)">{listLabel}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box component="div" className="mscb-metadata-list-status flex-row">
                            <Typography variant="subtitle1" color="#6d6d6d">{statusLabel}:</Typography>

                            <Typography className="mscb-metadata-status-activate_title" variant="subtitle2">
                                <FaSquareFull className="mscb-metadata-status-activate-icon"  />{activateLabel}
                            </Typography>

                            <Typography className="mscb-metadata-status-stop" variant="subtitle2">
                                <FaSquareFull className="mscb-metadata-status-stop-icon" />
                                {stopLabel}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <DataTable  deleteItem={(id)=>{
                            handleDelete()
                            setIdMetadata(id)
                        }}/>
                    </Grid>
                </Grid>
                <ModalConfirm
                    isOpen={isModalConfirm}
                    labelTitle="Bạn có chắc chắn muốn xóa metadata này"
                    labelDecription="Bạn có chắc chắn muốn xóa metadata này"
                    labelBtnSuccess="Xóa"
                    labelBtnCancel="Hủy"
                    onCancel={onHandleCancelConfirm}
                    onSuccess={onHandleSuccessConfirm}
            />
            </CardOutside>
        </Box>
    )
}

export default forwardRef(MetadataTable)