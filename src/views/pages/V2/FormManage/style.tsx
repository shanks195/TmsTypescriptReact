import { makeStyles } from "@mui/styles";

const inputStyle = makeStyles(() => ({

  root: {
    '& .makeStyles-content-22': {
      // height: '88vh',
      width: '98%'
    },
    '& .scrollbar-container.list-root.ps': {
      // height: '79vh!important',
      '& .ps__rail-y': {
        height: 'auto !important',
        display: 'none',
      }
    },
    '& .mscb-outside-card': {
      width: '98%',
      '& .mscb-outside-card-label.ellipsis': {
        padding: '0 20px',
      }
    },
    '& .mscb-customer': {
      width: '94%'
      // margin: '0 16px'
    },
    '& .manage-root': {
      height: '100%'
    },
    '& .mscb-outside-card-content':{
      padding: 0,
      minHeight: '710px',
    }
  }

})) as Function;

export default inputStyle;