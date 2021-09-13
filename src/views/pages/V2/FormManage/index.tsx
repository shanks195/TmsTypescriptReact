import FormManageGroupList from "./GroupList";
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import CardOutside from "views/components/layout/CardOutside";

import inputStyle from "./style";
import TabPanel from "./TabPanel";

interface FormManageComponent extends React.FunctionComponent { }

const FormManage: FormManageComponent = () => {
  const classes = inputStyle();
  return (
    <Grid container className={clsx(classes.root, 'wh-full')}>
      <Grid item lg={8} md={8} sm={6} xs={6}>
        <CardOutside label="Quản lý loại - Định dạng - Điều kiện">
          <FormManageGroupList />
        </CardOutside>
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={6} className="mscb-customer">
        <CardOutside label="Tư vấn thảo luận" className="manage-root">
          <TabPanel />
        </CardOutside>
      </Grid>
    </Grid>
  );
};

export default FormManage;
