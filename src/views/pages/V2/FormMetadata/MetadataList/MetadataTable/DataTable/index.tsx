import { ForwardRefRenderFunction, useCallback, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { BsThreeDots } from 'react-icons/bs';
import clsx from "clsx";
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import dataTableStyle from "./styles";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Empty from "views/components/layout/Empty";
import TableSticky from "views/components/layout/TableSticky";
import { IoMdSettings } from "react-icons/io";
import {
    clearDetail,
    fetchMetadata,
    getDetailMetadata,
    getMetadataCurrentPage,
    getMetadataLimit,
    getMetadataList,
    getMetadataTotalPage,
    isLoadingMetadata,
    setMetadataCurrentPage,
    // deleteMetadataAction,
} from "features/metadata/store/slice";
import PAGE_URL from 'app/PageURL';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { formatPath, getQueryString, getSearchPage, getSearchPageString } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "views/components/layout/Pagination";
import Loading from "views/components/base/Loading";
import { useTranslation } from "react-i18next";
import { IInitPage } from "types/models/MetadataList";

export interface DataTableRef {
}
export interface DataTableProps {
    deleteItem(id:string):void
}

export interface DataTableComponent extends ForwardRefRenderFunction<DataTableRef, DataTableProps> { }
const DataTable: DataTableComponent = (props, ref) => {
    const  {deleteItem} = props
    const mounted = useRef(false);
    const metadatas = useSelector(getMetadataList);
    const loading = useSelector(isLoadingMetadata);
    const currentPage = useSelector(getMetadataCurrentPage);
    const totalPage = useSelector(getMetadataTotalPage);
    const limit = useSelector(getMetadataLimit);
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const classes = dataTableStyle();
    const DataTableClass = clsx(classes.root, "mscb-data-table");
    const detail = useSelector(getDetailMetadata)

    const { t } = useTranslation();
    const sttHeader = t('Pages.Metadata.Stt.Header');
    const codeHeader = t('Pages.Metadata.Code.Header')
    const nameHeader = t('Pages.Metadata.Name.Header');
    const typeHeader = t('Pages.Metadata.Type.Header');
    const formNumHeader = t('Pages.Metadata.FormNum.Header');
    const systemHeader = t('Pages.Metadata.System.Header');
    const groupHeader = t('Pages.Metadata.Group.Header');
    const statusHeader = t('Pages.Metadata.Status.Header')

    const [newCurrentPage, setNewCurrentPage] = useState<number>(1);
    const [newLimit, setNewLimit] = useState<number>(limit);

    useEffect(() => {
        currentPage > 0 && dispatch(fetchMetadata({
            page: getSearchPage(search, 'page'),
            input_type_id: getSearchPageString(search, 'input_type_id').trim().length <= 0 ? undefined : getSearchPageString(search, 'input_type_id'),
            active_flag: getSearchPageString(search, 'active_flag').trim().length <= 0 ? undefined : getSearchPageString(search, 'active_flag'),
            name: getSearchPageString(search, 'name').trim().length <= 0 ? undefined : getSearchPageString(search, 'name'),
            list_c_system_type: getSearchPageString(search, 'list_c_system_type').trim().length <= 0 ? undefined : getSearchPageString(search, 'list_c_system_type'),
            limit: newLimit,
            order_by: "asc"
        }));
        setNewCurrentPage(getSearchPage(search, 'page'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);


    const handlePageFromURL = useCallback(() => {
        const urlPage = getSearchPage(search, 'page');
        urlPage === currentPage || (mounted.current && dispatch(setMetadataCurrentPage(urlPage)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        mounted.current && newCurrentPage > 0 && handlePageFromURL();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    useEffect(() => {
        mounted.current = true;
        handlePageFromURL();
    });


    useEffect(() => {
        detail && dispatch(clearDetail())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderStatusContent = (status: boolean) => {
        if (!status) {
            return (
                <Box component="div">
                    <Typography variant="subtitle2" className="table-col-status-stop">Dừng</Typography>
                </Box>
            )
        }
        return (
            <Box component="div">
                <Typography variant="subtitle2" className="table-col-status-activate">Hoạt động</Typography>
            </Box>
        )
    }

    const handleChangeLimit = (limit: number) => {
        const dataQuery = {
            "page": 1,
            "input_type_id": getSearchPageString(search, 'input_type_id').trim().length <= 0 ? undefined : getSearchPageString(search, 'input_type_id'),
            "active_flag": getSearchPageString(search, 'active_flag').trim().length <= 0 ? undefined : getSearchPageString(search, 'active_flag'),
            "name": getSearchPageString(search, 'name').trim().length <= 0 ? undefined : getSearchPageString(search, 'name'),
            "list_c_system_type": getSearchPageString(search, 'list_c_system_type').trim().length <= 0 ? undefined : getSearchPageString(search, 'list_c_system_type'),
            "limit": limit,
            "order_by": "asc"
        }
        dispatch(fetchMetadata(dataQuery as IInitPage))
        setNewLimit(limit);
    }

    const handleChangePage = (value: number) => {
        const dataQuery = {
            "page": value,
            "input_type_id": getSearchPageString(search, 'input_type_id').trim().length <= 0 ? undefined : getSearchPageString(search, 'input_type_id'),
            "active_flag": getSearchPageString(search, 'active_flag').trim().length <= 0 ? undefined : getSearchPageString(search, 'active_flag'),
            "name": getSearchPageString(search, 'name').trim().length <= 0 ? undefined : getSearchPageString(search, 'name'),
            "list_c_system_type": getSearchPageString(search, 'list_c_system_type').trim().length <= 0 ? undefined : getSearchPageString(search, 'list_c_system_type'),
            "limit": newLimit,
            "order_by": "asc"
        }
        navigate(`?${getQueryString(dataQuery)}`)
        dispatch(fetchMetadata(dataQuery as IInitPage))
        setNewCurrentPage(value)
    }
    const renderActionContent = (id: string | number) => {
        return (
            <Box component='div' >
                <PopupState variant="popover">
                    {(popupState) => (
                        <Box component='div'>
                            <Button variant="text" {...bindTrigger(popupState)}>
                                <BsThreeDots color="var(--mscb-black)" />
                            </Button>
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <Box component="div" className="flex-column">
                                    <Button variant="text"  >
                                        <Link to={(formatPath(PAGE_URL.V2.Metadata.detail, id))}>Chỉnh sửa</Link>
                                    </Button>
                                    <Button onClick={()=>{
                                        deleteItem(id.toString())
                                        popupState.close()
                                    }} variant="text" className="delete-button" style={{ color: 'var(--mscb-danger)' }}>
                                        Xóa
                                    </Button>
                                </Box>
                            </Popover>
                        </Box>
                    )}
                </PopupState>
            </Box>
        )
    }

    return (
        <Box component="div" className={DataTableClass}>
            <TableSticky
                className="mscb-table-metadata "
            >
                <TableHead>
                    <TableRow>
                        <TableCell width='4%' className="text-center">{sttHeader}</TableCell>
                        <TableCell width='13%'>{codeHeader}</TableCell>
                        <TableCell width='13%'>{nameHeader}</TableCell>
                        <TableCell width='13%'>{typeHeader}</TableCell>
                        <TableCell width='13%' className="text-right"  >{formNumHeader}</TableCell>
                        <TableCell width='11%' className='text-center'>{systemHeader}</TableCell>
                        <TableCell width='19%'>{groupHeader}</TableCell>
                        <TableCell width='13%' className="text-center">{statusHeader}
                            {/* <Button>
                                <FaSort className="icon-sort" color="var(--mscb-primary)" size="12px" />
                            </Button> */}
                        </TableCell>
                        <TableCell width='3%' className="text-right" ><IoMdSettings color="var(--mscb-primary)" /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(() => {
                        if (loading) {
                            return <TableRow>
                                <TableCell colSpan={12}>
                                    <Loading className="py-4" />
                                </TableCell>
                            </TableRow>
                        }


                        if (!metadatas.items.length) {
                            return <TableRow>
                                <TableCell colSpan={12}>
                                    <Empty>
                                        <p>Không có dữ liệu để hiển thị</p>
                                    </Empty>
                                </TableCell>
                            </TableRow>
                        }
                        return metadatas.items.map((meta, i) => {

                            return <TableRow key={meta.id}   >
                                <TableCell className="text-center">
                                    {i + 1}
                                </TableCell>
                                <TableCell className="font-medium td-color" >
                                    {/* {meta.code} */}
                                    <Link to={formatPath(PAGE_URL.V2.Metadata.detail, meta.id)}>{meta.code}</Link>
                                </TableCell>
                                <TableCell className="font-medium td-color" >
                                    {meta.name}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {meta.input_type_name}
                                </TableCell>
                                <TableCell className="font-medium text-right">
                                    {meta.number_template}
                                </TableCell>
                                <TableCell className="font-medium text-center">
                                    {
                                        meta.list_system_type_name?.toString()
                                    }
                                </TableCell>
                                <TableCell className="font-medium">
                                    {meta.metadata_group_name}
                                </TableCell>
                                <TableCell className="font-medium text-center">
                                    {renderStatusContent(meta.active_flag)}
                                </TableCell>
                                <TableCell className="font-medium text-right">
                                    {renderActionContent(meta.id)}
                                </TableCell>

                            </TableRow>
                        });
                    })()}
                </TableBody>
            </TableSticky>
            {/* {
                totalPage !== 1 ? ( */}
            <Pagination
                totalPage={totalPage}
                currentPage={newCurrentPage}
                limit={limit}
                className="metadata-paging"
                onLimit={handleChangeLimit}
                onChange={handleChangePage}
            />
            {/* ) : null
            } */}
        </Box>

    );
};

export default DataTable;
