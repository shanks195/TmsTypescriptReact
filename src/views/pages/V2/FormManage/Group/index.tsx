import { forwardRef, ForwardRefRenderFunction } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import manageGroupStyle from "./style";
import Select from "views/components/base/Select";
import Input from "views/components/base/Input";
import {  useTranslation } from 'react-i18next';
import  SelectLocation  from 'views/components/layout/SelectLocation';
interface FormManageGroupProps {
  className?: string;
}
interface FormManageGroupRef {}

interface FormManageGroupComponent
  extends ForwardRefRenderFunction<FormManageGroupRef, FormManageGroupProps> {}
const FormManageGroup: FormManageGroupComponent = (props, ref) => {
  const { className } = props;

  const { t } = useTranslation();

  const classes = manageGroupStyle();
  const renderAfter = ()=>{
    return <>
    <Grid item md={6}>
      <Select
        value={0}
        options={[{ label: "Zip code", value: 0 }]}
        label=' '
      />
    </Grid>
    <Grid item md={12}>
      <Input
        value="Đường"
        placeholder={t("Common.Location.Street")}
        label=' '
      />
    </Grid>
  </>
  }

  const formManageGroupClass = clsx(classes.root,"formManage-group", className);
  return (
    <div className={formManageGroupClass}>
      <Box component="div" className='mscb-group-format-title text-upper'>
          <Typography variant="h6" color="var(--mscb-black)">I. {t('Common.Input.Format.Title')}</Typography>
      </Box> 
      <Grid container>
        <Grid item xs={10}>
          <Box component="div" className='mscb-group-label'>
              <Typography variant="subtitle2" color="primary">1. {t('Pages.Layout.Group.Group.Address')}</Typography>
            </Box>
          <SelectLocation spacing={2} colSpacing={4} col={6}
              className={clsx(classes.autoCompleteAddress)}
              // label={[t('Common.Location.Province.Fm'), t('Common.Location.District.Fm'),t('Common.Location.Ward.Fm')]}
              componentAfter={renderAfter()}
          >
                        
          </SelectLocation>

        </Grid>
      </Grid>
    </div>
  );
};

export default forwardRef(FormManageGroup);
