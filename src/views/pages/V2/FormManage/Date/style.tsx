import { makeStyles } from '@mui/styles';
const DateStyle= makeStyles(()=>({
    root: {
        paddingLeft:"30px",
        '& .MuiTypography-h6':{
            fontSize: '16px',
            lineHeight: '20px'
        },
        '& .mscb-date-format-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-date-label':{
            padding: '5px 0 10px 0',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 600,
        },
        '& .mscb-date-picker-box':{
            maxWidth: '227px',
            '& .MuiInputBase-formControl':{
                borderRadius: 0,
                backgroundColor: '#F2F3F9',
                height: '36px'
            },
        },
    }
}))
export default DateStyle