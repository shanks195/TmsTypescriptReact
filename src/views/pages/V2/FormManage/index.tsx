import { FC, useEffect } from 'react';
import FormManageGroupList from "./GroupList";
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import CardOutside from "views/components/layout/CardOutside";
import DiscussComponent from "./Discuss";
import { updateDocumentTitle } from "utils";
import { useTranslation } from "react-i18next";
import inputStyle from "./style";
import { Routes,Route,Outlet } from 'react-router-dom';
import FormManageSignatures from "views/pages/V2/FormManage/Signature";
import InputBox from "views/pages/V2/FormManage/InputBox";
import ToggleButton from "views/pages/V2/FormManage/ToogleControl";
import FormManageFile from "views/pages/V2/FormManage/File";
import DateLayout from "views/pages/V2/FormManage/Date";
import FormManageRating from "views/pages/V2/FormManage/Rating";
import SingleOption from "views/pages/V2/FormManage/SingleOption";
import MultipleOptions from "views/pages/V2/FormManage/MultipleOptions";
import FormManageGroup from "views/pages/V2/FormManage/Group";
import Questions from "views/pages/V2/FormManage/Questions";
import FormManagrRange from "views/pages/V2/FormManage/Range";
import FormManageMedia from "views/pages/V2/FormManage/Media";
import TimeLayout from "views/pages/V2/FormManage/Time";
import DateTimeLayout from "views/pages/V2/FormManage/DateTime";
interface FormManageComponent extends FC { }

const FormManage: FormManageComponent = () => {
  const classes = inputStyle();
  const {t} = useTranslation();

  useEffect(() => {
    updateDocumentTitle(t('Pages.Layout.Group'));
  });

  return (
    <Grid container className={clsx(classes.root, 'wh-full')}>
      <Grid item lg={9} md={9} sm={6} xs={6}>
        <CardOutside label="Quản lý loại - Định dạng - Điều kiện">
          <Outlet/>
          <Routes>
            <Route path="*" element={<FormManageGroupList />}>
                <Route path="text" element={<InputBox/>}/>
                <Route path="single-options" element={<SingleOption/>}/>
                <Route path="multi-options" element={<MultipleOptions/>}/>
                <Route path="date" element={<DateLayout/>}/>
                <Route path="time" element={<TimeLayout/>}/>
                <Route path="datetime" element={<DateTimeLayout/>}/>
                <Route path="media" element={<FormManageMedia/>}/>
                <Route path="file" element={<FormManageFile/>}/>
                <Route path="rating" element={<FormManageRating/>}/>
                <Route path="range" element={<FormManagrRange/>}/>
                <Route path="questions" element={<Questions/>}/>
                <Route path="toggle-information" element={<ToggleButton/>}/>
                <Route path="signature" element={<FormManageSignatures/>}/>
                <Route path="group" element={<FormManageGroup/>}/>
            </Route>
          </Routes>
        </CardOutside>
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={6} className="mscb-customer">
        <CardOutside label="Tư vấn thảo luận" className="manage-root">
          <DiscussComponent />
        </CardOutside>
      </Grid>
    </Grid>
  );
};

export default FormManage;
 