import { makeStyles } from "@mui/styles";

const questionStyle = makeStyles(() => ({
    root: {
        backgroundColor: '#fff',
        paddingLeft: '30px',
        '& .MuiTypography-h6':{
            fontSize: '16px',
            lineHeight: '20px'
        },
        '& .mscb-questions-format-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-questions-format':{
            marginBottom: '50px',
            '& .MuiTypography-h6':{
                fontSize: '16px'
            },
            '& .mscb-questions-title':{
                padding: '5px 0'
            },
            '& .mscb-questions-answer_select':{
                maxWidth: '302px',
                '& svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiSelect-icon.MuiSelect-iconStandard': {
                    marginRight: '8px !important',
                }
            },
            '& .mscb-questions-option_ratio':{
                padding: '0 35px'
            },
            '& .mscb-questions-label':{
                padding: '5px 0 10px 0',
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

export default questionStyle;