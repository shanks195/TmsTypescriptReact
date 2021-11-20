import { Button } from "@mui/material";
import clsx from 'clsx';
import { FunctionComponent, ReactComponentElement } from "react";
import { ButtonComponent } from "views/components/base/ButtonC";
import btnBarStyle from "./style";

interface ButtonBarProps {
    className?: string;
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
    onReturn?: (e: React.MouseEvent<HTMLElement>) => void;
    onDelete?: (e: React.MouseEvent<HTMLElement>) => void;
    onSave?: (e: React.MouseEvent<HTMLElement>) => void;
    onContinue?: (e: React.MouseEvent<HTMLElement>) => void;
    isCancel?: boolean;
    isReturn?: boolean;
    isDelete?: boolean;
    isSave?: boolean;
    isContinue?: boolean;
    hideAll?: boolean;
    children?: ReactComponentElement<ButtonComponent> | ReactComponentElement<ButtonComponent>[]
}

const ButtonBar: FunctionComponent<ButtonBarProps> = (props) => {
    const { className, onCancel, onContinue, onDelete, onReturn, onSave, children, isCancel, isContinue, isDelete, isReturn, isSave, hideAll } = props;
    const classes = btnBarStyle();
    const clClass = clsx(classes.root, "tms-button-bar", className);

    return <div className={clClass}>
        {children}
        {
            !hideAll && (<>
                {
                    !isCancel && <Button className="tms-btn btn-dark" onClick={onCancel}>thoát</Button>
                }
                {
                    !isReturn && <Button className="tms-btn btn-gray" onClick={onReturn}>quay lại</Button>
                }
                {
                    !isDelete && <Button className="tms-btn btn-red" onClick={onDelete}>xóa</Button>
                }
                {
                    !isSave && <Button className="tms-btn btn-green" onClick={onSave}>lưu</Button>
                }
                {
                    !isContinue && <Button className="tms-btn btn-blue" onClick={onContinue}>tiếp tục</Button>
                }
            </>)
        }
    </div>
}

export default ButtonBar