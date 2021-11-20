import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import {
  TableBody, 
  TableCell,
  TableHead, 
  TableRow
} from "@mui/material";
import clsx from 'clsx';
import { IHeaderList } from "types/models/DataSourceDetail";
import TableSticky from 'views/components/layout/TableSticky';
import Empty from "views/components/layout/Empty";

import HeaderTableStyle from './style';

interface HeaderTableProps {
  name?: string;
  data?: IHeaderList[];
}

const HeaderTable: FunctionComponent<HeaderTableProps> = (props) => {

  const { data = [] } = props;

  const { t } = useTranslation();
  const classes = HeaderTableStyle();

  const Theader = () => {
    return (
      <TableRow>
        <TableCell 
          className="cell-head" 
          align="center"
        >
          {t('Pages.Layout.EForm.TSource.STT')}
        </TableCell>

        <TableCell 
          className="cell-head" 
          align="center"
        >
          {t('Pages.Layout.EForm.TSource.Key')}
        </TableCell>

        <TableCell 
          className="cell-head" 
          align="center"
        >
          {t('Pages.Layout.EForm.TSource.Value')}
        </TableCell>

        <TableCell 
          className="cell-head" 
          align="center"
        >
          {t('Pages.Layout.EForm.TSource.Description')}
        </TableCell>
      </TableRow>
    );
  };

  const tableEmty = () => {
    return (
      <TableRow>
          <TableCell colSpan={8} scope="row" className="table-emty">
              <Empty>
                {t("Pages.Init.Table.Emty")}
              </Empty>
          </TableCell>
      </TableRow>
    )
  }

  const tableRenderData = (data: IHeaderList, index: number) => {
    return (
      <TableRow 
        className="table-row" 
        key={index}
      >
        <TableCell 
          align="center" 
          className="font-medium meta-data-stt cell-body"
        >
          {index + 1}
        </TableCell>

        <TableCell 
          align="center" 
          className="font-medium meta-data-stt cell-body"
        >
          {data.key}
        </TableCell>

        <TableCell 
          align="center" 
          className="font-medium meta-data-stt cell-body"
        >
          {data.value}
        </TableCell>

        <TableCell 
          align="center" 
          className="font-medium meta-data-stt cell-body"
        >
          {data.description}
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
          data.length === 0 ? tableEmty() : data && data.map((d, index)=>{ 
                                                    return tableRenderData(d, index)
                                                  })
        }
      </TableBody>
    </TableSticky>
  )
};

export default HeaderTable;
