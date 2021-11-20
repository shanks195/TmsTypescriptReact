import { Button } from "@mui/material";
import { FunctionComponent, MouseEvent } from "react";
import { FaPlus } from 'react-icons/fa';

interface ButtonProps {
    className?: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    iconAdd?: boolean;
}
export interface ButtonComponent extends FunctionComponent<ButtonProps> { }

const BasicButton: ButtonComponent = (props) => {
    const { children, onClick, iconAdd } = props;
    return <Button
        onClick={onClick}
    >
        {
            iconAdd && <FaPlus />
        }
        {children}
    </Button>
}

export default BasicButton