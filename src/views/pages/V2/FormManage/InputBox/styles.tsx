import { makeStyles } from "@mui/styles";

const inputBoxStyle = makeStyles(() => ({
    root: {
        backgroundColor: '#fff',
        paddingLeft: '30px',
        '& .mscb-input-box-format':{
            marginBottom: '50px',
            '& .mscb-input-box-title':{
                padding: '5px 0'
            },
            '& .mscb-input-box-input_type':{
                maxWidth: '227px'
            },
            '& .mscb-input-box-option_form':{
                padding: '0 39px'
            }
        },
        '& .mscb-input-box-condition':{
            '& .mscb-input-box-title':{
                padding: '5px 0'
            },
            '& .mscb-input-box-input_limit':{
                maxWidth: '114px'
            },
            '& .mscb-input-box-type_form':{
                paddingLeft: '39px'
            }
        },
        '& .mscb-input-box-label':{
        padding: '5px 0 10px 0'
        },
        '& .mscb-input .MuiInputBase-input':{
        fontSize: '15px'
        },
        '& .css-14wntxf-MuiTypography-root':{
        fontSize: '1rem'
        },
        '& .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label':{
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