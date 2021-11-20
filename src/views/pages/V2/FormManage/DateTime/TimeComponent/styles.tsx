import { makeStyles } from '@mui/styles';

const timeComponentStyle= makeStyles(()=>({
    root: {
       '& .mscb-time-layout-input':{
           paddingTop: '2px',
           '& .time-input':{
                paddingRight: '10px',
                backgroundColor: '#F2F3F9',
                height: '36px',
                '& input.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd': {
                    fontSize: '14px',
                    '-webkit-text-fill-color': 'var(--mscb-secondary)',
                    color: 'var(--mscb-secondary)',
                },
                '& .Mui-disabled': {
                    backgroundColor: 'transparent !important'
                }
           },
       },
       '& .mscb-time-layout-control':{
           paddingTop: '40px',
            '& .mscb-time-hours':{
            
            },
            '& .mscb-time-dots':{
            },
            '& .MuiTypography-h4':{
                fontWeight: 700
            },
            '& .mscb-time-layout-input':{

            },
            '& .mscb-time-minutes':{
            
            },
            '& .mscb-time-seconds':{
            
            }, 
        },
        '& .MuiTabs-scroller': {
            marginTop:27,
            display: 'flex',
            justifyContent: 'center'   
       },
        '& .MuiButtonBase-root.MuiTab-root': {
            // maxWidth: '40px!important',
            minWidth: '0px!important',
            // maxHeight: '40px!important'
       },
        '& .css-18vzw3u-MuiButtonBase-root-MuiTab-root.Mui-selected ': {
                color: 'white',
                backgroundColor: '#1e93ec',
                fontSize: '16px',
        },
        '& span.MuiTabs-indicator.css-1jzpggk-MuiTabs-indicator ':{
            display: 'none'
        },
        '& .css-18vzw3u-MuiButtonBase-root-MuiTab-root': {
            backgroundColor: '#c8c6c6',
            color: 'white',
            fontSize: '16px',
        },
        '& .mscb-time-type-control':{
            padding: '17px 0',
            '& .MuiTypography-h6':{
                fontSize: '16px'
            },
            '& .mscb-time-am':{
                width: '40px',
                height: '40px',
                backgroundColor: '#1E93EC'
            },
            '& .mscb-time-pm':{
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--mscb-gray)'
            }
        }
       
    }
}))
export default timeComponentStyle