import { makeStyles } from "@mui/styles";

const inputStyle = makeStyles(() => ({

  root: {
    '& .makeStyles-content-22': {
      height:'88vh'
    },
    '& .scrollbar-container.list-root.ps': {
      height:'79vh!important'
    },
    '& .mscb-customer': {
      
        margin: '0 16px'
      },
    '& .manage-root': {
        height: '100%'
      },
  }

})) as Function;

export default inputStyle;