import { FunctionComponent } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UploadFile from "views/components/base/UploadFile";
import formManageFileStyle from "./style";
// import Checkbox from "views/components/base/Checkbox";
// import CheckboxAll from "views/components/base/CheckboxAll";
import {  useTranslation } from 'react-i18next';
import CheckboxGroup from "views/components/base/CheckboxGroup";
import Icon from '@mui/material/Icon';

interface FormManageFileProps {
  className?: string;
}
// interface FormManageFileRef {}
interface FormManageFileComponent
  extends FunctionComponent<FormManageFileProps> {}
const FormManageFile: FormManageFileComponent = (props) => {
  // const { className } = props;
  const classes = formManageFileStyle();
  const { t } = useTranslation();

  const conditions = [
    { label: ".docx", value: '1', checked: false },
    { label: ".doc", value: '2', checked: false },
    { label: ".xls", value: '3', checked: false },
    { label: ".pptx", value: '4', checked: false },
    { label: ".pdf", value: '5', checked: false },
    { label: ".txt", value: '6', checked: false },
    { label: ".zip, .rar", value: '7', checked: false },
  ]

  return (
    <div className={classes.fileStyle}>
      <Box component="div" className='mscb-file-format-title text-upper'>
        <Typography variant="h6" color="var(--mscb-black)">I. {t('Common.Input.Format.Title')}</Typography>
      </Box> 
      <Grid container spacing={3}>
        <Grid item xs={6} className='drop-zone-upload'>
          <Box component="div" className='mscb-file-label'>
              <Typography variant="subtitle2" color="primary">1. {t('Pages.Layout.Group.File')}</Typography>
          </Box>
          {/* <Icon color="primary">add_circle</Icon> */}
          <UploadFile />
        </Grid>
        <Grid item xs={6}>
          <div className="attach-file">
            <Box component="div" className='mscb-file-label'>
              <Typography variant="subtitle2" color="primary">2. {t('Pages.Layout.Group.Attach')}</Typography>
            </Box>
            <UploadFile attach={true} className='file-upload-wrapper'/>
          </div>
            <Box component="div" className='mscb-file-label'>
              <Typography variant="subtitle2" color="primary">3. {t('Common.Input.Link.Label')}</Typography>
            </Box>
        </Grid>
      </Grid>
      <Box component="div" className='mscb-file-condition-title text-upper'>
        <Typography variant="h6" color="var(--mscb-black)">II. {t('Common.Input.Condition.Title')}</Typography>
      </Box> 
      <Grid container spacing={3} className="file-condition">
        <Grid item xs={6}>
          <Box component="div" className='mscb-file-label'>
            <Typography variant="subtitle2" color="primary">1. {t('Common.Type.Label')}</Typography>
          </Box>
          {/* <Checkbox
            className="condition-checkbox"
            options={conditions}
          /> */}
          <CheckboxGroup 
            checkallLabel={'all'}
            className="condition-checkbox"
            listOptions={conditions}
            defaultCheckedList={[{ label: ".docx", value: '1', checked: false }]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FormManageFile;
