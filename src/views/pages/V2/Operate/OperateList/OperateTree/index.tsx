import { 
  fetchTemplateFolderListMenu,
  getTemplateFolderListMenu,
  isLoadedTemplateFolderListMenu,
  isLoadingTemplateFolderListmenu 
} from 'features/TemplateGroupFolderMenu/store/slice';
import { FC, forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from "views/components/base/Select";
import CardOutside from "views/components/layout/CardOutside";
import { useNavigate, useParams } from 'react-router-dom';
import SubMenuList from 'views/components/layout/SubMenuList';
import OperateTreeStyle from './style';
import PAGE_URL from 'app/PageURL';
import { formatPath } from 'utils';

interface IParams {
  id: string;
}

export interface OperateTreeRef{
  getValue(): string,
}
interface OperateTreeProps{}

export interface OperateTreeComponent extends ForwardRefRenderFunction<OperateTreeRef, OperateTreeProps>{}

const OperateTree: OperateTreeComponent = (props, ref) => {

  const classes = OperateTreeStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Loading = useSelector(isLoadingTemplateFolderListmenu);
  const Loaded = useSelector(isLoadedTemplateFolderListMenu);
  const listTreeView = useSelector(getTemplateFolderListMenu);
  const { id } = useParams() as IParams;
  const [ currentValue, setCurrentValue ] = useState<string>(id)
  useEffect(() => {
    !listTreeView.length && !Loading && !Loaded && dispatch(fetchTemplateFolderListMenu(id));
  });

  useImperativeHandle(ref, () => ({
      getValue: () => {
        return currentValue;
      }
    })
  )

  // useImperativeHandle(ref, () => ({
  //   getValue: () => ({
  //     checkedList: checkedList, checkall: checkAll
  //   })
  // }));

  // useEffect(() => {
  //   if (id && !id.match(/^\d+$/)) {
  //     history.push(formatPath(PAGE_URL.V2.Treeview.main, ''))
  //   }
  //   else {
  //     // onOpenLevelModal()
  //   }
  // })

  const handleSelect = (value: number) => {
    setCurrentValue(value.toString());
  }

  return <div className={classes.root}>
    {/* <Select
      options={[{ label: "Tất cả thư mục", value: 1 }]}
      value={1}
    />
    <CardOutside label="THƯ MỤC" className={classes.list}>
      <SubMenuList options={listTreeView} onChange={handleSelect}/>
    </CardOutside> */}
  </div>

}

export default forwardRef(OperateTree);