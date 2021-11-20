import { makeStyles } from "@mui/styles";

const singleOptionStyle = makeStyles(() => ({
    root: {
        backgroundColor: '#fff',
        paddingLeft: '30px',
        
        '& .mscb-single-option-format':{
            marginBottom: '57px',
            '& .MuiTypography-h6':{
                fontSize: '16px',
                lineHeight: '20px'
            },
            '& .mscb-single-option-title':{
                paddingTop: '10.5px',
                paddingBottom: '5px'
            },
            '& .mscb-single-option-answer_select':{
                maxWidth: '302px'
            },
            '& .mscb-single-option-option_ratio':{
                padding: '0 35px',
                '& .MuiFormControl-root.MuiFormControl-fullWidth.mscb-radio-base': {
                    marginTop: '-10px'
                }
            },
            '& .mscb-single-option-label':{
                padding: '5px 0 10px 0'
            },
            '& .MuiTypography-subtitle2':{
                fontWeight: 600,
            },
        },
        '& .mscb-single-option-condition':{
            '& .MuiTypography-h6':{
                fontSize: '16px',
                lineHeight: '20px'
            },
            '& .mscb-single-option-title':{
                paddingTop: '10.5px',
                paddingBottom: '5px'
            },
            '& .mscb-single-option-source':{
                maxWidth: '231px',
                marginLeft: '28px',
                '& input.MuiInput-input.MuiInputBase-input': {
                    "&::placeholder": {
                        fontStyle: 'italic',
                        fontFamily: 'roboto',
                    },
                },
                '& input.MuiInput-input.MuiInputBase-input.Mui-disabled': {
                    backgroundColor: '#d7d8e4 !important',
                },
            },
            '& .mscb-single-option-manual':{
                paddingLeft: '35px',
                '& .mscb-single-option-manual-item':{
                    paddingBottom:'18px'
                },
                '& .mscb-single-option-add-button':{
                    '& .btn-add':{
                        border: 'none',
                        backgroundColor: 'transparent',
                        padding: 0
                    },
                    '& .add-button-label':{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: 'row',
                        '& span': {
                            fontSize: '21px',
                            marginLeft: '-2px',
                            marginRight: '5px',
                        },
                        '& h6': {
                            fontWeight: '500',
                        }
                    },
                    '& .cursor-active': {
                        cursor: 'pointer',
                    }
                },
                '& .manual-key':{
                    display: "flex",
                    flexDirection: 'row',
                    maxWidth: '129px',
                    '& .manual-key-label':{
                        paddingTop: '8px'
                    },
                    '& .manual-key-input':{
                        maxWidth: '83px',
                        marginLeft: '12px',
                        '& input.MuiInput-input.MuiInputBase-input.Mui-disabled': {
                            backgroundColor: '#d7d8e4 !important',
                        }
                    },
                },
                '& .manual-value':{
                    display: "flex",
                    flexDirection: 'row',
                    '& .manual-value-label':{
                        paddingTop: '8px'
                    },
                    '& .manual-value-input':{
                        maxWidth: '205px',
                        marginLeft: '15px',
                        '& input.MuiInput-input.MuiInputBase-input.Mui-disabled': {
                            backgroundColor: '#d7d8e4 !important',
                        }
                    },
                    '& .manual-delete-button':{
                        '& .btn-bin':{
                            marginTop: '5px',
                            border: 'none',
                            backgroundColor: 'transparent'
                        }
                    }
                }
            },
            '& .mscb-single-option-source_label':{
                padding: '5px 0 5px 0'
            }, 
            '& .MuiTypography-subtitle2':{
                fontWeight: 600,
            },
        },
        '& .mscb-input .MuiInputBase-input':{
        fontSize: '15px'
        },
        '& .MuiFormControlLabel-label':{
        fontSize: '0.9rem'
        },
        '& .MuiSvgIcon-root':{
        fontSize: '20px'
        }
    },
    TextEditor:{

    }
})) as Function;

export default singleOptionStyle;