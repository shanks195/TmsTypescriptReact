import { makeStyles } from "@mui/styles";

const mscbStyle = makeStyles(() => ({
  "@global": {
    ".mscb-input": {
      marginBottom: '16px!important',

      "& label": {
        fontWeight: 'normal',
        position: "relative",
        color: 'var(--mscb-secondary)',
        marginBottom: '8px',
        transform: 'none'
      },

      '& .MuiInput-root': {
        backgroundColor: '#f2f3f9',
        display: 'flex',
        color: 'var(--mscb-secondary)',

        '&:hover::before': {
          borderBottom: 'none'
        },
  
        '&:hover::after': {
          borderBottom: 'none'
        },
  
        '&::before': {
          borderBottom: 'none!important'
        },
  
        '&::after': {
          borderBottom: 'none'
        },
  
        '& .MuiIconButton-edgeEnd': {
          marginRight: 0,
          padding: '0 10px',
          backgroundColor: 'transparent'
        },
  
        '& .MuiSvgIcon-root': {
          color: 'var(--mscb-primary)'
        }
      },

      '& .MuiFormLabel-asterisk': {
        color: 'var(--mscb-danger)'
      },

      '& .MuiInputBase-input': {
        height: '36px',
        lineHeight: '36px',
        padding: '0 12px'
      }

    },

    '.language': {
     
      '& .MuiSvgIcon-root': {
        right: '8px'
      },

      '& .MuiInput-input': {
        paddingRight: '36px!important',
        paddingLeft: '18px'
      }

    }
  }
})) as Function;

export default mscbStyle;