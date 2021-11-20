import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TableCell, TableRow, Typography } from "@mui/material";

import { IFolderList } from "types/models/TemplateGroupFolder";
import RowInput, { IRowInputRef } from "../RowInput";
import { converStringDate } from "utils";
import { labelIcon } from ".";
import TrashBlue from "assets/images/trashblue.webp";
import Pencil from "assets/images/pencilblue.webp";
import { updateTemplateFolderList } from "features/TemplateGroupFolderList/store/slice";

interface IChildRowProps {
    childRow: IFolderList;
    onHandleOpenModalConfirm(): void;
    template_group_id: string;
}

const RowChild = (props: IChildRowProps) => {
    const { childRow, onHandleOpenModalConfirm, template_group_id } = props;

    const [isEditChild, setIsEditChild] = useState<boolean>(false);
    
    const rowInputRef = useRef<IRowInputRef>(null);

    const dispatch = useDispatch();

    const handleUpdateChild = (folder_child_id: string) => {
        setIsEditChild(true);
    };

    const handleSubmitChild = (folder_child_id: string) => {
        dispatch(updateTemplateFolderList({
            template_group_id: template_group_id,
            folder_id: folder_child_id,
            data: {
                name: rowInputRef.current?.getValues().name ?? '',
                slug: rowInputRef.current?.getValues().slug ?? ''
            }
        }));
        setIsEditChild(false);
    }

    const handleDeleteChild = (folder_child_id: string) => {

    }

    return !isEditChild ? <TableRow key={childRow.id} className="table-row">
        <TableCell
            sx={{ width: "10%" }}
            className="cell-body-child"
        >
            {/* {item.child.length} */}
        </TableCell>
        <TableCell
            sx={{ width: "35%", paddingLeft: "70px" }}
            className="cell-body-child cell-body-folder"
        >
            {labelIcon()}
            <span className="cell-folder-child">
                {childRow.name}
            </span>
        </TableCell>
        <TableCell
            sx={{ width: "30%" }}
            className="cell-body-child"
        >
            <Typography
                variant="subtitle2"
                sx={{ color: "#0c0c0c" }}
            >
                {childRow.slug}
            </Typography>
        </TableCell>
        <TableCell
            sx={{ width: "15%" }}
            className="cell-body-child"
        >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                    variant="subtitle2"
                    sx={{ color: "var(--mscb-black)" }}
                >
                    {childRow.updated_by}&nbsp;
                </Typography>
                <Typography variant="body2" sx={{ color: "#808080" }}>
                    {childRow.updated_at.slice(11, 16)} -{" "}
                    {converStringDate(childRow.updated_at)}
                </Typography>
            </Box>
        </TableCell>
        <TableCell
            sx={{ width: "10%" }}
            className="cell-body-child"
        >
            <Box sx={{ fontWeight: 500, textAlign: "right" }}>
                <img
                    src={Pencil}
                    alt="pencil-blue"
                    className="action-icon"
                    onClick={() => handleUpdateChild(childRow.id.toString())}
                />
                <img
                    src={TrashBlue}
                    alt="trash-blue"
                    className="action-icon"
                    onClick={onHandleOpenModalConfirm}
                />
            </Box>
        </TableCell>
    </TableRow>
    : <RowInput
        handleSubmit={() => handleSubmitChild(childRow.id.toString())}
        handleDelete={() => handleDeleteChild(childRow.id.toString())}
        ref={rowInputRef}
    />;
};

export default RowChild;