import { FC, useCallback, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { VscMultipleWindows } from "react-icons/vsc";
import { MdArrowBackIosNew } from "react-icons/md";

import styleMetadataList from "./style";
import { ITemplateGroups } from "types/models/TemplateFields";
import { setCurrentTemplateId, getCurrentTemplateId } from "features/get-template-fieds/store/slice";

interface IGroupProps {
    group: ITemplateGroups;
}

const Group: FC<IGroupProps> = (props) => {
    const { children, group } = props;
    const { id, name, items } = group;
    const { t } = useTranslation();
    const classes = styleMetadataList();
    
    const dispatch = useDispatch();
    const currentTemplateId = useSelector(getCurrentTemplateId);
    const isExistField = items.some(f => f.id === currentTemplateId);
    
    useEffect(() => {
        if(id !== currentTemplateId && !isExistField) {
            document.getElementById(`head-${id}`)?.classList.toggle('active', false);
            document.getElementById(`arrow-${id}`)?.classList.toggle('down', false);
            document.getElementById(`group-${id}`)?.classList.toggle('show', false);
        }
    });

    const onClickCollapse = () => {
        if(id) {
            document.getElementById(`head-${id}`)?.classList.toggle('active', true);
            document.getElementById(`arrow-${id}`)?.classList.toggle('down', true);
            document.getElementById(`group-${id}`)?.classList.toggle('show', true);
            isExistField === false
            && id !== currentTemplateId
            && dispatch(setCurrentTemplateId(id));
        }
    };

    const Head = useCallback(() => <div className='head' id={`head-${id}`}>
        <VscMultipleWindows className='symbol'/>
        <div className='heading-1'>
            <div className='caption'>
                {
                    name.length > 0 ? name :  <em className="empty-name font-normal text-secondary">
                                                [{t('Common.Emty.Name')}]
                                            </em>}
            </div>
            <div className='icon'>
                <MdArrowBackIosNew
                    className='arrow'
                    id={`arrow-${id}`}
                    onClick={onClickCollapse}
                />
            </div>
        </div>
    </div>
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [id]);

    return <li className={classes.group}>
        <Head/>
        <ul className='group' id={`group-${id}`}>
            {children}
        </ul>
    </li>;
};

export default Group;