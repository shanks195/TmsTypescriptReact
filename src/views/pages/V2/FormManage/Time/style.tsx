import { makeStyles } from '@mui/styles';
const timeStyle= makeStyles(()=>({
    root: {
        padding:"0 30px",
        '& .MuiTypography-h6':{
            fontSize: '16px',
            lineHeight: '20px'
        },
        '& .mscb-time-format-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-time-label':{
            padding: '5px 0 10px 0',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 600,
        },
        '& .mscb-time-12-item':{
            paddingLeft: '61.5px',
            '& .mscb-time-12-box':{
                maxWidth: '227px',
            }
        },
        '& .mscb-time-24-item':{
            paddingLeft: '61.5px',
            '& .mscb-time-24-box':{
                maxWidth: '227px',
            }
        }
    }
}))
export default timeStyle