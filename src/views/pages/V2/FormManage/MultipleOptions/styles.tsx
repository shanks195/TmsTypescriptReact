import { makeStyles } from "@mui/styles";

const multipleOptionStyle = makeStyles(() => ({
    root: {
        backgroundColor: '#fff',
        paddingLeft: '30px',
        '& .mscb-multiple-options-format':{
            marginBottom: '57px',
            '& .MuiTypography-h6':{
                fontSize: '16px',
                lineHeight: '20px'
            },
            '& .mscb-multiple-options-title':{
                paddingTop: '10.5px',
                paddingBottom: '5px'
            },
            '& .mscb-multiple-options-answer_select':{
                maxWidth: '302px',
                '& .mscb-input.MuiBox-root': {
                    height: 'auto',
                    '& .MuiInput-root.MuiInput-underline.MuiInputBase-root.MuiInputBase-colorPrimary': {
                        height: 'auto',
                        '& .MuiSelect-select.MuiSelect-standard.MuiInput-input.MuiInputBase-input': {
                            height: 'auto',
                            '& .MuiBox-root': {
                                paddingTop: '5px',
                                paddingBottom: '5px',
                            }
                        }
                    }
                },
                '& .MuiChip-filled': {
                    backgroundColor: '#1825aa',
                    color: '#fff',
                    borderRadius: '2px',
                    maxHeight: '25px',
                    marginRight: '2px',
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
            },
            '& .mscb-multiple-options-option_ratio':{
                padding: '0 35px',
                '& .MuiGrid-root.MuiGrid-container': {
                    marginTop: '-10px'
                }
            },
            '& .mscb-multiple-options-label':{
                padding: '5px 0 10px 0'
            },
            '& .MuiTypography-subtitle2':{
                fontWeight: 600,
            },
        },
        '& .mscb-multiple-options-condition':{
            '& .MuiTypography-h6':{
                fontSize: '16px',
                lineHeight: '20px'
            },
            '& .mscb-multiple-options-title':{
                paddingTop: '10.5px',
                paddingBottom: '5px'
            },
            '& .mscb-multiple-options-source':{
                maxWidth: '231px',
                marginLeft: '28px',
                '& input.MuiInput-input.MuiInputBase-input': {
                    "&::placeholder": {
                        fontStyle: 'italic',
                        fontFamily: 'roboto',
                    }
                },
                '& input.MuiInput-input.MuiInputBase-input.Mui-disabled': {
                    backgroundColor: '#d7d8e4 !important',
                },
            },
            '& .mscb-multiple-options-manual':{
                paddingLeft: '35px',
                '& .mscb-multiple-options-manual-item':{
                    paddingBottom:'18px'
                },
                '& .mscb-multiple-options-add-button':{
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
                    },
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
            '& .mscb-multiple-options-source_label':{
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

export default multipleOptionStyle;