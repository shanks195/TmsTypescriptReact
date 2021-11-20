import { ForwardRefRenderFunction, useCallback, useEffect, useRef } from "react";
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
import history from "history";

import {
  getTemplateListLimit,
  setTemplateListCurrentPage,
  fetchTemplateList,
  getTemplateListTotalPage,
  getTemplateListCurrentPage,
  deleteTemplateListAction,
  getTemplatesList,
  isLoadingTemplatesList,
  getTemplateListSort,
  setTemplateListSort,
  setTemplateListLimit,
  getTemplateListName,
  setTemplateListName,
  getTemplateListStartDate,
  getTemplateListEndDate,
  setTemplateListStartDate,
  setTemplateListEndDate
} from "features/templates/store/slice";
import PAGE_URL from 'app/PageURL';
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { converStringDate, converStringDateTime, formatPath, getOrdinalNumber, getQueryString, getSearchPage, getSearchPageString } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "views/components/layout/Pagination";
import Loading from "views/components/base/Loading";
import { useTranslation } from "react-i18next";
import { FaEdit, FaFileWord, FaLock, FaUnlock } from "react-icons/fa";

export interface DataTableRef {
}
export interface DataTableProps {
  folderId: number;
}

export interface DataTableComponent extends ForwardRefRenderFunction<DataTableRef, DataTableProps> { }
const DataTable: DataTableComponent = (props, ref) => {
  const { folderId } = props;
  const { pathname, search } = useLocation();
  const mounted = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = dataTableStyle();
  const DataTableClass = clsx(classes.root, "mscb-data-table h-full");

  // const detail = useSelector(getDetailTemplateList);
  const TemplatesList = useSelector(getTemplatesList);
  const loading = useSelector(isLoadingTemplatesList);
  const currentPage = useSelector(getTemplateListCurrentPage);
  const currentSort = useSelector(getTemplateListSort);
  const totalPage = useSelector(getTemplateListTotalPage);
  const currentLimit = useSelector(getTemplateListLimit);
  const currentKeyword = useSelector(getTemplateListName);
  const startDate = useSelector(getTemplateListStartDate);
  const endDate = useSelector(getTemplateListEndDate);
  console.log('TemplatesList: ', TemplatesList);

  const { t } = useTranslation();
  const sttHeader = t('Pages.Group.Stt.Header');
  const nameHeader = t('Pages.Layout.Reivew.Name.Header')
  const versionHeader = t('Pages.Layout.Reivew.Version.Header');
  const updateHeader = t('Pages.Layout.Reivew.Update.Header');
  const actionHeader = t('Pages.Layout.Reivew.Action.Header');
  const systemHeader = t('Pages.Layout.Reivew.System.Header');
  const labelEmptyTable = t('Pages.Init.Table.Emty');

  useEffect(() => {
    const dataQuery = {
      folder_id: folderId,
      limit: currentLimit,
      ...(currentKeyword.length) && { name: currentKeyword },
      page: currentPage,
      sort: currentSort,
      ...(startDate.length) && { start_date: startDate },
      ...(endDate.length) && { end_date: endDate },
    }
    currentPage > 0 && dispatch(fetchTemplateList(dataQuery));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);
  
  const handlePageFromURL = useCallback(() => {
    const urlLimit = +getSearchPageString(search, 'limit');
    urlLimit !== 0 && (urlLimit === currentLimit || (mounted.current && dispatch(setTemplateListLimit(urlLimit))));

    const urlName = getSearchPageString(search, 'name');
    urlName === currentKeyword || (mounted.current && dispatch(setTemplateListName(urlName)));

    const urlPage = getSearchPage(search, 'page');
    urlPage === currentPage || (mounted.current && dispatch(setTemplateListCurrentPage(urlPage)));

    const urlSort = +getSearchPageString(search, 'sort');
    urlSort === currentSort || (mounted.current && dispatch(setTemplateListSort(urlSort)));

    const urlStartDate = getSearchPageString(search, 'start_date');
    urlStartDate.length && (urlStartDate === startDate || (mounted.current && dispatch(setTemplateListStartDate(urlStartDate))));

    const urlEndDate = getSearchPageString(search, 'end_date');
    urlEndDate.length && (urlEndDate === endDate || (mounted.current && dispatch(setTemplateListEndDate(urlEndDate))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    mounted.current && currentPage > 0 && handlePageFromURL();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    mounted.current = true;
    handlePageFromURL();
  });

  // const renderStatusContent = (status: boolean,id:string) => {
  //   return (
  //     <Box component='div' className="mscb-action-status flex-row justify-center">
  //       {!status ?
  //         (<Box component='div' className="mscb-lock-icon-box flex-center">
  //           <FaLock size="18px" color="rgba(145,145,145,0.8)" />
  //         </Box>) : (<Box component='div' className="mscb-lock-icon-box flex-center">
  //           <FaUnlock size="18px" color="var(--mscb-success)" />
  //         </Box>)
  //       }
  //     </Box>
  //   )
  // }

  const handleChangeLimit = (newLimit: number) => {
    const dataQuery = {
      folder_id: folderId,
      limit: newLimit,
      ...(currentKeyword.length) && { name: currentKeyword },
      page: 1,
      sort: currentSort,
      ...(startDate.length) && { start_date: startDate },
      ...(endDate.length) && { end_date: endDate },
    }
    navigate(`?${getQueryString(dataQuery)}`);
    dispatch(fetchTemplateList(dataQuery));
  }

  const handleChangePage = (newPage: number) => {
    const dataQuery = {
      folder_id: folderId,
      limit: currentLimit,
      ...(currentKeyword.length) && { name: currentKeyword },
      page: newPage,
      sort: currentSort,
      ...(startDate.length) && { start_date: startDate },
      ...(endDate.length) && { end_date: endDate },
    }
    navigate(`?${getQueryString(dataQuery)}`)
    dispatch(fetchTemplateList(dataQuery))
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
                  horizontal: 'center',
                }}
              >
                <Box component="div" className="flex-column">
                  <Button variant="text"  >
                    <Link to={(formatPath(PAGE_URL.V2.Metadata.detail, id))}>Chỉnh sửa</Link>
                  </Button>
                  <Button onClick={() => {
                    dispatch(deleteTemplateListAction(id as string))
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
            <TableCell width='5%' className="text-center">{sttHeader}</TableCell>
            <TableCell width='18%'>{nameHeader}</TableCell>
            <TableCell width='8%'>{versionHeader}</TableCell>
            <TableCell width='12%'>{updateHeader}</TableCell>
            <TableCell width='6%'>{actionHeader}</TableCell>
            <TableCell width='8%'>{systemHeader}</TableCell>
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

            if (!TemplatesList.items.length) {
              return <TableRow>
                <TableCell colSpan={12}>
                  <Empty>
                    <p>{labelEmptyTable}</p>
                  </Empty>
                </TableCell>
              </TableRow>
            }

            return TemplatesList.items.map((template, i) => {
              return <TableRow key={template.id}   >
                <TableCell className="text-center">
                  {getOrdinalNumber(currentPage, currentLimit, i)}
                </TableCell>

                <TableCell className="font-medium td-color" >
                  <Box component='div' className="mscb-document-name flex-row">
                    <Box component='div' className="mscb-document-icon-box">
                      <FaFileWord size='20px' color="#3D96EE" />
                    </Box>
                    <Box component='div' className="mscb-document-label-box">
                      <Typography
                        variant="subtitle2"
                        color="var(--mscb-primary)"
                        className="mscb-document-label"
                      >
                        <Link to={formatPath(PAGE_URL.V2.Metadata.review, template.id)}>{template.name}</Link>
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell className="font-medium">
                  <Box component='div' className="mscb-version-name-box">
                    <Typography
                      variant="subtitle2"
                      color="var(--mscb-black)"
                      className="mscb-version-name-label"
                    >
                      {versionHeader} {template.version}
                    </Typography>
                  </Box>
                  <Box component='div' className="mscb-version-date-box">
                    <Typography
                      variant="body2"
                      color="var(--mscb-danger)"
                      className="mscb-version-date-label"
                    >
                      {converStringDate(template.start_date)}
                    </Typography>
                  </Box>

                </TableCell>

                <TableCell className="font-medium text-left">
                  <Box component='div' className="mscb-update-name-box">
                    <Typography
                      variant="subtitle2"
                      color="var(--mscb-black)"
                      className="mscb-update-name-label"
                    >
                      {template.updated_by}
                    </Typography>
                  </Box>
                  <Box component='div' className="mscb-update-date-box">
                    <Typography
                      variant="body2"
                      color="rgba(145,145,145,0.8)"
                      className="mscb-update-date-label"
                    >
                      {converStringDateTime(template.updated_at)}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell className="font-medium">
                  <Box component='div' className="mscb-action-status flex-row">
                    <Box component='div' className="mscb-edit-icon-box flex-center">
                      <Link className="link-size" to={formatPath(PAGE_URL.V2.Operate.Detail.edit, template.id)}>
                        <FaEdit size="18px" color="var(--mscb-primary)"/>
                      </Link>
                    </Box>
                    {!template.c_status ?
                      (<Box component='div' className="mscb-lock-icon-box flex-center">
                        <FaLock size="18px" color="rgba(145,145,145,0.8)" />
                      </Box>) : (<Box component='div' className="mscb-lock-icon-box flex-center">
                        <FaUnlock size="18px" color="var(--mscb-success)" />
                      </Box>)
                    }
                  </Box>
                </TableCell>

                <TableCell className="font-medium text-left">
                  {
                    template.list_system_type_name?.toString()
                  }
                </TableCell>

                {/* <TableCell className="font-medium text-center">
                                    {renderStatusContent(template.active_flag)}
                                </TableCell> */}
                <TableCell className="font-medium text-right">
                  {renderActionContent(template.id)}
                </TableCell>

              </TableRow>
            });
          })()}
        </TableBody>
      </TableSticky>
      {(() => {
        if (TemplatesList.items.length) {
          return <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            limit={currentLimit}
            className="templatedata-paging"
            onLimit={handleChangeLimit}
            onChange={handleChangePage}
          />
        }
      })()}

    </Box>

  );
};

export default DataTable;
