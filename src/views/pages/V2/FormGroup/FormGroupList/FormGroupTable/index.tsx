import {
    //useRef,
    useState, useEffect, ForwardRefRenderFunction
} from 'react';
import Grid from "@mui/material/Grid";
import DataTable from "./DataTable";
import Typography from "@mui/material/Typography";
import { FaSquareFull } from 'react-icons/fa';
// import { VscSearch } from 'react-icons/vsc';
//import { InputRef } from "views/components/base/Input";
import { IoMdClose } from 'react-icons/io';
import CardOutside from "views/components/layout/CardOutside";
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Button from '@mui/material/Button';
import clsx from "clsx";
import groupTableStyle from './styles';

import AddNewFormGroup from './AddNewFormGroup'
import history from 'app/history';
import PAGE_URL from 'app/PageURL';
import { clearDetail } from 'features/templatedata/store/slice';
import { useDispatch } from 'react-redux';
import { formatPath } from 'utils';
import { fetchTemplateDetails, fetchTemplateDetailsSuccess } from "features/operate-details-info/store/slice";
import { useParams, useNavigate } from 'react-router-dom';
interface IParams {
    id: string;
}
export interface TemplateDataTableRef {

}
export interface TemplateDataTableProps {

}

export interface GroupTableComponent extends ForwardRefRenderFunction<TemplateDataTableProps, TemplateDataTableRef> { }

const GroupTable: GroupTableComponent = (props) => {
    const classes = groupTableStyle()
    //const searchInput = useRef<InputRef>(null);
    const [isOpenLevelModal, setIsOpenLevelModal] = useState<boolean>(false);
    const [isCreate, setIsCreate] = useState<boolean>(false)
    const dispatch = useDispatch()
    //Translation
    const { t } = useTranslation();
    const addNewCaption = t('Common.Button.AddNew.Caption');
    const modalTitel = t('Pages.Group.Add.Title')
    //  const searchPlaholder = t('Common.Enter.Name');
    const listTabTitle = t('Pages.Group.List.Label');
    const listLabel = t('Common.Input.List.Label');
    const statusLabel = t('Common.Status.Label');
    const activateLabel = t('Pages.Metadata.Activate.Label');
    const stopLabel = t('Common.Stop.Label');
    const { id } = useParams() as IParams
    const MetadataTableClass = clsx(classes.root, "mscb-group-table");
    const navigate = useNavigate()

    const onCloseLevelModal = () => {
        setIsOpenLevelModal(false);
        navigate('/form-group')
        dispatch(clearDetail())
    }
    const handleCloseWithPrevent = (event: any, reason: any) => {
        if (reason !== 'backdropClick') {
            setIsOpenLevelModal(false);
            dispatch(clearDetail())
        }
    };
    const onOpenLevelModal = (template_id?: number) => {
        dispatch(fetchTemplateDetails(template_id?.toString() ?? ''));
        setIsOpenLevelModal(true);
    }
    useEffect(() => {
        if (id && !id.match(/^\d+$/)) {
            navigate(formatPath(PAGE_URL.V2.FormGroup.main, ''))
        }
        else {
            // onOpenLevelModal()
        }
    })
    return (
        <Box component="div" className={MetadataTableClass}>
            {/* <Box component="div" className="mscb-group-search-bar flex-row">
                <Input
                    ref={searchInput}
                    className="input-search"
                    placeholder={searchPlaholder}
                />
                <button onClick={()=>console.log('button')} className='btn-search'>
                    <VscSearch size="19px" color="#fff"/>
                </button>
            </Box> */}
            <Button
                className="add-new-button"
                onClick={() => {
                    onOpenLevelModal()
                    setIsCreate(true)
                }}
            >
                {addNewCaption}
            </Button>
            <CardOutside
                label={listTabTitle}
                className="card-group-list"
            >
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box component="div" >
                                    <Typography variant="h6" className="mscb-group-list-title text-upper">{listLabel}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box component="div" className="mscb-group-list-status flex-row">
                                    <Typography variant="subtitle1" color="#6d6d6d">{statusLabel}:</Typography>

                                    <Typography className="mscb-group-status-activate_title" variant="subtitle2">
                                        <FaSquareFull className="mscb-group-status-activate-icon" />{activateLabel}
                                    </Typography>

                                    <Typography className="mscb-group-status-stop" variant="subtitle2">
                                        <FaSquareFull className="mscb-group-status-stop-icon" />
                                        {stopLabel}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <DataTable
                                    onOpenModal={(template_id) => {
                                        onOpenLevelModal(template_id)
                                        setIsCreate(false)
                                    }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardOutside>
            <Dialog open={isOpenLevelModal} onClose={handleCloseWithPrevent} maxWidth={"xs"}>
                <DialogTitle color="var(--mscb-primary)" className="mscb-add-modal-titel text-upper">
                    {isCreate ? modalTitel : 'Chi tiết nhóm biểu mẫu'}
                    <IconButton
                        className={classes.iconClose}
                        aria-label="close"
                        onClick={onCloseLevelModal}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8
                        }}
                    >
                        <IoMdClose />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <AddNewFormGroup is_create={isCreate} onClose={onCloseLevelModal} />
                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default GroupTable;