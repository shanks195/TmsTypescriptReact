import { FC, useEffect, useState } from 'react';
import clsx from "clsx";

import FormReviewStyle from "./styles";
import { Grid } from '@mui/material';
import OperateTable from './OperateTable';
import Select from 'views/components/base/Select';
import CardOutside from 'views/components/layout/CardOutside';
import SubMenuList from 'views/components/layout/SubMenuList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTemplateFolderListMenu, getTemplateFolderListMenu, isLoadedTemplateFolderListMenu, isLoadingTemplateFolderListmenu } from 'features/TemplateGroupFolderMenu/store/slice';
import { useNavigate, useParams } from 'react-router-dom';

interface IParams {
  id: string;
}

const OperateList: FC = () => {

  const classes = FormReviewStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Loading = useSelector(isLoadingTemplateFolderListmenu);
  const Loaded = useSelector(isLoadedTemplateFolderListMenu);
  const listTreeView = useSelector(getTemplateFolderListMenu);
  const { id } = useParams() as IParams;
  const FormReviewClass = clsx(classes.root);

  useEffect(() => {
    !listTreeView.length && !Loading && !Loaded && dispatch(fetchTemplateFolderListMenu(id));
  });
  const [currentValue, setCurrentValue] = useState<number>(0);

  const handleSelect = (value: number) => {
    console.log("=================nhut index", value);
    setCurrentValue(value);
  }

  return (
      <Grid container spacing={3} className={`${FormReviewClass} h-full`}> 
        <Grid item xs={ 3 } className={classes.selectTop}>
          <Select
            options={[{ label: "Tất cả thư mục", value: 1 }]}
            value={1}
          />
          <CardOutside label="THƯ MỤC" className={classes.list}>
            <SubMenuList options={listTreeView} onChange={handleSelect}/>
          </CardOutside>
        </Grid>
        <Grid item xs={ 9 }>
          <OperateTable folderId={currentValue}/>
        </Grid>
      </Grid>
    // </div>
  )
}

export default OperateList;