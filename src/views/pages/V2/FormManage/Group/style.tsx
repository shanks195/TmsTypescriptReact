import { makeStyles } from '@mui/styles';
const manageGroupStyle=makeStyles(()=>({
    root:{
        paddingLeft:"30px",
        '& .MuiTypography-h6':{
            fontSize: '16px',
            lineHeight: '20px'
        },
        '& .mscb-group-format-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-group-label':{
            padding: '5px 0 15px 0',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 600,
        },
    },
    autoCompleteAddress: {
        '& button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiAutocomplete-popupIndicator': {
            marginRight: '8px !important',
        },
        '& .mscb-input .MuiInputBase-root .MuiSvgIcon-root': {
            fontSize: '18px',
        },
        '& .css-16awh2u-MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input': {
            padding: '0 12px',
        },
        '& input.MuiInput-input.MuiInputBase-input': {
            fontSize: '14px',
        },
        '& .MuiSelect-select.MuiSelect-standard.MuiInput-input': {
            fontSize: '14px',
        },
        '& svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiSelect-icon.MuiSelect-iconStandard': {
            marginRight: '10px',
        }
    }
}))
export default manageGroupStyle