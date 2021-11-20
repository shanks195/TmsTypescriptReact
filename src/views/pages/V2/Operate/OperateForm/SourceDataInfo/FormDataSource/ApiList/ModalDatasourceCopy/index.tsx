import { 
  forwardRef, 
  ForwardRefRenderFunction, 
  useEffect,
  useState,
  useImperativeHandle,
  useRef
} from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import ScrollBar from 'react-perfect-scrollbar';
import clsx from "clsx";
import { RiFileCopy2Line } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";
import Radio from '@mui/material/Radio';
import { 
  fetchDataSouceList, 
  getDataSourceList, 
  isFetched, 
  isFetching 
} from "features/data-source-list/store/slice";
import { IDataSourceList } from "types/models/DataSourceList";
import InputDebounce, { InputDebounceRef } from "views/components/base/InputDebounce";
import Empty from "views/components/layout/Empty";
import ModalDatasourceCopyStyle from "./style";
import { Check } from "@mui/icons-material";
import { useParams } from "react-router";
import { IOperateParams } from "types/models/templateGroups";


export interface ModalDatasourceCopyProps {
  className?: string;
  open?: boolean;
  onSave?(data: IDataSourceList): void;
  onClose?():void;
}

export interface ModalDatasourceCopyRef{
  getValue(): number | undefined;
}

interface ModalDatasourceCopyComponent
  extends ForwardRefRenderFunction<ModalDatasourceCopyRef, ModalDatasourceCopyProps> {}

const ModalDatasourceCopy: ModalDatasourceCopyComponent = (props,ref) => {

  const { className, open = false, onClose, onSave } = props;

  const dispatch = useDispatch();
  const classes = ModalDatasourceCopyStyle();
  const params = useParams() as IOperateParams;
  const ModalClass = clsx(classes.root, className);
  const { t } = useTranslation();

  const searchDataSourceElement = useRef<InputDebounceRef>(null);

  const dataSourceList  = useSelector(getDataSourceList);
  const fetching = useSelector(isFetching);
  const fetched = useSelector(isFetched);

  const [CurrentValue, setCurrentValue] = useState<number | undefined>();
  const [dataSource, setDataSource] = useState<IDataSourceList[]>([]);

  useEffect(() => {

    !dataSourceList.length
    && !fetched
    && !fetching
    && dispatch(fetchDataSouceList(Number(params.id)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  useEffect(()=>{
    setDataSource(dataSourceList);
  },[dataSourceList])

  useImperativeHandle(ref, () => ({
    getValue: () => CurrentValue 
  }))

  const tableEmty = () => {
    return (
      <TableRow>
          <TableCell colSpan={8} scope="row">
              <Empty>
                Không có dữ liệu
              </Empty>
          </TableCell>
      </TableRow>
    )
  }

  const handleChangePrimary = (data: IDataSourceList) => {
    setCurrentValue(data.id)
    
  }

  const onSaveModal = () =>{
    let dataSave: IDataSourceList | undefined = dataSource.find(ds => ds.id === CurrentValue);
    onSave && onSave(dataSave ??  {} as IDataSourceList);
    setDataSource([]);
  }

  const tableRenderData = (data: IDataSourceList, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell className="border-table-cell-td" align="center">
          {data.id}
        </TableCell>

        <TableCell className="border-table-cell-td table-name" align="left">
          {data.name}
        </TableCell>

        <TableCell className="border-table-cell-td" align="center">
          <Radio
              className = {data.id === CurrentValue ? classes.radio : ""}
              checked = {data.id === Number(CurrentValue)}
              checkedIcon = {<Check />}
              value = {data.id}
              onChange = { () => {handleChangePrimary(data)} }
          />
        </TableCell>
      </TableRow>
    )
  }

  const onHandleSearchDataSource = () =>{

    let dataSourceFilter: IDataSourceList[] =[];
    let searchString =  searchDataSourceElement.current?.getValue() ?? "";

    if(searchString.length > 0){
      dataSource.forEach(ds => {
        if(!ds.name.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase())){
          dataSourceFilter.push(ds)
        }
      })

      setDataSource(dataSourceFilter);
    }
    else{
      setDataSource(dataSourceList);
    }
  }

  return (
    <Dialog 
        open={open}
        maxWidth={"sm"}
        fullWidth={true}
        className={ModalClass}
        onClose={onClose}
    >
        <DialogTitle className="ds-title">

          <Box 
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <div className="circle-bg">
              <RiFileCopy2Line />
            </div>
          </Box>

          <Typography
            sx={{ paddingX: "50px", margin: "16px 0", textAlign: "center" }}
            variant="body1"
          >
            Bạn có muốn sao chép thông tin <strong>nguồn dữ liệu</strong> cũ vào{" "}
            <strong>nguồn dữ liệu</strong> mới không ?
          </Typography>

        </DialogTitle>

        <ScrollBar
            options={{ suppressScrollX: true }}
        >
            <DialogContent className="ds-content">
              <Box className="mb-4 flex justify-between">
                <Typography variant="h6" color="#1825aa">
                  {t("Common.List").toLocaleUpperCase()}
                </Typography>

                <div className="search-bar">
                  <VscSearch className="search-icon" />
                  <InputDebounce 
                    placeholder={`${t("Common.Seach")} ...`}
                    ref={searchDataSourceElement}
                    timeout={300}
                    onDebounce={onHandleSearchDataSource}
                  />
                </div>
              </Box>

              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className="border-table-cell-th" align="center">
                        {t("Pages.Group.Stt.Header").toLocaleUpperCase()}
                      </TableCell>

                      <TableCell className="border-table-cell-th" align="center">
                        {t("Pages.Layout.EForm.TSource.ModalNameSource").toLocaleUpperCase()}
                      </TableCell>

                      <TableCell className="border-table-cell-th" align="center">
                        {t("Pages.Layout.EForm.TSource.ModalChose").toLocaleUpperCase()}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  
                  <TableBody>
                    {
                      dataSource && dataSource.length <= 0 ? 
                        tableEmty()
                        : 
                        dataSource.map((dsl, index)=>{ 
                          return tableRenderData(dsl, index)
                        })
                    }
                  </TableBody>
                </Table>
              </TableContainer>

              <hr className="mt-8"/>
            </DialogContent>
            
            <DialogActions className={classes.action}>
                <Button
                    className="btn__cancel"
                    variant="contained"
                    type="submit"
                    size={"large"}
                    onClick={onClose}
                >
                    {t('Common.Button.Done')}
                </Button>

                <Button
                    className="btn__save"
                    variant="contained"
                    color="primary"
                    type="submit"
                    size={"large"}
                    onClick={onSaveModal}
                >
                    {t('Common.Button.Success')}
                </Button>
            </DialogActions>
        </ScrollBar>
    </Dialog>
  );
};

export default forwardRef(ModalDatasourceCopy);
