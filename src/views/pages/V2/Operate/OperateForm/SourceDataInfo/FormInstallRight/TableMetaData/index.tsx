import {
  FunctionComponent, 
  useState
} from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import {
  Collapse,
  TableBody, 
  TableCell,
  TableHead, 
  TableRow
} from "@mui/material";
import Box from "@mui/material/Box";
import PlusSquareRed from "assets/images/plus.webp";
import TrashRed from "assets/images/trashred.webp";
import Empty from "views/components/layout/Empty";
import CollapseIcon from "assets/images/collappseIcon.webp";
import TableSticky from 'views/components/layout/TableSticky';
import { ITemplateFields } from 'types/models/TemplateFields';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import TableMetaDataStyle from './style';

export interface ITableMetaDataProps{
  data?: ITemplateFields[]
}

const TableMetaData: FunctionComponent<ITableMetaDataProps> = (props) =>{

  const { data = [] } = props;
  const { t } = useTranslation();
  const classes = TableMetaDataStyle();

  const [isCollapsed, setIsCollapses] = useState<boolean>(true);

  const Theader = () => {
    return (
      <TableRow>
        <TableCell className="cell-head">
          {t('Pages.Layout.EForm.TSource.STT').toLocaleUpperCase()}
        </TableCell>
        
        <TableCell className="cell-head" align="center">
          {t('Common.Labels').toLocaleUpperCase()}
        </TableCell>

        <TableCell className="cell-head" align="center">
          <Box sx={{ fontWeight: 500, textAlign: "right" }}>
              <img
                src={PlusSquareRed}
                alt="plus-red"
                className="action-icon"
              />
              <img
                src={TrashRed}
                alt="trash-red"
                className="action-icon"
              />
              {isCollapsed ? (
                <img
                  src={CollapseIcon}
                  alt="collapse-red"
                  className="action-icon"
                  onClick={() => {
                    setIsCollapses(!isCollapsed);
                  }}
                />
              ) : (
                <img
                  src={CollapseIcon}
                  alt="collapse-red"
                  className="action-icon"
                  onClick={() => {
                    setIsCollapses(!isCollapsed);
                  }}
                />
              )}
          </Box>
        </TableCell>
      </TableRow>
    );
  };

  const tableEmty = () => {
    return (
      <TableRow>
          <TableCell colSpan={8} scope="row"  className="td-emty">
              <Empty>
                Không có dữ liệu
              </Empty>
          </TableCell>
      </TableRow>
    )
  }

  const tableRenderData = (data: ITemplateFields, index: number) => {
    return (
      <TableRow key={index} className="table-row">
        <TableCell className="font-medium meta-data-stt cell-body"> 
          {index + 1} 
        </TableCell>

        <TableCell className="font-medium cell-body meta-data-name" align="center">
          {data.label}
        </TableCell>

        <TableCell className="font-medium cell-body">
          <Box 
            component='div' 
            className="mscb-action-status flex-row justify-end"
          >
            <Box 
              component='div' 
              className="mscb-edit-icon-box flex justify-end action-icon"
            >
              <MdOutlineModeEdit />
            </Box>
            <Box 
              component='div' 
              className="mscb-lock-icon-box flex justify-end action-icon"
            >
                <RiDeleteBin5Line />
            </Box>
          </Box>
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
        {/* đang bị lõi xử lý collapsed nì sau */}
        {/* <Collapse
          in={isCollapsed} 
          timeout="auto" 
          unmountOnExit
        >
          
        </Collapse> */}
        {
          data.length === 0 ? 
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

export default TableMetaData;