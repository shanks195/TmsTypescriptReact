import { ForwardRefRenderFunction, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { formatPath, getQueryString } from "utils";
import { VscSearch } from 'react-icons/vsc';
import { FaInfoCircle } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import Input, { InputRef } from "views/components/base/Input";
import Select, { SelectRef } from 'views/components/base/Select';
import clsx from "clsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import CardOutside from "views/components/layout/CardOutside";
import InputDate, { InputDateRef } from 'views/components/base/Date';
import formTableStyle from './styles';
import DataTable from "./DataTable";
import PAGE_URL from "app/PageURL";
import { fetchTemplateList, getTemplateListCurrentPage, getTemplateListEndDate, getTemplateListLimit, getTemplateListName, getTemplateListSort, getTemplateListStartDate } from "features/templates/store/slice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export interface OperateTableRef {}

export interface OperateTableProps {
  folderId: number;
}

export interface OperatetaTableComponent extends ForwardRefRenderFunction<OperateTableRef, OperateTableProps> { }

const OperateTable: OperatetaTableComponent = (props, ref) => {
  const classes = formTableStyle();
  const formTableClass = clsx(classes.root, "mscb-form-table h-full");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { folderId } = props;

  const { t } = useTranslation();
  const addNewCaption = t('Common.Button.AddNew.Caption');
  const searchPlaholder = t('Pages.Layout.Reivew.Search.Label');
  const listTabTitle = t('Pages.Layout.Reivew.Form.Title');
  const listLabel = t('Pages.Layout.Reivew.List');
  const fromLabel = t('Common.From.Label');
  const toLabel = t('Common.To.Label');

  const searchInput = useRef<InputRef>(null);
  const sortSelectRef = useRef<SelectRef>(null);
  const startDateRef = useRef<InputDateRef>(null);
  const endDateRef = useRef<InputDateRef>(null);

  //get selector
  const currentLimit = useSelector(getTemplateListLimit) ?? 15;
  const currentPage = useSelector(getTemplateListCurrentPage) ?? 1;
  const currentSort = useSelector(getTemplateListSort) ?? 0;
  const currentKeyword = useSelector(getTemplateListName);
  const currentStartDate = useSelector(getTemplateListStartDate);
  const currentEndDate = useSelector(getTemplateListEndDate);

  const changeSort = () => {
    const dataQuery = {
      folder_id: folderId,
      limit: currentLimit,
      ...(currentKeyword.length) && {name: currentKeyword},
      page: currentPage,
      sort: Number(sortSelectRef.current?.getValue()) ?? 0,
      ...(currentStartDate.length) && {start_date: currentStartDate},
      ...(currentEndDate.length) && {end_date: currentEndDate},
    }
    navigate(`?${getQueryString(dataQuery)}`);
    dispatch(fetchTemplateList(dataQuery))
  }

  const searchTemplate = () => {
    const keyword = searchInput.current?.getValue() ?? '';
    const dataQuery = {
      folder_id: folderId,
      limit: currentLimit,
      ...(keyword.length) && {name: keyword},
      page: 1,
      sort: currentSort,
      ...(currentStartDate.length) && {start_date: currentStartDate},
      ...(currentEndDate.length) && {end_date: currentEndDate},
    }
    navigate(`?${getQueryString(dataQuery)}`);
    dispatch(fetchTemplateList(dataQuery))
  }

  const changeStartDate = (newValue: Date | null) => {
    const startDate = moment(newValue, 'DD-MM-YYYY', true).isValid() ? moment(newValue).format('YYYY-MM-DD') : '';
    const dataQuery = {
      folder_id: folderId,
      limit: currentLimit,
      ...(currentKeyword.length) && {name: currentKeyword},
      page: 1,
      sort: currentSort,
      ...(startDate.length) && {start_date: startDate},
      ...(currentEndDate.length) && {end_date: currentEndDate},
    }
    navigate(`?${getQueryString(dataQuery)}`);
    dispatch(fetchTemplateList(dataQuery));
  }

  const changeEndDate = (newValue: Date | null) => {
    const endDate = moment(newValue, 'DD-MM-YYYY', true).isValid() ? moment(newValue).format('YYYY-MM-DD') : '';
    const dataQuery = {
      folder_id: folderId,
      limit: currentLimit,
      ...(currentKeyword.length) && {name: currentKeyword},
      page: 1,
      sort: currentSort,
      ...(currentStartDate.length) && {start_date: currentStartDate},
      ...(endDate.length) && {end_date: endDate},
    }
    navigate(`?${getQueryString(dataQuery)}`);
    dispatch(fetchTemplateList(dataQuery));
  }

  return (
    <Box component="div" className={formTableClass}>
      <Box component="div" className="mscb-form-search-bar flex-row">
        <Input
          ref={searchInput}
          className="input-search"
          placeholder={searchPlaholder}
          value={currentKeyword}
        />
        <Button className="btn-search" onClick={searchTemplate}>
          <VscSearch size="19px" color="#fff" />
        </Button>
      </Box>
      <Link to={formatPath(PAGE_URL.V2.Operate.Detail.init)}>
        <Button className="add-new-button">
          {addNewCaption}
        </Button>
      </Link>
      <Box component="div" className="mscb-form-icon-box flex-center">
        <FaInfoCircle size="17px" color="var(--mscb-danger)" />
      </Box>
      <CardOutside label={listTabTitle} className="card-form-list ">
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} className="flex-row justify-between">
                <Box
                  component="div"
                  className="mscb-form-list-title text-upper"
                >
                  <Typography variant="h6" color="var(--mscb-black)">
                    {listLabel}
                  </Typography>
                </Box>
                <Box
                  component="div"
                  className="mscb-form-toolbar-table flex-row items-center justify-center"
                >
                  <Box component="div" className="mscb-toolbar-sort-box">
                    <Select
                      ref={sortSelectRef}
                      options={[
                        { value: 0, label: "Sắp xếp từ A-Z" },
                        { value: 1, label: "Sắp xếp từ Z-A" },
                      ]}
                      value={currentSort}
                      onChange={changeSort}
                    />
                  </Box>
                  <div className="border-right"></div>
                  <Box component="div" className="mscb-toolbar-label-box">
                    <Typography variant="subtitle2" color="var(--mscb-black)">
                      {fromLabel}
                    </Typography>
                  </Box>
                  <Box component="div" className="mscb-toolbar-picker-box">
                    <InputDate ref={startDateRef} value={new Date(currentStartDate)} onChange={changeStartDate} />
                  </Box>
                  <Box component="div" className="mscb-toolbar-label-box">
                    <Typography variant="subtitle2" color="var(--mscb-black)">
                      {toLabel}
                    </Typography>
                  </Box>
                  <Box component="div" className="mscb-toolbar-picker-box">
                    <InputDate ref={endDateRef} value={new Date(currentEndDate)} onChange={changeEndDate} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{marginTop: '20px'}}>
                <DataTable folderId={folderId}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardOutside>
    </Box>
  );
};

export default OperateTable;
