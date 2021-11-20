import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiCalendarCheckLine, RiCheckboxCircleFill } from "react-icons/ri";

import { ITemplateFields } from "types/models/TemplateFields";
import styleMetadataList from "./style";
import { setCurrentTemplateId, getCurrentTemplateId } from "features/get-template-fieds/store/slice";

interface IItemProps {
    isDone?: boolean;
    template_fields: ITemplateFields;    
}

const Item: FC<IItemProps> = (props) => {
    const { isDone, template_fields } = props;
    const classes = styleMetadataList();

    const dispatch = useDispatch();
    const currentTemplateId = useSelector(getCurrentTemplateId);

    useEffect(() => {
        template_fields.id !== currentTemplateId
        && document.getElementById(`item-${template_fields.id}`)?.classList.toggle('active', false);
    });

    const onClickActive = () => {
        if(template_fields) {
            document.getElementById(`item-${template_fields.id}`)?.classList.toggle('active', true);
            template_fields.id !== currentTemplateId && dispatch(setCurrentTemplateId(template_fields.id));
        }
    };
    
    return <li className={classes.item}>
        <div className='line'>
            <div className='content' id={`item-${template_fields.id}`} onClick={onClickActive}>
                <RiCalendarCheckLine/>
                <div>
                    <div className='name'>
                        {template_fields.label}
                        {template_fields.require_flag && <span className='required'> (*)</span>}
                    </div>
                    <div className='code'>{template_fields.key}</div>
                </div>
                <RiCheckboxCircleFill className={isDone ? 'done' : ''}/>
            </div>
        </div>
    </li>;
};

export default Item;