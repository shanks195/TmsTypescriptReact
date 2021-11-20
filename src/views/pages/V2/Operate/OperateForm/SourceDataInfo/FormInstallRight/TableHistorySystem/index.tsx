import {FunctionComponent} from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import Empty from "views/components/layout/Empty";
import TableSticky from 'views/components/layout/TableSticky';
import { ITemplateFieldLog } from 'types/models/TemplateFieldLog';
import TableHistorySystemStyle from './style';
import { converStringDate } from 'utils';


export interface ITableHistorySystem {
  data?: ITemplateFieldLog[]
}

const TableHistorySystem: FunctionComponent<ITableHistorySystem> = (props) =>{
  const { data = [] } = props;
  const { t } = useTranslation();
  const classes = TableHistorySystemStyle();

  const Theader = () => {
    return (
      <TableRow>
        <TableCell className="cell-head">
          {t('Pages.Layout.EForm.TSource.STT').toLocaleUpperCase()}
        </TableCell>

        <TableCell className="cell-head" >
          {t('Common.CreateBy').toLocaleUpperCase()}
        </TableCell>

        <TableCell className="cell-head" >
          {t('Common.UpdateBy').toLocaleUpperCase()}
        </TableCell>
      </TableRow>
    );
  };

  const tableEmty = () => {
    return (
      <TableRow>
          <TableCell colSpan={8} scope="row">
              <Empty>
                {t("Common.Emty.Data")}
              </Empty>
          </TableCell>
      </TableRow>
    )
  }

  const tableRenderData = (data: ITemplateFieldLog, index: number) => {
    return (
      <TableRow key={index} className="table-row">
        <TableCell
          className="font-medium meta-data-stt cell-body"
        >
          {index + 1}
        </TableCell>

        <TableCell
          className="font-medium meta-data-stt cell-body"
        >
          <Typography
            variant="subtitle2"
            className="log-name"
          >
              {data.created_by}&nbsp;
          </Typography>

          <Typography variant="body2"
            className="log-date"
          >
              {" "}
              {data.created_at.slice(11, 16)} -{" "}
              {converStringDate(data.created_at)}{" "}
          </Typography>

        </TableCell>

        <TableCell className="font-medium meta-data-stt cell-body" >
          <Typography
            variant="subtitle2"
            className="log-name"
          >
              {data.updated_by}&nbsp;
          </Typography>

          <Typography
            variant="body2"
            className="log-date"
          >
              {" "}
              {data.updated_at.slice(11, 16)} -{" "}
              {converStringDate(data.updated_at)}{" "}
          </Typography>
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
          data.length === 0 ? tableEmty() : data?.map((d, index)=>{
                                              return tableRenderData(d, index)
                                            })
        }
      </TableBody>
    </TableSticky>
  )
}

export default TableHistorySystem;


