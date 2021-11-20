import { FC } from "react";
import { useTranslation } from "react-i18next";
import { RiAddCircleFill } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";
import Input from "views/components/base/Input";

import Group from "./Group";
import Item from "./Item";
import styleMetadataList from "./style";

interface IFormMetadataListProps {
    className?: string;
    onAdd?: () => void;
}

const FormMetadataList: FC<IFormMetadataListProps> = (props) => {
    const { children, className, onAdd } = props;
    const classes = styleMetadataList();
    const { t } = useTranslation();

    return <div className={`${classes.root} ${className}`}>
        <div className={classes.search}>
            <Input
                className='input'
                type="text"
                placeholder={`${t('Common.Seach')}...`}
                prefix={<VscSearch className='symbol-search'/>}
            />
            <RiAddCircleFill 
                className='symbol-add-group'
                onClick={onAdd}
            />
        </div>
        <ul className={classes.list}>
            {children}
        </ul>
    </div>
};

export default FormMetadataList;
export { Group, Item };