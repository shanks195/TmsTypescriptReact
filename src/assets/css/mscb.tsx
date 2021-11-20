import { makeStyles } from "@mui/styles";

const mscbStyle = makeStyles(() => ({
  "@global": {

    ".input-text-upper": {

      "& input": {
        textTransform: 'uppercase',
      },

    },

    ".mscb-input": {
      marginBottom: '16px',

      "& label": {
        fontWeight: 500,
        position: "relative",
        color: 'var(--mscb-secondary)',
        marginBottom: '8px',
        transform: 'none',
        fontSize:'14px'
      },

      '& .MuiInput-root, & .MuiSelect-select, & .MuiInputBase-root': {
        backgroundColor: '#f2f3f9!important',
        display: 'flex',
        color: 'var(--mscb-secondary)',
        fontSize:'14px',
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
        },

        '& .MuiSelect-icon': {
          fontSize: '18px',
          marginRight: '8px',
        }
      },

      '& .MuiFormLabel-asterisk': {
        color: 'var(--mscb-danger)'
      },

      '& .MuiInputBase-root': {
        padding: '0!important',
        borderRadius: 0,
        backgroundColor: 'var(--secondary)'
      },

      '& .MuiInput-input.MuiInputBase-input,& .MuiAutocomplete-input': {
        whiteSpace: 'nowrap',
        display:'unset',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        // color:"#f61f1f",
        height: '36px',
        lineHeight: '36px',
        padding: '0 12px !important'
      },
      '& .MuiInputBase-input.MuiSelect-select': {
        // color: '#707070',
        // fontWeight:300,
        height: '36px',
        lineHeight: '36px',
        padding: '0 30px 0 12px'
      },

      // '& .MuiSelect-select': {
      //   paddingRight: '30px!important'
      // },

      '& fieldset': {
        border: 'none'
      },

      '& .MuiAutocomplete-endAdornment': {
        right: '0!important'
      },

      '& .Mui-disabled': {
        
        backgroundColor: '#d7d8e4 !important'
      }

    },

    '.mscb-form-row': {
      alignItems: 'flex-end',

      '& .MuiFormControl-root': {
        marginBottom: '0!important'
      },

      '& .MuiTextField-root': {
        position: 'relative',
        marginBottom: '18px!important'
      },

      '& .MuiFormHelperText-root': {
        position: 'absolute',
        bottom: '-25px',
        margin: 0
      },
      '& .error': {
        marginBottom: '31px!important'
      }
    },

    '.language': {
     
      '& .MuiSvgIcon-root': {
        right: '8px'
      },

      '& .MuiInput-input': {
        borderRadius: '18px!important',
        paddingRight: '36px!important',
        paddingLeft: '18px'
      }

    },

    '.mscb-init-tab': {
      '& .MuiTabs-root': {
        borderBottom: '0.5px solid #d5d5d5',
        minHeight: '43px',
      },
      '& .MuiTabs-scroller': {
      
        height: '43px'
      },
      '& .MuiTabs-flexContainer': {
        height: '43px',
        borderBottom: '.5px solid #d5d5d5',
        width: 'max-content'
      },
      '& .MuiTab-root': {
        padding: '0 16px',
      },

      '& .MuiTabScrollButton-root': {
        borderBottom: '1px solid #d5d5d5',
        opacity: '1!important'
      }
    },

    '.product-group': {
      '& label': {
        fontWeight: 500
      }
    },

    '.mscb-table': {
      '& th, & td': {
        minHeight: '42px',
        padding: '8px 15px'
      },
      '& th':{
        textTransform: 'uppercase',
        color: 'var(--mscb-primary)',
        fontWeight: 'bold'
      }
    },

    '.mscb-table-border': {
      '& th, & td': {
        borderTop: '1px solid #353535',
        borderLeft: '1px solid #353535'
      },
      '& tr': {
        '&:last-child': {
          '& td': {
            borderBottom: '1px solid #353535',
          }
        },
        '& th, & td': {
          '&:last-child': {
            borderRight: '1px solid #353535',
          }
        }
      }
    }
  }
})) as Function;

export default mscbStyle;