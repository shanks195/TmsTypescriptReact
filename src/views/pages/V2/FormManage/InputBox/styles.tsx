import { makeStyles } from "@mui/styles";

const inputBoxStyle = makeStyles(() => ({
    root: {
        backgroundColor: '#fff',
        paddingLeft: '30px',
        '& .mscb-input-box-format':{
            marginBottom: '50px',
            '& .MuiTypography-h6':{
                fontSize: '16px',
                lineHeight: '20px'
            },
            '& .mscb-input-box-title':{
                paddingTop: '10.5px',
                paddingBottom: '5px'
            },
            '& .mscb-input-box-input_type':{
                maxWidth: '227px',
                '& input': {
                    '&::placeholder': {
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: '14px'
                    }
                }
            },
            '& .mscb-input-box-option_form':{
                padding: '0 0 0 39px'
            }
        },
        '& .mscb-input-box-condition':{
            '& .MuiTypography-h6':{
                fontSize: '16px',
                lineHeight: '20px'
            },
            '& .mscb-input-box-title':{
                paddingTop: '10.5px',
                paddingBottom: '5px'
            },
            '& .mscb-input-box-input_limit':{
                maxWidth: '114px',
                '& input': {
                    '&::placeholder': {
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: '14px'
                    }
                }
            },
            '& .mscb-input-box-type_form':{
                paddingLeft: '39px'
            }
        },
        '& .mscb-input-box-label':{
        padding: '5px 0 10px 0',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 600,
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

export default inputBoxStyle;