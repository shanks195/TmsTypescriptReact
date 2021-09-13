import { makeStyles } from "@mui/styles";

const userStyle = makeStyles(() => ({
  root: {
    
    '& .MuiAvatar-root': {
      width: '59px',
      height: '59px',
      border: 'solid 1px rgba(255, 255, 255, 0.13)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '6px',
      margin: '0 10px 0 var(--mscb-sidebar-padding)',

      '& svg': {
        width: '100%',
        height: '100%'
      }
    }
    
  },

  branch: {
    height: '20px',
    lineHeight: '20px',
    marginBottom: '18px',
    paddingLeft: 'var(--mscb-sidebar-padding)'
  },

  info: {
    
  }

})) as Function;

export default userStyle;