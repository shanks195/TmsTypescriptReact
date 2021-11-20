import React, { useEffect, useRef } from "react";
import {
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Collapse,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import clsx from "clsx";

import {
  fetchTemplateFolderList,
  getTemplateFolderList,
  getTemplateGroupId,
  isLoadedTemplateFolderList,
  isLoadingTemplateFolderList,
} from "features/TemplateGroupFolderList/store/slice";
import Loading from "views/components/base/Loading";
import Empty from "views/components/layout/Empty";
import TableRowCollapse from "./TableRowCollapse";
import TableFolderStyle from "./style";
import PlusSquareRed from "assets/images/plus.webp";
import TrashRed from "assets/images/trashred.webp";
import CollapseIcon from "assets/images/collappseIcon.webp";
import { InputRef } from 'views/components/base/Input';
import RowInput, { IRowInputRef } from "./RowInput";
import { createTemplateFolder } from "features/create-template-folder/store/slice";
import { IBodyCreateTemplateFolder } from "types/models/TemplateGroupFolder";
import { useParams } from 'react-router';

interface Props {
  // group_id:string
}

// interface TableParams{
//   id:string
// }
interface IParams{
  id:string
}
const TableFolder = (props: Props) => {
  // const {group_id} = props
  const classes = TableFolderStyle();
  const [open, setOpen] = React.useState(true);
  const [openAdd,setOpenAdd] =React.useState<boolean>(false)
  // const {} = props
  const dispatch = useDispatch()
  // const {id} = useParams() as TableParams;
  const rowInputRef = useRef<IRowInputRef>(null);
  const nameRef = useRef<InputRef>(null);
  const slugRef = useRef<InputRef>(null);
  const folderList = useSelector(getTemplateFolderList);
  const loading = useSelector(isLoadingTemplateFolderList);
  const loaded = useSelector(isLoadedTemplateFolderList);
  const group_id = useSelector(getTemplateGroupId)
  const { id } = useParams() as IParams
  console.log("PARAMS TREE13123",id);
  const handleDeleteFolder = () =>{
    console.log("id",group_id);
  };

  const handleOpenAdd = () =>{
    setOpenAdd(true)
  };

  const handleCreateFolder = () =>{
    const body = {
      name: rowInputRef.current?.getValues().name ?? '',
      slug: rowInputRef.current?.getValues().slug ?? '',
      parent_id: null,
    } as IBodyCreateTemplateFolder;
    dispatch(createTemplateFolder({data:body,id:group_id ??''}))
    handleDeleteAdd()
  };

  const handleDeleteAdd = () =>{
    nameRef.current?.setValue('')
    slugRef.current?.setValue('')
    setOpenAdd(false)
  };

  useEffect(()=>{
    group_id && !folderList.length && !loading && !loaded && dispatch(fetchTemplateFolderList(group_id??''))
  },[group_id]);

  return (
    <TableContainer className={clsx(classes.root)}>
      <Table aria-label="collapsible table">
        <TableHead className="table-header">
          <TableRow>
            <TableCell sx={{ width: "10%" }} className="cell-head">
              STT
            </TableCell>
            <TableCell sx={{ width: "35%" }} className="cell-head">
              TÊN THƯ MỤC
            </TableCell>
            <TableCell sx={{ width: "30%" }} className="cell-head">
              SLUG
            </TableCell>
            <TableCell sx={{ width: "15%" }} className="cell-head">
              NGƯỜI CẬP NHẬT
            </TableCell>
            <TableCell sx={{ width: "10%" }} className="cell-head">
              <Box sx={{ fontWeight: 500, textAlign: "right" }}>
                <img
                  src={PlusSquareRed}
                  alt="plus-red"
                  className="action-icon"
                  onClick={handleOpenAdd}
                />
                <img
                  src={TrashRed}
                  alt="trash-red"
                  className="action-icon"
                  onClick={handleDeleteFolder}
                />
                {open ? (
                  <img
                    src={CollapseIcon}
                    alt="collapse-red"
                    className="action-icon"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  />
                ) : (
                  <img
                    src={CollapseIcon}
                    alt="collapse-red"
                    className="action-icon"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  />
                )}
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell style={{ padding: 0, borderBottom: "none" }} colSpan={7}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Table>
                  {(() => {
                    if (loading) {
                      return (
                        <TableRow>
                          <TableCell colSpan={12}>
                            <Loading className="py-4" />
                          </TableCell>
                        </TableRow>
                      );
                    }

                    if (!folderList.length) {
                      return (
                        <TableRow>
                          <TableCell colSpan={12}>
                            <Empty>
                              <p>Không có dữ liệu để hiển thị</p>
                            </Empty>
                          </TableCell>
                        </TableRow>
                      );
                    }
                    return folderList.map((item, index) => {
                      return (
                        <>
                          <TableRowCollapse
                            key={item.id}
                            item={item}
                            index={index}
                            // group_id={group_id}
                          />
                        </>
                      );
                    });
                  })()}
                </Table>
              </Collapse>
            </TableCell>
          </TableRow>
          {
            openAdd
              ? <RowInput
                  handleSubmit={handleCreateFolder}
                  handleDelete={handleDeleteAdd}
                  ref={rowInputRef}
                  numberOf={folderList.length+1}
                />
              : null
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableFolder;