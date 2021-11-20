import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, TableCell, TableRow, Typography } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { converStringDate } from "utils";
import RowInput, { IRowInputRef } from "../RowInput";
import { IFolderList } from "types/models/TemplateGroupFolder";
import { labelIcon, useIsOpenContext } from ".";
import PlusSquareBlue from "assets/images/plusblue.webp";
import TrashBlue from "assets/images/trashblue.webp";
import Pencil from "assets/images/pencilblue.webp";
import { updateTemplateFolderList } from "features/TemplateGroupFolderList/store/slice";

interface IRowParentProps {
    item: IFolderList;
    index: number;
    onHandleOpenModalConfirm(): void;
    onHandleCreate():void
}

const RowParent = (props: IRowParentProps) => {
    const { item, index, onHandleOpenModalConfirm,onHandleCreate } = props;

    const rowInputRef = useRef<IRowInputRef>(null);

    const [isEditParent, setIsEditParent] = useState<boolean>(false);
    const { open, setOpen } = useIsOpenContext();
    
    const dispatch = useDispatch();

    const handleUpdateParent = (template_group_id: string) => {
        setIsEditParent(true);
      };
      
    const handleSubmitParent = (template_group_id: string) => {
        dispatch(updateTemplateFolderList({
            template_group_id: template_group_id,
            folder_id: template_group_id,
            data: {
                name: rowInputRef.current?.getValues().name ?? '',
                slug: rowInputRef.current?.getValues().slug ?? '',
            }
        }));
        setIsEditParent(false);
    };
    
    const handleDeleteParent = (template_group_id: string) => {
    
    };

    return !isEditParent ? <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className="table-row"
    >
        <TableCell sx={{ width: "10%" }} className="cell-body">
            {index + 1}
        </TableCell>
        <TableCell
            sx={{ width: "35%" }}
            className={`${item.child.length ? "cell-body" : "cell-body-parent"
                }`}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                {item.child.length ? (
                    <IconButton
                        className="collapse-icon"
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                ) : null}
                {labelIcon()}
                <Typography variant="subtitle2" className="cell-folder">
                    {item.name}
                </Typography>
            </Box>
        </TableCell>
        <TableCell sx={{ width: "30%" }} className="cell-body">
            <Typography variant="subtitle2">{item.slug}</Typography>
        </TableCell>
        <TableCell sx={{ width: "15%" }} className="cell-body">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle2" sx={{ color: "#0c0c0c" }}>
                    {item.updated_by}&nbsp;
                </Typography>
                <Typography variant="body2" sx={{ color: "#808080" }}>
                    {" "}
                    {item.updated_at.slice(11, 16)} -{" "}
                    {converStringDate(item.updated_at)}{" "}
                </Typography>
            </Box>
        </TableCell>
        <TableCell sx={{ width: "10%" }} className="cell-body">
            <Box sx={{ fontWeight: 500, textAlign: "right" }}>
                <img
                    src={PlusSquareBlue}
                    alt="plus-red"
                    className="action-icon"
                    onClick={onHandleCreate}
                />
                <img src={Pencil} alt="pencil-blue" className="action-icon" onClick={() => handleUpdateParent(item.id.toString())} />
                <img
                    src={TrashBlue}
                    alt="trash-red"
                    className="action-icon"
                    onClick={onHandleOpenModalConfirm}
                />
            </Box>
        </TableCell>
    </TableRow>
    : <RowInput
        numberOf={index + 1}
        handleSubmit={() => handleSubmitParent(item.id.toString())}
        handleDelete={() => handleDeleteParent(item.id.toString())}
        ref={rowInputRef}
    />;
};

export default RowParent;