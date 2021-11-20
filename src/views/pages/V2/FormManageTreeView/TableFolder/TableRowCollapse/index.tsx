import { createContext, useContext, useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Collapse, TableCell, TableRow, Table } from '@mui/material';
import { TableBody } from '@mui/material';

import FolderIcon from "assets/images/Group 61038.svg";
import { IFolderList, IBodyCreateTemplateFolder } from 'types/models/TemplateGroupFolder';
import { deleteTemplateFolderList, getTemplateGroupId } from 'features/TemplateGroupFolderList/store/slice';
import ModalConfirm from 'views/components/layout/ModalConfirm';
import RowChild from './RowChild';
import RowParent from './RowParent';
import RowInput, { IRowInputRef } from '../RowInput';
import { createTemplateFolder } from 'features/create-template-folder/store/slice';

export const IsOpenContext = createContext({
  open: false,
  setOpen: (open: boolean) => {console.log(open)}
});

export const useIsOpenContext = () => useContext(IsOpenContext);
IsOpenContext.displayName = 'display IsOpenContext';

export const labelIcon = () => {
  return <img src={FolderIcon} alt="folderIcon" className="Group-61038" />;
};

interface Props {
  item: IFolderList;
  index: number;
  // group_id:string;
}


const TableRowCollapse = (props: Props) => {
  const { item } = props;

  const [isModalConfirm, setIsModalConfirm] = useState<boolean>(false);
  const [folderId, setFolderId] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [create, setCreate] = useState<boolean>(false);

  const rowInputRef = useRef<IRowInputRef>(null)
  const group_id = useSelector(getTemplateGroupId)
  
  const dispatch = useDispatch();

  const handleDeleteFolder = () => {
    dispatch(deleteTemplateFolderList({
      template_group_id: group_id ??'',
      folder_id: folderId
    }));
    onHandleCancelConfirm()
  };

  const onHandleOpenModalConfirm = (folder_id: string) => {
    setIsModalConfirm(!isModalConfirm);
    setFolderId(folder_id)
  };

  const onHandleCancelConfirm = () => {
    setIsModalConfirm(!isModalConfirm);
  };
  const handleCreateTemplateChild = ( ) =>{
    const body = {
      name: rowInputRef.current?.getValues().name ?? '',
      slug: rowInputRef.current?.getValues().slug ?? '',
      parent_id: rowInputRef.current?.getValues().parent_id ?? null,
    } as IBodyCreateTemplateFolder;
    dispatch(createTemplateFolder({data:body,id:group_id ??''}))
  }

  return <IsOpenContext.Provider value={{open, setOpen }}>  
    <RowParent
      {...props}
      // group_id={group_id}
      onHandleOpenModalConfirm={() => onHandleOpenModalConfirm(item.id.toString())}
      onHandleCreate={()=>{
        setCreate(true)
        setOpen(true)
      }}
    />
    <TableRow className="table-row-child">
      <TableCell style={{ padding: 0, borderBottom: "none" }} colSpan={7}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Table>
            <TableBody>
              {item.child.map(childRow =>
                <RowChild
                  childRow={childRow}
                  onHandleOpenModalConfirm={() => onHandleOpenModalConfirm(childRow.id.toString())}
                  template_group_id={item.id.toString()}
                />
              )}
              {create?<RowInput  ref={rowInputRef} parent_id={item.id}
                      handleSubmit={handleCreateTemplateChild}
                      handleDelete={()=>{setCreate(false)}} />:null}
            </TableBody>
          </Table>
        </Collapse>
      </TableCell>
    </TableRow>
    <ModalConfirm
      isOpen={isModalConfirm}
      labelTitle="Bạn có chắc chắn muốn xóa tài sản này"
      labelDecription="Bạn có chắc chắn muốn xóa tài sản này"
      labelBtnSuccess="Xóa"
      labelBtnCancel="Hủy"
      onCancel={onHandleCancelConfirm}
      onSuccess={handleDeleteFolder}
    />
    {/* </Collapse>
        </TableCell> */}
  </IsOpenContext.Provider>;
};

export default TableRowCollapse;