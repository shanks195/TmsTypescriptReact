import { makeStyles } from "@mui/styles";

const generalStyle = makeStyles(() => ({

    rootGen: {
        'marginTop': '0px !important',

        "background-color": "white",
        '& .MuiInputLabel-root': {
            fontWeight: 'bold'
        },
        '& .level-one': {
            cursor: 'pointer',
            '& .MuiAvatar-root': {
                position: 'absolute',
                backgroundColor: 'rgba(246, 31, 31, 0.1)',
                fontSize: '14px',
                color: 'var(--mscb-danger)',
                height: '25px',
                width: '25px',
                right: '420px',
                zIndex: '1'
            }
        },
        '& .sys-select': {
            width: '100%',
            height: 'auto'
        },
        '& .basic-info': {

            "& .object-label": {
                fontSize: '14px ',
                fontWeight: '500',
                color: 'var(--mscb-secondary)',
            },

            "& label": {

                fontWeight: "500!important"
            },
            paddingBottom: '15px',
            '& .basic-info-item': {
                paddingRight: '20px'
            },
            '& .mscb-general-effect-label': {
                padding: '5px 0 10px 0',
            },
            '& .MuiTypography-subtitle1': {
                fontSize: '14px ',
                fontWeight: '500',
                color: 'var(--mscb-secondary)',
            },
            '& .mscb-general-picker-box': {
                maxWidth: '357px',
                '& .MuiInputBase-formControl': {
                    borderRadius: 0,
                    backgroundColor: '#F2F3F9',
                    height: '36px',
                },
                '& .MuiInputBase-input': {
                    fontSize: '14px',
                },
            }
        },
        '& .api-info':{
            "& label": {
                color:'var(--mscb-danger)',
            },
            "& .MuiInputBase-root":{
                fontStyle:'italic',
            }
        },
        '& .active-row': {
            marginTop: '25px !important',
            marginLeft: '5px !important'
        },
        '& .exp-row': {
            marginTop: '25px !important',
            marginLeft: '5px !important'
        },
        '& .object-select': {
            '& .MuiFormControlLabel-label': {
                fontSize: '14px ',
            },
            display: 'flex',
            marginTop: '10px',
            '& .MuiInput-root': {
                width: '18px',
                height: '18px',
                backgroundColor: 'white !important',
            }
        },
        '& strong': {
            fontSize: 'medium'
        },
        '& .general-system_select': {
            paddingRight: '20px',
            '& .mscb-input': {
                maxWidth: '357px',
                '& .MuiChip-filled': {
                    backgroundColor: '#209CEE',
                    color: '#fff',
                    borderRadius: '2px',
                    maxHeight: '25px',
                },
                '& .MuiChip-deleteIcon': {
                    fontSize: '15px',
                    zIndex: '1'
                },
                '& .MuiChip-label': {
                    padding: '0 8px 0 8px'
                },
                '& .MuiSelect-select': {
                    minHeight: '36px',
                    display: 'flex',
                    alignItems: 'center'
                }
            }
        },
        '& .upFile':{
            paddingRight:'6px',
        }
    },
    rootDropInfo: {
        '& .container-basic': {
            height: '100%',
            width: '100%',
            '& p': {
                color: 'rgb(201, 199, 199)',
                textAlign: 'center'
            }
        },
        '& .drop-container-basic': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
            height: '360px',
            border: '4px #edeef0',
            backgroundColor: 'white'
        },
        '& .drop-message-basic': {
            textAlign: 'center',
            color: '#4aa1f3',
            fontFamily: 'Arial',
            fontSize: '20px'
        },
        '& .upload-icon-basic': {
            marginTop:'10px',
            '& svg': {
                width: '100px',
                height: '120px',
                background: 'no-repeat center center',
                backgroundSize: '100%',
                textAlign: 'center',
                margin: '0 auto',
                paddingTop: '25px',
                // marginTop: '-70px'
            },
            '& a': {
                color: '#1524ce',
                textDecoration: 'underline'
            }
        },
        '& .text-drop': {
            fontStyle: 'italic',
            fontSize: '18px',
            marginTop:'-10px'
        },
        '& .file-input': {
            display: 'none'
        },
        '& .file-display-contain-basic': {
            width: '100%'
        },
        // '& .file-status-bar': {
        //     width: '100%',
        //     verticalAlign: 'top',
        //     marginTop: '10px',
        //     marginBottom: '20px',
        //     position: 'relative',
        //     lineHeight: '50px',
        //     height: '50px'
        // },
        // '& .file-type-logo': {
        //     width: '28px',
        //     height: '45px',
        //     background: `no-repeat center center`,
        //     backgroundSize: '100%',
        //     position: 'absolute'
        // },
        // '& .file-name': {
        //     display: 'inline-block',
        //     verticalAlign: 'top',
        //     marginLeft: '50px',
        // },
        // '& .file-remove': {
        //     position: 'absolute',
        //     top: '20px',
        //     right: '10px',
        //     lineHeight: '15px',
        //     cursor: 'pointer',
        //     color: 'rgb(0, 183, 255)'
        // },
    },
    fileDisplayContainers: {
        marginTop: "20px",
        width: "100%",
        "& .file-status-bar": {
            width: '100%',
            verticalAlign: 'top',
            marginTop: '10px',
            marginBottom: '20px',
            lineHeight: '25px',
            height: '50px',
            alignItems:'center',
          "& .file-info":{
              color:"#0a0723",
              fontSize:"14px",
              width:"50%",
              marginLeft:'15px',
              "& .file-name":{
                fontSize:"14px",
                marginLeft:"10px"

              },
              "& .file-progress":{
                  display:"unset",
                  "& .capacity":{
                    color:"#b8b9d2"
                  },

                  "& .file-progress-info":{
                      display:"flex",
                      justifyContent:"space-between",
                      padding:"0 10px"
                  }
              }
            },
            "& .file-type-logo": {
                width: '28px',
                height: '45px',
                background: `no-repeat center center`,
                "& svg": {
                    width: "100%",
                    height: "100%",
                },
          },
          "& .file-remove": {
            top: '20px',
            right: '10px',
            cursor:"pointer",
            marginLeft: "auto",
          },
        },
      },
      relative:{
        position:'relative',

        '& button':{
            position: 'absolute',
            right: '0',
            padding: '0',
            backdropFilter: 'blur(50px)',
            backgroundColor: 'rgba(246, 31, 31, 0.1)',
            width: '24px',
            height: '24px',

            '& svg':{
                color: '#f61f1f',
                fontSize: '15px',
            }
        }
    },


})) as Function;

export default generalStyle;