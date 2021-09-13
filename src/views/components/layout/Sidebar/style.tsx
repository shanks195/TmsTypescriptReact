import LogoBg from 'assets/images/logo/scb-sidebar.svg';
import { makeStyles } from "@mui/styles";

const sidebarStyle = makeStyles(() => ({

  root: {
    backgroundColor: 'var(--mscb-primary)',
    backgroundImage: `url(${ LogoBg })`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 100%',
    backgroundSize: '100% auto',
    color: '#fff',
    width: 'var(--mscb-sidebar-width)'
  },

  sidebar: {
    height: 'calc(100% - var(--mscb-topbar-height) - 129px)',
  },

  scrollable: {

  },

  navigation: {
    padding: '10px var(--mscb-sidebar-padding)',

    '& .mscb-sidebar-item': {
      height: '50px'
    },

    '& .mscb-sidebar-icon': {
      width: '30px',
      height: '30px',
      backgroundColor: '#070c46',
      marginRight: '8px',

      '& svg':{
        color: '#fff',
        fontSize: '14px'
      }
    }
  },

  copyright: {
    height: '50px',
    overflow: 'hidden',
    padding: '0 var(--mscb-sidebar-padding)',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },

  panel: {
    overflow: 'hidden',
    transition: 'max-height 0.3s cubic-bezier(0, 0, 0.2, 1)',
  }

}));

export default sidebarStyle;