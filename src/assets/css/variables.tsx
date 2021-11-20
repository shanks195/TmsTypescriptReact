import { Theme } from '@mui/material';
import { makeStyles } from "@mui/styles";

const variablesStyle = makeStyles((theme: Theme) => ({
  "@global": {
    ":root": {
      "--mscb-primary": theme.palette.primary.main,
      "--mscb-secondary": theme.palette.secondary.main,
      "--mscb-danger": theme.palette.error.main,
      "--mscb-success": theme.palette.success.main,
      "--mscb-warning": theme.palette.warning.main,
      "--mscb-gray": "#eeeff5",
      "--mscb-yellow": "#f8ad08",
      "--mscb-pink": "#5b6bff",
      "--mscb-black": "#33375d",
      "--mscb-white": "#fff",
      "--mscb-fontsize": "14px",
      "--mscb-sidebar-width": "288px",
      "--mscb-sidebar-collapsed-width": "70px",
      "--mscb-sidebar-padding": "20px",
      "--mscb-topbar-height": "66px"
    }
  }
})) as Function;

export default variablesStyle;