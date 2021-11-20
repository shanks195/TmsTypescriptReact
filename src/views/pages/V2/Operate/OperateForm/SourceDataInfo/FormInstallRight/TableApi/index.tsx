import {
  useState, 
  useEffect,
  ForwardRefRenderFunction, 
  forwardRef,
  useImperativeHandle
} from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import {
  TableBody, 
  TableCell,
  TableHead, 
  TableRow
} from "@mui/material";
import Empty from "views/components/layout/Empty";
import TableSticky from 'views/components/layout/TableSticky';
import { IDataSourceTemplate } from 'types/models/DataSourceTemplate';
import Radio from '@mui/material/Radio';

import TableApiStyle from './style';
import { Check } from '@mui/icons-material';

export interface TableApiProps {
  data?: IDataSourceTemplate[];
  value?: number | string;
  onChange?(data: IDataSourceTemplate): void;
}

export interface TableApiRef{
  getValue(): IDataSourceTemplate | undefined;
  setValue(value: string | number): void;
}

interface TableApiComponent extends ForwardRefRenderFunction<TableApiRef, TableApiProps>{};

const TableApi: TableApiComponent = (props, ref) =>{

  const { t } = useTranslation();
  const classes = TableApiStyle();

  const { value, onChange, data = []} = props;

  const [CurrentValue, setCurrentValue] = useState<number | undefined>(Number(value));

  useEffect(()=>{
    if(value !== CurrentValue){
      setCurrentValue(CurrentValue)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value])

  useImperativeHandle(ref, () => ({
    getValue: () => data.find(d => d.data_source_api_id === CurrentValue),
    setValue: val =>{
      Number(val) !== CurrentValue && setCurrentValue(Number(val))
    }
  }))

  const Theader = () => {
    return (
      <TableRow>
        <TableCell 
          className="cell-head" 
          align="center"
        >
          {t('Pages.Layout.EForm.TSource.STT').toLocaleUpperCase()}
        </TableCell>

        <TableCell 
          className="cell-head" 
          align="center"
        >
          {t('Common.NameApi').toLocaleUpperCase()}
        </TableCell>

        <TableCell 
          className="cell-head" 
          align="center"
        >
          {t('Common.ActiveApi').toLocaleUpperCase()}
        </TableCell>
      </TableRow>
    );
  };

  const handleChangePrimary = (data: IDataSourceTemplate) => {
    setCurrentValue(data.data_source_api_id)
    onChange && onChange(data);
  }

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

  const tableRenderData = (data: IDataSourceTemplate, index: number) => {
    return (
      <TableRow 
        key={index} 
        className="table-row"
      >
        <TableCell 
          className="font-medium meta-data-stt cell-body"
          align="center"
        > 
          {index + 1} 
        </TableCell>

        <TableCell 
          className="font-medium meta-data-stt cell-body"
          align="center"
        >
          {data.data_source_api_name}
        </TableCell>

        <TableCell 
          className="font-medium meta-data-stt cell-body"
          align="center"
        >
          <Radio
              className = {data.data_source_api_id === Number(CurrentValue) ? classes.radio : ""}
              checked = {data.data_source_api_id === Number(CurrentValue)}
              checkedIcon = {<Check />}
              value = {data.data_source_api_id}
              onChange = { () => {handleChangePrimary(data)} }
          />
        </TableCell>
      </TableRow>
    )
  }

  return (
    <TableSticky 
      className={clsx(classes.root, "mscb-table")}
    >
      <TableHead className="table-header">
        <Theader />
      </TableHead>

      <TableBody>
        {
          data.length <= 0 ? 
            tableEmty()
            : 
            data.map((d, index)=>{ 
              return tableRenderData(d, index)
            })
        }
      </TableBody>
    </TableSticky>
  )
}

export default forwardRef(TableApi);