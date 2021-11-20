import { FunctionComponent, useEffect } from "react";
import Grid from "@mui/material/Grid";
import  CardOutside  from 'views/components/layout/CardOutside';
import FormGroup from 'views/components/layout/FormGroup/index';
import { useTranslation } from "react-i18next";
import  clsx  from 'clsx';
import { useDispatch, useSelector } from "react-redux";
import { fetchLeftSideBars, getLeftSideBars, isLoadedLeftSideBars, isLoadingLeftSideBars } from "features/templateGroups/store/slice";
import { fetchTemplateFolderList } from "features/TemplateGroupFolderList/store/slice";
import FormTreeviewStyle from "./style";
import TableFolder from "./TableFolder";
import { formatPath, updateDocumentTitle } from "utils";
import PAGE_URL from "app/PageURL";
import { useNavigate } from 'react-router-dom';

interface FormManageTreeViewProps {}

interface FormManageTreeViewComponent
  extends FunctionComponent<FormManageTreeViewProps> {}

const FormManageTreeView: FormManageTreeViewComponent = () => {
  // const {} = props
  const classes= FormTreeviewStyle()
  // const {t} = useTranslation()
  const Loading = useSelector(isLoadingLeftSideBars);
  const Loaded = useSelector(isLoadedLeftSideBars);
  const dispatch = useDispatch();
  const TreeViewStyle=clsx(classes.root)
  const menu = useSelector(getLeftSideBars)
  const navigate = useNavigate()
  const {t} = useTranslation()
  useEffect(() => {
    updateDocumentTitle(t('Pages.Metadata.Treeview'));
  });
  useEffect(() => {
    !menu.length && !Loading && !Loaded && dispatch(fetchLeftSideBars());
  });
  
  return (
    <Grid className={TreeViewStyle} container spacing={3}>
      <Grid item xs={3}>
          <CardOutside label="NHÓM BIỂU MẪU" >
              <FormGroup handleGetTemplateList={(id:string|undefined)=>{
                if(id){
                  dispatch(fetchTemplateFolderList(id as string))
                  navigate(formatPath(PAGE_URL.V2.Treeview.list,id))
                }
                else return
                  // setTpId(id as string)
              }} options={menu}/>
          </CardOutside>
      </Grid>
      <Grid item xs={9}>
      <CardOutside label="THƯ MỤC">
        <TableFolder/>
      </CardOutside>
      </Grid>
    </Grid>
  );
};

export default FormManageTreeView;
