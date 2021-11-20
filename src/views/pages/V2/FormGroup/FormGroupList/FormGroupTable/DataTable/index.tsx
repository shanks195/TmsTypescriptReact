import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { BsThreeDots } from 'react-icons/bs';
import clsx from "clsx";
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Empty from "views/components/layout/Empty";
import TableSticky from "views/components/layout/TableSticky";
import { IoMdSettings } from "react-icons/io";
import {
    fetchTemplatedata,
    getTemplatedataCurrentPage,
    getTemplatedataLimit,
    getTemplatedata,
    getTemplatedataTotalPage,
    isLoadingTemplatedata,
    setTemplatedataCurrentPage,
    deleteTemplatedataAction,
} from "features/templatedata/store/slice";

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { formatPath, getQueryString, getSearchPage, getSearchPageString } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "views/components/layout/Pagination";
import Loading from "views/components/base/Loading";
import { useTranslation } from "react-i18next";
import dataTableStyle from "./styles";
import PAGE_URL from "app/PageURL";
import { IInitPageGroup } from "types/models/Templatedata";
import ModalConfirm from "views/components/layout/ModalConfirm";

interface DataTableProps {
    onOpenModal(template_id: number): void
}
interface DataTableComponent extends FunctionComponent<DataTableProps> { }

const DataTable: DataTableComponent = (props) => {
    const {  onOpenModal } = props
    const mounted = useRef(false);
    const Templatedata = useSelector(getTemplatedata);
    const loading = useSelector(isLoadingTemplatedata);
    const currentPage = useSelector(getTemplatedataCurrentPage);
    const totalPage = useSelector(getTemplatedataTotalPage);
    const limit = useSelector(getTemplatedataLimit);
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const classes = dataTableStyle();
    const DataTableClass = clsx(classes.root, "mscb-data-table");


    // const detail = useSelector(getTemplatedata);

    const { t } = useTranslation();
    const sttHeader = t('Pages.Group.Stt.Header');
    const codeHeader = t('Pages.Group.Code.Header')
    const parentHeader = t('Pages.Group.Parent.Header');
    const nameHeader = t('Pages.Group.Name.Header');
    const slugHeader = t('Pages.Group.Slug.Header');
    const statusHeader = t('Pages.Group.Status.Header');

    const [newCurrentPage, setNewCurrentPage] = useState<number>(1);
    const [newLimit, setNewLimit] = useState<number>(limit);
    const [isModalConfirm, setIsModalConfirm] = useState<boolean>(false);
    const [id,setId] = useState<number>(0)
    const onHandleSuccessConfirm = (id:number) =>{
        dispatch(deleteTemplatedataAction(id))
        onHandleCancelConfirm()
    }
    const onHandleCancelConfirm = () => {
        setIsModalConfirm(!isModalConfirm);
    }
    const handleOpenModalConfirm = (id:number) =>{
        setId(id)
        setIsModalConfirm(!isModalConfirm);
    }
    useEffect(() => {
        currentPage > 0 && dispatch(fetchTemplatedata({
            page: getSearchPage(search, 'page'),
            code: getSearchPageString(search,'code'),
            parent_id: getSearchPageString(search,'parent_id'),
            name: getSearchPageString(search,'name'),
            active_flag: getSearchPageString(search,'active_flag'),
            limit: limit,
            order_by: "asc"
        }));
        setNewCurrentPage(getSearchPage(search, 'page'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const handlePageFromURL = useCallback(() => {
        const urlPage = getSearchPage(search, 'page');
        urlPage === currentPage || (mounted.current && dispatch(setTemplatedataCurrentPage(urlPage)));
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
    const handleEditTable  = (id:number) =>{
        onOpenModal(id)
        navigate(formatPath(PAGE_URL.V2.FormGroup.detail,id.toString()))
    }

    const renderStatusContent = (status: boolean) => {
        if (!status) {
            return (
                <Box component="div" className="table-col-status-stop">
                    <Typography variant="subtitle2" color="var(--mscb-danger)">Dừng</Typography>
                </Box>
            )
        }
        return (
            <Box component="div" className="table-col-status-activate">
                <Typography variant="subtitle2">Hoạt động</Typography>
            </Box>
        )
    }


    const handleChangeLimit = (limit: number) => {
        dispatch(fetchTemplatedata({
            page: 1,
            code: getSearchPageString(search,'code').trim().length<= 0 ? undefined : getSearchPageString(search,'code'),
            parent_id: getSearchPageString(search,'parent_id').trim().length<= 0 ? undefined : getSearchPageString(search,'parent_id'),
            name: getSearchPageString(search,'name').trim().length<= 0 ? undefined : getSearchPageString(search,'name'),
            active_flag: getSearchPageString(search,'active_flag').trim().length<= 0 ? undefined : getSearchPageString(search,'active_flag'),
            limit: limit,
            order_by: "asc"
        }))
        setNewLimit(limit)
    }

    const handleChangePage = (value: number) => {
        console.log("code   ", )
        const dataQuery = {
            "page": value,
            "code": getSearchPageString(search,'code').trim().length<= 0 ? undefined : getSearchPageString(search,'code'),
            "parent_id": getSearchPageString(search,'parent_id').trim().length<= 0 ? undefined : getSearchPageString(search,'parent_id'),
            "name": getSearchPageString(search,'name').trim().length<= 0 ? undefined : getSearchPageString(search,'name'),
            "active_flag": getSearchPageString(search,'active_flag').trim().length<= 0 ? undefined : getSearchPageString(search,'active_flag'),
            "limit": newLimit,
            "order_by": "asc"
        }
        navigate(`?${getQueryString(dataQuery)}`);
        dispatch(fetchTemplatedata(dataQuery as IInitPageGroup))
        setNewCurrentPage(value)
    }

    const renderActionContent = (id: number) => {
        return (

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
                                    <Button variant="text" onClick={()=>{
                                        handleEditTable(id)
                                    }} >
                                        Chỉnh sửa
                                    </Button>
                                    <Button onClick={() => {
                                        handleOpenModalConfirm(id)
                                        popupState.close()
                                    }} variant="text" className="delete-button" style={{ color: 'var(--mscb-danger)' }}>
                                        Xóa
                                    </Button>
                                </Box>
                            </Popover>

                        </Box>
                    )}
                </PopupState>


        )
    }

    // const SortedIcon = () => {
    //     return <FaSort className="icon-sort" color="var(--mscb-primary)" size="12px" />;
    // }

    return (
        <Box component="div" className={`${DataTableClass}  ${limit === 10 ? 'limit-10' : 'limit-full'}`}>
            <TableSticky
                className="mscb-table-groupForm"
            >
                <TableHead>
                    <TableRow className='td-th-color'>
                        <TableCell width='6%' className="text-center">{sttHeader}</TableCell>
                        <TableCell width='15%'>{codeHeader}</TableCell>
                        <TableCell width='18%'>{parentHeader}</TableCell>
                        <TableCell width='18%'>{nameHeader}</TableCell>
                        <TableCell width='20%'>{slugHeader}</TableCell>
                        <TableCell width='15%' className='text-center'>{statusHeader}</TableCell>
                        <TableCell width='5%' className="text-right" ><IoMdSettings color="var(--mscb-primary)" /></TableCell>
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


                        if (!Templatedata.items.length) {
                            return <TableRow>
                                <TableCell colSpan={12}>
                                    <Empty>
                                        <p>Không có dữ liệu để hiển thị</p>
                                    </Empty>
                                </TableCell>
                            </TableRow>
                        }
                        return Templatedata.items.map((Template, i) => {

                            return <TableRow key={Template.id}   >
                                <TableCell className="text-center">
                                    {i + 1}
                                </TableCell>
                                <TableCell className="font-medium td-color" >
                                    <Link to={formatPath(PAGE_URL.V2.FormGroup.detail, Template.id)} onClick={() => onOpenModal(Template.id)}>{Template.code}</Link>
                                </TableCell>
                                <TableCell className="font-medium" >
                                    {Template.parent_name}
                                </TableCell>
                                <TableCell className="font-medium" >
                                    {Template.name}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {Template.slug}
                                </TableCell>
                                <TableCell className="font-medium text-center">
                                    {renderStatusContent(Template.active_flag)}
                                </TableCell>
                                <TableCell className="font-medium text-right">
                                    {renderActionContent(Template.id)}
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
                className="templatedata-paging"
                onLimit={handleChangeLimit}
                onChange={handleChangePage}
            />
                                <ModalConfirm
                                    isOpen={isModalConfirm}
                                    labelTitle="Bạn có chắc chắn muốn xóa biểu mẫu này"
                                    labelDecription="Bạn có chắc chắn muốn xóa biểu mẫu này"
                                    labelBtnSuccess="Xóa"
                                    labelBtnCancel="Hủy"
                                    onCancel={onHandleCancelConfirm}
                                    onSuccess={()=>{onHandleSuccessConfirm(id)}}
                                />
            {/* ) : null
            } */}
        </Box>

    );
};

export default DataTable;
