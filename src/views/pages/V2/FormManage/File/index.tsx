import { FunctionComponent } from "react";
import Grid from "@mui/material/Grid";
import UploadFile from "views/components/base/UploadFile";
import formManageFileStyle from "./style";
import Checkbox from "views/components/base/Checkbox";
// import CheckboxAll from "views/components/base/CheckboxAll";
interface FormManageFileProps {
  className?: string;
}
// interface FormManageFileRef {}
interface FormManageFileComponent
  extends FunctionComponent<FormManageFileProps> {}
const FormManageFile: FormManageFileComponent = (props) => {
  // const { className } = props;
  const classes = formManageFileStyle();
  return (
    <div className={classes.fileStyle}>
      <h6 className="file-title-header">I. ĐỊNH DẠNG</h6>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p className="file-title">1. Tập tin</p>
          <UploadFile />
        </Grid>
        <Grid item xs={6}>
          <div className="attach-file">
            <p className="file-title">2. Đính kèm</p>
            <UploadFile attach={true} />
          </div>

          <p className="file-title">3. Link</p>
        </Grid>
      </Grid>
      <h6 className="file-title-header mt-5">II. ĐIỀU KIỆN</h6>
      <Grid container spacing={3} className="file-condition">
        <Grid item xs={6}>
          <p className="file-title">1. Tập tin</p>
          <Checkbox
            className="condition-checkbox"
            options={[
              { label: "all", value: 1 },
              { label: ".docx", value: 2 },
              { label: ".doc", value: 3 },
              { label: ".xls", value: 4 },
              { label: ".pptx", value: 5 },
              { label: ".pdf", value: 6 },
              { label: ".txt", value: 7 },
              { label: ".zip, .rar", value: 8 },
            ]}
          />
          {/* <CheckboxAll/> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default FormManageFile;
