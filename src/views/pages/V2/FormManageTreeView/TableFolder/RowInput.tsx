import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef } from "react";
import { TableCell, TableRow } from "@mui/material";

import TrashBlue  from 'assets/images/trashblue.webp';
import Checked from "assets/images/checkblue.webp";
import Input, { InputRef } from "views/components/base/Input";

export interface IRowInputRef {
  getValues(): {
    name: string;
    slug: string;
    parent_id:number | null
  };
}
  
interface IRowInputProps {
  numberOf?: number;
  parent_id?:number;
  handleSubmit: () => void;
  handleDelete: () => void;
}
  
const RowInput: ForwardRefRenderFunction<IRowInputRef, IRowInputProps> = (props, ref) => {
  const { numberOf, handleSubmit, handleDelete,parent_id } = props;

  const nameRef = useRef<InputRef>(null);
  const slugRef = useRef<InputRef>(null);

  useImperativeHandle(ref, () => ({
    getValues: () => ({
      name: nameRef.current?.getValue() ??'',
      slug: slugRef.current?.getValue() ??'',
      parent_id:parent_id ?? null
    })
  }));

  return  <TableRow className="table-row">
    <TableCell sx={{ width: "10%" }} className="cell-body" >{numberOf}</TableCell>
    <TableCell sx={{ width: "35%" }} className="cell-body" >
      <Input ref={nameRef}/>
    </TableCell>
    <TableCell sx={{ width: "30%" }} className="cell-body" >
      <Input ref={slugRef}/>
    </TableCell>
    <TableCell sx={{ width: "15%" }} className="cell-body" />
    <TableCell sx={{ width: "10%",textAlign:"right" }} className="cell-body" >
      <img src={Checked} alt="check" className="action-icon" onClick={handleSubmit}/>
      <img src={TrashBlue} alt="trash" className="action-icon" onClick={handleDelete}/>
    </TableCell>
  </TableRow>;
};

export default forwardRef(RowInput);