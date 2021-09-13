import React from 'react';
import clsx from 'clsx';
import { Route, Switch } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import ScrollBar from 'react-perfect-scrollbar';
import GroupList from 'views/components/layout/GroupList';
import FormManageSignatures from '../Signature';
import listStyle from "./style";
import InputBox from 'views/pages/V2/FormManage/InputBox'
import ToggleButton from '../ToogleControl';
import FormManageFile from '../File';
import DateLayout from '../Date';


interface FormManageGroupListComponent extends React.FunctionComponent { }

const list_group = [
  { key: 1, value: "text", label: "Ô Nhập" },
  { key: 2, value: "single-options", label: "Một lựa chọn" },
  { key: 3, value: "multi-options", label: "Nhiều lựa chọn" },
  { key: 4, value: "date", label: "Ngày" },
  { key: 5, value: "time", label: "Giờ" },
  { key: 6, value: "datetime", label: "Ngày & Giờ" },
  { key: 7, value: "media", label: "Phương tiện" },
  { key: 8, value: "file", label: "Tập tin" },
  { key: 9, value: "rating", label: "Đánh giá" },
  { key: 10, value: "range", label: "Phạm vi" },
  { key: 11, value: "true-false-questions", label: "Câu hỏi Đúng/Sai" },
  { key: 12, value: "toggle-information", label: "Chuyển đổi Bật/Tắt" },
  { key: 13, value: "signature", label: "Chữ ký" },
  { key: 14, value: "group", label: "Nhóm" },
]

const FormManageGroupList: FormManageGroupListComponent = () => {

  const classes = listStyle();
  return (
  <div className={clsx(classes.root, 'wh-full')}>
    <h6 className="group-list-header">DANH SÁCH</h6>
    <Grid container className="group-list-type">
      <Grid item lg={3} md={3} sm={6} xs={6}>
        <ScrollBar className="list-root">
          <GroupList typeTMS={false} options={list_group} />
        </ScrollBar>
      </Grid>
      <Grid item lg={9} md={9} sm={6} xs={6}>
        <Switch>
          <Route path="/type-input/text" component={InputBox}/>
          <Route path="/type-input/single-options" />
          <Route path="/type-input/multi-options" />
          <Route path="/type-input/date" component={ DateLayout}/>
          <Route path="/type-input/time" />
          <Route path="/type-input/datetime" />
          <Route path="/type-input/media" />
          <Route path="/type-input/file" component={FormManageFile}/>
          <Route path="/type-input/rating" />
          <Route path="/type-input/range" />
          <Route path="/type-input/true-false-questions" />
          <Route path="/type-input/toggle-information" component={ ToggleButton }/>
          <Route path="/type-input/signature" component={FormManageSignatures}/>
          <Route path="/type-input/group" />
        </Switch>
      </Grid>
    </Grid>
  </div>
  );

}

export default FormManageGroupList;