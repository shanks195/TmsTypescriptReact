import { makeStyles } from "@mui/styles";

const stepStyle = makeStyles(() => ({
  root: {
    '& .MuiStep-root': {
      flex: '0',
      

      '& .MuiStepLabel-label': {
        padding: '0 20px'
      }
    },

    '& .MuiStepLabel-iconContainer': {
      // height: '50px',
      padding: 0,

      '& .MuiSvgIcon-root': {
        fontSize: '40px',
        color: 'transparent',
        border: '1px solid var(--mscb-primary)',
        borderRadius: '50%',

        '& text': {
          fill: 'var(--mscb-primary)'
        },

        '&.Mui-active': {
          color: 'var(--mscb-primary)',
          backgroundColor: 'var(--mscb-primary)',

          '& text': {
            fill: '#fff'
          }
        }
      },
    },

    '& .Mui-completed .MuiStepLabel-iconContainer': {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '8px solid var(--mscb-success)',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& .MuiSvgIcon-root': {
        marginTop: 0,
        fontSize: '30px',
        border: 'none',
        color: 'var(--mscb-success)'
      }
    },
    '& .MuiStepConnector-root': {
      top: '20px',

      '& .MuiStepConnector-line': {
        borderColor: 'var(--mscb-primary)'
      }
    },

    '&.subSteps': {
      paddingTop: '20px',

      '& .MuiStepConnector-root': {
        display: 'none',
      },

      '& .MuiStepLabel-root': {
        position: 'relative',

        '&::before': {
          content: '""',
          position: 'absolute',
          display: 'block',
          width: 'calc(100% + 15px)',
          height: '20px',
          top: '-20px',
          left: '20px',
          borderLeft: '1px dashed #707070',
          borderTop: '1px dashed #707070',
        },
      },

      '& .MuiStep-root:last-child': {
        '& .MuiStepLabel-root::before': {
          width: 0
        }
      },
    },

    '&.subSteps.MuiStepper-alternativeLabel': {
      paddingTop: '20px',

      '& .MuiStepLabel-root::before': {
        display: 'none'
      },

      '& .MuiStepConnector-root': {
        top: '-20px',
        left: '-50%',
        right: '50%',
        display: 'block'
      },
      '& .MuiStepConnector-line': {
        borderStyle: 'dashed',
        borderColor: '#707070!important',
        borderWidth: '1px',
        borderBottom: 'none',
        borderRightWidth: 0,
        height: '20px'
      },

      '& .MuiStep-root:last-child': {
        '& .MuiStepConnector-line': {
          borderRightWidth: 1
        }
      }
    },

    '& .hasSub.active': {
      '& .MuiStepLabel-label': {
        paddingBottom: '20px',
        position: 'relative',

        '&::after': {
          content: '""',
          position: 'absolute',
          width: '1px',
          height: '20px',
          borderLeft: '1px dashed #707070',
          bottom: 0,
          left: '50%'
        }
      }
    }
  }
}));

export default stepStyle;