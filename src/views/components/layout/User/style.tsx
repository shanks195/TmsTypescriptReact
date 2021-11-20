import { makeStyles } from "@mui/styles";

const userStyle = makeStyles(() => ({
  root: {
    
    '& .mscb-sidebar-avatar': {
      width: '59px',
      height: '59px',
      border: 'solid 1px rgba(255, 255, 255, 0.13)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '6px',
      margin: '0 10px 0 var(--mscb-sidebar-padding)',
      transition: 'all ease 0.3s',

      '& svg': {
        width: '100%',
        height: '100%'
      }
    }
    
  },

  branch: {
    height: '38px',
    lineHeight: '38px',
    paddingLeft: 'var(--mscb-sidebar-padding)',
    transition: 'all ease 0.3s'
  },

  info: {
    width: '199px',
    maxWidth: '199px',

    '& div': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      transition: 'all ease 0.3s'
    },

    '& .sidebar-user-name':{
      fontWeight: 'bold',
      maxWidth: '100%'
    }
  }

})) as Function;

export default userStyle;