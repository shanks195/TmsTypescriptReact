import { makeStyles } from "@mui/styles";

const brandStyle = makeStyles(() => ({
  root: {
    height: 'var(--mscb-topbar-height)',
    paddingLeft: 'var(--mscb-sidebar-padding)',

    '& img': {
      height: '30px'
    }
  }
})) as Function;

export default brandStyle;