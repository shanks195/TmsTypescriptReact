import { useRef, useImperativeHandle, useState, forwardRef, 
         ForwardRefRenderFunction } from "react";
import { Avatar, Grid, Modal } from "@mui/material";
import { CgCopy, CgMathPlus } from 'react-icons/cg';
import clsx from 'clsx';
import UserItem, { DetailInfoCheckedRef, DetailInfoCheckedOption } from "../APIListItem";
import ModalDatasourceCopy from "../ModalDatasourceCopy";
import APIListStyle from "./style";

interface IIUserListProps {
  className?: string;
  labelName?: string;
  listItem?: DetailInfoCheckedOption[];
  onAdd?(): void;
  onChangeUser?(): void;
  onDelete?: () => void;
  onSave?: () => void;
  buttonAdd?: boolean;
}

export interface IIUserListRef {
  getvalues(): string | number;
}

interface IUserListComponent
  extends ForwardRefRenderFunction<IIUserListRef, IIUserListProps> {}
const UserList: IUserListComponent = (props, ref) => {

  const {
    className,
    listItem = [],
    labelName,
    onAdd,
    onChangeUser,
    onDelete,
    onSave,
    buttonAdd = true,
  } = props;

  const classes = APIListStyle();
  const userItemRef = useRef<DetailInfoCheckedRef>(null);

  useImperativeHandle(ref, () => ({
    getvalues: () => userItemRef.current?.getValue() || "",
  }));
  const [isOpenAddUserModal, setIsOpenAddUserModal] =
    useState<boolean>(false);
    console.log(className);

  const onOpenAddUserModal = () => {
    setIsOpenAddUserModal(true);
  };

  const onCloseAddUserModal = () => {
    setIsOpenAddUserModal(false);
  };

  return (
    <div className={clsx(classes.rootList, 'wh-full')}>
      <Grid container className="apilist-group">
        <Grid item xs={2} className="apilist__item--label">
          <label>
            {labelName}: <span>{listItem.length}</span>
          </label>
        </Grid>
        <Grid item xs={5}>
        <UserItem
          ref={userItemRef}
          options={listItem}
          onChange={onChangeUser}
          onDelete={onDelete}
          onAdd={onSave}
        />
        </Grid>
        <Grid item xs={1}
              sx={{marginLeft:'5px'}}>
        {buttonAdd ? (
          <div className="apilist__item--plus">
            <Avatar className="item__plus" sizes="lg">
              <button onClick={onAdd}>
                <CgMathPlus />
              </button>
            </Avatar>
          </div>
        ) : null}
        </Grid>

        <Grid item xs={2} className="item__copy">
          <span style={{textDecoration:'underline'}} onClick={onOpenAddUserModal} >
            <CgCopy  className="mr-1"/>
             Sao Chép
          </span>
        </Grid>
        <Modal
        open={isOpenAddUserModal}
        onClose={onCloseAddUserModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <ModalDatasourceCopy key="modalcopy" onClose={onCloseAddUserModal} />
      </Modal>
      </Grid>
    </div>
  );
};

export default forwardRef(UserList);
